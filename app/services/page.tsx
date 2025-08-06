"use client"

import { motion } from "framer-motion"
import { Camera, ShoppingBag, RotateCcw, Users, Brush, Grid3X3, Palette, MessageCircle, Video, Edit3, Zap, Package, Check, ArrowRight } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

export default function ServicesPage() {
  const serviceImages = [
    { src: "/images/plum-chutney.webp", alt: "E-commerce Photography", title: "E-commerce Ready", category: "Online Sales" },
    { src: "/images/mango-jam.webp", alt: "Lifestyle Photography", title: "Lifestyle Shots", category: "Brand Story" },
    { src: "/images/nail-polish.webp", alt: "Beauty Photography", title: "Beauty Products", category: "Cosmetics" },
    { src: "/images/watch.webp", alt: "Luxury Photography", title: "Luxury Items", category: "Premium" },
    { src: "/images/perfume-bottle.webp", alt: "Creative Photography", title: "Creative Concepts", category: "Artistic" }
  ]

  const mainServices = [
    {
      icon: Camera,
      title: "Creative Product Photography",
      description: "Stunning, on-brand visuals designed to elevate your brand and capture attention across platforms with artistic style and purpose.",
      features: ["Custom lighting setups", "Brand-aligned styling", "Multiple angle shots", "High-resolution delivery"],
      price: "Starting from PKR 15,000"
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce Photography",
      description: "High-quality product shots with clean backgrounds tailored for platforms like Amazon, Daraz, and Shopify — clear, compliant, and consistent.",
      features: ["White background shots", "Platform compliance", "Bulk product handling", "Quick turnaround"],
      price: "Starting from PKR 8,000"
    },
    {
      icon: Grid3X3,
      title: "Flat Lay & Styled Shoots",
      description: "From clean flat lays to styled storytelling, we create scenes that reflect your brand's personality — ideal for lookbooks, Instagram, and beyond.",
      features: ["Creative compositions", "Brand storytelling", "Social media ready", "Props included"],
      price: "Starting from PKR 12,000"
    },
    {
      icon: Users,
      title: "Lifestyle Photography",
      description: "Creative and engaging lifestyle shots of your products in real-world settings that connect with your target audience.",
      features: ["Model integration", "Real-world settings", "Emotional connection", "Brand narrative"],
      price: "Starting from PKR 25,000"
    }
  ]

  const additionalServices = [
    {
      icon: RotateCcw,
      title: "360° Product View",
      description: "Interactive 360-degree product photography for enhanced customer experience.",
      price: "PKR 5,000 per product"
    },
    {
      icon: Edit3,
      title: "Photo Retouching",
      description: "Professional photo retouching and color correction for perfect product images.",
      price: "PKR 500 per image"
    },
    {
      icon: Palette,
      title: "Background Removal",
      description: "Clean cutouts and transparency for versatile image usage.",
      price: "PKR 300 per image"
    },
    {
      icon: Video,
      title: "Product Videos",
      description: "Dynamic videos and stop-motion effects to showcase your products.",
      price: "Starting from PKR 20,000"
    },
    {
      icon: Zap,
      title: "Rush Delivery",
      description: "Same day or next day turnaround for urgent projects.",
      price: "50% additional charge"
    },
    {
      icon: Package,
      title: "Bulk Photography",
      description: "Special rates for large product catalogs and inventory shoots.",
      price: "Custom pricing available"
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
                  <Camera className="w-4 h-4 mr-2" />
                  Our Services
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl lg:text-6xl font-bold leading-tight"
              >
                Professional
                <br />
                Photography{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">
                  SERVICES
                </span>
              </motion.h1>
              
              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  From e-commerce ready shots to creative brand storytelling, we offer comprehensive photography solutions tailored to your business needs.
                </p>
                <p className="text-lg text-gray-500">
                  Every service is designed to help your products shine and drive sales.
                </p>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    Get Custom Quote
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <EnhancedCarousel images={serviceImages} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our flagship photography services designed to meet all your product marketing needs.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {mainServices.map((service, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="h-full hover:shadow-2xl transition-all duration-500 group cursor-pointer border-0 shadow-lg bg-gradient-to-br from-white to-[#F1D9B1]/10 hover:from-[#F1D9B1]/20 hover:to-[#E6C89A]/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F1D9B1] to-[#E6C89A] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                          <service.icon className="w-8 h-8 text-gray-700" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold group-hover:text-[#B8860B] transition-colors text-gray-900">
                            {service.title}
                          </CardTitle>
                          <Badge className="bg-[#F1D9B1]/20 text-[#B8860B] border-none mt-2">
                            {service.price}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800 font-semibold">
                        Get Quote
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F1D9B1]/10 via-white to-[#E6C89A]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Additional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your photography package with these professional add-ons and specialized services.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {additionalServices.map((service, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-md bg-white hover:bg-gradient-to-br hover:from-[#F1D9B1]/10 hover:to-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#F1D9B1] to-[#E6C89A] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <service.icon className="w-8 h-8 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-[#B8860B] transition-colors text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Badge className="bg-[#F1D9B1]/20 text-[#B8860B] border-none">
                      {service.price}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final delivery, here's how we bring your vision to life.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your needs, brand, and vision to create the perfect photography plan."
              },
              {
                step: "02",
                title: "Planning",
                description: "Detailed shoot planning including styling, props, and creative direction."
              },
              {
                step: "03",
                title: "Photography",
                description: "Professional shoot with attention to every detail and multiple variations."
              },
              {
                step: "04",
                title: "Delivery",
                description: "Edited, high-resolution images delivered in your preferred format and timeline."
              }
            ].map((process, index) => (
              <motion.div key={index} variants={scaleIn} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#F1D9B1] to-[#E6C89A] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-gray-800">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] -translate-x-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
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
              Ready to Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">Started?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom photography package that fits your needs and budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    Get Custom Quote
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://wa.me/923268044557" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline"
                    size="lg" 
                    className="border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Chat on WhatsApp
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
