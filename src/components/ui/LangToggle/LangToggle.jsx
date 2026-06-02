import { useLanguage } from '../../../context/LanguageContext'
import styles from './LangToggle.module.css'

export default function LangToggle({ className }) {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      className={[styles.langToggle, className].filter(Boolean).join(' ')}
      onClick={toggleLang}
      aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      {lang === 'pt' ? 'EN' : 'PT'}
    </button>
  )
}
