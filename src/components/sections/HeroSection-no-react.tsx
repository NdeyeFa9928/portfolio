'use client'

// Version sans import React pour éviter les erreurs de module

export default function HeroSectionNoReact() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    // Logique pour télécharger le CV
    console.log('Téléchargement du CV...')
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Bonjour, je suis{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  Votre Nom
                </span>
              </h1>
            </div>

            <div>
              <p className="text-xl md:text-2xl text-gray-600 font-light">
                Développeur Full Stack passionné
              </p>
              <p className="text-lg text-gray-500 mt-4 max-w-2xl">
                Je crée des expériences web modernes et performantes avec les dernières technologies.
                Spécialisé en React, Next.js, et développement backend.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToAbout}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 justify-center"
              >
                Découvrir mon travail
                <span>↓</span>
              </button>

              <button
                onClick={downloadCV}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center gap-2 justify-center"
              >
                <span>📄</span>
                Télécharger CV
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-500">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-500">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-500">Clients satisfaits</div>
              </div>
            </div>
          </div>

          {/* Image/Video placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍💻</div>
                <p className="text-gray-600">Photo/Vidéo à venir</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
