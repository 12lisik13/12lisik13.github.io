import { useMemo, useState } from 'react'
import type { PortfolioAlbum, PortfolioItem } from '../../content/siteData'
import Lightbox from './Lightbox'
import { portfolioAssetUrl } from '../../utils/portfolioAssets'

type Props = {
  albums: PortfolioAlbum[]
}

export default function Portfolio({ albums }: Props) {
  const [activeAlbumIndex, setActiveAlbumIndex] = useState(0)
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const activeAlbum = useMemo(() => {
    return albums[activeAlbumIndex] ?? albums[0] ?? null
  }, [albums, activeAlbumIndex])

  const items = activeAlbum?.items ?? []

  return (
    <section id="portfolio" className="scroll-mt-24 py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-text">Портфолио</h2>
            <p className="mt-2 text-muted">Собрано по альбомам: веб и визуальные решения.</p>
          </div>
          <div className="hidden text-right sm:block">
            <p className="text-sm text-muted">Кликни по изображению, чтобы увеличить.</p>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap gap-2">
            {albums.map((album, idx) => {
              const active = idx === activeAlbumIndex
              return (
                <button
                  key={album.title}
                  type="button"
                  className={[
                    'rounded-xl px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50',
                    active
                      ? 'bg-gradient-to-r from-accent to-accentGradientEnd text-white shadow-card'
                      : 'border border-border bg-surface text-muted hover:bg-surface/70',
                  ].join(' ')}
                  onClick={() => setActiveAlbumIndex(idx)}
                  aria-pressed={active}
                >
                  {album.title}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {items.map((item, idx) => {
            const src = portfolioAssetUrl(item.src)
            return (
              <button
                key={`${item.src}-${idx}`}
                type="button"
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface text-left shadow-card transition-transform duration-200 hover:-translate-y-0.5 hover:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/60"
                onClick={() => setSelectedItem(item)}
                aria-label="Открыть изображение"
              >
                <div className="aspect-[4/3] bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt="Изображение из портфолио"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {selectedItem && (
        <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  )
}

