import { PersonalInfo, ContactInfo } from '@/types'

export const personalInfo: PersonalInfo = {
  name: 'Votre Nom',
  title: 'Développeur Full Stack',
  bio: 'Passionné par le développement web depuis plusieurs années, je me spécialise dans la création d\'applications modernes et performantes. Mon approche combine créativité et rigueur technique pour livrer des solutions qui dépassent les attentes.',
  avatar: '/images/avatar.jpg',
  resume: '/documents/cv.pdf',
  location: 'Votre Ville, Pays',
  age: 25,
  education: 'Master en Informatique',
  experience: '3+ années'
}

export const contactInfo: ContactInfo = {
  email: 'votre.email@example.com',
  phone: '+33 X XX XX XX XX',
  location: 'Votre Ville, Pays',
  socialLinks: {
    github: 'https://github.com/votre-username',
    linkedin: 'https://linkedin.com/in/votre-profile',
    twitter: 'https://twitter.com/votre-username'
  }
}
