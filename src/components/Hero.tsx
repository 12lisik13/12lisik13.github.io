import { siteData } from '../content/siteData'
import { portfolioAssetUrl } from '../utils/portfolioAssets'
import { Link } from 'react-router-dom'
import { scrollToId } from '../utils/scrollToId'

export default function Hero() {
  const previewSrc = portfolioAssetUrl('work-03.jpg')

  return (
    <section className="relative scroll-mt-24 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-muted">{siteData.hero.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
              {siteData.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
              {siteData.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {siteData.hero.ctas.map((cta) => {
                const common =
                  'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5'
                if (cta.href.startsWith('#')) {
                  const id = cta.href.replace('#', '')
                  return (
                    <button
                      key={cta.href}
                      type="button"
                      onClick={() => scrollToId(id)}
                      className={`${common} border border-border bg-surface text-text hover:bg-surface/80`}
                    >
                      {cta.label}
                    </button>
                  )
                }

                return (
                  <Link
                    key={cta.href}
                    to={cta.href}
                    className={`${common} bg-gradient-to-r from-accent to-accentGradientEnd text-white shadow-card`}
                  >
                    {cta.label}
                  </Link>
                )
              })}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted">
              <div className="rounded-2xl border border-border bg-surface/60 px-4 py-2">
                Сроки: обычно 7–14 дней
              </div>
              <div className="rounded-2xl border border-border bg-surface/60 px-4 py-2">
                Формат: под ваш бренд
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accentSoft/50 via-accentSoft/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-surface shadow-card">
              <div className="aspect-[4/3]">
                <img
                  src={previewSrc}
                  alt="Превью"
                  className="h-full w-full object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

