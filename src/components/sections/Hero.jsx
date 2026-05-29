import styles from './Hero.module.css'
import { FaLocationPin, FaGithub, FaLinkedin, FaBluesky } from 'react-icons/fa6'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Content starts near the bottom of the first viewport */}
      <div className={styles.content}>
        <h1 className={styles.heading}>E aí, sou Igor!</h1>
        <p className={styles.subheading}>
          <FaLocationPin style={{ marginRight: '0.7ch', width: '0.7em', height: '0.7em' }} />
          São Luís
        </p>
        <p className={styles.body}>
          Eu construo aplicações fullstack utilizando TypeScript, especializando-me em{' '}
          <strong>Next.js</strong> e <strong>React.js</strong>.
        </p>
        <p className={styles.bodyWide}>
          Eu sou apaixonado por criar interfaces intuitivas e experiências digitais envolventes. Além de soluções que resolvem problemas reais.
        </p>

        <p className={styles.bodyWide}>
          Dê uma olhada nos meus projetos abaixo e vamos conversar!
        </p>
        <div className={styles.socials}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
        <div className={styles.divider} />
      </div>
    </section>
  )
}
