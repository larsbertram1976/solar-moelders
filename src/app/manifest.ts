import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mölders Solar — Balkonkraftwerk',
    short_name: 'Mölders Solar',
    description:
      'Bis 800 W eigener Sonnenstrom mit dem Balkonkraftwerk von Mölders. Beratung, Lieferung und Montage in Norddeutschland.',
    lang: 'de',
    dir: 'ltr',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#E2001A',
    icons: [
      {
        src: '/Moelders-logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
