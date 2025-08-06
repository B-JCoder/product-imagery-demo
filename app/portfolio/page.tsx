"use client"

import { motion } from "framer-motion"
import { ImageIcon, Filter, Grid, List } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import Navigation from "@/components/navigation"
import EnhancedCarousel from "@/components/enhanced-carousel"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
}

export default function PortfolioPage() {
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const heroImages = [
    { src: "/images/plum-chutney.webp", alt: "Featured Work", title: "Premium Quality", category: "Featured" },
    { src: "/images/mango-jam.webp", alt: "Creative Shots", title: "Creative Excellence", category: "Featured" },
    { src: "/images/nail-polish.webp", alt: "Beauty Products", title: "Beauty Focus", category: "Featured" },
    { src: "/images/watch.webp", alt: "Luxury Items", title: "Luxury Appeal", category: "Featured" },
    { src: "/images/perfume-bottle.webp", alt: "Brand Stories", title: "Brand Storytelling", category: "Featured" }
  ]

  const portfolioItems = [
    {
      id: 1,
      src: "/images/nail-polish.webp",
      title: "Premium Nail Polish Collection",
      category: "Beauty & Cosmetics",
      client: "Beauty Brand Co",
      description: "Elegant product photography showcasing the luxury appeal of premium nail polish collection with creative lighting and styling.",
      tags: ["E-commerce", "Beauty", "Luxury"]
    },
    {
      id: 2,
      src: "/images/skincare-tube.webp",
      title: "Skincare Product Line",
      category: "Beauty & Cosmetics",
      client: "Skin Novella",
      description: "Clean, professional shots highlighting the natural ingredients and premium quality of skincare products.",
      tags: ["Skincare", "Natural", "Clean"]
    },
    {
      id: 3,
      src: "/images/seeds-package.webp",
      title: "Health & Wellness Products",
      category: "Health & Wellness",
      client: "Wellness Co",
      description: "Lifestyle photography emphasizing the health benefits and natural quality of wellness products.",
      tags: ["Health", "Natural", "Lifestyle"]
    },
    {
      id: 4,
      src: "/images/perfume-bottle.webp",
      title: "Luxury Fragrance Collection",
      category: "Beauty & Cosmetics",
      client: "Fragrance House",
      description: "Sophisticated product photography capturing the elegance and luxury of premium fragrance bottles.",
      tags: ["Luxury", "Fragrance", "Premium"]
    },
    {
      id: 5,
      src: "/images/mango-jam.webp",
      title: "Artisan Food Products",
      category: "Food & Beverage",
      client: "The Jar Affairs",
      description: "Mouth-watering photography showcasing the artisanal quality and natural ingredients of gourmet preserves.",
      tags: ["Food", "Artisan", "Gourmet"]
    },
    {
      id: 6,
      src: "/images/watch.webp",
      title: "Luxury Timepiece Collection",
      category: "Fashion & Accessories",
      client: "Timepiece Co",
      description: "High-end product photography highlighting the craftsmanship and luxury appeal of premium watches.",
      tags: ["Luxury", "Fashion", "Timepiece"]
    },
    {
      id: 7,
      src: "/images/plum-chutney.webp",
      title: "Gourmet Preserves",
      category: "Food & Beverage",
      client: "Artisan Foods",
      description: "Rustic yet elegant photography showcasing the homemade quality and premium ingredients of artisan preserves.",
      tags: ["Food", "Artisan", "Homemade"]
    },
    {
      id: 8,
      src: "/images/seeds-resized.webp",
      title: "Organic Seeds Collection",
      category: "Health & Wellness",
      client: "Green Life",
      description: "Natural lifestyle photography emphasizing the organic quality and health benefits of premium seeds.",
      tags: ["Organic", "Health", "Natural"]
    }
  ]



  

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F1D9B1]/20 via-white to-[#F1D9B1]/10">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <Badge className="bg-[#F1D9B1]/20 text-[#B8860B] border-[#F1D9B1] mb-4 px-4 py-2">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Our Portfolio
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl lg:text-6xl font-bold leading-tight"
              >
                Stunning Work
                <br />
                That Drives{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">
                  RESULTS
                </span>
              </motion.h1>
              
              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Explore our diverse portfolio of product photography that has helped brands across various industries boost their sales and enhance their visual identity.
                </p>
                <p className="text-lg text-gray-500">
                  From e-commerce ready shots to creative brand storytelling, see how we bring products to life.
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <EnhancedCarousel images={heroImages} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#F1D9B1]/30 to-[#E6C89A]/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
         
            

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-white rounded-lg p-1 shadow-md">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-[#F1D9B1] text-gray-800'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-[#F1D9B1] text-gray-800'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
     <section className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={viewMode === 'grid' 
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        : "space-y-8"
      }
    >
      {portfolioItems.map((item) => (
        <motion.div
          key={item.id}
          variants={scaleIn}
          whileHover={{ y: -10, scale: viewMode === 'grid' ? 1.02 : 1 }}
          className="group cursor-pointer"
        >
          {viewMode === 'grid' ? (
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-0">
              <CardContent className="p-0 relative">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#F1D9B1]/20 to-white">
                  <Image 
                    src={item.src || "/placeholder.svg"} 
                    alt={item.title} 
                    width={400} 
                    height={400} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200 mb-3">{item.client}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-white/20 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  <div className="aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-[#F1D9B1]/20 to-white">
                    <Image 
                      src={item.src || "/placeholder.svg"} 
                      alt={item.title} 
                      width={300} 
                      height={300} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-[#B8860B] font-medium mb-3">Client: {item.client}</p>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} className="bg-[#F1D9B1]/20 text-[#B8860B] border-none">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F1D9B1]/20 via-[#E6C89A]/10 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Ready to Create Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">Success Story?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's work together to create stunning product photography that showcases your brand and drives results.
            </p>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Project
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
