import { useState } from 'react'
import { useTheme } from '../../../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa6'
import styles from './ThemeToggle.module.css'

const FLIP_DURATION = 320

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [isAnimating, setIsAnimating] = useState(false)

  const handleToggle = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => toggleTheme(), FLIP_DURATION / 2)
    setTimeout(() => setIsAnimating(false), FLIP_DURATION)
  }

  return (
    <button
      className={styles.themeToggle}
      onClick={handleToggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className={isAnimating ? styles.iconSpin : styles.icon}>
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </span>
    </button>
  )
}
