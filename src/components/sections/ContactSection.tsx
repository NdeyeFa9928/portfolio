'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'
import { FormEvent, useState, FormHTMLAttributes } from 'react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'fatoumbow.work@outlook.fr',
    href: 'mailto:fatoumbow.work@outlook.fr'
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '06 67 04 78 72',
    href: 'tel:+33667047872'
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: '76300 Sotteville-lès-Rouen',
    href: 'https://maps.google.com/?q=Sotteville-lès-Rouen'
  }
]

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/NdeyeFa9', color: 'hover:text-gray-900' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/ndeye-fatoumata-mboup/', color: 'hover:text-blue-600' },
  { name: 'Instagram', icon: Mail, href: 'https://www.instagram.com/ndeyefa9928/', color: 'hover:text-pink-500' },
]

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  
  // Fonction pour réinitialiser le formulaire
  const resetForm = () => {
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }
  
  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // Ne pas empêcher le comportement par défaut pour permettre à FormSubmit de traiter le formulaire
    // Mais mettre à jour l'état pour l'interface utilisateur
    setFormStatus('sending')
    
    // Afficher le message d'envoi pendant 1 seconde avant de laisser FormSubmit prendre le relais
    setTimeout(() => {
      // FormSubmit va gérer l'envoi et la redirection
    }, 1000)
    
    // Ne pas réinitialiser le formulaire ici car FormSubmit va rediriger la page
  }
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
          Contactez-moi
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Prêt à donner vie à votre projet ? Discutons de vos idées et créons quelque chose d&apos;extraordinaire ensemble.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Informations de contact
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              N&apos;hésitez pas à me contacter pour discuter de vos projets, poser des questions 
              ou simplement dire bonjour. Je réponds généralement dans les 24 heures.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                href={info.href}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-200">
                  <info.icon size={24} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Suivez-moi
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-200`}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Envoyez-moi un message
          </h3>

          <form 
            className="space-y-6" 
            onSubmit={handleSubmit} 
            // @ts-ignore - Ces attributs sont nécessaires pour FormSubmit mais TypeScript ne les reconnaît pas
            action="https://formsubmit.co/fatoumbow.work@outlook.fr" 
            method="POST"
          >
            {/* Champs cachés pour FormSubmit */}
            <input type="hidden" name="_subject" value="Nouveau message du portfolio" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://ndeyefa9.vercel.app" />
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Prénom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                  placeholder="Votre prénom"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <label htmlFor="_subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                  placeholder="Sujet de votre message"
                  required
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                placeholder="votre.email@example.com"
                required
              />
            </motion.div>

            {/* Pas besoin de champs cachés car nous utilisons mailto */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 resize-none"
                placeholder="Décrivez votre projet ou posez votre question..."
                required
              />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <div className="flex items-center space-x-2">
                <Send className="h-5 w-5" />
                <span>
                  {formStatus === 'idle' && 'Envoyer le message'}
                  {formStatus === 'sending' && 'Envoi en cours...'}
                  {formStatus === 'sent' && 'Message envoyé !'}
                  {formStatus === 'error' && 'Erreur, réessayez'}
                </span>
              </div>
            </motion.button>

            {/* Message de confirmation ou d'erreur */}
            {formStatus === 'sent' && (
              <p className="text-green-600 text-sm mt-2">Votre message a été envoyé avec succès!</p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-600 text-sm mt-2">Une erreur s&apos;est produite. Veuillez réessayer.</p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  )
}
