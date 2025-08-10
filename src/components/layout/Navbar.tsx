'use client'

import { useState, useEffect } from 'react'
import { personalInfo } from '@/data/personal'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Gérer le défilement pour changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fonction pour naviguer vers une section avec défilement fluide
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <span className={`text-xl font-bold ${scrolled ? 'text-blue-600' : 'text-gray-900'}`}>
                {personalInfo.name.split(' ')[0]}
                <span className="text-blue-600">.</span>
              </span>
            </a>
          </div>

          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: 'skills', label: 'Compétences' },
              { id: 'experience', label: 'Expérience' },
              { id: 'projects', label: 'Projets' },
              { id: 'blog', label: 'Blog' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                  scrolled ? 'text-gray-700' : 'text-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Bouton CV */}
          <div className="hidden md:block">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                scrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Mon CV
            </a>
          </div>

          {/* Bouton Menu - Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-1">
            {[
              { id: 'skills', label: 'Compétences' },
              { id: 'experience', label: 'Expérience' },
              { id: 'projects', label: 'Projets' },
              { id: 'blog', label: 'Blog' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-md"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 pb-1">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-3 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700"
              >
                Mon CV
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
