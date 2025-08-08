'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Play } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Plateforme e-commerce complète avec panier, paiement et gestion des commandes. Interface moderne et responsive.',
    image: '/placeholder-project-1.jpg',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Authentification utilisateur',
      'Panier et checkout',
      'Dashboard admin',
      'Paiements sécurisés'
    ],
    links: {
      demo: '#',
      github: '#',
      video: '#'
    },
    status: 'Terminé',
    category: 'Web App'
  },
  {
    title: 'Task Management App',
    description: 'Application de gestion de tâches collaborative avec drag & drop, notifications en temps réel et tableaux Kanban.',
    image: '/placeholder-project-2.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Material-UI'],
    features: [
      'Tableaux Kanban',
      'Collaboration temps réel',
      'Notifications push',
      'Gestion des équipes'
    ],
    links: {
      demo: '#',
      github: '#',
      video: '#'
    },
    status: 'En cours',
    category: 'SaaS'
  },
  {
    title: 'Portfolio Personnel',
    description: 'Site portfolio responsive avec animations fluides, mode sombre et optimisé pour les performances.',
    image: '/placeholder-project-3.jpg',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
    features: [
      'Design responsive',
      'Animations fluides',
      'Mode sombre',
      'SEO optimisé'
    ],
    links: {
      demo: '#',
      github: '#'
    },
    status: 'Terminé',
    category: 'Portfolio'
  },
  {
    title: 'API REST Blog',
    description: 'API REST complète pour un blog avec authentification JWT, upload d\'images et système de commentaires.',
    image: '/placeholder-project-4.jpg',
    technologies: ['Node.js', 'Express', 'JWT', 'Cloudinary', 'PostgreSQL'],
    features: [
      'Authentification JWT',
      'CRUD articles',
      'Upload images',
      'Système commentaires'
    ],
    links: {
      github: '#',
      documentation: '#'
    },
    status: 'Terminé',
    category: 'Backend'
  }
]

const categories = ['Tous', 'Web App', 'SaaS', 'Portfolio', 'Backend']

export default function ProjectsSection() {
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
          Mes Projets
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Une sélection de projets qui démontrent mes compétences et ma passion pour le développement
        </p>
      </motion.div>

      {/* Filter Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              index === 0
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-gray-700 dark:to-gray-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Terminé'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-xs font-medium">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Fonctionnalités principales
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {project.links.demo && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.links.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                )}
                
                {project.links.github && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.links.github}
                    className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                )}

                {project.links.video && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.links.video}
                    className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm font-medium"
                  >
                    <Play size={16} />
                    Vidéo
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Vous avez un projet en tête ? Discutons-en !
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
        >
          Commencer un projet
        </motion.button>
      </motion.div>
    </div>
  )
}
