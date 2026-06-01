import styles from './Technologies.module.css'
import { useLanguage } from '../../../context/LanguageContext'
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiAngular,
  SiSpring,
  SiNodedotjs,
  SiSass,
  SiNginx,
} from 'react-icons/si'

const techs = [
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiReact,      label: 'React'      },
  { icon: SiAngular,    label: 'Angular'    },
  { icon: SiNextdotjs,  label: 'Next.js'    },
  { icon: SiNodedotjs,  label: 'Node.js'    },
  { icon: SiSpring,     label: 'Spring Boot'},
  { icon: SiPostgresql, label: 'PostgreSQL' },
  { icon: SiSass,       label: 'SCSS'       },
  { icon: SiTailwindcss,label: 'Tailwind'   },
  { icon: SiDocker,     label: 'Docker'     },
  { icon: SiNginx,      label: 'Nginx'      },
]

export default function Technologies() {
  const { t } = useLanguage()
  return (
    <section className={styles.section}>
      <div className={styles.topDivider} />
      <div className={styles.inner}>
        <h1 className={styles.heading}>{t('technologies').heading}</h1>
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
