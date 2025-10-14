import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PHANTOM PROTOCOL - Cheats VALORANT Undetectables 2025',
  description: 'Domina VALORANT con Phantom Protocol. Aimbot, Wallhack y ESP con IA adaptativa. Usado por +10,000 pros en torneos.',
  keywords: 'VALORANT cheats, undetected aimbot, ESP hack 2025, best cheats for VALORANT, phantom protocol, valorant hacks',
  robots: 'noindex, nofollow', // Importante para contenido ficticio
  openGraph: {
    title: 'PHANTOM PROTOCOL - Cheats VALORANT Undetectables',
    description: 'Aimbot, Wallhack y ESP con IA adaptativa. Solo 47 licencias disponibles.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Phantom Protocol",
            "description": "Cheats avanzados para VALORANT",
            "applicationCategory": "GameApplication",
            "operatingSystem": "Windows",
            "offers": {
              "@type": "Offer",
              "price": "99.99",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </head>
      <body className={`${inter.className} bg-dark-bg text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}