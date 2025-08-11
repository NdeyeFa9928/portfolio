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
      "Suite d'outils Python pour le traitement avancé d'images et de données géospatiales dans le cadre de l'auscultation routière, permettant l'automatisation des processus de correction, géoréférencement et analyse des images de chaussées.",
    images: [
      '/images_project/IPM_1.jpg',
      '/images_project/IPM_2.png',
      '/images_project/IPM_3.png'
    ],
    technologies: ['Python','tkinter', 'GDAL', 'Pyproj', 'QGIS', 'Git'],
    skills: ['Traitement d\'images', 'Géomatique', 'Automatisation', 'Développement d\'interfaces', 'Algorithmie spatiale', 'Intégration SIG'],
    features: [
      'Correction de perspective et distorsion optique',
      'Géoréférencement automatique avec GDAL et Pyproj',
      'Superposition et fusion d\'images',
      'Ouverture et analyse dans QGIS',
      'Réduction de 30% du temps d\'analyse terrain'
    ],
    links: { demo: 'https://moncvnfm.my.canva.site/ma-mission-au-sein-de-tn', github: '', video: '' }, // interne
    status: 'Terminé',
    category: 'SIG / Géospatial'
  },
  {
    title: 'DataChecker – Contrôle automatisé de données capteurs',
    description:
      "Application desktop professionnelle développée pour COLAS Technologies Nouvelles, permettant l'analyse et la validation automatisée des données multi-sources issues de capteurs d'auscultation routière, avec une interface utilisateur intuitive et un système avancé de détection d'anomalies.",
    images: [
      '/images_project/DataChecker.png',
      '/images_project/DataChecker2.png',
      '/images_project/DataChecker3.png'
    ],
    technologies: ['Python', 'PyQt5', 'Pandas', 'SQLite', 'Access', 'CSV', 'Git'],
    skills: ['Développement d\'interfaces graphiques', 'Traitement de données', 'Interopérabilité multi-formats', 'Gestion d\'erreurs', 'Tests unitaires', 'Documentation technique'],
    features: [
      'Chargement multi-formats : bases Access, SQLite, fichiers .fiss et CSV',
      'Contrôle de cohérence avec une référence définie',
      'Conversion des valeurs en longueurs normalisées',
      'Export des résultats analysés au format CSV',
      'Affichage visuel clair avec codes couleurs (vert/jaune/rouge)',
      'Journal d\'erreurs détaillé pour suivi et diagnostic précis',
      'Impact : réduction significative des erreurs de saisie et gain de temps pour l\'équipe terrain'
    ],
    links: { demo: 'https://moncvnfm.my.canva.site/datachecker', github: '' }, // outil interne, pas de lien public
    status: 'Terminé',
    category: 'Data / Outils internes'
  },
  
  {
    title: 'VisionneuseTN - Ajout système de mesure',
    description:
      "Extension majeure d'une application métier de visualisation d'images routières, intégrant un système de mesure précis basé sur des grilles de référence calibrées. Cette évolution permet aux techniciens d'effectuer des mesures directement sur les images capturées par les véhicules d'auscultation, améliorant significativement la précision et la rapidité des analyses.",
    images: [
      '/images_project/VIS.png'
    ],
    technologies: ['VB.NET', 'Windows Forms', 'Visual Studio', 'Viapix'],
    skills: ['Développement desktop', 'Calcul matriciel', 'Géométrie computationnelle', 'Maintenance applicative', 'Optimisation de performances', 'Tests d\'intégration'],
    features: [
      'Intégration d\'une grille de référence fournie par un technicien',
      'Développement du placement de points et recalcul de la grille',
      'Calcul automatique des distances à partir des points placés',
      'Gestion de l\'affichage dynamique de la grille dans l\'application',
      'Support de plusieurs grilles et chargement automatique selon l\'image',
      'Impact : gain de précision et rapidité pour les mesures client',
      'Fiabilité de l\'application : 98%'
    ],
    links: { demo: 'https://moncvnfm.my.canva.site/ma-mission-au-sein-de-tn', github: '' }, // interne
    status: 'Terminé',
    category: 'SIG / Géospatial'
  },  
  {
    title: 'Détection de médicaments par IA',
    description:
      "Solution innovante de vision par ordinateur développée pour l'Hôpital d'Yvetot, permettant l'identification et la vérification automatique des médicaments dans les piluliers des patients. Ce projet a permis de sécuriser la distribution des médicaments et d'optimiser le temps du personnel soignant grâce à l'intelligence artificielle.",
    images: [
      '/images_project/ping.png' // Utilisation temporaire, à remplacer par une image spécifique
    ],
    technologies: ['Python', 'YOLOv8', 'Roboflow', 'OpenCV', 'Git'],
    skills: ['Intelligence artificielle', 'Computer Vision', 'Gestion de projet', 'Annotation de données', 'Entraînement de modèles', 'Collaboration interdisciplinaire'],
    features: [
      'Entraînement d\'un modèle IA sur dataset personnalisé',
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
      "Application web pédagogique interactive développée pendant mon stage Erasmus+ à l'Université Polytechnique de Valence (Espagne), permettant aux étudiants d'ingénierie d'apprendre et de pratiquer les fonctions logiques électroniques via une interface intuitive et des simulations en temps réel.",
    images: [
      '/images_project/det2020.png',
      '/images_project/det2020_2.png'
    ],
    technologies: ['JavaScript', 'SVG', 'Figma', 'HTML5', 'CSS3'],
    skills: ['Développement frontend', 'Conception UX/UI', 'Optimisation de performances', 'Internationalisation', 'Collaboration internationale', 'Prototypage'],
    features: [
      'Interface interactive et ergonomique',
      'Moteur de simulation des fonctions logiques',
      'Optimisation des performances',
      'Support multilingue (espagnol, anglais)',
      'Impact : utilisé par les étudiants de l\'UPV chez eux'
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
      "Plateforme e-commerce complète développée pour un restaurant scolaire de l'ESIGELEC, permettant aux étudiants de commander leurs repas en ligne. Ce projet académique a été réalisé en équipe avec une méthodologie de développement structurée et a abouti à une solution fonctionnelle déployée en production.",
    images: [
      '/images_project/restau.jpg'
    ],
    technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Bootstrap'],
    skills: ['Développement web fullstack', 'Gestion de base de données', 'Travail en équipe', 'Méthodologie Cycle en V', 'Sécurité web', 'Déploiement'],
    features: [
      'Catalogue de produits avec filtres et recherche',
      'Système de panier et paiement sécurisé',
      'Espace administrateur pour gestion des commandes et produits',
      'Authentification et gestion des comptes utilisateurs',
      'Responsive design pour accès mobile',
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
      "Application mobile native développée pour optimiser le processus de livraison, permettant aux livreurs de suivre leurs commandes en temps réel, de mettre à jour leur statut et d'améliorer la communication avec les clients et le centre de distribution.",
    images: [
      '/images_project/android.png'
    ],
    technologies: ['Java', 'Android Studio', 'SQLite', 'XML', 'Material Design'],
    skills: ['Développement mobile', 'Conception d\'interfaces utilisateur', 'Stockage local de données', 'Tests sur appareils réels', 'Cycle de vie des applications', 'Gestion d\'API'],
    features: [
      'Liste et détails des commandes avec recherche et filtres',
      'Mise à jour du statut de livraison en temps réel',
      'Notifications push pour les nouvelles commandes',
      'Mode hors ligne avec synchronisation automatique',
      'Interface native Android optimisée pour différentes tailles d\'écran',
      'Impact : réduction de 25% du temps de traitement des livraisons'
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
      'Site portfolio professionnel développé avec les technologies modernes du web, présentant mon parcours, mes compétences et mes projets dans une interface interactive et élégante. Conçu comme une vitrine complète de mon profil d\'ingénieure logicielle fullstack, il met en valeur mes réalisations techniques et mon parcours professionnel.',
    images: [
      '/images_project/portfolio.png'
    ],
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React', 'Vercel'],
    skills: ['Développement frontend avancé', 'Architecture React moderne', 'Animations et transitions', 'Responsive design', 'Déploiement continu', 'Optimisation web'],
    features: [
      'Architecture modulaire avec App Router de Next.js 14',
      'Animations fluides et transitions élégantes avec Framer Motion',
      'Mode sombre/clair avec détection automatique des préférences système',
      'Timeline interactive pour les expériences avec points connectés',
      'Carrousel d\'images pour les projets avec navigation intuitive',
      'Filtrage dynamique des projets par catégorie',
      'Téléchargement de documents (CV, diplômes) intégré',
      'Design responsive optimisé pour tous les appareils',
      'Optimisation SEO et performances (Core Web Vitals)',
      'Impact : présentation professionnelle et interactive de mon profil'
    ],
    links: { demo: 'https://ndeye-fa-portfolio.vercel.app', github: 'https://github.com/NdeyeFa9/portfolio' },
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
