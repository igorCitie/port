import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import projects from '../../data/projects'
import FixedChrome from '../ui/FixedChrome/FixedChrome'
import Lightbox from '../ui/Lightbox/Lightbox'
import Footer from '../ui/Footer/Footer'
import styles from './ProjectDetail.module.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]
  const prev = projects[index - 1]
  const next = projects[index + 1]

  const scrollRef = useRef(null)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [slug])

  if (!project) {
    return (
      <div className={styles.page}>
        <p style={{ color: '#fff' }}>Projeto não encontrado.</p>
      </div>
    )
  }

  return (
    <>
      <FixedChrome />
      <div ref={scrollRef} className="scroll-root">
      <div className={styles.page}>
      <div key={slug} className={styles.panel}>

        {/* ── Header ── */}
        <div className={styles.header}>
          <h2 className={styles.title}>{project.title}</h2>
          <div className={styles.headerRight}>
            <button className={styles.closeBtn} onClick={() => navigate('/')} aria-label="Fechar">
              <FaTimes />
            </button>
            <nav className={styles.nav}>
              <button
                className={styles.navItem}
                disabled={!prev}
                onClick={() => prev && navigate(`/projects/${prev.slug}`)}
                aria-label="Projeto anterior"
              >
                <FaChevronLeft />
                <span>{prev ? prev.title : '—'}</span>
              </button>
              <span className={styles.navSep}>|</span>
              <button
                className={styles.navItem}
                disabled={!next}
                onClick={() => next && navigate(`/projects/${next.slug}`)}
                aria-label="Próximo projeto"
              >
                <span>{next ? next.title : '—'}</span>
                <FaChevronRight />
              </button>
            </nav>
          </div>
        </div>

        {/* ── Meta ── */}
        {project.meta && (
          <div className={styles.row}>
            <span className={styles.label}>Meta:</span>
            <div className={styles.tags}>
              {project.meta.map((m) => (
                <span key={m.label} className={styles.tag}>
                  {m.icon && <span className={styles.tagIcon}>{m.icon}</span>}
                  {m.href
                    ? <a href={m.href} target="_blank" rel="noreferrer" className={styles.tagLink}>{m.label}</a>
                    : m.label}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ── Technologies ── */}
        {project.technologies && (
          <div className={styles.row}>
            <span className={styles.label}>Tecnologias:</span>
            <div className={styles.tags}>
              {project.technologies.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        )}

        <hr className={styles.divider} />

        {/* ── Description ── */}
        <div className={styles.description}>
          {project.intro && <p className={styles.intro}>{project.intro}</p>}
          {project.highlights && (
            <>
              <p className={styles.highlightsHeading}>Destaques Técnicos:</p>
              <ul className={styles.highlights}>
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* ── Gallery ── */}
        {project.gallery?.length > 0 && (
          <div className={styles.gallery}>
            {project.gallery.map((src, i) => (
              <div
                key={i}
                className={styles.galleryItem}
                onClick={() => setLightboxIndex(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLightboxIndex(i)}
                aria-label={`Abrir imagem ${i + 1}`}
              >
                <img src={src} alt={`${project.title} foto ${i + 1}`} className={styles.galleryImg} />
              </div>
            ))}
          </div>
        )}

      </div>

      {lightboxIndex !== null && project.gallery && (
        <Lightbox
          images={project.gallery}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNav={setLightboxIndex}
        />
      )}

      <Footer />
      </div>
      </div>
    </>
  )
}
