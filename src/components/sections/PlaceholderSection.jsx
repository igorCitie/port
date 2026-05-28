import { Link } from 'react-router-dom'
import projects from '../../data/projects'
import styles from './PlaceholderSection.module.css'

export default function PlaceholderSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Projetos</h2>
      <p className={styles.body}>
        Abaixo estão alguns projetos que realizei para clientes e empregadores. Clique em cada um para ver detalhes sobre o processo, as tecnologias utilizadas e os resultados alcançados.
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
    </section>
  )
}
