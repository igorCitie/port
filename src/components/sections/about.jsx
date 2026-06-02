import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaGithub, FaLinkedin } from 'react-icons/fa6'
import FixedChrome from '../ui/FixedChrome/FixedChrome'
import ThemeToggle from '../ui/ThemeToggle/ThemeToggle'
import LangToggle from '../ui/LangToggle/LangToggle'
import Footer from '../ui/Footer/Footer'
import { useLanguage } from '../../context/LanguageContext'
import profileImg from '../../assets/profile.jpg'
import styles from './about.module.css'

export default function About() {
    const navigate = useNavigate()
    const { t } = useLanguage()
    const a = t('about')

    return (
        <>
            <div className="scroll-root">
                <div className={styles.topBar}>
                <ThemeToggle className={styles.themeToggle} />
                <LangToggle className={styles.langToggle} />
                </div>
                <main>
                    <section className={styles.page}>
                        <div className={styles.inner}>

                            <h1 className={styles.heading}>{a.heading}</h1>
                            <p className={styles.subheading}>{a.subheading}</p>

                            <div className={styles.bio}>
                                {a.bio.map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}
                            </div>

                            <div className={styles.section}>
                                <h2 className={styles.sectionHeading}>{a.techHeading}</h2>
                                <ul className={styles.techList}>
                                    {a.tech.map((item) => (
                                        <li key={item} className={styles.techTag}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.section}>
                                <h2 className={styles.sectionHeading}>{a.connectHeading}</h2>
                                <p className={styles.connectText}>{a.connectText}</p>
                            </div>

                            <div className={styles.links}>
                                <a
                                    href="https://github.com/igorCitie"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="GitHub"
                                >
                                    <FaGithub aria-hidden="true" />
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/igor-lima-pereira-577872186/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin aria-hidden="true" />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                        <div className={styles.profileContainer}>
                            <img src={profileImg} className={styles.profileContainer} alt="Igor Lima Pereira" className={styles.profileImg} />
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    )
}
