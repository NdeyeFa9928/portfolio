'use client'

// Version optimisée qui utilise les données personnelles
import { personalInfo } from '@/data/personal'

export default function HeroSectionUpdated() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    // Redirection vers le CV
    window.open(personalInfo.resumeUrl, '_blank')
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
                  {personalInfo.name}
                </span>
              </h1>
            </div>

            <div>
              <p className="text-xl md:text-2xl text-gray-600 font-light">
                {personalInfo.title}
              </p>
              <p className="text-lg text-gray-500 mt-4 max-w-2xl">
                {personalInfo.bio}
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
                <div className="text-3xl font-bold text-blue-600">2+</div>
                <div className="text-sm text-gray-500">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">3</div>
                <div className="text-sm text-gray-500">Langues parlées</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-500">Projets majeurs</div>
              </div>
            </div>
          </div>

          {/* Image/Video placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
              {/* Remplacer par votre photo quand disponible */}
              <div className="text-center">
                <div className="text-6xl mb-4">👩‍💻</div>
                <p className="text-gray-600">Photo professionnelle à venir</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
            
            {/* Langues */}
            <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Langues</h3>
              <div className="space-y-2">
                {personalInfo.languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">{lang.name}</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full ml-2">
                      <div 
                        className="h-2 bg-blue-600 rounded-full" 
                        style={{ width: `${lang.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
