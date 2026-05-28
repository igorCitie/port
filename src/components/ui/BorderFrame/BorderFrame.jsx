import styles from './BorderFrame.module.css'

export default function BorderFrame() {
  return (
    <>
      <div className={styles.vignette} aria-hidden="true" />
      <svg
        className={styles.frame}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          className={styles.rect}
          x="2"
          y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          rx="14"
        />
      </svg>
    </>
  )
}
