'use client'

import { experiences } from '@/data/personal'

export default function ExperienceSectionUpdated() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Mon Parcours
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expériences professionnelles et formations qui ont façonné mon expertise
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
        
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center`}>
              {/* Content for odd items (left side) */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:order-last md:pl-12'}`}>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <span className="text-lg font-semibold text-gray-800">{exp.company}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-600">{exp.location}</span>
                    </div>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 border-4 border-white shadow z-10 my-4 md:my-0">
                <span className="text-white text-sm font-bold">{index + 1}</span>
              </div>
              
              {/* Empty div for layout on even items */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-last' : 'md:pr-12'}`}></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Education section */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">Formation</h3>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xl font-bold text-gray-900">Master en Informatique</h4>
            <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              2018 - 2022
            </span>
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <span className="text-lg font-semibold text-gray-800">École Supérieure d'Ingénierie</span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-600">France</span>
            </div>
            <p className="text-gray-600">
              Spécialisation en développement logiciel et systèmes d'information.
              Projets académiques en équipe et stage international Erasmus.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Algorithmique', 'Bases de données', 'Développement Web', 'Génie Logiciel', 'IA'].map((skill, skillIndex) => (
              <span 
                key={skillIndex}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
