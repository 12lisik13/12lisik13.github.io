import type { PricingPlan } from '../content/siteData'
import { Link } from 'react-router-dom'

type Props = {
  items: PricingPlan[]
}

export default function Pricing({ items }: Props) {
  return (
    <section id="pricing" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-text">Прайс</h2>
            <p className="mt-2 text-muted">Пакеты услуг, которые удобно адаптировать под ваш проект.</p>
          </div>
          <div className="hidden lg:block text-right">
            <p className="text-sm text-muted">Есть гибкие варианты по срокам</p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3 md:auto-rows-fr">
          {items.map((plan) => (
            <div
              key={plan.title}
              className={[
                'relative flex h-full flex-col rounded-2xl border bg-surface p-6 shadow-card',
                plan.popular ? 'border-accent/50' : 'border-border',
                'transition-colors hover:border-accent/40 hover:shadow-card',
              ].join(' ')}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-accent to-accentGradientEnd px-4 py-1 text-xs font-semibold text-white shadow-card">
                  Рекомендуем
                </div>
              )}
              <h3 className="text-lg font-semibold text-text">{plan.title}</h3>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-text">{plan.price}</p>
              <p className="mt-2 text-sm text-muted">{plan.description}</p>
              <ul className="mt-5 min-h-28 flex-1 space-y-2 text-sm text-muted">
                {plan.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contacts"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-text hover:bg-surface/80"
                aria-label="Перейти к контактам"
              >
                Уточнить в сообщении
              </Link>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-to-r from-accent/60 via-accentSoft/30 to-transparent"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

