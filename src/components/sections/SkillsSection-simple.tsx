'use client'

import React from 'react'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90, color: 'bg-blue-500' },
      { name: 'Next.js', level: 85, color: 'bg-gray-800' },
      { name: 'TypeScript', level: 80, color: 'bg-blue-600' },
      { name: 'Tailwind CSS', level: 95, color: 'bg-teal-500' },
      { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85, color: 'bg-green-600' },
      { name: 'Python', level: 75, color: 'bg-blue-500' },
      { name: 'PostgreSQL', level: 80, color: 'bg-blue-700' },
      { name: 'MongoDB', level: 70, color: 'bg-green-500' },
      { name: 'API REST', level: 90, color: 'bg-orange-500' },
    ]
  },
  {
    title: 'Outils & DevOps',
    skills: [
      { name: 'Git', level: 95, color: 'bg-red-500' },
      { name: 'Docker', level: 70, color: 'bg-blue-600' },
      { name: 'AWS', level: 65, color: 'bg-orange-400' },
      { name: 'Vercel', level: 90, color: 'bg-black' },
      { name: 'Figma', level: 80, color: 'bg-purple-500' },
    ]
  }
]

export default function SkillsSectionSimple() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Mes Compétences
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Technologies et outils que je maîtrise pour créer des solutions complètes
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {category.title}
            </h3>
            
            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {skill.level}%
                    </span>
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
        ))}
      </div>

      {/* Additional Skills */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">
          Autres Compétences
        </h3>
        
        <div className="flex flex-wrap justify-center gap-4">
          {[
            'Responsive Design', 'SEO', 'Performance Web', 'Accessibilité',
            'Tests Unitaires', 'CI/CD', 'Agile/Scrum', 'UX/UI Design'
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
