# 🎬 Especificaciones de Animaciones - Phantom Protocol

## 📊 Resumen de Animaciones

| Componente | Animaciones | Triggers | Duración |
|------------|-------------|----------|----------|
| Logo | 8 | Load, Hover | 0.5s - 4s |
| Cursor | 4 | Mouse Move, Hover | 0.2s - 2s |
| Loading | 6 | Page Load | 3-5s |
| Hero | 12 | Load, Hover, Interval | 0.3s - 3s |
| Cards | 15+ | Hover, Scroll | 0.3s - 2s |
| Buttons | 8 | Hover, Click | 0.2s - 0.6s |
| Particles | Continuo | Always | 2s - 4s |

**Total: 60+ animaciones únicas**

## 🎨 Animaciones por Componente

### 1. Logo Component

#### Animación de Entrada
```tsx
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
duration: 0.8s
```

#### Glow Pulsante
```tsx
animate={{
  textShadow: [
    '0 0 10px #FF2E2E',
    '0 0 20px #FF2E2E, 0 0 30px #FF2E2E',
    '0 0 10px #FF2E2E'
  ]
}}
duration: 2s
repeat: Infinity
```

#### Anillo Rotatorio
```tsx
animate={{
  scale: [1, 1.2, 1],
  rotate: [0, 180, 360]
}}
duration: 4s
repeat: Infinity
```

#### Ojos Parpadeantes
```tsx
animate={{
  opacity: [1, 0.3, 1],
  scale: [1, 0.8, 1]
}}
duration: 2s
repeat: Infinity
```

#### Partículas Orbitales (x3)
```tsx
animate={{
  x: [0, cos(angle) * 35, 0],
  y: [0, sin(angle) * 35, 0],
  opacity: [0, 1, 0]
}}
duration: 3s
repeat: Infinity
delay: i * 0.3s
```

#### Hover Effect
```tsx
whileHover={{ 
  scale: 1.1, 
  rotate: 5 
}}
transition: spring(300)
```

### 2. Custom Cursor

#### Seguimiento Suave
```tsx
const springConfig = { 
  damping: 25, 
  stiffness: 700 
}
cursorXSpring = useSpring(cursorX, springConfig)
```

#### Círculo Principal
```tsx
animate={{
  scale: isHovering ? 1.5 : 1,
  borderColor: isHovering ? '#FF2E2E' : '#FFFFFF'
}}
duration: 0.2s
```

#### Punto Central
```tsx
animate={{
  scale: isHovering ? 0 : 1
}}
duration: 0.2s
```

#### Glow Trail
```tsx
blur: 2xl
opacity: 0.3
gradient: from-red-500 via-purple-500 to-blue-500
```

### 3. Loading Screen

#### Logo Entrada
```tsx
initial={{ scale: 0, rotate: -180 }}
animate={{ scale: 1, rotate: 0 }}
duration: 1s
type: "spring"
stiffness: 200
```

#### Texto Loading
```tsx
animate={{
  opacity: [1, 0.5, 1]
}}
duration: 1.5s
repeat: Infinity
```

#### Puntos Suspensivos
```tsx
animate={{
  opacity: [0, 1, 0]
}}
duration: 1s
repeat: Infinity
```

#### Progress Bar
```tsx
animate={{ 
  width: `${progress}%` 
}}
duration: 0.3s
```

#### Partículas (x20)
```tsx
animate={{
  y: [0, -100, 0],
  opacity: [0, 1, 0],
  scale: [0, 1.5, 0]
}}
duration: 2-4s (random)
repeat: Infinity
delay: random
```

#### Scan Line
```tsx
animate={{
  top: ['0%', '100%']
}}
duration: 2s
repeat: Infinity
ease: "linear"
```

### 4. Hero Section

#### Headline Glitch
```tsx
// Cada 3 segundos
setInterval(() => {
  // Reemplaza caracteres random
  glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
  // Restaura después de 100ms
}, 3000)
```

#### Subheadline Fade In
```tsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
delay: 0.5s
duration: 1s
```

#### Escasez Badge
```tsx
initial={{ scale: 0 }}
animate={{ scale: 1 }}
delay: 1s
type: "spring"
stiffness: 200
```

#### CTA Button Pulse
```tsx
animate={{
  opacity: [0.3, 0.6, 0.3],
  scale: [1, 1.05, 1]
}}
duration: 2s
repeat: Infinity
```

#### CTA Shine Effect
```tsx
initial={{ x: '-100%' }}
whileHover={{ x: '100%' }}
duration: 0.6s
```

#### CTA Partículas (x4)
```tsx
animate={{
  x: [0, cos(angle) * 60, 0],
  y: [0, sin(angle) * 60, 0],
  opacity: [0, 1, 0],
  scale: [0, 1.5, 0]
}}
duration: 2s
repeat: Infinity
delay: i * 0.2s
```

#### Usuarios Activos
```tsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
delay: 1.5s
```

#### Scroll Indicator
```tsx
animate={{ y: [0, 10, 0] }}
duration: 2s
repeat: Infinity
```

### 5. Bento Grid Cards

#### Card Entrada
```tsx
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
duration: 0.6s
delay: index * 0.1s
```

#### Card Hover
```tsx
whileHover={{ 
  scale: 1.05,
  rotate: [0, 1, -1, 0]
}}
duration: 0.3s
```

#### Glow Effect
```tsx
whileHover={{ opacity: 0.5 }}
blur: lg
gradient: from-red-500 via-purple-500 to-blue-500
```

#### Partículas Internas (x5)
```tsx
animate={{
  y: [-10, 10, -10],
  opacity: [0.2, 0.5, 0.2],
  scale: [1, 1.5, 1]
}}
duration: 2-4s (random)
repeat: Infinity
delay: random
```

#### Icon Hover
```tsx
whileHover={{ 
  scale: 1.2,
  rotate: [0, -10, 10, 0]
}}
duration: 0.5s
```

#### Shine Effect
```tsx
initial={{ x: '-100%', opacity: 0 }}
whileHover={{ x: '100%', opacity: 1 }}
duration: 0.6s
```

#### Corner Accent
```tsx
initial={{ scale: 0, opacity: 0 }}
whileHover={{ scale: 1, opacity: 1 }}
duration: 0.3s
```

### 6. Pricing Cards

#### Card Hover Lift
```tsx
whileHover={{ 
  y: -10
}}
duration: 0.3s
```

#### Popular Badge Pulse
```tsx
animate={{
  scale: [1, 1.05, 1],
  boxShadow: [
    '0 0 0px rgba(255, 46, 46, 0)',
    '0 0 20px rgba(255, 46, 46, 0.5)',
    '0 0 0px rgba(255, 46, 46, 0)'
  ]
}}
duration: 2s
repeat: Infinity
```

#### Animated Border
```tsx
whileHover={{ 
  opacity: 0.3, 
  rotate: 360 
}}
duration: 2s
ease: "linear"
```

#### Floating Particles (x3)
```tsx
animate={{
  y: [-10, 10, -10],
  x: [-5, 5, -5],
  opacity: [0.3, 0.7, 0.3]
}}
duration: 3-5s
repeat: Infinity
delay: i * 0.5s
```

#### Price Glow
```tsx
animate={{
  textShadow: [
    '0 0 5px rgba(255, 255, 255, 0.5)',
    '0 0 10px rgba(255, 255, 255, 0.8)',
    '0 0 5px rgba(255, 255, 255, 0.5)'
  ]
}}
duration: 2s
repeat: Infinity
```

#### Feature List Items
```tsx
initial={{ opacity: 0, x: -20 }}
whileInView={{ opacity: 1, x: 0 }}
delay: featureIndex * 0.1s
whileHover={{ x: 5, color: '#ffffff' }}
```

#### Checkmark Rotation
```tsx
whileHover={{ 
  scale: 1.2, 
  rotate: 360 
}}
duration: 0.5s
```

#### Buy Button Shine
```tsx
initial={{ x: '-100%' }}
whileHover={{ x: '100%' }}
duration: 0.6s
opacity: 0.3
```

#### Bitcoin Icon Wobble
```tsx
animate={{ 
  rotate: [0, 5, -5, 0] 
}}
duration: 2s
repeat: Infinity
```

### 7. Social Proof

#### Stats Counter
```tsx
key={activeUsers}
initial={{ scale: 1.2 }}
animate={{ scale: 1 }}
duration: 0.3s
```

#### Activity Rotation
```tsx
key={currentActivity}
initial={{ opacity: 0, x: 20 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: -20 }}
```

#### Testimonial Card Hover
```tsx
whileHover={{ 
  y: -5,
  boxShadow: '0 10px 30px rgba(176, 38, 255, 0.3)'
}}
```

#### Avatar Hover
```tsx
whileHover={{ 
  scale: 1.1, 
  rotate: 360 
}}
duration: 0.5s
```

#### Verified Badge Pulse
```tsx
animate={{ 
  scale: [1, 1.2, 1] 
}}
duration: 2s
repeat: Infinity
```

#### Stars Animation
```tsx
initial={{ opacity: 0, scale: 0 }}
whileInView={{ opacity: 1, scale: 1 }}
delay: 0.4 + i * 0.1s
whileHover={{ 
  scale: 1.3,
  rotate: [0, -10, 10, 0]
}}
```

### 8. Particles & Background

#### Matrix Characters
```tsx
// Canvas animation
ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'
ctx.fillRect(0, 0, canvas.width, canvas.height)
// Caracteres caen a 35ms intervals
```

#### Particle System
```tsx
// 50 partículas
animate: {
  x: x + vx,
  y: y + vy,
  opacity: 0.2-0.7 (random)
}
// Conecta partículas < 100px
```

## ⚡ Performance Tips

### Optimizaciones Implementadas

1. **viewport={{ once: true }}**: Anima solo una vez
2. **will-change: transform**: Optimiza GPU
3. **transform en lugar de top/left**: Mejor performance
4. **Lazy loading**: Componentes se cargan cuando se necesitan
5. **Debounce en scroll**: Reduce cálculos

### Configuración Recomendada

```tsx
// Para animaciones suaves
const springConfig = { 
  damping: 25,      // Más alto = menos rebote
  stiffness: 700    // Más alto = más rápido
}

// Para fade in/out
const fadeConfig = {
  duration: 0.3,    // Rápido pero visible
  ease: "easeOut"   // Natural
}

// Para hover effects
const hoverConfig = {
  duration: 0.2,    // Instantáneo
  type: "spring"    // Suave
}
```

## 🎯 Timing Guidelines

| Tipo | Duración | Uso |
|------|----------|-----|
| Micro | 0.1-0.3s | Hover, Click |
| Corta | 0.3-0.6s | Transiciones |
| Media | 0.6-1.2s | Entrada/Salida |
| Larga | 1.2-3s | Loading, Reveal |
| Continua | Infinito | Ambient, Pulse |

## 🔧 Personalización

### Cambiar Velocidad Global
```tsx
// En cada componente
transition={{ duration: 0.6 }} // Cambia aquí
```

### Desactivar Animaciones
```tsx
// En tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        // Comenta las que no quieras
        // 'glow': 'glow 2s ease-in-out infinite alternate',
      }
    }
  }
}
```

### Reducir Partículas
```tsx
// En ParticleEffect.tsx
for (let i = 0; i < 25; i++) { // Reduce este número
```

---

**Todas las animaciones están optimizadas para 60fps en dispositivos modernos** 🚀