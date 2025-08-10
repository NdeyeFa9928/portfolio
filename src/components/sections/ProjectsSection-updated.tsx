'use client'

import { useState } from 'react'
import { projects } from '@/data/personal'

export default function ProjectsSectionUpdated() {
  const [filter, setFilter] = useState('all')
  
  // Extraire tous les tags uniques de tous les projets
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)))
  
  // Filtrer les projets en fonction du tag sélectionné
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Mes Projets
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Une sélection de mes réalisations professionnelles et personnelles
        </p>
      </div>

      {/* Filtres */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            filter === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Tous
        </button>
        
        {allTags.map((tag, index) => (
          <button
            key={index}
            onClick={() => setFilter(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === tag
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grille de projets */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Image du projet */}
            <div className="h-48 bg-blue-100 relative overflow-hidden">
              {/* Placeholder en attendant les vraies images */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
                <span className="text-4xl text-white">📊</span>
              </div>
              
              {/* Overlay avec le titre */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-xl font-bold text-white p-4">{project.title}</h3>
              </div>
            </div>
            
            {/* Contenu */}
            <div className="p-5 flex-grow flex flex-col">
              <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Liens */}
              <div className="flex gap-3">
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <span className="mr-1">🔗</span> Démo
                  </a>
                )}
                
                {project.codeUrl && (
                  <a 
                    href={project.codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <span className="mr-1">💻</span> Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Message si aucun projet ne correspond au filtre */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">Aucun projet ne correspond à ce filtre.</p>
        </div>
      )}
      
      {/* Appel à l'action */}
      <div className="text-center mt-16">
        <p className="text-gray-600 mb-6">
          Vous avez un projet intéressant ? Je serais ravie d'en discuter !
        </p>
        <a 
          href="#contact" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Me contacter
        </a>
      </div>
    </div>
  )
}
