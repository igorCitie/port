import { useEffect } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styles from './Lightbox.module.css'

export default function Lightbox({ images, index, onClose, onNav }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft'  && index > 0)                 onNav(index - 1)
      if (e.key === 'ArrowRight' && index < images.length - 1) onNav(index + 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, images.length, onClose, onNav])

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        disabled={index === 0}
        onClick={(e) => { e.stopPropagation(); onNav(index - 1) }}
        aria-label="Previous image"
      >
        <FaChevronLeft />
      </button>

      <div className={styles.imgWrap} onClick={(e) => e.stopPropagation()}>
        <img
          key={index}
          src={images[index]}
          alt={`Gallery image ${index + 1}`}
          className={styles.img}
        />
        <span className={styles.counter}>{index + 1} / {images.length}</span>
      </div>

      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        disabled={index === images.length - 1}
        onClick={(e) => { e.stopPropagation(); onNav(index + 1) }}
        aria-label="Next image"
      >
        <FaChevronRight />
      </button>

      <button className={styles.close} onClick={onClose} aria-label="Close lightbox">
        <FaTimes />
      </button>
    </div>
  )
}
