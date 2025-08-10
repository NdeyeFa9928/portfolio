'use client'

import HeroSectionUpdated from '@/components/sections/HeroSection-updated'
import SkillsSectionUpdated from '@/components/sections/SkillsSection-updated'
import ExperienceSectionUpdated from '@/components/sections/ExperienceSection-updated'
import ProjectsSectionUpdated from '@/components/sections/ProjectsSection-updated'
import BlogSection from '@/components/sections/BlogSection'
import ContactSectionUpdated from '@/components/sections/ContactSection-updated'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Section Hero */}
      <section id="hero" className="bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <HeroSectionUpdated />
      </section>
      
      {/* Section Compétences */}
      <section id="skills" className="py-12 bg-white">
        <SkillsSectionUpdated />
      </section>
      
      {/* Section Expérience */}
      <section id="experience" className="py-12 bg-gray-50">
        <ExperienceSectionUpdated />
      </section>
      
      {/* Section Projets */}
      <section id="projects" className="py-12 bg-white">
        <ProjectsSectionUpdated />
      </section>
      
      {/* Section Blog */}
      <section id="blog" className="py-12 bg-gray-50">
        <BlogSection />
      </section>
      
      {/* Section Contact */}
      <section id="contact" className="py-12 bg-white">
        <ContactSectionUpdated />
      </section>
    </main>
  )
}
