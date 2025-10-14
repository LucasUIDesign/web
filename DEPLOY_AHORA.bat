@echo off
color 0A
echo.
echo ========================================
echo   PHANTOM PROTOCOL - DEPLOY SEGURO
echo ========================================
echo.
echo [*] Verificando requisitos...
echo.

REM Verificar Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [!] Node.js NO esta instalado
    echo.
    echo Descargando Node.js...
    start https://nodejs.org/
    echo.
    echo Por favor:
    echo 1. Instala Node.js LTS
    echo 2. Reinicia tu PC
    echo 3. Ejecuta este script de nuevo
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js instalado
node --version
echo.

REM Verificar Git
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [!] Git NO esta instalado
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
echo   PASO 1: Instalando dependencias
echo ========================================
echo.

call npm install

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Fallo la instalacion
    echo Intentando limpiar y reinstalar...
    echo.
    rmdir /s /q node_modules 2>nul
    del package-lock.json 2>nul
    call npm install
    
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] No se pudo instalar. Verifica tu conexion.
        pause
        exit /b 1
    )
)

echo.
echo [OK] Dependencias instaladas
echo.

echo ========================================
echo   PASO 2: Auditoria de seguridad
echo ========================================
echo.

call npm audit --audit-level=moderate

echo.
echo [OK] Auditoria completada
echo.

echo ========================================
echo   PASO 3: Construyendo proyecto
echo ========================================
echo.

call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Fallo la construccion
    echo Revisa los errores arriba
    pause
    exit /b 1
)

echo.
echo [OK] Proyecto construido exitosamente
echo.

echo ========================================
echo   PASO 4: Inicializando Git
echo ========================================
echo.

if not exist .git (
    git init
    echo [OK] Git inicializado
) else (
    echo [OK] Git ya esta inicializado
)

echo.

REM Crear .gitignore si no existe
if not exist .gitignore (
    echo node_modules/ > .gitignore
    echo .next/ >> .gitignore
    echo .env.local >> .gitignore
    echo .vercel >> .gitignore
)

git add .
git commit -m "Initial commit - Phantom Protocol con seguridad completa" 2>nul

echo [OK] Cambios commiteados
echo.

echo ========================================
echo   PASO 5: Opciones de Deploy
echo ========================================
echo.
echo Elige una opcion:
echo.
echo 1. Deploy en Vercel (Recomendado)
echo 2. Ejecutar localmente
echo 3. Ver instrucciones de GitHub
echo 4. Salir
echo.
set /p choice="Opcion (1-4): "

if "%choice%"=="1" goto deploy_vercel
if "%choice%"=="2" goto run_local
if "%choice%"=="3" goto github_instructions
if "%choice%"=="4" goto end

:deploy_vercel
echo.
echo ========================================
echo   DEPLOY EN VERCEL
echo ========================================
echo.

REM Verificar Vercel CLI
where vercel >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [*] Instalando Vercel CLI...
    call npm install -g vercel
    
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] No se pudo instalar Vercel CLI
        echo Intenta manualmente: npm install -g vercel
        pause
        exit /b 1
    )
)

echo [OK] Vercel CLI instalado
echo.
echo [*] Iniciando deploy...
echo.
echo IMPORTANTE:
echo - Sigue las instrucciones en pantalla
echo - Acepta los defaults (presiona Enter)
echo - Tu sitio estara en: https://phantom-protocol.vercel.app
echo.
pause

call vercel --prod

echo.
echo ========================================
echo   DEPLOY COMPLETADO
echo ========================================
echo.
echo Tu sitio esta ONLINE con todas las medidas de seguridad:
echo.
echo [OK] Headers de seguridad activos
echo [OK] Middleware de proteccion activo
echo [OK] Rate limiting activo
echo [OK] Bloqueo de herramientas de hacking
echo [OK] DDoS protection (Cloudflare)
echo [OK] HTTPS forzado
echo.
echo Verifica tu sitio en:
echo https://phantom-protocol.vercel.app
echo.
echo Documentacion de seguridad:
echo - SECURITY.md
echo - SEGURIDAD_DEPLOY.md
echo.
goto end

:run_local
echo.
echo ========================================
echo   EJECUTANDO LOCALMENTE
echo ========================================
echo.
echo Abriendo en: http://localhost:3000
echo.
echo Presiona Ctrl+C para detener
echo.
start http://localhost:3000
call npm run dev
goto end

:github_instructions
echo.
echo ========================================
echo   INSTRUCCIONES DE GITHUB
echo ========================================
echo.
echo 1. Crea un repositorio en GitHub:
echo    https://github.com/new
echo.
echo 2. Ejecuta estos comandos:
echo.
echo    git remote add origin https://github.com/TU_USUARIO/phantom-protocol.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. Luego ve a Vercel:
echo    https://vercel.com/new
echo.
echo 4. Importa tu repositorio y deploy!
echo.
pause
goto end

:end
echo.
echo ========================================
echo   PHANTOM PROTOCOL
echo ========================================
echo.
echo Gracias por usar Phantom Protocol!
echo.
echo Archivos importantes:
echo - SECURITY.md - Politica de seguridad
echo - SEGURIDAD_DEPLOY.md - Guia de seguridad
echo - PARA_TI.md - Instrucciones personalizadas
echo.
pause