import { useState, useEffect } from 'react'
import styles from './FixedChrome.module.css'
import Plasma from '../../bits/Plasma/Plasma'
import BorderFrame from '../BorderFrame/BorderFrame'
import { useTheme } from '../../../context/ThemeContext'

export default function FixedChrome() {
  const { theme } = useTheme()
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 768px)').matches)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const plasmaColor = theme === 'light' ? '#03fff2' : '#d91143'
  const plasmaOpacity = isMobile ? 0.4 : 1

  return (
    <>
      {/* Fixed full-viewport background */}
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.plasmaWrapper}>
          <Plasma
            color={plasmaColor}
            speed={0.6}
            direction="forward"
            scale={1.1}
            opacity={plasmaOpacity}
            mouseInteractive={false}
          />
        </div>
      </div>

      <BorderFrame />
    </>
  )
}
