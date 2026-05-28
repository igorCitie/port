import styles from './FixedChrome.module.css'
import Plasma from '../../bits/Plasma/Plasma'
import BorderFrame from '../BorderFrame/BorderFrame'

export default function FixedChrome() {
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

      <BorderFrame />
    </>
  )
}
