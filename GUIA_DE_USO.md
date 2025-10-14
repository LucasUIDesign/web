# 📖 Guía de Uso - Phantom Protocol

## 🚀 Inicio Rápido

### 1. Instalación

#### Windows (Recomendado)
```bash
# Doble click en install.bat
# O ejecuta en CMD:
install.bat
```

#### Manual
```bash
npm install
npm run dev
```

### 2. Abrir en Navegador
```
http://localhost:3000
```

## 🎨 Características Interactivas

### Logo Animado
- **Ubicación**: Navbar (esquina superior izquierda)
- **Efectos**: 
  - Hover para escalar y rotar
  - Partículas orbitando
  - Glow pulsante
  - Ojos parpadeantes

### Cursor Personalizado
- **Activación**: Automática en desktop
- **Efectos**:
  - Círculo que sigue el mouse
  - Glow trail
  - Cambia en hover sobre botones
  - Mix-blend-mode para contraste

### Loading Screen
- **Duración**: ~3-5 segundos
- **Elementos**:
  - Logo con animación de entrada
  - Barra de progreso
  - Texto "INITIALIZING PROTOCOL"
  - Partículas flotantes
  - Scan line effect

## 🎯 Secciones Principales

### 1. Hero Section
**Elementos interactivos:**
- Texto con glitch effect (cada 3 segundos)
- Partículas conectadas en el fondo
- Botón CTA con:
  - Pulse animation
  - Partículas al hacer hover
  - Shine effect
- Scroll indicator animado

**Tips:**
- Hover sobre el botón para ver partículas
- Observa el glitch effect en el título

### 2. Bento Grid (Features)
**6 Cards interactivas:**

| Card | Demo | Efecto Hover |
|------|------|--------------|
| Aimbot | Crosshair animado | Glow rojo |
| Wallhack | ESP lines | Glow azul |
| ESP | Info overlay | Glow púrpura |
| IA | Rotating icon | Glow verde |
| Updates | Refresh icon | Glow amarillo |
| Support | Chat bubble | Glow rosa |

**Interacciones:**
- Hover para ver demo animada
- Partículas flotantes en cada card
- Corner accent aparece en hover
- Shine effect atraviesa la card

### 3. Pricing Section
**3 Planes disponibles:**

#### Bronze - $49.99
- Aimbot básico
- ESP estándar
- 7 días garantía

#### Gold - $99.99 ⭐ MÁS POPULAR
- Todo en Bronze +
- Wallhack avanzado
- Soporte 24/7
- Actualizaciones vitalicias

#### Platinum - $149.99
- Todo en Gold +
- Cheats de torneo
- IA personalizada
- Garantía de por vida

**Elementos interactivos:**
- Countdown timer (cuenta regresiva real)
- Progress bar de escasez (se llena gradualmente)
- Pop-up de urgencia (aparece después de 3 segundos)
- Cards con hover effects:
  - Levitación (-10px)
  - Glow border
  - Animated gradient border
  - Floating particles

**Botones:**
1. **Buy Now**: Botón principal con shine effect
2. **Bitcoin Payment**: Botón secundario con ícono BTC animado

### 4. Payment Section
**Proceso de 3 pasos:**

#### Paso 1: Escanear QR
- QR code generado dinámicamente
- Dirección BTC: `bc1ql0upf2d9xntcwzjrjx62j4h5vr09z62mcwwd6e`
- Cantidad: `0.0045 BTC (≈$99.99)`
- Botones "Copiar" para dirección y cantidad

#### Paso 2: Verificando
- Animación de loading circular
- Progress bar que se llena
- Texto "Buscando transacción..."

#### Paso 3: Confirmado
- Checkmark animado
- Código de licencia generado
- Botón "Descargar Ahora"

**Advertencia importante:**
⚠️ Solo BTC en red Bitcoin (no ERC20, BEP20, TRC20)

### 5. Social Proof
**Elementos:**
- **Estadísticas en tiempo real**:
  - Jugadores activos (cambia cada 5 segundos)
  - Partidas ganadas hoy
  - Tasa de satisfacción
  - Bans reportados

- **Actividad en vivo**:
  - Mensajes rotativos cada 3 segundos
  - Ejemplos: "Carlos compró Gold Plan", "Miguel está usando Aimbot"

- **6 Testimonios**:
  - Avatares animados
  - Verificación badge
  - Rank del jugador
  - 5 estrellas animadas
  - Hover effects en cada card

### 6. Footer
**Secciones:**
- Links a productos
- Soporte
- Legal
- Copyright
- Botón "Back to Top" (esquina inferior derecha)

## 🎮 Atajos de Teclado

| Tecla | Acción |
|-------|--------|
| `Home` | Ir al inicio |
| `End` | Ir al footer |
| `Tab` | Navegar entre elementos |
| `Enter` | Activar botón/link |

## 🎨 Efectos Visuales

### Animaciones Automáticas
1. **Matrix Background**: Caracteres cayendo constantemente
2. **Particles**: Flotando y conectándose
3. **Glow Effects**: Pulsando en elementos importantes
4. **Glitch Text**: Cada 3 segundos en el título
5. **Progress Bars**: Shimmer effect continuo

### Animaciones en Hover
1. **Cards**: Scale + Glow + Rotate
2. **Buttons**: Shine + Pulse + Particles
3. **Links**: Underline animation
4. **Icons**: Rotate + Scale
5. **Stars**: Scale + Rotate

### Animaciones en Scroll
1. **Fade In**: Elementos aparecen al entrar en viewport
2. **Slide Up**: Cards suben desde abajo
3. **Scale**: Elementos crecen al aparecer
4. **Stagger**: Elementos aparecen en secuencia

## 🔧 Personalización

### Cambiar Colores
Edita `tailwind.config.js`:
```js
colors: {
  'neon-red': '#FF2E2E',    // Tu color
  'neon-blue': '#00D4FF',   // Tu color
  'neon-purple': '#B026FF', // Tu color
}
```

### Cambiar Velocidad de Animaciones
Edita `app/globals.css`:
```css
.glow-text {
  animation: glow 2s ease-in-out infinite; /* Cambia 2s */
}
```

### Desactivar Cursor Personalizado
En `app/page.tsx`, comenta:
```tsx
// <CustomCursor />
```

### Desactivar Loading Screen
En `app/page.tsx`, comenta:
```tsx
// <LoadingScreen />
```

## 📱 Responsive

### Mobile (< 768px)
- Cursor personalizado desactivado
- Cards en columna única
- Navbar simplificado
- Texto más pequeño

### Tablet (768px - 1023px)
- 2 columnas en grid
- Navbar completo
- Animaciones reducidas

### Desktop (> 1024px)
- 3 columnas en grid
- Todas las animaciones
- Cursor personalizado
- Efectos completos

## 🐛 Troubleshooting

### Problema: Animaciones lentas
**Solución**: Reduce cantidad de partículas en `ParticleEffect.tsx`
```tsx
for (let i = 0; i < 25; i++) { // Cambia a 10
```

### Problema: Cursor no aparece
**Solución**: Verifica que estés en desktop y mueve el mouse

### Problema: Loading screen no desaparece
**Solución**: Espera 5 segundos o recarga la página

### Problema: Errores de TypeScript
**Solución**: 
```bash
npm install
npm run build
```

## 💡 Tips Pro

1. **Performance**: Desactiva animaciones en mobile
2. **SEO**: Personaliza meta tags en `layout.tsx`
3. **Analytics**: Agrega Google Analytics en `layout.tsx`
4. **Deploy**: Usa Vercel para deploy automático
5. **Testing**: Prueba en diferentes navegadores

## 🎯 Mejores Prácticas

### Para Desarrollo
- Usa `npm run dev` para hot reload
- Abre DevTools para ver animaciones
- Prueba en diferentes tamaños de pantalla
- Verifica performance con Lighthouse

### Para Producción
- Ejecuta `npm run build` antes de deploy
- Optimiza imágenes
- Minifica código
- Usa CDN para assets

## 📞 Soporte

Si tienes problemas:
1. Revisa la consola del navegador
2. Verifica que todas las dependencias estén instaladas
3. Limpia cache: `npm cache clean --force`
4. Reinstala: `rm -rf node_modules && npm install`

---

**¡Disfruta explorando Phantom Protocol! 👻**