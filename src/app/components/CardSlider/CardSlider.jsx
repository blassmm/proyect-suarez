"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./CardSlider.module.css";

/**
 * Slider de cards con sección destacada
 * @param {Object} props
 * @param {Array} props.items - Array de items con: id, imagen, titulo, subtitulo, descripcion, etiqueta, masImagenes
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedItem]);

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
    setCurrentImageIndex(0);
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const getAllImages = (item) => {
    const images = [item.imagen];
    if (item.masImagenes && Array.isArray(item.masImagenes)) {
      images.push(...item.masImagenes.slice(0, 7));
    }
    return images;
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
                  key={`img-${selectedItem.id}-${currentImageIndex}`}
                  src={getAllImages(selectedItem)[currentImageIndex]}
                  alt={selectedItem.titulo}
                  width={800}
                  height={450}
                  className={styles.featuredImg}
                />
                {getAllImages(selectedItem).length > 1 && (
                  <>
                    <div className={styles.imageCounter}>
                      <span className={styles.currentIndex}>
                        {currentImageIndex + 1}
                      </span>
                      <span className={styles.separator}>/</span>
                      <span className={styles.totalCount}>{getAllImages(selectedItem).length}</span>
                    </div>
                    <div className={styles.galleryBar}>
                      <div className={styles.thumbnailsContainer}>
                        {getAllImages(selectedItem).map((img, idx) => (
                          <button
                            key={`thumb-${idx}`}
                            className={`${styles.thumbnail} ${currentImageIndex === idx ? styles.thumbnailActive : ""}`}
                            onClick={() => handleThumbnailClick(idx)}
                          >
                            <Image
                              src={img}
                              alt={`${selectedItem.titulo} - ${idx + 1}`}
                              width={80}
                              height={50}
                              className={styles.thumbnailImg}
                            />
                            <span className={styles.thumbnailOverlay} />
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}
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
