import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PHANTOM PROTOCOL - Software de Entrenamiento Avanzado para VALORANT 2025',
  description: 'Herramienta profesional de práctica y análisis para mejorar tu rendimiento en VALORANT. Incluye asistencia de puntería, visión táctica y estadísticas avanzadas. Usado por miles de jugadores competitivos.',
  keywords: 'VALORANT training software, aim trainer, game performance, competitive gaming tools, valorant practice tool, aim assistant, tactical overlay, game analysis, valorant coaching software, performance enhancement, esports training, valorant improvement tool',
  robots: 'index, follow',
  openGraph: {
    title: 'PHANTOM PROTOCOL - Software de Entrenamiento para VALORANT',
    description: 'Herramienta profesional de entrenamiento y análisis. Mejora tu rendimiento con asistencia táctica avanzada.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Phantom Protocol',
    url: 'https://phantom-protocol.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PHANTOM PROTOCOL - Entrenamiento VALORANT',
    description: 'Software profesional de entrenamiento y análisis para jugadores competitivos.',
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
            "name": "Phantom Protocol",
            "description": "Software profesional de entrenamiento y análisis de rendimiento para VALORANT. Herramienta de práctica con asistencia de puntería, visión táctica y estadísticas avanzadas.",
            "applicationCategory": "GameApplication",
            "operatingSystem": "Windows",
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
            "softwareVersion": "2.0",
            "featureList": "Asistencia de puntería avanzada, Overlay táctico, Análisis de rendimiento, Estadísticas en tiempo real, Soporte 24/7"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Phantom Protocol",
            "description": "Desarrolladores de software de entrenamiento profesional para jugadores competitivos de VALORANT",
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