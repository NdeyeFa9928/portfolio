'use client'

import { blogPosts } from '@/data/personal'

export default function BlogSection() {
  // Fonction pour formater la date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('fr-FR', options)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Partage de Connaissances
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Articles techniques et réflexions sur le développement logiciel
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* En-tête de l'article */}
            <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-700"></div>
            
            {/* Contenu */}
            <div className="p-6 flex-grow flex flex-col">
              <div className="text-sm text-gray-500 mb-2">
                {formatDate(post.date)}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {post.title}
              </h3>
              
              <p className="text-gray-600 mb-6 flex-grow">
                {post.excerpt}
              </p>
              
              <a 
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                Lire l'article
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Appel à l'action */}
      <div className="text-center mt-16">
        <p className="text-gray-600 mb-6">
          Vous souhaitez en savoir plus sur un sujet technique particulier ?
        </p>
        <a 
          href="#contact" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Me suggérer un sujet
        </a>
      </div>
    </div>
  )
}
