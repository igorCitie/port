import { createContext, useContext, useState } from 'react'
import { translations } from '../data/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'pt')
  const [langKey, setLangKey] = useState(0)

  const toggleLang = () => {
    const next = lang === 'pt' ? 'en' : 'pt'
    const apply = () => {
      setLang(next)
      setLangKey(k => k + 1)
      localStorage.setItem('lang', next)
    }
    if (!document.startViewTransition) {
      apply()
      return
    }
    document.startViewTransition(apply)
  }

  const t = (section) => translations[lang][section]

  return (
    <LanguageContext.Provider value={{ lang, langKey, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
