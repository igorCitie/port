import { useLanguage } from '../../../context/LanguageContext'
import styles from './LangToggle.module.css'

export default function LangToggle() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      className={styles.langToggle}
      onClick={toggleLang}
      aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      {lang === 'pt' ? 'EN' : 'PT'}
    </button>
  )
}
