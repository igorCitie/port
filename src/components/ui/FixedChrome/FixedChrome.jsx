import { useState, useEffect, useRef } from 'react'
import styles from './FixedChrome.module.css'
import Plasma from '../../bits/Plasma/Plasma'
import BorderFrame from '../BorderFrame/BorderFrame'
import { useTheme } from '../../../context/ThemeContext'

const isIOS =
  typeof navigator !== 'undefined' &&
  (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

export default function FixedChrome() {
  const { theme } = useTheme()
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 768px)').matches)
  const [plasmaPaused, setPlasmaPaused] = useState(false)
  const resumeTimer = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Pause Plasma while iOS address bar is animating
  useEffect(() => {
    const vv = window.visualViewport
    if (!vv) return

    const onVVResize = () => {
      setPlasmaPaused(true)
      clearTimeout(resumeTimer.current)
      resumeTimer.current = setTimeout(() => setPlasmaPaused(false), isIOS ? 600 : 300)
    }

    vv.addEventListener('resize', onVVResize)
    return () => {
      vv.removeEventListener('resize', onVVResize)
      clearTimeout(resumeTimer.current)
    }
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
            paused={plasmaPaused}
          />
        </div>
      </div>

      <BorderFrame />
    </>
  )
}
