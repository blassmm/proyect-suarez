import styles from "./Contact.module.css";

const MapComponent = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62652.546956259976!2d-58.042977018349355!3d-34.89677465762903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2de852b3688bf%3A0xe05137d845c0b369!2sTaller%20Integral%20Suarez%20S.R.L.!5e1!3m2!1ses!2sar!4v1763648661449!5m2!1ses!2sar"
      className={styles.map}
      style={{ border: "2px solid #ffffff" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default MapComponent;
