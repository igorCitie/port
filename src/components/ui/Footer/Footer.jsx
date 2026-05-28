import { FaLinkedin, FaGithub } from 'react-icons/fa6'
import { SiBluesky } from 'react-icons/si'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const socialLinks = [
  { icon: FaLinkedin, label: 'LinkedIn',  href: '#' },
  { icon: FaGithub,   label: 'GitHub',    href: '#' },
  { icon: SiBluesky,  label: 'Bluesky',   href: '#' },
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
