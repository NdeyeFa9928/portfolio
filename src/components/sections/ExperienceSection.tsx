'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react'

const experiences = [
   {
      type: 'work',
      title: 'Ingénieure Logicielle Fullstack',
      company: 'COLAS Technologies Nouvelles',
      location: 'Bihorel, France',
      period: 'Oct. 2023 – Présent',
      description: 'Développement fullstack en Python, VB.NET et QGIS pour l’auscultation de chaussées (projets IPM, mesure, floutage).',
      technologies: ['Python', 'VB.NET', 'PostgreSQL', 'QGIS', 'Git', 'Azure DevOps'],
      achievements: [
        'Création et optimisation d’outils de traitement d’images et de données géospatiales, permettant de réduire le temps d’analyse terrain de 30%',
        'Application des conventions Google Karma et Clean Code, améliorant la maintenabilité et la qualité du code',
        'Participation à la gestion de projet en méthode Scrum, accélérant le déploiement de nouvelles fonctionnalités'
      ]
    },
    {
      type: 'work',
      title: 'Cheffe de Projet',
      company: 'Hôpital Yvetot',
      location: 'Yvetot, France',
      period: 'Déc. 2023 – Mars 2024 (Projet Ingénieur, 4 mois)',
      description: 'Développement d\'un outil (Python, Roboflow) permettant la détection de médicaments dans un pilulier hospitalier. Management d\'équipe et respect des contraintes du secteur médical.',
      technologies: ['Python', 'YOLOv8', 'Roboflow', 'IA', 'Apprentissage automatique', 'Git', 'Management'],
      achievements: [
        'Création d\'un outil IA de détection automatique de médicaments, réduisant de 50% le temps de contrôle en milieu hospitalier',
        'Management d\'équipe et respect des contraintes du secteur médical',
        'Participation à la gestion de projet en méthode Scrum, accélérant le déploiement de nouvelles fonctionnalités'
      ]
    },
    {
      type: 'work',
      title: 'Développeuse Fullstack (Stage Erasmus+)',
      company: 'Universitat Politècnica de València (UPV)',
      location: 'Valencia, Espagne',
      period: 'Avr. 2023 – Sept. 2023',
      description: 'Conception et développement du simulateur web DET2020 pour l’apprentissage des fonctions logiques.',
      technologies: ['JavaScript', 'SVG', 'Figma', 'Fullstack Web', 'Gestion de projet'],
      achievements: [
        'Développement d’une interface interactive intuitive, facilitant l’apprentissage des fonctions logiques pour plus les étudiants de l’UPV',
        'Gestion du projet dans un contexte international, améliorant la collaboration multiculturelle',
        'Optimisation du code et des performances, réduisant de 40% le temps de chargement',
        'Création d’un simulateur web interactif pour l’apprentissage des fonctions logiques',
        'pratique de l’anglais et de l’espanol'
      ]
    },
  
    {
      type: 'education',
      title: 'Diplôme d’Ingénieure Généraliste - spécialisation ISN',
      company: 'ESIGELEC',
      location: 'Rouen, France',
      period: '2021 – 2024',
      description: 'Spécialisation en ingénierie logicielle et développement fullstack.',
      technologies: ['Java', 'PHP','javaScript', 'Git', 'Azure DevOps', 'Scrum', 'Trello'],
      achievements: [
        'site web de vente en ligne pour restaurant scolaire(php)',
        'projet de gestion de salles de classes C#',
        'application mobile de livraison (android studio)',
        'Développement d’un outil IA de détection automatique de médicaments, réduisant de 50% le temps de contrôle en milieu hospitalier',
        '2ème prix au concours Med\'Ing Hack (Octobre 2023)',
        'Coach Med\'Ing Hack (Octobre 2024)',
        'Responsable événements – Association Esig’Afrik, contribuant à renforcer la vie associative et la cohésion étudiante',
        'Projet initiative et créativité pour le recyclage',
        'Erasmus+ pour un stage de 6 mois à l’UPV en Espagne',
        'Badge Mobilité Normandie',
        'Parcours ISN - ESIGELEC',
        
      ]
    },
    {
      type: 'education',
      title: 'Classes Préparatoires Scientifiques',
      company: 'CPS Dakar',
      location: 'Dakar, Sénégal',
      period: '2019 – 2021',
      description: 'Formation intensive en Mathématiques, Informatique et Sciences de l’Ingénieur.',
      technologies: [],
      achievements: [
        'Acquisition d’une rigueur scientifique et d’une forte capacité de résolution de problèmes complexes'
      ]
    },
    {
      type: 'education',
      title: 'Baccalauréat Scientifique S2',
      company: 'CSC Dakar',
      location: 'Dakar, Sénégal',
      period: '2019',
      technologies: [],
      achievements: [
        'passage du concours pour l\'entrée en classes préparatoires'
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
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-1 bg-blue-500 dark:bg-blue-600"></div>

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
              {/* Timeline dot - version moderne */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full border-4 border-white dark:border-gray-900 z-10 shadow-lg shadow-blue-500/30 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse opacity-70"></div>
                <div className="w-2 h-2 bg-white rounded-full z-20"></div>
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

                  {/* Technologies - seulement si des technologies sont présentes */}
                  {exp.technologies && exp.technologies.length > 0 && (
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
                  )}

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
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Boutons de téléchargement pour ESIGELEC */}
                  {exp.company === 'ESIGELEC' && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      <a 
                        href="/documents/diplome_Attestation_Diplôme.pdf" 
                        target="_blank"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Attestation de diplôme
                      </a>
                      <a 
                        href="/documents/PPP_NFM_bon.pdf" 
                        target="_blank"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Projet Personnel Professionnel
                      </a>
                    </div>
                  )}
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
