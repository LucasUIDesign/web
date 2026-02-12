import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Guías VALORANT Cheats - Aimbot, Wallhack, ESP, Bypass Vanguard',
  description: 'Guías completas sobre cheats para VALORANT 2025. Aprende sobre Aimbot, Wallhack, ESP, bypass de Vanguard y más. Artículos actualizados por expertos.',
  keywords: 'valorant cheats blog, guia aimbot valorant, wallhack valorant 2025, esp valorant, bypass vanguard, cheats indetectables valorant',
  openGraph: {
    title: 'Blog Phantom Protocol - Guías VALORANT Cheats',
    description: 'Artículos y guías sobre cheats para VALORANT. Aimbot, Wallhack, ESP y más.',
    type: 'website',
  },
}

const articles = [
  {
    slug: 'mejores-cheats-valorant-2025',
    title: 'Los Mejores Cheats para VALORANT en 2025: Guía Definitiva',
    excerpt: 'Análisis completo de los cheats más avanzados e indetectables para VALORANT. Comparativa de aimbot, wallhack, ESP y más herramientas que dominan el meta actual.',
    date: '2025-02-10',
    readTime: '8 min',
    category: 'Guía',
    image: '🎯',
  },
  {
    slug: 'como-funciona-aimbot-valorant',
    title: 'Cómo Funciona un Aimbot en VALORANT: Tecnología Detrás del 99.7% de Precisión',
    excerpt: 'Descubre la tecnología de IA predictiva detrás de los aimbots modernos. Cómo logran 99.7% de precisión sin ser detectados por Vanguard.',
    date: '2025-02-08',
    readTime: '10 min',
    category: 'Tecnología',
    image: '🤖',
  },
  {
    slug: 'wallhack-valorant-guia-completa',
    title: 'Wallhack VALORANT 2025: Guía Completa - Cómo Ver a Través de las Paredes',
    excerpt: 'Todo sobre wallhack en VALORANT. Tipos de wallhack, cómo funcionan, tecnología de renderizado y por qué los mejores son indetectables por el anti-cheat.',
    date: '2025-02-05',
    readTime: '9 min',
    category: 'Guía',
    image: '👁️',
  },
  {
    slug: 'bypass-vanguard-2025',
    title: 'Bypass Vanguard 2025: Cómo los Cheats Modernos Evitan la Detección',
    excerpt: 'Análisis técnico de cómo los cheats premium logran evadir Riot Vanguard. Técnicas de kernel-level bypass, HWID spoofing y más.',
    date: '2025-02-01',
    readTime: '12 min',
    category: 'Técnico',
    image: '🛡️',
  },
  {
    slug: 'esp-valorant-ventaja-competitiva',
    title: 'ESP en VALORANT: La Ventaja Competitiva que Cambia el Juego',
    excerpt: 'Qué es el ESP, qué información muestra, cómo te da ventaja táctica total. Health bars, distancia, armas, radar y más data points en tiempo real.',
    date: '2025-01-28',
    readTime: '7 min',
    category: 'Guía',
    image: '📊',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F0EBE3]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF4655] to-[#C850C0] flex items-center justify-center text-sm font-black text-white">
              P
            </div>
            <span className="font-display font-bold text-lg text-[#F0EBE3]">PHANTOM</span>
          </Link>
          <Link
            href="/#pricing"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#FF4655] to-[#C850C0] text-white font-display font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Obtener Acceso
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-xs sm:text-sm text-[#FF4655] tracking-[0.3em] uppercase mb-4">
            PHANTOM PROTOCOL BLOG
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black leading-[0.95] mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4655] via-[#C850C0] to-[#FFD700]">
              Guías &amp; Artículos
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[#F0EBE3]/60 max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre cheats para VALORANT. Guías técnicas, tutoriales y análisis actualizados.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group relative bg-gradient-to-br from-[#12121E] to-[#0A0A0F] rounded-2xl border border-white/5 hover:border-[#FF4655]/40 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF4655]/10 overflow-hidden"
            >
              {/* Category badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FF4655]/10 text-[#FF4655] border border-[#FF4655]/20">
                  {article.category}
                </span>
              </div>

              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#141420] to-[#0A0A0F] flex items-center justify-center text-6xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121E] to-transparent" />
                <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {article.image}
                </span>
                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: 'linear-gradient(rgba(255,70,85,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,70,85,0.5) 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }} />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-lg sm:text-xl font-display font-bold text-[#F0EBE3] mb-3 group-hover:text-[#FF4655] transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-sm text-[#F0EBE3]/50 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-[#F0EBE3]/30 font-mono">
                  <span>{article.date}</span>
                  <span>{article.readTime} lectura</span>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-[2px] bg-gradient-to-r from-transparent via-[#FF4655]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#12121E] to-[#0A0A0F] border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF4655]/5 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-display font-black text-[#F0EBE3] mb-4">
                ¿Listo para <span className="text-[#FF4655]">Dominar</span>?
              </h2>
              <p className="text-[#F0EBE3]/50 mb-6">
                Únete a más de 10,000 usuarios que ya usan Phantom Protocol para dominar en VALORANT.
              </p>
              <Link
                href="/#pricing"
                className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF4655] to-[#C850C0] text-white font-display font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Ver Planes y Precios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-4 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F0EBE3]/30 font-mono">
          <span>© 2025 Phantom Protocol. Todos los derechos reservados.</span>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-[#FF4655] transition-colors">Inicio</Link>
            <Link href="/blog" className="hover:text-[#FF4655] transition-colors">Blog</Link>
            <Link href="/support" className="hover:text-[#FF4655] transition-colors">Soporte</Link>
          </div>
        </div>
      </footer>

      {/* Schema.org for Blog */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Phantom Protocol Blog",
        "description": "Guías y artículos sobre cheats para VALORANT. Aimbot, Wallhack, ESP y más.",
        "url": "https://phantom-protocol.vercel.app/blog",
        "publisher": {
          "@type": "Organization",
          "name": "Phantom Protocol",
          "url": "https://phantom-protocol.vercel.app"
        },
        "blogPost": articles.map(a => ({
          "@type": "BlogPosting",
          "headline": a.title,
          "description": a.excerpt,
          "datePublished": a.date,
          "url": `https://phantom-protocol.vercel.app/blog/${a.slug}`,
          "author": {
            "@type": "Organization",
            "name": "Phantom Protocol Team"
          }
        }))
      })}} />
    </div>
  )
}
