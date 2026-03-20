import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { siteData } from '../content/siteData'
import { scrollToId } from '../utils/scrollToId'

export default function Header() {
  const [open, setOpen] = useState(false)

  const nav = useMemo(() => siteData.header.nav, [])

  const onNavClick = () => setOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-surface/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="flex items-center gap-3 text-text"
          aria-label="На главную"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accentSoft text-accent font-bold">
            Е
          </span>
          <span className="hidden sm:block text-sm font-semibold tracking-tight">
            Dmitryeva Aesthetics
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => {
            if (item.href.startsWith('#')) {
              return (
                <button
                  key={item.href}
                  type="button"
                  className="text-sm font-medium text-muted hover:text-text transition-colors"
                  onClick={() => {
                    const id = item.href.replace('#', '')
                    scrollToId(id)
                  }}
                >
                  {item.label}
                </button>
              )
            }

            return (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-muted hover:text-text transition-colors"
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-3 py-2 text-sm font-medium text-text hover:bg-surface/70 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? 'Закрыть' : 'Меню'}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-border/70 bg-surface/90 md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="grid gap-2">
              {nav.map((item) => (
                  item.href.startsWith('#') ? (
                    <button
                      key={item.href}
                      type="button"
                      className="rounded-xl px-3 py-2 text-sm font-medium text-text hover:bg-accentSoft/70"
                      onClick={() => {
                        const id = item.href.replace('#', '')
                        scrollToId(id)
                        onNavClick()
                      }}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="rounded-xl px-3 py-2 text-sm font-medium text-text hover:bg-accentSoft/70"
                      onClick={onNavClick}
                    >
                      {item.label}
                    </Link>
                  )
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

