"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CarouselImage {
  src: string
  alt: string
  title: string
  category: string
}

interface EnhancedCarouselProps {
  images: CarouselImage[]
  autoPlay?: boolean
  interval?: number
}

export default function EnhancedCarousel({ images, autoPlay = true, interval = 4000 }: EnhancedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(nextSlide, interval)
      return () => clearInterval(timer)
    }
  }, [autoPlay, interval])

  return (
    <div className="relative w-full h-[500px] perspective-1000 overflow-hidden rounded-3xl">
      <div className="relative w-full h-full preserve-3d">
        {images.map((image, index) => {
          const offset = index - currentIndex
          const absOffset = Math.abs(offset)
          const isActive = offset === 0
          
          return (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full"
              initial={false}
              animate={{
                rotateY: offset * 25,
                z: isActive ? 0 : -absOffset * 150,
                x: offset * 300,
                opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.2,
                scale: isActive ? 1 : 1 - absOffset * 0.15
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden"
              }}
            >
              <Card className="w-full h-full overflow-hidden shadow-2xl bg-gradient-to-br from-white to-[#F1D9B1]/20 border-0">
                <CardContent className="p-0 relative h-full">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <Badge className="bg-[#F1D9B1]/90 text-gray-800 border-none mb-3 shadow-lg">
                      {image.category}
                    </Badge>
                    <h3 className="text-2xl font-bold drop-shadow-lg">{image.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
      
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:bg-[#F1D9B1]"
      >
        <ChevronLeft className="w-7 h-7 text-gray-700 group-hover:text-gray-900" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:bg-[#F1D9B1]"
      >
        <ChevronRight className="w-7 h-7 text-gray-700 group-hover:text-gray-900" />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-[#F1D9B1] scale-125 shadow-lg' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
