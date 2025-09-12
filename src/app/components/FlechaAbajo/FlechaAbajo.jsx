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
              <stop offset="0%" stopColor="#FF0000" />
              <stop offset="50%" stopColor="#CC0000" />
              <stop offset="100%" stopColor="#990000" />
            </linearGradient>
          </defs>
          <path
            d="M30 40L5 15L10 10L30 30L50 10L55 15L30 40Z"
            fill="url(#metallic-gray)"
          />
          <path
            d="M30 55L5 30L10 25L30 45L50 25L55 30L30 55Z"
            fill="url(#metallic-gray)"
          />
        </svg>
      </div>
    </div>
  );
};

export default FlechaAbajo;
