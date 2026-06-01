import { useState, useEffect } from 'react'
import styles from './Hero.module.css'
import { FaLocationPin, FaGithub, FaLinkedin, FaBluesky, FaHeart } from 'react-icons/fa6'
import { useLanguage } from '../../context/LanguageContext'

const NAMESPACE = 'igor-portfolio'
const KEY = 'hearts'
const BASE = `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}`
const LS_KEY = 'portfolio_heart_liked'

export default function Hero() {
  const [count, setCount] = useState(null)
  const [liked, setLiked] = useState(() => localStorage.getItem(LS_KEY) === 'true')
  const [loading, setLoading] = useState(false)
  const { lang, t } = useLanguage()
  const h = t('hero')

  useEffect(() => {
    fetch(BASE + '/')
      .then(r => r.json())
      .then(data => setCount(data.count))
      .catch(() => {})
  }, [])

  async function handleHeart() {
    if (loading) return
    setLoading(true)
    const url = liked ? `${BASE}/down` : `${BASE}/up`
    const nextLiked = !liked
    try {
      const data = await fetch(url).then(r => r.json())
      setCount(data.count)
      setLiked(nextLiked)
      localStorage.setItem(LS_KEY, String(nextLiked))
    } catch {}
    setLoading(false)
  }

  return (
    <section className={styles.hero}>
      {/* Content starts near the bottom of the first viewport */}
      <div className={styles.content}>
        <h1 className={styles.heading}>{h.heading}</h1>
        <p className={styles.subheading}>
          <FaLocationPin style={{ marginRight: '0.7ch', width: '0.7em', height: '0.7em' }} />
          São Luís
        </p>
        <p className={styles.body}>
          {lang === 'pt'
            ? <>Eu construo aplicações fullstack utilizando TypeScript, especializando-me em{' '}<strong>Next.js</strong> e <strong>React.js</strong>.</>
            : <>I build fullstack applications using TypeScript, specializing in{' '}<strong>Next.js</strong> and <strong>React.js</strong>.</>
          }
        </p>
        <p className={styles.bodyWide}>
          {h.bodyWide1}
        </p>

        <p className={styles.bodyWide}>
          {h.bodyWide2}
        </p>

         <button
          className={`${styles.heartBtn} ${liked ? styles.heartBtnLiked : ''}`}
          onClick={handleHeart}
          aria-label={liked ? h.ariaUnlike : h.ariaLike}
          disabled={loading}
        >
          <FaHeart className={styles.heartIcon} />
          {count !== null && <span>{count}</span>}
        </button>
        <div className={styles.socials}>
          <a href="https://github.com/igorCitie" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/igor-lima-pereira-577872186/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
        <div className={styles.divider} />
      </div>
    </section>
  )
}
