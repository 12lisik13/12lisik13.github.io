import type { Testimonial } from '../content/siteData'

type Props = {
  items: Testimonial[]
}

export default function Testimonials({ items }: Props) {
  return (
    <section id="testimonials" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-text">Отзывы</h2>
            <p className="mt-2 text-muted">Соцдоказательство — чтобы вы понимали, чего ожидать.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-surface p-6 shadow-card"
            >
              <p className="text-sm leading-relaxed text-muted">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accentSoft text-accent font-semibold">
                  {t.name.slice(0, 1).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">{t.name}</p>
                  {t.role && <p className="text-xs text-muted">{t.role}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

