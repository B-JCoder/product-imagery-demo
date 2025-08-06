"use client"

import { motion } from "framer-motion"
import { Camera, Award, Users, Clock, Target, Heart, Lightbulb, Zap } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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

export default function AboutPage() {
  const aboutImages = [
    { src: "/images/plum-chutney.webp", alt: "Behind the Scenes", title: "Creative Process", category: "Studio Life" },
    { src: "/images/mango-jam.webp", alt: "Product Setup", title: "Attention to Detail", category: "Our Work" },
    { src: "/images/nail-polish.webp", alt: "Lighting Setup", title: "Perfect Lighting", category: "Technique" },
    { src: "/images/watch.webp", alt: "Final Result", title: "Professional Results", category: "Portfolio" },
    { src: "/images/perfume-bottle.webp", alt: "Creative Styling", title: "Brand Storytelling", category: "Creative" }
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
                  <Heart className="w-4 h-4 mr-2" />
                  About Us
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl lg:text-6xl font-bold leading-tight"
              >
                Crafting Visual
                <br />
                Stories That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">
                  CONVERT
                </span>
              </motion.h1>
              
              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  We're passionate photographers who understand that great product photography isn't just about taking pictures—it's about creating visual experiences that connect with your audience and drive results.
                </p>
                <p className="text-lg text-gray-500">
                  Every shot we take is designed to tell your brand's unique story and showcase your products in their best light.
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <EnhancedCarousel images={aboutImages} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#F1D9B1]/30 to-[#E6C89A]/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "500+", label: "Projects Completed", icon: Camera },
              { number: "100+", label: "Happy Clients", icon: Users },
              { number: "5+", label: "Years Experience", icon: Clock },
              { number: "98%", label: "Client Satisfaction", icon: Award }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 group-hover:shadow-xl transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#F1D9B1] group-hover:to-[#E6C89A]">
                  <stat.icon className="w-8 h-8 text-gray-600 group-hover:text-gray-800 transition-colors" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">Story</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6"
          >
            <p className="text-xl">
              What started as a passion for capturing the perfect shot has evolved into a specialized product photography studio that helps brands across Pakistan and beyond showcase their products in the most compelling way possible.
            </p>
            
            <p>
              We believe that every product has a story to tell, and our job is to bring that story to life through carefully crafted visuals. Whether it's the artisanal quality of handmade preserves, the luxury appeal of premium cosmetics, or the innovative design of tech products, we know how to highlight what makes your products special.
            </p>
            
            <p>
              Our approach combines technical expertise with creative vision. We don't just take photos—we create visual experiences that connect with your target audience, build trust in your brand, and ultimately drive sales. From concept to final delivery, we're committed to exceeding your expectations and helping your business grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and ensure we deliver exceptional results for every client.
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
                icon: Target,
                title: "Precision",
                description: "Every detail matters. We meticulously plan and execute each shot to ensure perfection."
              },
              {
                icon: Lightbulb,
                title: "Creativity",
                description: "We bring fresh perspectives and innovative ideas to make your products stand out."
              },
              {
                icon: Zap,
                title: "Efficiency",
                description: "Fast turnaround times without compromising on quality. Your deadlines are our priority."
              },
              {
                icon: Heart,
                title: "Passion",
                description: "We love what we do, and it shows in every image we create for your brand."
              }
            ].map((value, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="h-full hover:shadow-2xl transition-all duration-500 group cursor-pointer border-0 shadow-lg bg-gradient-to-br from-white to-[#F1D9B1]/10 hover:from-[#F1D9B1]/20 hover:to-[#E6C89A]/20">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#F1D9B1] to-[#E6C89A] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <value.icon className="w-8 h-8 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-[#B8860B] transition-colors text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
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
              Ready to Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">Together?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's discuss your project and create stunning visuals that will take your brand to the next level.
            </p>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Today
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
