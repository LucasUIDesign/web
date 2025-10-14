# 👻 PHANTOM PROTOCOL - Landing Page Premium

![Phantom Protocol](https://img.shields.io/badge/Status-Online-success?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-ff69b4?style=for-the-badge)

Una landing page de nivel élite con animaciones avanzadas, efectos 3D y microinteracciones que demuestran las últimas técnicas de diseño UI/UX y desarrollo frontend.

## ✨ Características Destacadas

### � Disesño Visual Avanzado
- **Logo Animado Personalizado** con efectos de partículas y rotación
- **Cursor Personalizado** con efectos de glow y seguimiento suave
- **Loading Screen Épico** con barra de progreso y animaciones
- **Navbar Glassmorphism** con scroll effects y status indicator
- **Fondo Matrix Animado** con caracteres cayendo
- **Partículas Interactivas** con conexiones dinámicas

### 🎭 Microanimaciones Avanzadas
- **Cards con Hover Effects**: Glow, scale, rotate, shine
- **Botones Interactivos**: Pulse, particles, shine effects
- **Scroll Reveal Animations**: Elementos aparecen al hacer scroll
- **Floating Elements**: Partículas flotantes en cards
- **Glitch Effects**: Texto con efecto de distorsión
- **Gradient Animations**: Gradientes animados en bordes

### 🛍️ Sección de Precios (Estilo Necrum)
- **3 Planes**: Bronze, Gold, Platinum
- **Botones Duales**: "Buy Now" y "Bitcoin Payment"
- **Countdown Timer**: Urgencia con temporizador real
- **Progress Bar**: Barra de escasez animada
- **Hover Effects**: Cards con animaciones complejas
- **Shine Effects**: Efectos de brillo en hover

### 💳 Sistema de Pago Bitcoin
- **QR Code Dinámico**: Generado con Canvas API
- **Proceso Gamificado**: 3 pasos con animaciones
- **Progress Tracking**: Barra de progreso de transacción
- **Copy to Clipboard**: Copiar dirección BTC fácilmente

### 🎯 Optimizaciones
- **SEO Técnico**: Meta tags, Schema markup, Open Graph
- **Performance**: Lazy loading, code splitting
- **Responsive**: Mobile-first design
- **Accessibility**: ARIA labels, keyboard navigation

## 🚀 Instalación Rápida

### Opción 1: Instalación Automática (Windows)
```bash
# Ejecutar el instalador
install.bat
```

### Opción 2: Instalación Manual
```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Abrir http://localhost:3000
```

## 📦 Stack Tecnológico

```json
{
  "framework": "Next.js 14",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "animations": "Framer Motion",
  "3d": "Three.js + Canvas API",
  "fonts": "Orbitron, Rajdhani"
}
```

## 🎨 Componentes Principales

### 1. **Logo Component**
Logo animado con:
- Skull/Ghost SVG animado
- Partículas rotatorias
- Glow effects
- Responsive sizing

### 2. **Navbar**
Barra de navegación con:
- Glassmorphism effect
- Scroll-based background
- Status indicator animado
- Smooth scroll links

### 3. **Hero Section**
Sección principal con:
- Glitch text effect
- Partículas interactivas
- CTA con pulse animation
- Scroll indicator

### 4. **Bento Grid**
Grid de características con:
- 6 cards interactivas
- Demos animadas en hover
- Floating particles
- Corner accents

### 5. **Pricing Cards**
Cards de precios con:
- Animated borders
- Shine effects
- Hover transformations
- Dual payment buttons

### 6. **Custom Cursor**
Cursor personalizado con:
- Smooth following
- Hover detection
- Glow trail
- Mix-blend-mode

### 7. **Loading Screen**
Pantalla de carga con:
- Logo animation
- Progress bar
- Scan line effect
- Particle background

## 🎯 Microanimaciones Implementadas

| Elemento | Animación | Trigger |
|----------|-----------|---------|
| Logo | Rotate + Scale | Page Load |
| Cards | Hover + Glow | Mouse Enter |
| Buttons | Pulse + Shine | Hover |
| Text | Glitch Effect | Interval |
| Particles | Float + Connect | Always |
| Cursor | Follow + Glow | Mouse Move |
| Progress | Fill + Shimmer | Data Change |
| Stars | Scale + Rotate | Hover |

## 🎨 Paleta de Colores

```css
--neon-red: #FF2E2E
--neon-blue: #00D4FF
--neon-purple: #B026FF
--dark-bg: #0A0A0A
--dark-card: #1A1A1A
```

## 📱 Responsive Breakpoints

```css
mobile: 320px - 767px
tablet: 768px - 1023px
laptop: 1024px - 1919px
desktop: 1920px+
```

## 🔥 Características Únicas

1. **Cursor Personalizado**: Cursor con glow effect y detección de hover
2. **Loading Screen**: Pantalla de carga épica con animaciones
3. **Logo Animado**: Logo SVG completamente animado
4. **Microanimaciones**: Más de 50 animaciones diferentes
5. **Particle System**: Sistema de partículas con Canvas API
6. **Matrix Background**: Fondo estilo Matrix animado
7. **Glassmorphism**: Efectos de vidrio en navbar
8. **Shine Effects**: Efectos de brillo en botones y cards

## 🛠️ Scripts Disponibles

```bash
npm run dev      # Desarrollo
npm run build    # Producción
npm run start    # Servidor producción
npm run lint     # Linter
```

## 📈 Performance

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: 90+
- **Bundle Size**: Optimizado con code splitting

## 🎓 Aprendizajes Clave

Este proyecto demuestra:
- Animaciones complejas con Framer Motion
- Canvas API para efectos visuales
- TypeScript para type safety
- Tailwind CSS para styling rápido
- Next.js 14 con App Router
- Componentes reutilizables
- Custom hooks para lógica compartida
- Performance optimization

## 📄 Estructura del Proyecto

```
phantom-protocol/
├── app/
│   ├── components/
│   │   ├── Logo.tsx
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── BentoGrid.tsx
│   │   ├── PricingSection.tsx
│   │   ├── PaymentSection.tsx
│   │   ├── SocialProof.tsx
│   │   ├── Footer.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── MatrixBackground.tsx
│   │   ├── ParticleEffect.tsx
│   │   └── QRCode.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Deploy

### Vercel (Recomendado)
```bash
vercel deploy
```

### Netlify
```bash
netlify deploy --prod
```

## 💡 Tips de Desarrollo

1. **Animaciones**: Usa `viewport={{ once: true }}` para mejor performance
2. **Cursor**: Desactiva en mobile con media queries
3. **Particles**: Limita cantidad en dispositivos móviles
4. **Images**: Usa Next.js Image para optimización
5. **Fonts**: Preload fonts críticas

## 🎯 Próximas Mejoras

- [ ] Modo claro/oscuro
- [ ] Internacionalización (i18n)
- [ ] Dashboard de usuario
- [ ] Sistema de autenticación
- [ ] Integración con API real
- [ ] Tests unitarios
- [ ] Storybook para componentes

---

**Desarrollado con 💜 usando las últimas tecnologías web**

*Este proyecto es completamente ficticio y con fines educativos*