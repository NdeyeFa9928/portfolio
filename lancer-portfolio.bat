@echo off
echo 🚀 Lancement de votre Portfolio
echo.

echo 📋 Options disponibles :
echo.
echo 1. Portfolio avec Tailwind CSS (CDN) - RECOMMANDÉ
echo 2. Portfolio de test (HTML simple)
echo 3. Essayer Next.js (nécessite npm)
echo 4. Diagnostic des problèmes
echo.

set /p choice="Choisissez une option (1-4) : "

if "%choice%"=="1" (
    echo.
    echo 🎨 Lancement du portfolio avec Tailwind CSS...
    start "" "portfolio-cdn.html"
    echo ✅ Portfolio ouvert dans votre navigateur !
    echo 🌐 Ce portfolio utilise Tailwind CSS complet via CDN
    echo 📱 Design responsive et animations incluses
) else if "%choice%"=="2" (
    echo.
    echo 🌐 Lancement du portfolio de test...
    start "" "test.html"
    echo ✅ Portfolio de test ouvert !
    echo 📋 Version de démonstration de l'architecture
) else if "%choice%"=="3" (
    echo.
    echo ⚙️ Tentative de lancement Next.js...
    echo 📦 Vérification des dépendances...
    
    if not exist "node_modules" (
        echo ❌ node_modules manquant
        echo 🔧 Tentative d'installation...
        powershell -Command "& 'c:\users\MBOWN1\OneDrive - Colas\Desktop\perso\node-v22.18.0-win-x64\npm.cmd' install --legacy-peer-deps"
    )
    
    if exist "node_modules" (
        echo ✅ Dépendances trouvées
        echo 🚀 Démarrage du serveur Next.js...
        powershell -Command "& 'c:\users\MBOWN1\OneDrive - Colas\Desktop\perso\node-v22.18.0-win-x64\npm.cmd' run dev"
    ) else (
        echo ❌ Impossible de démarrer Next.js
        echo 💡 Utilisez l'option 1 ou 2 en attendant
    )
) else if "%choice%"=="4" (
    echo.
    echo 🔍 Diagnostic du système...
    .\test-portfolio.bat
) else (
    echo.
    echo ❌ Option invalide. Relancez le script.
)

echo.
echo 📚 Pour personnaliser votre portfolio :
echo • Modifiez src/data/personal.ts avec vos informations
echo • Ajoutez vos photos dans public/images/
echo • Consultez README.md pour plus d'infos
echo.

pause
