export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  links: {
    demo?: string
    github?: string
    video?: string
    documentation?: string
  }
  status: 'Terminé' | 'En cours' | 'Planifié'
  category: string
  date: string
}

export interface Experience {
  id: string
  type: 'work' | 'education'
  title: string
  company: string
  location: string
  period: string
  description: string
  technologies: string[]
  achievements: string[]
}

export interface Skill {
  name: string
  level: number
  color: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  socialLinks: {
    github?: string
    linkedin?: string
    twitter?: string
    instagram?: string
  }
}

export interface PersonalInfo {
  name: string
  title: string
  bio: string
  shortBio: string
  avatar: string
  resume: string
  resumeUrl: string
  location: string
  age: number
  education: string
  experience: string
  email: string
}

export interface NavItem {
  name: string
  href: string
  icon: any
}
