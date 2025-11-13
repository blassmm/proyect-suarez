"use client";

import React, { useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText as SplitTextPlugin } from "gsap/SplitText";

// Declaration for SplitText type
interface SplitTextResult {
    lines: HTMLElement[];
    revert: () => void;
}

// Register plugins
try {
    gsap.registerPlugin(SplitTextPlugin, ScrollTrigger);
} catch (error) {
    console.error("Error registering GSAP plugins:", error);
}

interface CopyProps {
    children: ReactNode;
    animateOnScroll?: boolean;
    delay?: number;
}

export default function Copy({ children, animateOnScroll = true, delay = 0 }: CopyProps) {
    const containerRef = useRef<HTMLElement | null>(null);
    const elementRef = useRef<HTMLElement[]>([]);
    const splitRef = useRef<SplitTextResult[]>([]);
    const linesRef = useRef<HTMLElement[]>([]);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            try {
                splitRef.current = [];
                elementRef.current = [];
                linesRef.current = [];

                // Detect if it's a wrapper or single element
                let elements: HTMLElement[] = [];
                if (containerRef.current.hasAttribute("data-copy-wrapper")) {
                    elements = Array.from(containerRef.current.children).filter(
                        (el): el is HTMLElement => el instanceof HTMLElement
                    );
                } else {
                    elements = [containerRef.current];
                }

                elements.forEach((element) => {
                    elementRef.current.push(element);

                    try {
                        const split = (SplitTextPlugin as any).create(element, {
                            type: "lines",
                            mask: "lines",
                            linesClass: "line++",
                        }) as SplitTextResult;

                        splitRef.current.push(split);

                        // Handle text indent
                        const computedStyle = window.getComputedStyle(element);
                        const textIndent = computedStyle.textIndent;

                        if (textIndent && textIndent !== "0px") {
                            if (split.lines.length > 0) {
                                split.lines[0].style.paddingLeft = textIndent;
                            }
                            element.style.textIndent = "0px";
                        }

                        linesRef.current.push(...split.lines);
                    } catch (splitError) {
                        console.error("Error creating SplitText:", splitError);
                    }
                });

                if (linesRef.current.length > 0) {
                    gsap.set(linesRef.current, { y: "100%" });

                    const animationProps = {
                        y: "0%",
                        duration: 1,
                        stagger: 0.1,
                        ease: "power4.out",
                        delay: delay,
                    };

                    if (animateOnScroll) {
                        gsap.to(linesRef.current, {
                            ...animationProps,
                            scrollTrigger: {
                                trigger: containerRef.current,
                                start: "top 75%",
                                onEnter: () => {
                                    gsap.to(linesRef.current, animationProps);
                                },
                                onLeaveBack: () => {
                                    gsap.to(linesRef.current, {
                                        y: "100%",
                                        duration: 1,
                                        stagger: 0.1,
                                        ease: "power4.out",
                                        delay: delay,
                                    });
                                },
                                onEnterBack: () => {
                                    gsap.to(linesRef.current, animationProps);
                                },
                                onLeave: () => {
                                    gsap.to(linesRef.current, {
                                        y: "100%",
                                        duration: 1,
                                        stagger: 0.1,
                                        ease: "power4.out",
                                        delay: delay,
                                    });
                                },
                            },
                        });
                    } else {
                        gsap.to(linesRef.current, animationProps);
                    }
                }
            } catch (error) {
                console.error("Error in Copy component animation:", error);
            }

            return () => {
                try {
                    splitRef.current.forEach((split) => {
                        if (split && typeof split.revert === "function") {
                            split.revert();
                        }
                    });
                } catch (error) {
                    console.error("Error in Copy component cleanup:", error);
                }
            };
        },
        {
            scope: containerRef,
            dependencies: [animateOnScroll, delay],
        }
    );

    if (React.Children.count(children) === 1 && React.isValidElement(children)) {
        // Use forwardRef pattern instead of directly passing ref in props
        const child = children as React.ReactElement;
        return React.cloneElement(child, {
            ref: (el: any) => {
                // Handle the ref properly
                if (el instanceof HTMLElement) {
                    containerRef.current = el;
                }
                // Forward the ref if the child has one
                if (typeof child.ref === 'function') {
                    child.ref(el);
                } else if (child.ref && typeof child.ref === 'object') {
                    (child.ref as React.MutableRefObject<any>).current = el;
                }
            }
        });
    }

    return (
        <div
            ref={(el) => {
                if (el instanceof HTMLElement) {
                    containerRef.current = el;
                }
            }}
            data-copy-wrapper="true"
        >
            {children}
        </div>
    );
}