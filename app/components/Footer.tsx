'use client'

import { motion } from 'framer-motion'
import Logo from './Logo'
import { translations, t, type Lang } from '../translations'

interface FooterProps {
  lang?: Lang
}

export default function Footer({ lang = 'es' }: FooterProps) {
  return (
    <footer id="footer" className="relative py-12 sm:py-16 px-4 sm:px-6 border-t border-accent/10 bg-gradient-to-b from-primary to-dark overflow-hidden">
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-accent/5 blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10 sm:mb-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo size="small" />
            <p className="text-light/40 text-sm mt-4 leading-relaxed max-w-xs">
              {t(translations.footer.description, lang)}
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-light font-display font-bold text-sm mb-4 tracking-wider uppercase">{t(translations.footer.products, lang)}</h3>
            <ul className="space-y-2.5">
              <li><a href="#features" className="text-light/40 hover:text-accent transition-colors text-sm">{t(translations.footer.characteristics, lang)}</a></li>
              <li><a href="#pricing" className="text-light/40 hover:text-accent transition-colors text-sm">{t(translations.footer.accessPlans, lang)}</a></li>
              <li><a href="#" className="text-light/40 hover:text-accent transition-colors text-sm">{t(translations.footer.documentation, lang)}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-light font-display font-bold text-sm mb-4 tracking-wider uppercase">{t(translations.footer.supportTitle, lang)}</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-light/40 hover:text-accent transition-colors text-sm">{t(translations.footer.helpCenter, lang)}</a></li>
              <li><a href="#" className="text-light/40 hover:text-accent transition-colors text-sm">{t(translations.footer.installGuides, lang)}</a></li>
              <li><a href="#" className="text-light/40 hover:text-accent transition-colors text-sm">{t(translations.footer.faq, lang)}</a></li>
              <li><a href="#" className="text-light/40 hover:text-accent transition-colors text-sm">{t(translations.footer.support247, lang)}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-light font-display font-bold text-sm mb-4 tracking-wider uppercase">{t(translations.footer.legal, lang)}</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-light/40 hover:text-accent transition-colors text-sm">{t(translations.footer.terms, lang)}</a></li>
              <li><a href="#" className="text-light/40 hover:text-accent transition-colors text-sm">{t(translations.footer.privacy, lang)}</a></li>
              <li><a href="#" className="text-light/40 hover:text-accent transition-colors text-sm">{t(translations.footer.refunds, lang)}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-accent/10">
          <p className="text-light/30 text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Phantom Protocol. All rights reserved.
          </p>
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="text-accent hover:text-highlight text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            whileHover={{ y: -2 }}
          >
            ↑ {t(translations.footer.backToTop, lang)}
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
