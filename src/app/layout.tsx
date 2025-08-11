import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Ndeye Fa | Ingénieure Logicielle Fullstack',
  description: 'Ingénieure logicielle fullstack avec +2 ans d\'expérience. Spécialisée en Python, Java, JavaScript. Passionnée par l\'innovation et le développement de solutions performantes.',
  keywords: ['portfolio', 'ingénieure logicielle', 'fullstack', 'python', 'java', 'javascript', 'développement web', 'ndeye fa'],
  authors: [{ name: 'Ndeye Fa' }],
  creator: 'Ndeye Fa',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://ndeye-fa-portfolio.vercel.app',
    title: 'Portfolio - Ndeye Fa | Ingénieure Logicielle Fullstack',
    description: 'Ingénieure logicielle fullstack avec +2 ans d\'expérience. Spécialisée en Python, Java, JavaScript.',
    siteName: 'Portfolio Ndeye Fa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Ndeye Fa | Ingénieure Logicielle Fullstack',
    description: 'Ingénieure logicielle fullstack avec +2 ans d\'expérience. Spécialisée en Python, Java, JavaScript.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
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
