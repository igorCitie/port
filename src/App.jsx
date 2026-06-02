import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import FixedChrome from './components/ui/FixedChrome/FixedChrome'
import ThemeToggle from './components/ui/ThemeToggle/ThemeToggle'
import LangToggle from './components/ui/LangToggle/LangToggle'
import Hero from './components/sections/Hero'
import PlaceholderSection from './components/sections/PlaceholderSection'
import Technologies from './components/sections/Technologies/Technologies'
import Contact from './components/sections/Contact/Contact'
import ProjectDetail from './components/sections/ProjectDetail'
import Footer from './components/ui/Footer/Footer'
import About from './components/sections/about'
import { Analytics } from "@vercel/analytics/react"
function Home() {
  return (
    <>
      <FixedChrome />
      <div className="scroll-root">
        <ThemeToggle />
        <LangToggle />
        <main>
          <Hero />
          <Technologies />
          <PlaceholderSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

function Routes_() {
  const { langKey } = useLanguage()
  return (
    <Routes>
      <Route path="/" element={<Home key={langKey} />} />
      <Route path="/projects/:slug" element={<ProjectDetail key={langKey} />} />
      <Route path="/about" element={<About key={langKey} />} />
    </Routes>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes_ />
          <Analytics />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
