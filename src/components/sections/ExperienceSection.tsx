'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react'

const experiences = [
  {
    type: 'work',
    title: 'Développeur Full Stack Senior',
    company: 'Nom de l\'entreprise',
    location: 'Ville, Pays',
    period: '2022 - Présent',
    description: 'Développement d\'applications web modernes avec React, Next.js et Node.js. Lead technique sur plusieurs projets clients.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    achievements: [
      'Amélioration des performances de 40%',
      'Migration vers TypeScript',
      'Encadrement d\'une équipe de 3 développeurs'
    ]
  },
  {
    type: 'work',
    title: 'Développeur Frontend',
    company: 'Autre entreprise',
    location: 'Ville, Pays',
    period: '2020 - 2022',
    description: 'Création d\'interfaces utilisateur responsive et accessibles. Collaboration étroite avec l\'équipe UX/UI.',
    technologies: ['React', 'Vue.js', 'Sass', 'JavaScript'],
    achievements: [
      'Développement de 15+ composants réutilisables',
      'Implémentation du design system',
      'Optimisation SEO'
    ]
  },
  {
    type: 'education',
    title: 'Master en Informatique',
    company: 'Université/École',
    location: 'Ville, Pays',
    period: '2018 - 2020',
    description: 'Spécialisation en développement web et génie logiciel. Projet de fin d\'études sur l\'intelligence artificielle.',
    technologies: ['Python', 'Java', 'Machine Learning', 'Bases de données'],
    achievements: [
      'Mention Très Bien',
      'Projet IA reconnu',
      'Stage en entreprise'
    ]
  }
]

export default function ExperienceSection() {
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
          Mon Parcours
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Expériences professionnelles et formation qui ont façonné mes compétences
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 z-10">
                <div className="absolute inset-0 bg-primary-600 rounded-full animate-ping opacity-20"></div>
              </div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-lg ${
                      exp.type === 'work' 
                        ? 'bg-primary-100 dark:bg-primary-900' 
                        : 'bg-green-100 dark:bg-green-900'
                    }`}>
                      {exp.type === 'work' ? (
                        <Building size={24} className={`${
                          exp.type === 'work' 
                            ? 'text-primary-600 dark:text-primary-400' 
                            : 'text-green-600 dark:text-green-400'
                        }`} />
                      ) : (
                        <GraduationCap size={24} className="text-green-600 dark:text-green-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
                          <Building size={16} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Technologies utilisées
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Réalisations clés
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
