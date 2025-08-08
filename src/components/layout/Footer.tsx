'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Email', href: 'mailto:', icon: Mail },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-gray-400 max-w-md">
              Développeur passionné créant des expériences web modernes et innovantes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigation rapide</h4>
            <div className="grid grid-cols-2 gap-2">
              {['À propos', 'Compétences', 'Expérience', 'Projets', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  whileHover={{ x: 5 }}
                  href={`#${item.toLowerCase().replace('à ', '').replace('é', 'e')}`}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Suivez-moi</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={link.href}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors duration-200"
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Portfolio. Tous droits réservés.
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-sm flex items-center gap-1"
            >
              Fait avec <Heart size={16} className="text-red-500" /> et Next.js
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}
