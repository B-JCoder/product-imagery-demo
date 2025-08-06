"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'PORTFOLIO', href: '/portfolio' },
    { name: 'PRICING', href: '/pricing' },
    { name: 'BLOG', href: '/blog' }
  ]

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-[#F1D9B1]/30 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Link href="/">
              <div className="relative">
                <Image 
                  src="/images/logo.webp" 
                  alt="Product Imagery Logo" 
                  width={120} 
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-[#B8860B] font-medium transition-colors relative group text-sm tracking-wide"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800 font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  GET QUOTE
                </Button>
              </Link>
            </motion.div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-[#F1D9B1]/20 hover:bg-[#F1D9B1]/40 transition-colors backdrop-blur-sm"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#F1D9B1]/30"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-[#B8860B] font-medium transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800 font-semibold">
                  GET QUOTE
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
