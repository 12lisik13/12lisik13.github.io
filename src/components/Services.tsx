import type { Service } from '../content/siteData'

type Props = {
  items: Service[]
}

export default function Services({ items }: Props) {
  return (
    <section id="services" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-text">Услуги</h2>
            <p className="mt-2 text-muted">Подберём формат под вашу задачу и соберём цельный визуал.</p>
          </div>
          <div className="hidden sm:block">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-border bg-surface/60 px-4 py-2 text-sm text-muted">
              Включаю структуру + дизайн
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-6 shadow-card transition-transform hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              <div className="mt-5 h-1 w-16 bg-gradient-to-r from-accent to-accentGradientEnd rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

