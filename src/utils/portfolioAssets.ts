export function getPortfolioSiteRootPath() {
  // Kept for backward compatibility, but not used for URL generation anymore.
  const pathname = window.location.pathname || '/'
  const normalized = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  return normalized.replace(/\/contacts$/, '') || '/'
}

export function portfolioAssetUrl(filename: string) {
  // Build the URL relative to the current document location.
  // This stays correct for both:
  // - `https://username.github.io/<repo>/` (project site)
  // - `https://username.github.io/` (user site)
  // and for SPA routes like `/contacts`.
  const resolved = new URL(`portfolio/${filename}`, document.baseURI)
  return resolved.toString()
}

