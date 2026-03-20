import { useMemo, useState, type FormEvent } from 'react'
import { siteData } from '../content/siteData'

type ContactData = typeof siteData.contact

type Props = {
  data: ContactData
}

export default function Contact({ data }: Props) {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const telegramHref = useMemo(() => {
    const tg = data.telegram.trim()
    if (!tg) return '#'
    if (tg.startsWith('http')) return tg
    if (tg.startsWith('@')) return `https://t.me/${tg.slice(1)}`
    return `https://t.me/${tg}`
  }, [data.telegram])

  const mailTo = useMemo(() => {
    const subject = encodeURIComponent('Запрос на дизайн')
    const body = encodeURIComponent(
      `Здравствуйте!\n\nМеня зовут: ${name || '-'}\n\nСообщение:\n${message || '-'}\n\nПодробнее: ${window.location.href}`,
    )
    return `mailto:${data.email}?subject=${subject}&body=${body}`
  }, [data.email, message, name])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(data.email)
      alert('Email скопирован')
    } catch {
      // Fallback: open mail client
      window.location.href = `mailto:${data.email}`
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    window.location.href = mailTo
  }

  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-text">Контакты</h2>
            <p className="mt-2 max-w-xl text-muted">{data.description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${data.email}`}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-accent to-accentGradientEnd px-5 py-3 text-sm font-semibold text-white shadow-card"
              >
                Написать на email
              </a>
              <a
                href={telegramHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-text hover:bg-surface/80"
              >
                Telegram
              </a>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-text hover:bg-surface/80"
                onClick={copyEmail}
              >
                Скопировать email
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-text">Имя</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text placeholder:text-muted outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Как к вам обращаться?"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-text">Сообщение</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text placeholder:text-muted outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Расскажите о задаче и желаемом результате"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-accent to-accentGradientEnd px-5 py-3 text-sm font-semibold text-white shadow-card"
              >
                Отправить запрос
              </button>
              <p className="text-xs text-muted">
                Форма отправляет ваше сообщение через почтовый клиент (`mailto:`), без бэкенда.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

