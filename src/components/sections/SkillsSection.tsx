'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'javascript', level: 70, color: 'bg-yellow-500' },
      { name: 'html/css', level: 80, color: 'bg-orange-500' },
      { name: 'Tailwind CSS', level: 95, color: 'bg-teal-500' },
      { name: 'bootstrap', level: 70, color: 'bg-purple-500' },
      { name: 'react', level: 80, color: 'bg-blue-500' },
      { name: 'next.js', level: 70, color: 'bg-blue-600' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'python', level: 90, color: 'bg-blue-500' },
      { name: 'PostgreSQL', level: 80, color: 'bg-blue-700' },
      { name: 'Java', level: 80, color: 'bg-orange-600' },
      { name: 'javascript', level: 70, color: 'bg-yellow-500' },
      { name: 'sql', level: 80, color: 'bg-green-600' },
      { name: 'VB.NET', level: 85, color: 'bg-blue-800' },
      { name: 'php', level: 80, color: 'bg-purple-600' },

    ]
  },
  {
    title: 'Outils & DevOps',
    skills: [
      { name: 'Git', level: 95, color: 'bg-red-500' },
      { name: 'Azure DevOps', level: 70, color: 'bg-blue-700' },
      { name: 'Trello', level: 70, color: 'bg-blue-400' },
      { name: 'Scrum', level: 70, color: 'bg-green-500' },
      { name: 'Postman', level: 70, color: 'bg-orange-500' },
      { name: 'Canva', level: 70, color: 'bg-pink-500' },
      { name: 'Vercel', level: 90, color: 'bg-black' },
      { name: 'Figma', level: 80, color: 'bg-purple-500' },
    ]
  }
]

export default function SkillsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Mes Compétences
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Technologies et outils que je maîtrise pour créer des solutions complètes
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {category.title}
            </h3>
            
            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: categoryIndex * 0.2 + skillIndex * 0.1 
                  }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ 
                        duration: 1, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      className={`h-2 rounded-full ${skill.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Autres Compétences
        </h3>
        
        <div className="flex flex-wrap justify-center gap-4">
          {[
            'responsive design', 'tests unitaires','tests d\'integration','déploiement', 'architecture projet', 'gestion de projet',
            'cycle en V','agile/scrum'
          ].map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
