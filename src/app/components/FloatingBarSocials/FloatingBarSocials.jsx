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
  FaWhatsapp,
  FaEnvelope,
  FaYoutube,
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
  whatsapp: <FaWhatsapp />,
  email: <FaEnvelope />,
  youtube: <FaYoutube />,
};

const FloatingBarSocials = ({ socials = [] }) => {
  const getUrl = (social) => {
    if (social.name.toLowerCase() === "whatsapp" && social.num) {
      const baseUrl = `https://wa.me/${social.num}`;
      if (social.defaultMsj) {
        return `${baseUrl}?text=${encodeURIComponent(social.defaultMsj)}`;
      }
      return baseUrl;
    }
    return social.url;
  };

  return (
    <div className={styles.floatingBar}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={getUrl(social)}
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
