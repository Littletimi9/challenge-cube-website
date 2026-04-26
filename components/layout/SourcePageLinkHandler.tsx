'use client'

import { useEffect } from 'react'

function isSourcePageLink(url: URL) {
  return url.origin === window.location.origin && url.pathname.startsWith('/bronnen/')
}

export default function SourcePageLinkHandler() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const target = event.target

      if (!(target instanceof Element)) return

      const anchor = target.closest('a[href]')

      if (!(anchor instanceof HTMLAnchorElement)) return

      const url = new URL(anchor.href, window.location.href)

      if (!isSourcePageLink(url)) return
      if (url.pathname === window.location.pathname) return

      event.preventDefault()
      window.open(url.toString(), '_blank', 'noopener,noreferrer')
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return null
}
