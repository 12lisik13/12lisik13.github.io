import { useEffect } from 'react'
import type { PortfolioItem } from '../../content/siteData'
import { portfolioAssetUrl } from '../../utils/portfolioAssets'

type Props = {
  item: PortfolioItem
  onClose: () => void
}

export default function Lightbox({ item, onClose }: Props) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  const src = portfolioAssetUrl(item.src)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Просмотр изображения"
    >
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onMouseDown={onClose}
      />

      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-surface shadow-card"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Закрыть"
          className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/80 text-text hover:bg-surface"
          onClick={onClose}
        >
          <span className="text-2xl leading-none">×</span>
        </button>

        <div className="aspect-[16/10] w-full bg-slate-100 sm:aspect-[16/9]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt="Изображение из портфолио"
            className="h-full w-full object-contain"
            loading="eager"
          />
        </div>
      </div>
    </div>
  )
}

