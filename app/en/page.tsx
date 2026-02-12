import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'PHANTOM PROTOCOL | Undetected VALORANT Cheats - Aimbot, Wallhack, ESP 2025',
  description: 'Phantom Protocol: The best VALORANT cheats 2025. Predictive aimbot with 99.7% accuracy, Wallhack, advanced ESP. 100% undetected by Vanguard. 10K+ active users.',
  keywords: 'valorant cheats, valorant hacks, valorant aimbot, valorant wallhack, valorant esp, undetected valorant cheat, buy valorant cheats, valorant hack 2025, best valorant cheat',
  alternates: {
    languages: {
      'es': 'https://phantom-protocol.vercel.app/',
      'en': 'https://phantom-protocol.vercel.app/en',
      'pt': 'https://phantom-protocol.vercel.app/pt',
    }
  },
  openGraph: {
    title: 'PHANTOM PROTOCOL | Undetected VALORANT Cheats 2025',
    description: 'Best VALORANT cheats: Predictive Aimbot, Wallhack, ESP. 100% undetected by Vanguard. 10K+ active users.',
    type: 'website',
    locale: 'en_US',
  },
}

const features = [
  { icon: '🎯', title: 'Predictive Aimbot', desc: '99.7% accuracy with AI-powered prediction. Humanized movements, dynamic FOV, variable delay. Undetectable by any anti-cheat.' },
  { icon: '👁️', title: 'Smart Wallhack', desc: '360° vision through all surfaces. Color-coded health indicators. See every enemy position in real-time.' },
  { icon: '📊', title: 'Advanced ESP', desc: '12+ data points: health bars, distance, weapons, radar, trajectory lines, skeleton view, proximity alerts and more.' },
  { icon: '🧠', title: 'Adaptive AI', desc: 'Machine learning engine that adapts to your playstyle. Anti-detection behavioral monitoring for maximum safety.' },
  { icon: '⚡', title: 'Auto-Update Engine', desc: 'Automatic updates within 2 hours of every Valorant patch. Never be unprotected after a game update.' },
  { icon: '🛡️', title: 'Vanguard Bypass', desc: 'Kernel-level bypass with HWID spoofing included. 0 bans reported across 10,000+ active users.' },
]

const plans = [
  { name: 'STARTER', price: '15', period: '1 Week', features: ['Aimbot', 'Basic ESP', 'Auto-Updates', 'Discord Support'] },
  { name: 'PRO', price: '30', period: '1 Month', popular: true, features: ['Aimbot + Wallhack', 'Full ESP (12+ data)', 'Priority Updates', '24/7 Support', 'Config Profiles'] },
  { name: 'ELITE', price: '85', period: '3 Months', features: ['All Features', 'IA Adaptive', 'HWID Spoofer', 'VIP Support', 'Custom Configs', 'Beta Access'] },
  { name: 'LIFETIME', price: '200', period: 'Forever', features: ['Everything in ELITE', 'Lifetime Updates', 'Lifetime Support', 'All Future Features', 'Priority Queue'] },
]

const stats = [
  { value: '10,847+', label: 'Active Users' },
  { value: '99.7%', label: 'Aimbot Accuracy' },
  { value: '0', label: 'Bans Reported' },
  { value: '<2h', label: 'Update Speed' },
]

export default function EnglishPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F0EBE3]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/en" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF4655] to-[#C850C0] flex items-center justify-center text-sm font-black text-white" style={{ clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)' }}>P</div>
            <div>
              <div className="font-display font-black text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FF4655] to-[#C850C0]">PHANTOM</div>
              <div className="text-[8px] font-display font-bold text-[#F0EBE3]/40 tracking-[0.25em]">PROTOCOL</div>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1 text-xs font-mono text-[#F0EBE3]/40">
              <Link href="/" className="px-2 py-1 hover:text-[#FF4655] transition-colors">ES</Link>
              <span className="text-[#FF4655] font-bold px-2 py-1 bg-[#FF4655]/10 rounded">EN</span>
              <Link href="/pt" className="px-2 py-1 hover:text-[#FF4655] transition-colors">PT</Link>
            </div>
            <a href="#pricing" className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#FF4655] to-[#C850C0] text-white font-display font-bold text-sm hover:opacity-90 transition-opacity">
              Get Access
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="font-mono text-xs sm:text-sm text-[#FF4655] tracking-[0.3em] uppercase mb-6">
          UNDETECTED SINCE 2023 • 10,000+ USERS
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4655] via-[#C850C0] to-[#FFD700]">
            Professional-Grade
          </span>
          <br />
          <span className="text-[#F0EBE3]">VALORANT Cheats</span>
        </h1>
        <p className="text-lg sm:text-xl text-[#F0EBE3]/50 max-w-2xl mx-auto mb-10">
          Predictive Aimbot • 360° Wallhack • Advanced ESP • 100% Undetected by Vanguard
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#FF4655] to-[#C850C0] text-white font-display font-black text-lg hover:opacity-90 transition-opacity">
            Get Phantom Protocol
          </a>
          <a href="#features" className="px-10 py-5 rounded-2xl border border-white/10 text-[#F0EBE3]/70 font-display font-bold text-lg hover:border-[#FF4655]/40 transition-colors">
            See Features
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="p-6 rounded-2xl bg-[#12121E]/50 border border-white/5">
              <div className="text-2xl sm:text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF4655] to-[#C850C0]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[#F0EBE3]/40 font-mono mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-[#FF4655] tracking-[0.3em] uppercase mb-4">ELITE FEATURES</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4655] to-[#FFD700]">
              Dominate
            </span>
            {' '}
            <span className="text-[#F0EBE3]">Every Match</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-8 rounded-2xl bg-gradient-to-br from-[#12121E] to-[#0A0A0F] border border-white/5 hover:border-[#FF4655]/30 transition-all duration-300 group">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-display font-bold text-[#F0EBE3] mb-3 group-hover:text-[#FF4655] transition-colors">{f.title}</h3>
              <p className="text-sm text-[#F0EBE3]/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-[#FF4655] tracking-[0.3em] uppercase mb-4">PRICING</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-[#F0EBE3]">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4655] to-[#FFD700]">Advantage</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl bg-gradient-to-br from-[#12121E] to-[#0A0A0F] border ${plan.popular ? 'border-[#FF4655]/50 scale-105' : 'border-white/5'} hover:border-[#FF4655]/40 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#FF4655] to-[#C850C0] text-xs font-bold text-white">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-lg font-display font-black text-[#F0EBE3] mb-2">{plan.name}</h3>
              <div className="mb-1">
                <span className="text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF4655] to-[#C850C0]">€{plan.price}</span>
              </div>
              <p className="text-sm text-[#F0EBE3]/40 font-mono mb-6">{plan.period}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-[#F0EBE3]/60 flex items-center gap-2">
                    <span className="text-[#FF4655] text-xs">▸</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/#pricing"
                className={`block text-center py-3 rounded-xl font-display font-bold text-sm ${plan.popular ? 'bg-gradient-to-r from-[#FF4655] to-[#C850C0] text-white' : 'border border-[#FF4655]/30 text-[#FF4655] hover:bg-[#FF4655]/10'} transition-all`}
              >
                Get Access
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ for SEO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-display font-black text-[#F0EBE3] text-center mb-12">
          Frequently Asked Questions
        </h2>
        {[
          { q: 'Is Phantom Protocol undetected by Vanguard?', a: 'Yes, Phantom Protocol is 100% undetected by Riot Vanguard. Our kernel-level bypass updates automatically within 2 hours of every patch. 0 bans reported across 10,000+ users.' },
          { q: 'What features are included?', a: 'Phantom Protocol includes a predictive aimbot (99.7% accuracy), smart wallhack with 360° vision, advanced ESP with 12+ data points, adaptive AI, auto-update engine, HWID spoofer, and 24/7 premium support.' },
          { q: 'How do I purchase?', a: 'Purchase securely with Ethereum (ETH) for maximum privacy. Plans start at just €15/week. After payment, you receive instant access to the loader and configuration support.' },
          { q: 'Will I get banned?', a: 'Phantom Protocol has maintained a perfect record of 0 bans since launch. Our multi-layered protection includes kernel bypass, HWID spoofing, polymorphic signatures, and behavioral anti-detection.' },
        ].map((faq) => (
          <div key={faq.q} className="mb-8 p-6 rounded-2xl bg-[#12121E]/50 border border-white/5">
            <h3 className="font-display font-bold text-lg text-[#F0EBE3] mb-3">{faq.q}</h3>
            <p className="text-sm text-[#F0EBE3]/50 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F0EBE3]/30 font-mono">
          <span>© 2025 Phantom Protocol. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-[#FF4655] transition-colors">Español</Link>
            <Link href="/en" className="hover:text-[#FF4655] transition-colors text-[#FF4655]">English</Link>
            <Link href="/pt" className="hover:text-[#FF4655] transition-colors">Português</Link>
            <Link href="/blog" className="hover:text-[#FF4655] transition-colors">Blog</Link>
          </div>
        </div>
      </footer>

      {/* Schema.org */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Phantom Protocol - VALORANT Cheats",
        "description": "Best VALORANT cheats 2025. Predictive aimbot, wallhack, ESP. 100% undetected by Vanguard.",
        "applicationCategory": "GameApplication",
        "operatingSystem": "Windows 10, Windows 11",
        "offers": { "@type": "AggregateOffer", "lowPrice": "15", "highPrice": "200", "priceCurrency": "EUR" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "10247" },
        "inLanguage": "en"
      })}} />
    </div>
  )
}
