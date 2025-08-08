'use client'

import { skills } from '@/data/personal'

export default function SkillsSectionUpdated() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Mes Compétences
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Technologies et outils que je maîtrise pour créer des solutions complètes
        </p>
      </div>

      {/* Backend */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <span className="bg-blue-100 text-blue-700 p-2 rounded-lg mr-3">💻</span>
          Back-end
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.backend.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Frontend */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <span className="bg-yellow-100 text-yellow-700 p-2 rounded-lg mr-3">🎨</span>
          Front-end
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.frontend.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Databases */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <span className="bg-green-100 text-green-700 p-2 rounded-lg mr-3">🗄️</span>
          Bases de données
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.databases.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <span className="bg-purple-100 text-purple-700 p-2 rounded-lg mr-3">🛠️</span>
          Outils & Méthodes
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.tools.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <span className="bg-red-100 text-red-700 p-2 rounded-lg mr-3">🤝</span>
          Soft Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            'Proactivité', 'Adaptabilité', 'Rigueur', 
            'Organisation', 'Autonomie', 'Travail en équipe',
            'Communication', 'Gestion de projet', 'Résolution de problèmes'
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
