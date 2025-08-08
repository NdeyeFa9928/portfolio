'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'

export default function AboutSection() {
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
          À propos de moi
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Découvrez mon parcours, mes passions et ce qui me motive dans le développement web
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Passionné par le développement web depuis plusieurs années, je me spécialise dans la création 
              d'applications modernes et performantes. Mon approche combine créativité et rigueur technique 
              pour livrer des solutions qui dépassent les attentes.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              J'aime relever de nouveaux défis et apprendre constamment les dernières technologies. 
              Mon objectif est de créer des expériences utilisateur exceptionnelles tout en maintenant 
              un code propre et maintenable.
            </p>
          </div>

          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
            {[
              { icon: MapPin, label: 'Localisation', value: 'Votre Ville, Pays' },
              { icon: Calendar, label: 'Âge', value: 'XX ans' },
              { icon: GraduationCap, label: 'Formation', value: 'Votre Formation' },
              { icon: Award, label: 'Expérience', value: '3+ années' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
              >
                <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <item.icon size={20} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image/Video Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative">
            {/* Placeholder pour photo/vidéo */}
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                  📸
                </div>
                <p className="text-gray-600 dark:text-gray-300">Votre photo ici</p>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-6 w-12 h-12 bg-secondary-500 rounded-full opacity-20"
            />
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-300 rounded-lg opacity-30"
            />
          </div>

          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-2 gap-4"
          >
            {[
              { emoji: '☕', text: 'Café par jour', number: '4+' },
              { emoji: '🎵', text: 'Playlist coding', number: '200+' },
              { emoji: '📚', text: 'Livres tech lus', number: '15+' },
              { emoji: '🏆', text: 'Projets finis', number: '50+' },
            ].map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
              >
                <div className="text-2xl mb-2">{fact.emoji}</div>
                <div className="text-lg font-bold text-primary-600">{fact.number}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{fact.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
