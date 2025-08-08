'use client'

import React from 'react'

export default function HeroSectionSimple() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
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
              
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center gap-2 justify-center">
                <span>📄</span>
                Télécharger CV
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { number: '3+', label: 'Années d\'expérience' },
                { number: '50+', label: 'Projets réalisés' },
                { number: '100%', label: 'Satisfaction client' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Video */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Placeholder pour votre photo */}
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                👨‍💻
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center animate-spin">
                <span className="text-white text-2xl">▶️</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-300 rounded-lg animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="text-gray-400 hover:text-blue-600 transition-colors duration-200 animate-bounce"
        >
          <span className="text-3xl">↓</span>
        </button>
      </div>
    </div>
  )
}
