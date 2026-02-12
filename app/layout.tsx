import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://phantom-protocol.vercel.app'),
  title: {
    default: 'PHANTOM PROTOCOL | Cheats VALORANT Indetectables - Aimbot, Wallhack, ESP 2025',
    template: '%s | Phantom Protocol - VALORANT Cheats',
  },
  description: 'Phantom Protocol: Los mejores cheats para VALORANT 2025. Aimbot predictivo con 99.7% precisión, Wallhack, ESP avanzado, sistema 100% indetectable por Vanguard. Actualizaciones automáticas y soporte 24/7. Únete a +10.000 usuarios.',
  keywords: 'valorant cheats, valorant hacks, valorant aimbot, valorant wallhack, valorant esp, phantom protocol, cheats valorant 2025, hack valorant indetectable, aimbot valorant, wallhack valorant, esp valorant, valorant cheat comprar, valorant hack español, cheats para valorant, hacks valorant gratis, valorant undetected cheat, valorant bypass vanguard, mejores cheats valorant',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'PHANTOM PROTOCOL | Cheats VALORANT Indetectables 2025',
    description: 'Los mejores cheats para VALORANT: Aimbot predictivo, Wallhack, ESP. 100% indetectable por Vanguard. +10K usuarios activos.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Phantom Protocol',
    url: 'https://phantom-protocol.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PHANTOM PROTOCOL | Cheats VALORANT 2025',
    description: 'Aimbot, Wallhack, ESP para VALORANT. Indetectable por Vanguard. +10K usuarios.',
  },
  alternates: {
    canonical: 'https://phantom-protocol.vercel.app',
  },
  verification: {
    google: 'AW-17939195414',
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
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Phantom Protocol - VALORANT Cheats",
            "description": "Los mejores cheats para VALORANT 2025. Aimbot predictivo con 99.7% de precisión, Wallhack inteligente, ESP avanzado. 100% indetectable por Vanguard. Actualizaciones automáticas con cada parche.",
            "applicationCategory": "GameApplication",
            "operatingSystem": "Windows 10, Windows 11",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "15",
              "highPrice": "200",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
              "offerCount": "4"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "10247",
              "bestRating": "5"
            },
            "author": {
              "@type": "Organization",
              "name": "Phantom Protocol Team"
            },
            "datePublished": "2025-01-01",
            "softwareVersion": "4.3",
            "featureList": "Aimbot predictivo 99.7%, Wallhack inteligente, ESP avanzado, IA adaptativa, Auto-update engine, Bypass Vanguard, Soporte 24/7"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Phantom Protocol",
            "description": "Phantom Protocol: Cheats premium indetectables para VALORANT. Aimbot, Wallhack, ESP y más. La herramienta #1 de los gamers competitivos.",
            "url": "https://phantom-protocol.vercel.app",
            "logo": "https://phantom-protocol.vercel.app/logo.png",
            "sameAs": [
              "https://discord.gg/phantomprotocol",
              "https://t.me/phantomprotocol"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Support",
              "availableLanguage": ["Spanish", "English"]
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Phantom Protocol es indetectable en VALORANT?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, Phantom Protocol es 100% indetectable por Vanguard. Nuestro sistema se actualiza automáticamente con cada parche para mantener la máxima seguridad. 0 bans reportados."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué incluye Phantom Protocol?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Incluye Aimbot predictivo con 99.7% de precisión, Wallhack inteligente con visión 360°, ESP avanzado con 12+ data points, IA adaptativa, auto-update engine y soporte premium 24/7."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cómo compro Phantom Protocol?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Puedes comprar Phantom Protocol con Ethereum (ETH). Ofrecemos planes desde 15€ hasta 200€ con diferentes duraciones y características. El proceso es seguro y anónimo."
                }
              }
            ]
          })}
        </script>
      </head>
      <body className={`${inter.className} bg-dark-bg text-white overflow-x-hidden`}>
        <a href="#main-content" className="skip-link">Saltar al contenido</a>
        {/* Google Ads (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17939195414"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17939195414');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}