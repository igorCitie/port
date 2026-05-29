import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const socialLinks = [
  { icon: FaLinkedin, label: 'LinkedIn',  href: 'https://www.linkedin.com/in/igor-lima-pereira-577872186/' },
  { icon: FaGithub,   label: 'GitHub',    href: 'https://github.com/igorCitie' },
  { icon: FaInstagram,  label: 'Instagram',   href: 'https://www.instagram.com/igorl.pereira/' },
]

const navLinks = [
  { label: 'Home',  to: '/'      },
  { label: 'About', to: '/about' },
  { label: 'Blog',  to: '/blog'  },
]

export default function Footer() {
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
      </div>
    </footer>
  )
}
