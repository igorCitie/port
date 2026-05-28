import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FixedChrome from './components/ui/FixedChrome/FixedChrome'
import Hero from './components/sections/Hero'
import PlaceholderSection from './components/sections/PlaceholderSection'
import Technologies from './components/sections/Technologies/Technologies'
import Contact from './components/sections/Contact/Contact'
import ProjectDetail from './components/sections/ProjectDetail'
import Footer from './components/ui/Footer/Footer'

function Home() {
  return (
    <>
      <FixedChrome />
      <main>
        <Hero />
        <Technologies />
        <PlaceholderSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
