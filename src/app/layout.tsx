import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Votre Nom',
  description: 'Portfolio professionnel showcasing mes compétences et expériences',
  keywords: ['portfolio', 'développeur', 'web', 'react', 'nextjs'],
  authors: [{ name: 'Votre Nom' }],
  creator: 'Votre Nom',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://votre-portfolio.vercel.app',
    title: 'Portfolio - Votre Nom',
    description: 'Portfolio professionnel showcasing mes compétences et expériences',
    siteName: 'Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Votre Nom',
    description: 'Portfolio professionnel showcasing mes compétences et expériences',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
