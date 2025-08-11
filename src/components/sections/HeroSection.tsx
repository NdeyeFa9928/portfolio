'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { personalInfo } from '@/data/personal'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }
  
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  
  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
  }
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  
  // Phrases d'accroche animées
  const roleTitles = [
    "Ingénieure logicielle Fullstack",
    "Solutions performantes",
    "+2 ans d'expérience",
    "Passionnée d'innovation",
    "Python & Java"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roleTitles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24">
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
              className="space-y-3 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-sm"
            >
              <div className="flex items-center">
                <motion.p 
                  className="text-lg text-blue-600 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Bonjour
                </motion.p>
                <motion.span 
                  className="text-lg ml-2"
                  initial={{ rotate: -45, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20, 
                    delay: 0.5 
                  }}
                  whileHover={{ rotate: 20, scale: 1.2 }}
                >
                  👋
                </motion.span>
                <motion.p 
                  className="text-lg text-blue-600 font-medium ml-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  , je suis
                </motion.p>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Ndeye Fatou
              </h1>
              
              {/* Titre animé qui change */}
              <div className="h-14">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={currentRoleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
                  >
                    {roleTitles[currentRoleIndex]}
                  </motion.h2>
                </AnimatePresence>
              </div>
              
              <p className="text-lg text-gray-700 max-w-lg font-medium">
              Spécialisée en développement fullstack, je conçois des solutions fiables et évolutives
              </p>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 leading-relaxed max-w-lg space-y-3"
            >
              <p>Ingénieure logicielle fullstack passionnée, avec plus de 2 ans d'expérience en développement web et logiciel.</p>
              <p>J'aide les entreprises à créer des solutions performantes et évolutives grâce à ma proactivité et ma capacité d'adaptation.</p>
              <div className="text-blue-600 font-medium">
                {[
                  { name: "Python", delay: 0.1 },
                  { name: "Java", delay: 0.2 },
                  { name: "PostgreSQL", delay: 0.3 },
                  { name: "QGIS", delay: 0.4 },
                  { name: "VB.NET", delay: 0.5 },
                  { name: "JavaScript", delay: 0.6 }
                ].map((skill, index) => (
                  <motion.span 
                    key={index}
                    className="bg-blue-100 px-2 py-1 rounded mr-1 inline-block mb-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: skill.delay }}
                    whileHover={{ scale: 1.05, backgroundColor: "#dbeafe" }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Spacing element to replace contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="h-4"
            >
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 sm:justify-start justify-center"
            >
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg group"
              >
                <span className="mr-2 group-hover:animate-bounce">🚀</span>
                Découvrir mes projets
              </button>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg group"
              >
                <span className="mr-2 group-hover:animate-pulse">📄</span>
                Télécharger mon CV
              </a>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-medium rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg group"
              >
                <motion.span 
                  className="mr-2"
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >  ✉️</motion.span>
                Me contacter  
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
              {/* Background decoration - enhanced with more vibrant gradients */}
              <motion.div 
                animate={{ rotate: [6, 8, 6] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"
              ></motion.div>
              <motion.div 
                animate={{ rotate: [-6, -8, -6] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"
              ></motion.div>
              
              {/* Photo with enhanced glow effect */}
              <div className="relative w-full h-full bg-white rounded-full p-2 shadow-2xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 rounded-full opacity-75 blur-sm"></div>
                <div className="relative w-full h-full bg-white rounded-full p-1">
                  <Image
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    fill
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Floating elements with clickable actions */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg cursor-pointer hover:bg-blue-50 transition-colors"
                onClick={scrollToSkills}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-2xl">💻</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg cursor-pointer hover:bg-blue-50 transition-colors"
                onClick={scrollToProjects}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - plus visible */}
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
            className="p-3 bg-white/80 rounded-full shadow-md text-gray-600 hover:text-blue-600 hover:bg-white hover:scale-110 transition-all"
            whileHover={{ scale: 1.2 }}
          >
            <span className="text-2xl">⬇️</span>
          </motion.button>
        </motion.div>
        
        {/* Contact button flottant */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, type: "spring" }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-xl text-white hover:shadow-2xl transition-all border-2 border-white/20"
            animate={{
              boxShadow: ["0 10px 15px -3px rgba(0, 0, 0, 0.1)", "0 20px 25px -5px rgba(0, 0, 0, 0.1)", "0 10px 15px -3px rgba(0, 0, 0, 0.1)"]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            <span className="text-2xl">✉️</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
