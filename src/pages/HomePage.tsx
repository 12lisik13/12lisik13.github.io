import { Link } from 'react-router-dom'
import { siteData } from '../content/siteData'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import Portfolio from '../components/portfolio/Portfolio'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services items={siteData.services} />
      <Pricing items={siteData.pricing} />
      <Portfolio albums={siteData.portfolioAlbums} />

      <section className="scroll-mt-24 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-8 shadow-card">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-accent/25 via-accentSoft/10 to-accentGradientEnd/0 blur-3xl" />
            <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-text">Хотите увидеть работы и формат?</h2>
                <p className="mt-2 max-w-xl text-muted">
                  Перейдите на страницу контактов: там же собраны отзывы.
                </p>
              </div>
              <div>
                <Link
                  to="/contacts"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-accent to-accentGradientEnd px-6 py-3 text-sm font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5"
                >
                  Открыть контакты и отзывы
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

