import { Link } from 'react-router-dom'
import projects from '../../data/projects'
import styles from './PlaceholderSection.module.css'
import { useLanguage } from '../../context/LanguageContext'

export default function PlaceholderSection() {
  const { t } = useLanguage()
  const p = t('projects')
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{p.heading}</h2>
      <p className={styles.body}>
        {p.body}
      </p>
      <div className={styles.grid}>
        {projects.map(({ slug, title, icon }) => (
          <Link
            key={slug}
            to={`/projects/${slug}`}
            className={styles.card}
            aria-label={`Open ${title} details`}
          >
            <div className={styles.cardThumb}>
              <div className={styles.cardIcon}>{icon}</div>
            </div>
            <p className={styles.cardTitle}>{title}</p>
          </Link>
        ))}
      </div>
      <div className={styles.bottomDivider} />
    </section>
  )
}
