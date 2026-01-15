"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./CardSlider.module.css";

/**
 * Slider de cards con sección destacada
 * @param {Object} props
 * @param {Array} props.items - Array de items con: id, imagen, titulo, subtitulo, descripcion, etiqueta
 * @param {Function} props.renderItem - Función para renderizar cada card (recibe item, isSelected)
 * @param {Function} props.renderFeatured - Función para renderizar sección destacada (recibe selectedItem)
 * @param {boolean} props.showFeatured - Mostrar sección destacada (default: true)
 * @param {string} props.sliderTitle - Título para la sección del slider
 * @param {string} props.className - Clase adicional
 * @param {number} props.gap - Gap entre items en rem (default: 1.5)
 * @param {number} props.defaultSelected - Índice del item seleccionado por defecto (default: 0)
 */
export default function CardSlider({
  items,
  renderItem,
  renderFeatured,
  showFeatured = true,
  sliderTitle = "",
  className = "",
  gap = 1.5,
  defaultSelected = 0,
}) {
  const sliderRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(items[defaultSelected]);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector(`.${styles.card}`);
      const cardWidth = card?.offsetWidth || 300;
      sliderRef.current.scrollBy({
        left: direction * (cardWidth + gap * 16),
        behavior: "smooth",
      });
    }
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const visibleItems = items.filter((item) => item.id !== selectedItem.id);

  return (
    <div className={`${styles.container} ${className}`}>
      {showFeatured && (
        <div className={styles.featured}>
          {renderFeatured ? (
            renderFeatured(selectedItem)
          ) : (
            <div className={styles.featuredDefault}>
              <div className={styles.featuredInfo}>
                {selectedItem.etiqueta && (
                  <h3 key={`tag-${selectedItem.id}`}>
                    {selectedItem.etiqueta}
                  </h3>
                )}
                <h2 key={`title-${selectedItem.id}`}>
                  {selectedItem.titulo}{" "}
                  {selectedItem.subtitulo && (
                    <span>({selectedItem.subtitulo})</span>
                  )}
                </h2>
                {selectedItem.descripcion && (
                  <h4 key={`desc-${selectedItem.id}`}>
                    {selectedItem.descripcion}
                  </h4>
                )}
                {selectedItem.descripcion2 && (
                  <p className={styles.featuredDescripcion2}>
                    {selectedItem.descripcion2}
                  </p>
                )}
              </div>
              <div className={styles.featuredImage}>
                <Image
                  key={`img-${selectedItem.id}`}
                  src={selectedItem.imagen}
                  alt={selectedItem.titulo}
                  width={800}
                  height={450}
                  className={styles.featuredImg}
                />
              </div>
            </div>
          )}
        </div>
      )}

      {sliderTitle && <h2 className={styles.sliderTitle}>{sliderTitle}</h2>}

      <div className={styles.wrapper}>
        <button
          className={styles.arrow}
          onClick={() => scrollSlider(-1)}
          aria-label="Anterior"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div
          className={styles.slider}
          ref={sliderRef}
          style={{ gap: `${gap}rem` }}
        >
          {visibleItems.map((item, index) => (
            <div
              key={item.id ?? index}
              className={styles.card}
              onClick={() => handleSelect(item)}
            >
              {renderItem(item, selectedItem.id === item.id)}
            </div>
          ))}
        </div>

        <button
          className={styles.arrow}
          onClick={() => scrollSlider(1)}
          aria-label="Siguiente"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
