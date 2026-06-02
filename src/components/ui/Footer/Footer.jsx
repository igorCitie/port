import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../../context/LanguageContext'
import styles from './Footer.module.css'

const socialLinks = [
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/igor-lima-pereira-577872186/' },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/igorCitie' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/igorl.pereira/' },
]

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
]

export default function Footer() {
  const { lang } = useLanguage()
  return (
    <footer className={styles.footer}>
      <div className={styles.topDivider} />
      <div className={styles.inner}>
        <div className={styles.socials}>
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className={styles.socialLink}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon aria-hidden="true" className={styles.socialIcon} />
            </a>
          ))}
        </div>
        <div className={styles.socials}>
          <Link
            key="home"
            to="/"
            className={styles.copyright}
            aria-label="Home"
          >
            <p className={styles.copyright}>Home</p>
          </Link>
          <Link
            key="about"
            to="/about"
            className={styles.copyright}
            aria-label="About"
          >
            <p className={styles.copyright}>{lang === 'pt' ? 'Sobre' : 'About'}</p>
          </Link>
        </div>
      </div>
    </footer>
  )
}
