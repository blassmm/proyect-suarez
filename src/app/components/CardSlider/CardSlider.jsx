"use client";
import { useRef, useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";
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
  const containerRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(items[defaultSelected]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [thumbStartIndex, setThumbStartIndex] = useState(0);
  const VISIBLE_THUMBS = 3;

  useEffect(() => {
    setCurrentImageIndex(0);
    setThumbStartIndex(0);
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
    containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const scrollThumbs = (direction, totalImages) => {
    const newImageIndex = currentImageIndex + direction;
    if (newImageIndex >= 0 && newImageIndex < totalImages) {
      setCurrentImageIndex(newImageIndex);
      
      // Ajustar ventana de miniaturas si es necesario
      if (newImageIndex < thumbStartIndex) {
        setThumbStartIndex(newImageIndex);
      } else if (newImageIndex >= thumbStartIndex + VISIBLE_THUMBS) {
        setThumbStartIndex(newImageIndex - VISIBLE_THUMBS + 1);
      }
    }
  };

  const getVisibleThumbs = (images) => {
    return images.slice(thumbStartIndex, thumbStartIndex + VISIBLE_THUMBS);
  };

  const getAllImages = (item) => {
    const images = [item.imagen];
    if (item.masImagenes && Array.isArray(item.masImagenes)) {
      images.push(...item.masImagenes);
    }
    return images;
  };

  const visibleItems = items.filter((item) => item.id !== selectedItem.id);

  return (
    <div className={`${styles.container} ${className}`} ref={containerRef}>
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
                <CldImage
                  key={`img-${selectedItem.id}-${currentImageIndex}`}
                  src={getAllImages(selectedItem)[currentImageIndex]}
                  alt={selectedItem.titulo}
                  width={800}
                  height={450}
                  format="webp"
                  quality="auto"
                  loading="eager"
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
                      <button
                        className={`${styles.thumbArrow} ${currentImageIndex === 0 ? styles.thumbArrowDisabled : ""}`}
                        onClick={() => scrollThumbs(-1, getAllImages(selectedItem).length)}
                        disabled={currentImageIndex === 0}
                        aria-label="Anterior"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <div className={styles.thumbnailsContainer}>
                        {getVisibleThumbs(getAllImages(selectedItem)).map((img, idx) => {
                          const realIndex = thumbStartIndex + idx;
                          return (
                            <button
                              key={`thumb-${realIndex}`}
                              className={`${styles.thumbnail} ${currentImageIndex === realIndex ? styles.thumbnailActive : ""}`}
                              onClick={() => handleThumbnailClick(realIndex)}
                            >
                              <CldImage
                                src={img}
                                alt={`${selectedItem.titulo} - ${realIndex + 1}`}
                                width={80}
                                height={50}
                                format="webp"
                                quality="auto"
                                loading="lazy"
                                className={styles.thumbnailImg}
                              />
                              <span className={styles.thumbnailOverlay} />
                            </button>
                          );
                        })}
                      </div>
                      <button
                        className={`${styles.thumbArrow} ${currentImageIndex >= getAllImages(selectedItem).length - 1 ? styles.thumbArrowDisabled : ""}`}
                        onClick={() => scrollThumbs(1, getAllImages(selectedItem).length)}
                        disabled={currentImageIndex >= getAllImages(selectedItem).length - 1}
                        aria-label="Siguiente"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
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
