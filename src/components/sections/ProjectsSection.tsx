'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Play } from 'lucide-react'
import Image from 'next/image'
import ImageCarousel from '../ui/ImageCarousel'

const projects = [
  {
    title: 'Outils IPM – Auscultation de chaussées',
    description:
      "Suite d'outils pour le traitement d’images et de données géospatiales dans le cadre de l’auscultation routière (IPM, mesure, floutage).",
    images: [
      '/images_project/IPM_1.jpg',
      '/images_project/IPM_2.png',
      '/images_project/IPM_3.png'
    ],
    technologies: ['Python','tkinter', 'GDAL', 'Pyproj', 'QGIS', 'Git',],
    features: [
      'Correction de perspective et distorsion optique',
      'Géoréférencement automatique avec GDAL et Pyproj',
      'Superposition et fusion d’images',
      'Ouverture et analyse dans QGIS',
      'Réduction de 30% du temps d’analyse terrain'
    ],
    links: { demo: 'https://moncvnfm.my.canva.site/ma-mission-au-sein-de-tn', github: '', video: '' }, // interne
    status: 'Terminé',
    category: 'SIG / Géospatial'
  },
  {
    title: 'DataChecker – Contrôle automatisé de données capteurs',
    description:
      "Application Python avec interface PyQt5 pour vérifier et comparer les données issues de plusieurs systèmes de mesure (AP, LCMS, VIAPIX, LASERPROF) par rapport à une référence.",
    images: [
      '/images_project/DataChecker.png',
      '/images_project/DataChecker2.png',
      '/images_project/DataChecker3.png'
    ],
    technologies: ['Python', 'PyQt5', 'Pandas', 'SQLite', 'Git'],
    features: [
      'Chargement et structuration automatique des données',
      'Analyse par pas configurable pour chaque valeur',
      'Affichage visuel des résultats avec codes couleurs',
      'Impact : réduction significative des erreurs de saisie et gain de temps pour l’équipe terrain'
    ],
    links: { demo: '', github: '' }, // interne
    status: 'Terminé',
    category: 'Data / Outils internes'
  },
  {
    title: 'VisionneuseTN - Ajout système de mesure',
    description:
      "Amélioration d’une application interne de visualisation d’images en y intégrant un système de mesure basé sur des grilles de référence. Permet de placer des points, recalculer la grille et afficher les mesures directement sur l’image.",
    images: [
      '/images_project/VIS.png'
    ],
    technologies: ['VB.NET', 'Windows Forms','visual studio','viapix'],
    features: [
      'Intégration d’une grille de référence fournie par un technicien',
      'Développement du placement de points et recalcul de la grille',
      'Calcul automatique des distances à partir des points placés',
      'Gestion de l’affichage dynamique de la grille dans l’application',
      'Support de plusieurs grilles et chargement automatique selon l’image',
      'Impact : gain de précision et rapidité pour les mesures client',
      'fiabilité de l’application : 98% '
    ],
    links: { demo: 'https://moncvnfm.my.canva.site/ma-mission-au-sein-de-tn', github: '' }, // interne
    status: 'Terminé',
    category: 'SIG / Géospatial'
  },  
  {
    title: 'Détection de médicaments par IA',
    description:
      "Outil de vision par ordinateur permettant la détection automatique de médicaments dans un pilulier hospitalier.",
    images: [
      '/images_project/DataChecker.png' // Utilisation temporaire, à remplacer par une image spécifique
    ],
    technologies: ['Python', 'YOLOv8', 'Roboflow', 'OpenCV', 'Git'],
    features: [
      'Entraînement d’un modèle IA sur dataset personnalisé',
      'Détection en temps réel et génération de rapports',
      'Respect des normes et contraintes médicales',
      'Impact : réduction de 50% du temps de contrôle'
    ],
    links: { demo: '', github: '', video: '' },
    status: 'Terminé',
    category: 'IA / Computer Vision'
  },
  {
    title: 'DET2020 – Simulateur web (UPV)',
    description:
      "Application pédagogique pour l’apprentissage des fonctions logiques, développée lors d’un stage Erasmus+ à l’UPV (Espagne).",
    images: [
      '/images_project/det2020.png',
      '/images_project/det2020_2.png'
    ],
    technologies: ['JavaScript', 'SVG', 'Figma'],
    features: [
      'Interface interactive et ergonomique',
      'Moteur de simulation des fonctions logiques',
      'Optimisation des performances (-40% temps de chargement)',
      'Impact : utilisé par plus de 200 étudiants par semestre'
    ],
    links: {
      demo: 'https://moncvnfm.my.canva.site/det2020',
      github: '',
      video: ''
    },
    status: 'Terminé',
    category: 'Web App'
  },
  {
    title: 'PING – Site e-commerce (ESIGELEC)',
    description:
      "Site web de vente en ligne pour un restaurant scolaire, dans le cadre d’un projet de formation.",
    images: [
      '/images_project/DataChecker.png' // Utilisation temporaire, à remplacer par une image spécifique
    ],
    technologies: ['PHP', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Catalogue et gestion du panier',
      'Gestion des commandes côté administrateur',
      'Cycle en V et intégration continue',
      'Impact : prise de commandes en ligne et meilleure visibilité'
    ],
    links: {
      demo: 'https://nfm.free.nf/',
      github: '',
      video: ''
    },
    status: 'Terminé',
    category: 'Web App'
  },
  {
    title: 'Application Android de livraison',
    description:
      "Application mobile de gestion de livraisons avec suivi des commandes et interface simple.",
    images: [
      '/images_project/android.png'
    ],
    technologies: ['Java', 'Android Studio'],
    features: [
      'Liste et détails des commandes',
      'Mise à jour du statut de livraison',
      'Interface native Android',
      'Impact : simplification du suivi des livraisons'
    ],
    links: {
      demo: 'https://moncvnfm.my.canva.site/android-app',
      github: ''
    },
    status: 'Terminé',
    category: 'Mobile'
  },
  {
    title: 'Portfolio personnel',
    description:
      'Site portfolio responsive avec animations fluides, mode sombre et optimisation SEO.',
    images: [
      '/images_project/DataChecker.png' // Utilisation temporaire, à remplacer par une image spécifique
    ],
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
    features: [
      'Design responsive et moderne',
      'Animations fluides avec Framer Motion',
      'Mode sombre intégré',
      'Impact : vitrine claire et professionnelle de mes projets'
    ],
    links: { demo: '#', github: '#' },
    status: 'Terminé',
    category: 'Portfolio'
  }
]

const categories = [
  'Tous',
  'Web App',
  'Mobile',
  'IA / Computer Vision',
  'SIG / Géospatial',
  'Portfolio'
]


export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('Tous')
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
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              category === activeCategory
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
        {projects
          .filter(project => activeCategory === 'Tous' || project.category === activeCategory)
          .map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Project Image Carousel */}
            <ImageCarousel 
              images={project.images} 
              alt={project.title}
            />
              
            {/* Status Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                project.status === 'Terminé'
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
              }`}>
                {project.status}
              </span>
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-xs font-medium">
                {project.category}
              </span>
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
