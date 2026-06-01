import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

const mq = window.matchMedia('(prefers-color-scheme: light)')

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored
    return mq.matches ? 'light' : 'dark'
  })

  // Follow system changes unless the user has picked manually
  useEffect(() => {
    const handler = (e) => {
      if (localStorage.getItem('theme')) return   // user override active
      setTheme(e.matches ? 'light' : 'dark')
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'

    const apply = () => {
      localStorage.setItem('theme', next)   // mark as manual override
      document.documentElement.setAttribute('data-theme', next)
      setTheme(next)
    }

    if (!document.startViewTransition) {
      apply()
      return
    }
    document.startViewTransition(apply)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
