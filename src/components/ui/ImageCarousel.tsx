'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageCarouselProps {
  images: string[]
  alt: string
  className?: string
}

export default function ImageCarousel({ images, alt, className = '' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  if (images.length === 0) return null
  if (images.length === 1) {
    return (
      <div className={`relative w-full h-64 overflow-hidden rounded-t-2xl ${className}`}>
        <Image
          src={images[0]}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    )
  }

  return (
    <div 
      className={`relative w-full h-64 overflow-hidden rounded-t-2xl ${className}`}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt={`${alt} - image ${currentIndex + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-10"
        aria-label="Image précédente"
      >
        &larr;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-10"
        aria-label="Image suivante"
      >
        &rarr;
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
