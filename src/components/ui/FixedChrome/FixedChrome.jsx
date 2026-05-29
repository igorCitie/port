import { useState } from 'react'
import styles from './FixedChrome.module.css'
import Plasma from '../../bits/Plasma/Plasma'
import BorderFrame from '../BorderFrame/BorderFrame'
import { useTheme } from '../../../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa6'

const FLIP_DURATION = 320

export default function FixedChrome() {
  const { theme, toggleTheme } = useTheme()
  const [isAnimating, setIsAnimating] = useState(false)

  const handleToggle = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => toggleTheme(), FLIP_DURATION / 2)
    setTimeout(() => setIsAnimating(false), FLIP_DURATION)
  }

  return (
    <>
      {/* Fixed full-viewport background */}
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.plasmaWrapper}>
          <Plasma
            color="#d91143"
            speed={0.6}
            direction="forward"
            scale={1.1}
            opacity={0.8}
            mouseInteractive={false}
          />
        </div>
      </div>

      <button
        className={styles.themeToggle}
        onClick={handleToggle}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span className={isAnimating ? styles.iconSpin : styles.icon}>
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </span>
      </button>

      <BorderFrame />
    </>
  )
}
