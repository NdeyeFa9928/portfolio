'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/personal'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            À propos de moi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ingénieure Logicielle Fullstack – Python • Java • JavaScript
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Passionnée par le développement logiciel, j'allie rigueur technique et sens de l'adaptation pour concevoir des solutions performantes et maintenables.
                Avec plus de 2 ans d'expérience, j'ai travaillé sur des projets allant de l'auscultation de chaussées à l'IA pour le secteur médical, en passant par le développement web et mobile.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500 mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="mr-2">💡</span> Ce qui me motive
                </h3>
                <p className="text-gray-700">
                  Créer des outils qui répondent à des besoins concrets, tout en veillant à la qualité du code et à l'expérience utilisateur.
                  Mon approche repose sur l'autonomie, la collaboration agile et l'apprentissage continu des dernières technologies.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Compétences clés</h3>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">Langages</p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Java', 'JavaScript', 'PHP', 'C#', 'SQL/PLSQL', 'HTML/CSS'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">Outils & frameworks</p>
                  <div className="flex flex-wrap gap-2">
                    {['QGIS', 'OpenCV', 'Spring Boot', 'Next.js', 'Tailwind CSS', 'Android Studio'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">Méthodes</p>
                  <div className="flex flex-wrap gap-2">
                    {['Scrum', 'Clean Code', 'Conventions Google Karma', 'Gestion de projet Agile'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">Soft skills</p>
                  <div className="flex flex-wrap gap-2">
                    {['Proactivité', 'Organisation', 'Communication', 'Travail en équipe'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Photo with colored border */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-sm opacity-75"></div>
              <div className="relative bg-white p-4 rounded-xl shadow-lg">
                <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
                  <Image
                    src={personalInfo.avatarUrl}
                    alt="Fatou - Ingénieure Logicielle"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            
            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-xl shadow-sm border-t-4 border-blue-500 text-center"
              >
                <p className="text-3xl font-bold text-blue-600">2+</p>
                <p className="text-gray-600 text-sm">ans d'expérience</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-xl shadow-sm border-t-4 border-purple-500 text-center"
              >
                <p className="text-3xl font-bold text-purple-600">5+</p>
                <p className="text-gray-600 text-sm">projets livrés</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-xl shadow-sm border-t-4 border-pink-500 text-center"
              >
                <p className="text-3xl font-bold text-pink-600">2ème</p>
                <p className="text-gray-600 text-sm">prix hackathon</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-xl shadow-sm border-t-4 border-green-500 text-center"
              >
                <p className="text-3xl font-bold text-green-600">🌍</p>
                <p className="text-gray-600 text-sm">Exp. internationale</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
