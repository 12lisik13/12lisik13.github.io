import { Link } from 'react-router-dom'
import { siteData } from '../content/siteData'
import { scrollToId } from '../utils/scrollToId'

export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-surface/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">{siteData.footer.copyright}</p>
        <div className="flex gap-3 text-sm">
          <button
            type="button"
            onClick={() => scrollToId('portfolio')}
            className="text-muted hover:text-text"
          >
            Портфолио
          </button>
          <Link to="/contacts" className="text-muted hover:text-text">
            Контакты
          </Link>
        </div>
      </div>
    </footer>
  )
}

