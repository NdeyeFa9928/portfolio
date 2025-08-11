// Données personnelles pour le portfolio

export const personalInfo = {
  name: 'Ndeye Fatou',
  title: 'Ingénieure Logicielle Fullstack',
  age: 24,
  tagline: 'Un ingénieur est un artisan du futur qui conçoit avec rigueur les outils du progrès',
  email: 'fatoumbow.work@outlook.fr',
  phone: '+33 6 67 04 78 72',
  location: 'Sotteville-lès-Rouen (76)',
  mobility: 'Mobilité sur toute la France',
  drivingLicense: 'Permis B',
  bio: 'Ingénieure logicielle fullstack passionnée, j\'aide les entreprises à concevoir des solutions performantes et évolutives, en mettant à profit mes 2+ années d\'expérience, ma proactivité et ma capacité d\'adaptation.',
  shortBio: 'Ingénieure fullstack Python & Java passionnée par l\'innovation',
  avatarUrl: '/images/IMG_1918.JPG',
  resumeUrl: '/documents/CV_CDI_NFM.pdf',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/ndeyefa',
    github: 'https://github.com/NdeyeFa9928',
  },
  languages: [
    { name: 'Français', level: 'Natif', percent: 100 },
    { name: 'Anglais', level: 'B2 (TOEIC 800)', percent: 80 },
    { name: 'Espagnol', level: 'Intermédiaire', percent: 60 },
  ],
}

export const experiences = [
  {
    title: 'Ingénieure Logicielle',
    company: 'COLAS - Technologies Nouvelles',
    location: 'Bihorel, Rouen',
    period: 'Oct. 2023 – Sept. 2024 (CDD, 2 ans)',
    description: 'Développement fullstack en Python, VB et QGIS pour l\'auscultation de chaussées (IPM, mesure, floutage). Gestion de projet Scrum, Azure DevOps, conventions Google Karma.',
    skills: ['Python', 'VB.NET', 'PostgreSQL', 'QGIS', 'Git', 'Azure DevOps', 'Scrum', 'Trello'],
    logo: '/images/colas-logo.png',
    link: 'https://moncvnfm.my.canva.site/ma-mission-au-sein-de-tn'
  },
  {
    title: 'Cheffe de Projet',
    company: 'Hôpital Yvetot',
    location: 'Technopole, Rouen',
    period: 'Déc. 2023 – Mars 2024 (Projet Ingénieur, 4 mois)',
    description: 'Développement d\'un outil (Python, Roboflow) permettant la détection de médicaments dans un pilulier hospitalier. Management d\'équipe et respect des contraintes du secteur médical.',
    skills: ['Python', 'YOLOv8', 'Roboflow', 'IA', 'Apprentissage automatique', 'Git', 'Management'],
    logo: '/images/hopital-logo.png'
  },
  {
    title: 'Développeuse Fullstack',
    company: 'UPV – Universitat Politècnica de València',
    location: 'Valencia, Espagne',
    period: 'Avr. 2023 – Sept. 2023 (Stage Erasmus, 6 mois)',
    description: 'Conception et développement du simulateur web DET2020, destiné à l\'apprentissage des fonctions logiques à l\'UPV.',
    skills: ['JavaScript', 'SVG', 'Figma', 'Full Stack', 'Web', 'Gestion de projet'],
    logo: '/images/upv-logo.png',
    link: 'https://moncvnfm.my.canva.site/det2020'
  },
  {
    title: 'Agent de production',
    company: 'Groupe La Poste',
    location: 'France',
    period: 'Nov. 2024 – Déc. 2025 (CDD en cours)',
    description: 'Tri de courriers - Job étudiant. Sens de l\'organisation, rigueur et fiabilité.',
    skills: ['Organisation', 'Rigueur', 'Fiabilité'],
    logo: '/images/laposte-logo.png'
  }
]

export const projects = [
  {
    title: 'Outils d\'Auscultation Routière - COLAS',
    description: 'Développement fullstack en Python, VB et QGIS pour l\'auscultation de chaussées (IPM, mesure, floutage). Gestion de projet Scrum et Azure DevOps.',
    tags: ['Python', 'VB.NET', 'QGIS', 'PostgreSQL', 'Azure DevOps'],
    imageUrl: '/images/projects/colas-tools.jpg',
    demoUrl: 'https://moncvnfm.my.canva.site/ma-mission-au-sein-de-tn',
    codeUrl: '',
    featured: true
  },
  {
    title: 'Détection IA de Médicaments - Hôpital Yvetot',
    description: 'Outil de détection automatique de médicaments dans un pilulier hospitalier utilisant YOLOv8 et Roboflow. Respect des contraintes du secteur médical.',
    tags: ['Python', 'YOLOv8', 'Roboflow', 'IA', 'Computer Vision'],
    imageUrl: '/images/projects/ia-medicaments.jpg',
    demoUrl: '',
    codeUrl: '',
    featured: true
  },
  {
    title: 'Simulateur Web DET2020 - UPV Erasmus',
    description: 'Simulateur éducatif interactif pour l\'apprentissage des fonctions logiques, développé lors du stage Erasmus à Valencia.',
    tags: ['JavaScript', 'SVG', 'Figma', 'Web', 'Éducation'],
    imageUrl: '/images/projects/det2020.jpg',
    demoUrl: 'https://moncvnfm.my.canva.site/det2020',
    codeUrl: '',
    featured: true
  },
  {
    title: 'Application Mobile de Livraison',
    description: 'Application mobile pour la gestion de livraison de commandes développée en Java avec Android Studio.',
    tags: ['Java', 'Android Studio', 'Mobile', 'Full Stack'],
    imageUrl: '/images/projects/android-delivery.jpg',
    demoUrl: 'https://moncvnfm.my.canva.site/android-app',
    codeUrl: ''
  },
  {
    title: 'Site E-commerce Restaurant - ESIGELEC',
    description: 'Site web de vente en ligne pour le restaurant de l\'école développé en PHP, HTML et CSS avec cycle en V.',
    tags: ['PHP', 'HTML', 'CSS', 'Full Stack', 'Cycle en V'],
    imageUrl: '/images/projects/ecommerce-restaurant.jpg',
    demoUrl: 'https://nfm.free.nf/',
    codeUrl: ''
  },
  {
    title: 'Projet PING - Portfolio Personnel',
    description: 'Projet personnel de création d\'un portfolio web avec des technologies modernes.',
    tags: ['Web', 'Portfolio', 'Design'],
    imageUrl: '/images/projects/ping-portfolio.jpg',
    demoUrl: 'https://moncvnfm.my.canva.site/ping',
    codeUrl: ''
  }
]

export const skills = {
  backend: [
    { name: 'Python', level: 90, color: 'bg-blue-500' },
    { name: 'Java', level: 85, color: 'bg-orange-600' },
    { name: 'PHP', level: 75, color: 'bg-purple-600' },
    { name: 'SQL/PL-SQL', level: 80, color: 'bg-blue-700' },
    { name: 'VB.NET', level: 85, color: 'bg-blue-800' },
    { name: 'C#', level: 70, color: 'bg-green-600' },
  ],
  frontend: [
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { name: 'HTML', level: 90, color: 'bg-orange-500' },
    { name: 'CSS', level: 85, color: 'bg-blue-500' },
    { name: 'SVG', level: 75, color: 'bg-gray-600' },
    { name: 'Figma', level: 80, color: 'bg-purple-500' },
  ],
  databases: [
    { name: 'PostgreSQL', level: 85, color: 'bg-blue-600' },
    { name: 'MySQL', level: 80, color: 'bg-orange-500' },
    { name: 'SQLDeveloper', level: 75, color: 'bg-red-500' },
    { name: 'PGAdmin', level: 85, color: 'bg-green-600' },
  ],
  tools: [
    { name: 'Git', level: 90, color: 'bg-orange-600' },
    { name: 'Azure DevOps', level: 85, color: 'bg-blue-700' },
    { name: 'Trello', level: 80, color: 'bg-blue-400' },
    { name: 'Scrum', level: 85, color: 'bg-green-500' },
    { name: 'QGIS', level: 90, color: 'bg-green-600' },
    { name: 'YOLOv8/Roboflow', level: 80, color: 'bg-purple-600' },
  ],
}

export const achievements = [
  {
    title: 'Bourse Erasmus+',
    description: 'Bénéficiaire d\'une bourse Erasmus+ pour un stage de 6 mois à l\'UPV en Espagne.',
    icon: '🎓',
    year: '2023'
  },
  {
    title: '2ème Prix au Concours',
    description: '2ème prix au concours de programmation (Octobre 2023).',
    icon: '🏆',
    year: '2023'
  },
  {
    title: 'Coach Med\'Ing Hack',
    description: 'Coach lors du hackathon Med\'Ing Hack (Octobre 2024).',
    icon: '💻',
    year: '2024'
  },
  {
    title: 'Badge Mobilité Normandie',
    description: 'Reconnaissance pour l\'expérience internationale et la mobilité.',
    icon: '🌍',
    year: '2023'
  },
  {
    title: 'Responsable Événements - Esig\'Afrik',
    description: 'Responsable des événements de l\'association Esig\'Afrik à l\'ESIGELEC.',
    icon: '👥',
    year: '2023-2024'
  },
  {
    title: 'Parcours ISN - ESIGELEC',
    description: 'Ingénieurs des Services du Numérique - Spécialisation en développement.',
    icon: '🎯',
    year: '2021-2024'
  }
]

export const blogPosts = [
  {
    title: 'Clean Code en Python',
    excerpt: 'Principes et bonnes pratiques pour écrire du code Python maintenable et lisible.',
    date: '2023-11-15',
    slug: 'clean-code-python',
  },
  {
    title: 'Conventions Google Karma',
    excerpt: 'Comment structurer vos messages de commit pour une meilleure collaboration.',
    date: '2023-09-22',
    slug: 'google-karma-conventions',
  },
  {
    title: 'IA en Santé',
    excerpt: 'Défis et opportunités de l\'intelligence artificielle dans le secteur médical.',
    date: '2023-07-10',
    slug: 'ia-sante-defis',
  },
]
