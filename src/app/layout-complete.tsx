'use client'

import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { personalInfo } from '@/data/personal'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <title>{personalInfo.name} | {personalInfo.title}</title>
        <meta name="description" content={personalInfo.bio} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
