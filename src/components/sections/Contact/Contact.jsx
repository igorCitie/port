import { useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'
import { useLanguage } from '../../../context/LanguageContext'

const SERVICE_ID  = 'service_wwb1a7r'
const TEMPLATE_ID = 'template_iqospy3'
const PUBLIC_KEY  = 'R5LOeMOAsKI_Kc9jo'

export default function Contact() {
  const [form, setForm]     = useState({ name: '', subject: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'sent' | 'error'
  const { t } = useLanguage()
  const c = t('contact')

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          subject:   form.subject,
          reply_to:  form.email,
          message:   form.message,
        },
        PUBLIC_KEY,
      )
      setStatus('sent')
      setForm({ name: '', subject: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{c.heading}</h2>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-name">{c.labelName}</label>
          <input
            id="contact-name"
            className={styles.input}
            type="text"
            name="name"
            placeholder={c.placeholderName}
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-subject">{c.labelSubject}</label>
          <input
            id="contact-subject"
            className={styles.input}
            type="text"
            name="subject"
            placeholder={c.placeholderSubject}
            value={form.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-email">{c.labelEmail}</label>
          <input
            id="contact-email"
            className={styles.input}
            type="email"
            name="email"
            placeholder={c.placeholderEmail}
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-message">{c.labelMessage}</label>
          <textarea
            id="contact-message"
            className={styles.textarea}
            name="message"
            placeholder={c.placeholderMessage}
            value={form.message}
            onChange={handleChange}
            rows={8}
            required
          />
        </div>

        {status === 'sent'  && <p className={styles.success}>{c.success}</p>}
        {status === 'error' && <p className={styles.error}>{c.error}</p>}

        <button className={styles.button} type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? c.sending : c.send}
        </button>
      </form>
    </section>
  )
}
