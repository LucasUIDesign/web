# 🚀 Instrucciones de Deploy - Phantom Protocol

## ⚡ Deploy Rápido en Vercel (Recomendado)

### Opción 1: Deploy con GitHub (MÁS FÁCIL)

1. **Crear repositorio en GitHub**
   - Ve a https://github.com/new
   - Nombre: `phantom-protocol`
   - Visibilidad: Public o Private
   - Click en "Create repository"

2. **Subir el código**
   ```bash
   # En la carpeta del proyecto
   git init
   git add .
   git commit -m "Initial commit - Phantom Protocol"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/phantom-protocol.git
   git push -u origin main
   ```

3. **Deploy en Vercel**
   - Ve a https://vercel.com/signup
   - Regístrate con GitHub
   - Click en "New Project"
   - Importa tu repositorio `phantom-protocol`
   - Vercel detectará automáticamente Next.js
   - Click en "Deploy"
   - ¡Listo! Tu sitio estará en: `https://phantom-protocol.vercel.app`

### Opción 2: Deploy Directo con Vercel CLI

1. **Instalar Node.js**
   - Descarga desde: https://nodejs.org/
   - Instala la versión LTS (recomendada)
   - Reinicia tu terminal

2. **Instalar Vercel CLI**
   ```bash
   npm install -g vercel
   ```

3. **Login en Vercel**
   ```bash
   vercel login
   ```

4. **Deploy**
   ```bash
   # En la carpeta del proyecto
   vercel
   ```
   - Sigue las instrucciones
   - Acepta los defaults
   - ¡Tu sitio estará online en minutos!

### Opción 3: Deploy con Netlify

1. **Crear cuenta en Netlify**
   - Ve a https://www.netlify.com/
   - Regístrate gratis

2. **Deploy desde GitHub**
   - Sube tu código a GitHub (ver Opción 1, pasos 1-2)
   - En Netlify, click "New site from Git"
   - Conecta con GitHub
   - Selecciona tu repositorio
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

3. **Deploy manual (sin GitHub)**
   - Instala Node.js (ver Opción 2, paso 1)
   - En la carpeta del proyecto:
   ```bash
   npm install
   npm run build
   ```
   - Arrastra la carpeta `.next` a Netlify Drop

## 🔧 Solución de Problemas

### Error: "npm no se reconoce"
**Solución**: Instala Node.js desde https://nodejs.org/

### Error: "git no se reconoce"
**Solución**: Instala Git desde https://git-scm.com/

### Error: Build failed
**Solución**: 
```bash
# Limpia e instala de nuevo
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### Error: Module not found
**Solución**: Verifica que todas las dependencias estén en package.json

## 📱 Después del Deploy

### Configurar Dominio Personalizado

**En Vercel:**
1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio
4. Configura DNS según instrucciones

**En Netlify:**
1. Site settings → Domain management
2. Add custom domain
3. Sigue las instrucciones

### Optimizaciones Post-Deploy

1. **Analytics**: Agrega Vercel Analytics o Google Analytics
2. **SEO**: Verifica meta tags en `app/layout.tsx`
3. **Performance**: Revisa con Lighthouse
4. **SSL**: Automático en Vercel/Netlify

## 🎯 URLs de Ejemplo

Después del deploy, tu sitio estará disponible en:

- **Vercel**: `https://phantom-protocol.vercel.app`
- **Netlify**: `https://phantom-protocol.netlify.app`
- **Custom**: `https://tudominio.com`

## 📊 Verificación

Después del deploy, verifica:

✅ Logo animado funciona
✅ Cursor personalizado (desktop)
✅ Loading screen aparece
✅ Animaciones suaves
✅ Responsive en mobile
✅ Pricing cards interactivas
✅ Bitcoin payment funciona

## 🆘 Soporte

Si tienes problemas:

1. **Vercel**: https://vercel.com/support
2. **Netlify**: https://www.netlify.com/support/
3. **Documentación**: Lee README.md y GUIA_DE_USO.md

## 🎉 ¡Felicidades!

Tu landing page Phantom Protocol está online y lista para impresionar. 

**Comparte tu URL**: Una vez deployado, comparte tu sitio con el mundo.

---

**Desarrollado con 💜 - Phantom Protocol**