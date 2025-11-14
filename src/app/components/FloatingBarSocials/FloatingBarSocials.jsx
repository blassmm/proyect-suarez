"use client";
import React from "react";
import Link from "next/link";
import styles from "./FloatingBarSocials.module.css";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

//npm install react-icons --save
const socialIcons = {
  instagram: <FaInstagram />,
  linkedin: <FaLinkedin />,
  facebook: <FaFacebook />,
  twitter: <FaXTwitter />,
  telegram: <FaTelegram />,
  discord: <FaDiscord />,
};

const FloatingBarSocials = ({ socials = [] }) => {
  return (
    <div className={styles.floatingBar}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
          aria-label={social.name}
        >
          {socialIcons[social.name.toLowerCase()]}
        </Link>
      ))}
    </div>
  );
};

export default FloatingBarSocials;
