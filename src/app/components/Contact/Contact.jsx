"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Contact.module.css";
import L from "leaflet";

// Fix Leaflet marker icon issue in Next.js
const MarkerIcon = () => {
  useEffect(() => {
    // Only fix the icons once the component is mounted on the client
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    });
  }, []);

  return null;
};

export default function Contact() {
  // Map position
  const position = [-34.8966957, -58.0030307]; // Argentina coordinates

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <h1>Contact Us</h1>
        <div className={styles.infoItem}>
          <span>Email:</span> contact@suarezproject.com
        </div>
        <div className={styles.infoItem}>
          <span>Phone:</span> +1 (555) 123-4567
        </div>
        <div className={styles.infoItem}>
          <span>Address:</span> 123 Innovation Street, Tech City
        </div>
      </div>

      <div className={styles.mapContainer}>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className={styles.map}
        >
          <MarkerIcon />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Suarez Project <br /> We are here!
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
