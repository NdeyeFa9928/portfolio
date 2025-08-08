'use client'

import React from 'react'
import HeroSectionSimple from '@/components/sections/HeroSection-simple'
import SkillsSectionSimple from '@/components/sections/SkillsSection-simple'

export default function HomeSimple() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen">
        <HeroSectionSimple />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <SkillsSectionSimple />
      </section>

      {/* Message d'information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🎉 Portfolio Next.js Fonctionnel !</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Version Simplifiée Active</h3>
            <p className="text-green-700 mb-4">
              Cette version fonctionne sans les dépendances externes problématiques.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-green-800 mb-2">✅ Fonctionnel :</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Next.js 14 App Router</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Composants React</li>
                  <li>• Design responsive</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-green-800 mb-2">🔄 À ajouter plus tard :</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Animations Framer Motion</li>
                  <li>• Icônes Lucide React</li>
                  <li>• Toutes les sections</li>
                  <li>• Formulaire de contact</li>
                  <li>• Mode sombre</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
