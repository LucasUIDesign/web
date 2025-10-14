import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PHANTOM PROTOCOL - #1 VALORANT Cheats Undetected 2025 | VGC Bypass',
  description: 'El cheat más seguro del mercado. Bypass completo de Vanguard y VGC. Aimbot, Wallhack, ESP. 0 bans reportados. Usado por +10,000 pros. Desde €15.',
  keywords: 'VALORANT cheats, undetected aimbot, ESP hack 2025, best cheats for VALORANT, phantom protocol, valorant hacks, vanguard bypass, VGC bypass, valorant cheats undetected, valorant aimbot 2025, valorant wallhack, valorant esp, cheats valorant, hacks valorant, valorant cheat engine, valorant hack download, valorant cheats free, valorant private cheats',
  robots: 'index, follow',
  openGraph: {
    title: 'PHANTOM PROTOCOL - #1 VALORANT Cheats Undetected 2025',
    description: 'El cheat más seguro del mercado. Bypass completo de Vanguard y VGC. 0 bans reportados.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Phantom Protocol',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PHANTOM PROTOCOL - VALORANT Cheats',
    description: 'El cheat más seguro del mercado. VGC Bypass completo.',
  },
  alternates: {
    canonical: 'https://phantom-protocol.vercel.app',
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
            "description": "El cheat más seguro del mercado para VALORANT. Bypass completo de Vanguard y VGC. 0 bans reportados.",
            "applicationCategory": "GameApplication",
            "operatingSystem": "Windows",
            "offers": [
              {
                "@type": "Offer",
                "name": "7 Days Plan",
                "price": "15",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "name": "Monthly VIP",
                "price": "30",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "name": "Yearly VIP",
                "price": "90",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "name": "Lifetime VIP",
                "price": "200",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/LimitedAvailability"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "10247",
              "bestRating": "5"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Phantom Protocol",
            "description": "Proveedor líder de cheats indetectables para VALORANT",
            "url": "https://phantom-protocol.vercel.app",
            "logo": "https://phantom-protocol.vercel.app/logo.png",
            "sameAs": [
              "https://discord.gg/phantomprotocol",
              "https://t.me/phantomprotocol"
            ]
          })}
        </script>
      </head>
      <body className={`${inter.className} bg-dark-bg text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}