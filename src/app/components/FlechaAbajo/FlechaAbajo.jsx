"use client";
import React from "react";
import styles from "./FlechaAbajo.module.css";

const FlechaAbajo = () => {
  return (
    <div className={styles.flechaContainer}>
      <div className={styles.flecha}>
        <svg
          width="60"
          height="70"
          viewBox="0 0 60 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="metallic-gray"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#F0F0F0" />
              <stop offset="50%" stopColor="#E0E0E0" />
              <stop offset="55%" stopColor="#F0F0F0" />
              <stop offset="100%" stopColor="#CCCCCC" />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1" dy="1" stdDeviation="2" floodOpacity="0.3" />
            </filter>
            <filter id="shine" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
              <feSpecularLighting
                in="blur"
                surfaceScale="5"
                specularConstant="0.75"
                specularExponent="20"
                lightingColor="#FFFFFF"
                result="specOut"
              >
                <fePointLight x="50" y="0" z="200" />
              </feSpecularLighting>
              <feComposite
                in="specOut"
                in2="SourceAlpha"
                operator="in"
                result="specOut2"
              />
              <feComposite
                in="SourceGraphic"
                in2="specOut2"
                operator="arithmetic"
                k1="0"
                k2="1"
                k3="1"
                k4="0"
              />
            </filter>
          </defs>
          <path
            d="M30 40L5 15L10 10L30 30L50 10L55 15L30 40Z"
            fill="url(#metallic-gray)"
            filter="url(#shadow) url(#shine)"
          />
          <path
            d="M30 55L5 30L10 25L30 45L50 25L55 30L30 55Z"
            fill="url(#metallic-gray)"
            filter="url(#shadow) url(#shine)"
          />
          <path
            d="M30 70L5 45L10 40L30 60L50 40L55 45L30 70Z"
            fill="url(#metallic-gray)"
            filter="url(#shadow) url(#shine)"
          />
        </svg>
      </div>
    </div>
  );
};

export default FlechaAbajo;
