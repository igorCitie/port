import styles from './Technologies.module.css'
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
} from 'react-icons/si'

const techs = [
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiReact,      label: 'React'      },
  { icon: SiNextdotjs,  label: 'Next.js'    },
  { icon: SiTailwindcss,label: 'Tailwind'   },
  { icon: SiPostgresql, label: 'PostgreSQL' },
  { icon: SiDocker,     label: 'Docker'     },
]

export default function Technologies() {
  return (
    <section className={styles.section}>
      <div className={styles.topDivider} />
      <div className={styles.inner}>
        <h1 className={styles.heading}>Tecnologias</h1>
        <div className={styles.grid}>
          {techs.map(({ icon: Icon, label }) => (
            <div key={label} className={styles.card}>
              <Icon className={styles.icon} aria-hidden="true" />
              <span className={styles.label}>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottomDivider} />
    </section>
  )
}
