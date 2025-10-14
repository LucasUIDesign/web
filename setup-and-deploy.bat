@echo off
echo ========================================
echo   PHANTOM PROTOCOL - Setup y Deploy
echo ========================================
echo.

REM Verificar si Node.js esta instalado
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js no esta instalado!
    echo.
    echo Por favor instala Node.js desde:
    echo https://nodejs.org/
    echo.
    echo Descarga la version LTS y ejecuta el instalador.
    echo Despues de instalar, ejecuta este script de nuevo.
    echo.
    pause
    start https://nodejs.org/
    exit /b 1
)

echo [OK] Node.js detectado
node --version
echo.

REM Verificar si npm esta disponible
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] npm no esta disponible!
    echo Por favor reinstala Node.js.
    pause
    exit /b 1
)

echo [OK] npm detectado
npm --version
echo.

echo ========================================
echo   Paso 1: Instalando dependencias...
echo ========================================
echo.

call npm install

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Fallo la instalacion de dependencias
    echo.
    pause
    exit /b 1
)

echo.
echo [OK] Dependencias instaladas correctamente
echo.

echo ========================================
echo   Paso 2: Construyendo proyecto...
echo ========================================
echo.

call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Fallo la construccion del proyecto
    echo.
    pause
    exit /b 1
)

echo.
echo [OK] Proyecto construido correctamente
echo.

echo ========================================
echo   Paso 3: Opciones de Deploy
echo ========================================
echo.
echo Elige una opcion:
echo.
echo 1. Ejecutar localmente (http://localhost:3000)
echo 2. Deploy en Vercel (necesitas cuenta)
echo 3. Salir
echo.
set /p choice="Ingresa tu opcion (1-3): "

if "%choice%"=="1" (
    echo.
    echo Iniciando servidor local...
    echo Abre tu navegador en: http://localhost:3000
    echo.
    echo Presiona Ctrl+C para detener el servidor
    echo.
    call npm run dev
) else if "%choice%"=="2" (
    echo.
    echo Verificando Vercel CLI...
    where vercel >nul 2>nul
    if %ERRORLEVEL% NEQ 0 (
        echo Vercel CLI no esta instalado. Instalando...
        call npm install -g vercel
    )
    echo.
    echo Iniciando deploy en Vercel...
    echo Sigue las instrucciones en pantalla.
    echo.
    call vercel
) else (
    echo.
    echo Saliendo...
    exit /b 0
)

pause