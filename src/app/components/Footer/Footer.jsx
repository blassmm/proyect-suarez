import Link from "next/link";
import Image from "next/image";
import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container mb-15! md:mb-0!">
        <div className="footer-grid">
          {/* Logo and Brand */}
          <div className="footer-column">
            <Image
              src="/images/header-suarez.webp"
              alt="Suarez"
              width={120}
              height={60}
              quality={100}
              className="footer-logo"
            />
            <Image
              src="/images/header-taller-chapa-y-pintura.webp"
              alt="Taller de Chapa y Pintura"
              width={180}
              height={60}
              quality={100}
              className="footer-logo"
            />
          </div>

          {/* Contact Information */}
          <div className="footer-column">
            <Link
              href="https://maps.google.com/?q=19+1794+514+La+Plata+Argentina"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FaMapMarkerAlt className="footer-icon footer-map-icon" />
              <span className="footer-text">
                19 #1794 esq. 514, La Plata, Arg.
              </span>
            </Link>
            <Link
              href="https://wa.me/5492215991586"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FaWhatsapp className="footer-icon footer-whatsapp-icon" />
              <span className="footer-text">221 599-1586</span>
            </Link>
            <Link
              href="mailto:comercial@tallersuarez.com"
              className="footer-link"
            >
              <FaEnvelope className="footer-icon footer-email-icon" />
              <span className="footer-text">comercial@tallersuarez.com</span>
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="footer-column">
            <Link
              href="https://youtube.com/@tallersuarez2220"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FaYoutube className="footer-icon footer-youtube-icon" />
              <span className="footer-text">tallersuarez2220</span>
            </Link>
            <Link
              href="https://instagram.com/taller_suarez"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FaInstagram className="footer-icon footer-instagram-icon" />
              <span className="footer-text">taller_suarez</span>
            </Link>
            <Link
              href="https://facebook.com/TallerSuarezChapayPintura"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FaFacebookF className="footer-icon footer-facebook-icon" />
              <span className="footer-text">TallerSuarezChapayPintura</span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>
            © {new Date().getFullYear()} Taller Suarez. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
