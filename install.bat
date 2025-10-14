@echo off
echo Instalando dependencias de Phantom Protocol Landing Page...
echo.

echo [1/3] Instalando Node.js dependencies...
npm install

echo.
echo [2/3] Instalando dependencias adicionales...
npm install @types/qrcode

echo.
echo [3/3] Verificando instalacion...
npm list --depth=0

echo.
echo ✅ Instalacion completada!
echo.
echo Para ejecutar el proyecto:
echo   npm run dev
echo.
echo Luego abre: http://localhost:3000
echo.
pause