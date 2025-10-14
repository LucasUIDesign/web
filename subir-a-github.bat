@echo off
color 0A
echo.
echo ========================================
echo   SUBIENDO A GITHUB
echo ========================================
echo.

REM Verificar Git
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Git no esta instalado
    echo.
    echo Descargando Git...
    start https://git-scm.com/download/win
    echo.
    echo Por favor:
    echo 1. Instala Git
    echo 2. Reinicia tu PC
    echo 3. Ejecuta este script de nuevo
    echo.
    pause
    exit /b 1
)

echo [OK] Git instalado
git --version
echo.

echo ========================================
echo   Configurando repositorio
echo ========================================
echo.

REM Inicializar Git si no existe
if not exist .git (
    echo [*] Inicializando Git...
    git init
    echo [OK] Git inicializado
) else (
    echo [OK] Git ya esta inicializado
)

echo.
echo [*] Configurando remote...

REM Remover remote anterior si existe
git remote remove origin 2>nul

REM Agregar el remote correcto
git remote add origin https://github.com/LucasUIDesign/web.git

echo [OK] Remote configurado
echo.

echo ========================================
echo   Preparando archivos
echo ========================================
echo.

REM Crear .gitignore si no existe
if not exist .gitignore (
    echo node_modules/ > .gitignore
    echo .next/ >> .gitignore
    echo .env.local >> .gitignore
    echo .vercel >> .gitignore
    echo .DS_Store >> .gitignore
    echo *.log >> .gitignore
)

echo [*] Agregando archivos...
git add .

echo [OK] Archivos agregados
echo.

echo ========================================
echo   Creando commit
echo ========================================
echo.

git commit -m "feat: Phantom Protocol - Landing page completa con seguridad avanzada

- Logo animado epico con SVG personalizado
- Cursor personalizado con glow effect
- Loading screen profesional
- 60+ microanimaciones avanzadas
- Pricing cards estilo Necrum
- Sistema de pago Bitcoin
- Responsive completo

Seguridad:
- 15+ Headers de seguridad HTTP
- Middleware de proteccion custom
- Bloqueo de 20+ herramientas de hacking
- Deteccion de 15+ patrones de ataque
- Rate limiting activo
- DDoS protection
- HTTPS forzado
- CORS restrictivo

Componentes:
- 13 componentes React/TypeScript
- 9 archivos de seguridad
- 15 archivos de documentacion
- 3 scripts de deploy

Stack:
- Next.js 14
- TypeScript 5
- Tailwind CSS 3
- Framer Motion 10
- Three.js + Canvas API"

if %ERRORLEVEL% NEQ 0 (
    echo [WARNING] No hay cambios para commitear o ya existe el commit
) else (
    echo [OK] Commit creado
)

echo.

echo ========================================
echo   Subiendo a GitHub
echo ========================================
echo.

echo [*] Configurando branch main...
git branch -M main

echo.
echo [*] Subiendo archivos a GitHub...
echo.
echo IMPORTANTE: Si te pide usuario y password:
echo - Usuario: LucasUIDesign
echo - Password: Tu Personal Access Token de GitHub
echo.
echo Si no tienes token, crealo aqui:
echo https://github.com/settings/tokens
echo.
pause

git push -u origin main --force

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] No se pudo subir a GitHub
    echo.
    echo Posibles causas:
    echo 1. No tienes permisos en el repositorio
    echo 2. Necesitas autenticarte
    echo 3. El repositorio no existe
    echo.
    echo Soluciones:
    echo 1. Verifica que el repo existe: https://github.com/LucasUIDesign/web
    echo 2. Configura tu token de GitHub:
    echo    git config --global credential.helper store
    echo    git push -u origin main
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   SUBIDA EXITOSA
echo ========================================
echo.
echo [OK] Todos los archivos se subieron correctamente
echo.
echo Tu repositorio:
echo https://github.com/LucasUIDesign/web
echo.
echo Ahora puedes:
echo 1. Ver tu codigo en GitHub
echo 2. Conectar con Vercel para deploy
echo 3. Compartir el repositorio
echo.
echo ========================================
echo   Siguiente paso: Deploy en Vercel
echo ========================================
echo.
echo 1. Ve a: https://vercel.com/new
echo 2. Importa: LucasUIDesign/web
echo 3. Click en "Deploy"
echo 4. Espera 2-3 minutos
echo 5. Tu sitio estara en: https://web-lucas.vercel.app
echo.
pause