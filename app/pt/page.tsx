import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'PHANTOM PROTOCOL | Cheats VALORANT Indetectáveis - Aimbot, Wallhack, ESP 2025',
  description: 'Phantom Protocol: Os melhores cheats para VALORANT 2025. Aimbot preditivo com 99.7% de precisão, Wallhack, ESP avançado. 100% indetectável pelo Vanguard. +10K usuários.',
  keywords: 'valorant cheats, valorant hacks, aimbot valorant, wallhack valorant, esp valorant, cheats valorant 2025, hack valorant indetectável, comprar cheats valorant, hacks para valorant, valorant hack brasileiro',
  alternates: {
    languages: {
      'es': 'https://phantom-protocol.vercel.app/',
      'en': 'https://phantom-protocol.vercel.app/en',
      'pt': 'https://phantom-protocol.vercel.app/pt',
    }
  },
  openGraph: {
    title: 'PHANTOM PROTOCOL | Cheats VALORANT Indetectáveis 2025',
    description: 'Melhores cheats VALORANT: Aimbot preditivo, Wallhack, ESP. 100% indetectável pelo Vanguard. +10K usuários.',
    type: 'website',
    locale: 'pt_BR',
  },
}

const features = [
  { icon: '🎯', title: 'Aimbot Preditivo', desc: '99.7% de precisão com IA preditiva. Movimentos humanizados, FOV dinâmico, delay variável. Indetectável por qualquer anti-cheat.' },
  { icon: '👁️', title: 'Wallhack Inteligente', desc: 'Visão 360° através de todas as superfícies. Indicadores de vida codificados por cor. Veja cada posição inimiga em tempo real.' },
  { icon: '📊', title: 'ESP Avançado', desc: '12+ data points: barras de vida, distância, armas, radar, linhas de trajetória, visão de esqueleto, alertas de proximidade e mais.' },
  { icon: '🧠', title: 'IA Adaptativa', desc: 'Motor de machine learning que se adapta ao seu estilo de jogo. Monitoramento comportamental anti-detecção para máxima segurança.' },
  { icon: '⚡', title: 'Auto-Update Engine', desc: 'Atualizações automáticas em menos de 2 horas após cada patch do Valorant. Nunca fique desprotegido.' },
  { icon: '🛡️', title: 'Bypass Vanguard', desc: 'Bypass kernel-level com HWID spoofing incluído. 0 bans reportados em mais de 10.000 usuários ativos.' },
]

const plans = [
  { name: 'STARTER', price: '15', period: '1 Semana', features: ['Aimbot', 'ESP Básico', 'Auto-Updates', 'Suporte Discord'] },
  { name: 'PRO', price: '30', period: '1 Mês', popular: true, features: ['Aimbot + Wallhack', 'ESP Completo (12+ dados)', 'Updates Prioritários', 'Suporte 24/7', 'Perfis de Config'] },
  { name: 'ELITE', price: '85', period: '3 Meses', features: ['Todas as Features', 'IA Adaptativa', 'HWID Spoofer', 'Suporte VIP', 'Configs Personalizadas', 'Acesso Beta'] },
  { name: 'LIFETIME', price: '200', period: 'Para Sempre', features: ['Tudo do ELITE', 'Updates Vitalícios', 'Suporte Vitalício', 'Todas as Features Futuras', 'Fila Prioritária'] },
]

const stats = [
  { value: '10.847+', label: 'Usuários Ativos' },
  { value: '99.7%', label: 'Precisão Aimbot' },
  { value: '0', label: 'Bans Reportados' },
  { value: '<2h', label: 'Velocidade Update' },
]

export default function PortuguesePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F0EBE3]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/pt" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF4655] to-[#C850C0] flex items-center justify-center text-sm font-black text-white" style={{ clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)' }}>P</div>
            <div>
              <div className="font-display font-black text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FF4655] to-[#C850C0]">PHANTOM</div>
              <div className="text-[8px] font-display font-bold text-[#F0EBE3]/40 tracking-[0.25em]">PROTOCOL</div>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1 text-xs font-mono text-[#F0EBE3]/40">
              <Link href="/" className="px-2 py-1 hover:text-[#FF4655] transition-colors">ES</Link>
              <Link href="/en" className="px-2 py-1 hover:text-[#FF4655] transition-colors">EN</Link>
              <span className="text-[#FF4655] font-bold px-2 py-1 bg-[#FF4655]/10 rounded">PT</span>
            </div>
            <a href="#pricing" className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#FF4655] to-[#C850C0] text-white font-display font-bold text-sm hover:opacity-90 transition-opacity">
              Obter Acesso
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="font-mono text-xs sm:text-sm text-[#FF4655] tracking-[0.3em] uppercase mb-6">
          INDETECTÁVEL DESDE 2023 • 10.000+ USUÁRIOS
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4655] via-[#C850C0] to-[#FFD700]">
            Cheats Profissionais
          </span>
          <br />
          <span className="text-[#F0EBE3]">para VALORANT</span>
        </h1>
        <p className="text-lg sm:text-xl text-[#F0EBE3]/50 max-w-2xl mx-auto mb-10">
          Aimbot Preditivo • Wallhack 360° • ESP Avançado • 100% Indetectável pelo Vanguard
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#FF4655] to-[#C850C0] text-white font-display font-black text-lg hover:opacity-90 transition-opacity">
            Obter Phantom Protocol
          </a>
          <a href="#features" className="px-10 py-5 rounded-2xl border border-white/10 text-[#F0EBE3]/70 font-display font-bold text-lg hover:border-[#FF4655]/40 transition-colors">
            Ver Funcionalidades
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
          <p className="font-mono text-xs text-[#FF4655] tracking-[0.3em] uppercase mb-4">FUNCIONALIDADES ELITE</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4655] to-[#FFD700]">
              Domine
            </span>
            {' '}
            <span className="text-[#F0EBE3]">Cada Partida</span>
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
          <p className="font-mono text-xs text-[#FF4655] tracking-[0.3em] uppercase mb-4">PREÇOS</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-[#F0EBE3]">
            Escolha Sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4655] to-[#FFD700]">Vantagem</span>
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
                  MAIS POPULAR
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
                Obter Acesso
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ for SEO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-display font-black text-[#F0EBE3] text-center mb-12">
          Perguntas Frequentes
        </h2>
        {[
          { q: 'O Phantom Protocol é indetectável pelo Vanguard?', a: 'Sim, o Phantom Protocol é 100% indetectável pelo Riot Vanguard. Nosso bypass kernel-level se atualiza automaticamente em menos de 2 horas após cada patch. 0 bans reportados em mais de 10.000 usuários.' },
          { q: 'O que está incluído?', a: 'O Phantom Protocol inclui aimbot preditivo (99.7% de precisão), wallhack inteligente com visão 360°, ESP avançado com 12+ data points, IA adaptativa, auto-update engine, HWID spoofer e suporte premium 24/7.' },
          { q: 'Como eu compro?', a: 'Compre de forma segura com Ethereum (ETH) para máxima privacidade. Planos a partir de apenas €15/semana. Após o pagamento, você recebe acesso instantâneo ao loader e suporte de configuração.' },
          { q: 'Vou ser banido?', a: 'O Phantom Protocol mantém um registro perfeito de 0 bans desde o lançamento. Nossa proteção multicamadas inclui bypass kernel, HWID spoofing, assinaturas polimórficas e anti-detecção comportamental.' },
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
          <span>© 2025 Phantom Protocol. Todos os direitos reservados.</span>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-[#FF4655] transition-colors">Español</Link>
            <Link href="/en" className="hover:text-[#FF4655] transition-colors">English</Link>
            <Link href="/pt" className="hover:text-[#FF4655] transition-colors text-[#FF4655]">Português</Link>
            <Link href="/blog" className="hover:text-[#FF4655] transition-colors">Blog</Link>
          </div>
        </div>
      </footer>

      {/* Schema.org */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Phantom Protocol - Cheats VALORANT",
        "description": "Os melhores cheats para VALORANT 2025. Aimbot preditivo, wallhack, ESP. 100% indetectável pelo Vanguard.",
        "applicationCategory": "GameApplication",
        "operatingSystem": "Windows 10, Windows 11",
        "offers": { "@type": "AggregateOffer", "lowPrice": "15", "highPrice": "200", "priceCurrency": "EUR" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "10247" },
        "inLanguage": "pt-BR"
      })}} />
    </div>
  )
}
