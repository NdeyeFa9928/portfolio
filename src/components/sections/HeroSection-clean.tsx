'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { personalInfo } from '@/data/personal'

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-lg text-blue-600 font-medium">Bonjour, je suis</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-lg">
                {personalInfo.age} ans • {personalInfo.tagline}
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 text-gray-600">
                <span className="text-blue-600">📍</span>
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <span className="text-blue-600">📞</span>
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <span className="text-blue-600">📧</span>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <span className="text-blue-600">🌍</span>
                <span>{personalInfo.mobility}</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <span className="mr-2">📥</span>
                Télécharger mon CV
              </a>
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                En savoir plus
                <span className="ml-2">⬇️</span>
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex space-x-4"
            >
              {personalInfo.socialLinks.linkedin && (
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
                >
                  <span className="text-2xl">💼</span>
                </a>
              )}
              {personalInfo.socialLinks.github && (
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-gray-400"
                >
                  <span className="text-2xl">🔗</span>
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full transform rotate-6"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full transform -rotate-6"></div>
              
              {/* Photo */}
              <div className="relative w-full h-full bg-white rounded-full p-2 shadow-2xl">
                <Image
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg"
              >
                <span className="text-2xl">💻</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
          >
            <span className="text-2xl">⬇️</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
