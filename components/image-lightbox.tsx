"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Download, Share2 } from 'lucide-react'
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface LightboxImage {
  src: string
  alt: string
  title?: string
  description?: string
}

interface ImageLightboxProps {
  images: LightboxImage[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export default function ImageLightbox({ 
  images, 
  currentIndex, 
  isOpen, 
  onClose, 
  onNext, 
  onPrevious 
}: ImageLightboxProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          onPrevious()
          break
        case 'ArrowRight':
          onNext()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, onNext, onPrevious])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !images[currentIndex]) return null

  const currentImage = images[currentIndex]

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = currentImage.src
    link.download = currentImage.alt || 'image'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentImage.title || currentImage.alt,
          text: currentImage.description || 'Check out this amazing product photo!',
          url: window.location.href
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <p className="text-sm opacity-75">
                {currentIndex + 1} of {images.length}
              </p>
              {currentImage.title && (
                <h3 className="text-lg sm:text-xl font-semibold mt-1">
                  {currentImage.title}
                </h3>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="text-white hover:bg-white/20 p-2"
              >
                <Share2 className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDownload}
                className="text-white hover:bg-white/20 p-2"
              >
                <Download className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-white hover:bg-white/20 p-2"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                onPrevious()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 p-3 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                onNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 p-3 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </>
        )}

        {/* Main Image */}
        <div className="flex items-center justify-center h-full p-4 sm:p-16">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              </div>
            )}
            
            <Image
              src={currentImage.src || "/placeholder.svg"}
              alt={currentImage.alt}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onLoad={() => setIsLoading(false)}
              priority
            />
            
            {currentImage.description && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-sm sm:text-base">
                  {currentImage.description}
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
            <div className="flex space-x-2 bg-black/50 rounded-lg p-2 max-w-xs sm:max-w-md overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    // Handle thumbnail click to change current image
                  }}
                  className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded overflow-hidden flex-shrink-0 ${
                    index === currentIndex ? 'ring-2 ring-white' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
