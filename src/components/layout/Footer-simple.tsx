'use client'

import { motion } from 'framer-motion'

const socialLinks = [
  { name: 'GitHub', href: '#', icon: '🔗' },
  { name: 'LinkedIn', href: '#', icon: '💼' },
  { name: 'Email', href: 'mailto:', icon: '📧' },
]

export default function FooterSimple() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Portfolio</h3>
            <p className="text-gray-400">
              Ingénieure logicielle fullstack passionnée par l'innovation et le développement de solutions performantes.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">À propos</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Compétences</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Expérience</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projets</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Suivez-moi</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {currentYear} Portfolio. Tous droits réservés.
            </p>
            <p className="text-gray-400 flex items-center mt-2 md:mt-0">
              Fait avec <span className="text-red-500 mx-1">❤️</span> et Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
