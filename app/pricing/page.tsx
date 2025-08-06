"use client"

import { motion } from "framer-motion"
import { Camera, Check, X, Star, Zap, Crown, Shield, ArrowRight, Clock, Users, Package, Edit3, RotateCcw, Video, Palette, MessageCircle } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import Navigation from "@/components/navigation"

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

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'single' | 'monthly'>('single')

  const pricingTiers = [
    {
      name: "Starter",
      icon: Camera,
      description: "Perfect for small businesses and startups",
      price: {
        single: 15000,
        monthly: 12000
      },
      originalPrice: {
        single: 20000,
        monthly: 16000
      },
      popular: false,
      color: "from-blue-500 to-blue-600",
      features: [
        "Up to 10 products",
        "White background shots",
        "Basic retouching included",
        "High-resolution images",
        "3-5 business days delivery",
        "2 revisions included",
        "Web-optimized formats",
        "Email support"
      ],
      notIncluded: [
        "Lifestyle photography",
        "Model shoots",
        "360° product views",
        "Rush delivery",
        "Advanced styling",
        "Video content"
      ],
      addOns: [
        { name: "Extra product", price: 800 },
        { name: "Lifestyle shot", price: 2000 },
        { name: "Rush delivery", price: 5000 }
      ]
    },
    {
      name: "Professional",
      icon: Star,
      description: "Most popular choice for growing businesses",
      price: {
        single: 35000,
        monthly: 28000
      },
      originalPrice: {
        single: 45000,
        monthly: 36000
      },
      popular: true,
      color: "from-[#F1D9B1] to-[#E6C89A]",
      features: [
        "Up to 25 products",
        "White background + styled shots",
        "Professional retouching",
        "Multiple angles per product",
        "2-3 business days delivery",
        "5 revisions included",
        "All digital formats",
        "Props and styling included",
        "Basic lifestyle shots",
        "Priority support",
        "Social media formats",
        "Usage rights included"
      ],
      notIncluded: [
        "Model shoots",
        "360° product views",
        "Video content",
        "Same-day delivery"
      ],
      addOns: [
        { name: "Extra product", price: 600 },
        { name: "Model shoot", price: 8000 },
        { name: "360° view", price: 3000 },
        { name: "Same-day delivery", price: 8000 }
      ]
    },
    {
      name: "Premium",
      icon: Crown,
      description: "Complete solution for established brands",
      price: {
        single: 65000,
        monthly: 52000
      },
      originalPrice: {
        single: 80000,
        monthly: 64000
      },
      popular: false,
      color: "from-purple-500 to-purple-600",
      features: [
        "Up to 50 products",
        "All photography styles",
        "Advanced retouching",
        "Multiple angles + variations",
        "1-2 business days delivery",
        "Unlimited revisions",
        "All formats + print ready",
        "Premium styling & props",
        "Lifestyle photography",
        "Model integration available",
        "360° product views",
        "Basic video content",
        "Dedicated account manager",
        "Phone + email support",
        "Brand consultation included"
      ],
      notIncluded: [
        "Advanced video production",
        "Multiple model shoots"
      ],
      addOns: [
        { name: "Extra product", price: 400 },
        { name: "Advanced video", price: 15000 },
        { name: "Multiple models", price: 12000 },
        { name: "Same-day delivery", price: 10000 }
      ]
    },
    {
      name: "Enterprise",
      icon: Shield,
      description: "Custom solutions for large-scale projects",
      price: {
        single: "Custom",
        monthly: "Custom"
      },
      originalPrice: null,
      popular: false,
      color: "from-gray-700 to-gray-800",
      features: [
        "Unlimited products",
        "All photography services",
        "Advanced post-production",
        "Multiple variations",
        "Same-day delivery available",
        "Unlimited revisions",
        "All formats + specifications",
        "Custom styling & sets",
        "Full lifestyle campaigns",
        "Professional models",
        "360° + AR ready",
        "Full video production",
        "Dedicated team",
        "24/7 priority support",
        "Brand strategy consultation",
        "Custom licensing terms",
        "Bulk discounts",
        "Long-term contracts"
      ],
      notIncluded: [],
      addOns: [
        { name: "Additional team member", price: "Custom" },
        { name: "International shipping", price: "Custom" },
        { name: "On-site studio setup", price: "Custom" }
      ]
    }
  ]

  const specialPackages = [
    {
      name: "E-commerce Starter Pack",
      icon: Package,
      price: 25000,
      originalPrice: 35000,
      description: "Everything you need to launch your online store",
      duration: "One-time package",
      features: [
        "20 products photographed",
        "White background + lifestyle",
        "Amazon/Shopify ready formats",
        "Basic retouching included",
        "5 business days delivery",
        "3 revisions per product",
        "Usage rights included"
      ],
      bonus: "Free logo placement on images"
    },
    {
      name: "Social Media Bundle",
      icon: MessageCircle,
      price: 18000,
      originalPrice: 25000,
      description: "Perfect for Instagram and social media marketing",
      duration: "One-time package",
      features: [
        "15 products photographed",
        "Flat lay + styled shots",
        "Instagram story formats",
        "Square + vertical formats",
        "Lifestyle backgrounds",
        "3 business days delivery",
        "Social media optimization"
      ],
      bonus: "Free content calendar template"
    },
    {
      name: "Seasonal Campaign",
      icon: Palette,
      price: 45000,
      originalPrice: 60000,
      description: "Complete seasonal marketing campaign",
      duration: "One-time package",
      features: [
        "30 products photographed",
        "Seasonal styling & props",
        "Multiple campaign themes",
        "Lifestyle + model shots",
        "Video content included",
        "Rush delivery available",
        "Campaign consultation"
      ],
      bonus: "Free brand strategy session"
    }
  ]

  const addOnServices = [
    {
      name: "Rush Delivery",
      icon: Zap,
      description: "Same-day or next-day delivery",
      prices: [
        { tier: "Same day", price: 10000 },
        { tier: "Next day", price: 5000 },
        { tier: "2 days", price: 2500 }
      ]
    },
    {
      name: "Model Integration",
      icon: Users,
      description: "Professional models for lifestyle shots",
      prices: [
        { tier: "Basic model (2 hours)", price: 8000 },
        { tier: "Premium model (4 hours)", price: 15000 },
        { tier: "Multiple models", price: 25000 }
      ]
    },
    {
      name: "Video Content",
      icon: Video,
      description: "Product videos and stop-motion",
      prices: [
        { tier: "Basic product video", price: 12000 },
        { tier: "Stop-motion GIF", price: 8000 },
        { tier: "Full campaign video", price: 35000 }
      ]
    },
    {
      name: "Advanced Retouching",
      icon: Edit3,
      description: "Premium editing and enhancement",
      prices: [
        { tier: "Per image", price: 800 },
        { tier: "Bulk (10+ images)", price: 600 },
        { tier: "Complex editing", price: 1500 }
      ]
    },
    {
      name: "360° Product Views",
      icon: RotateCcw,
      description: "Interactive 360-degree photography",
      prices: [
        { tier: "Basic 360° (24 frames)", price: 5000 },
        { tier: "Premium 360° (36 frames)", price: 7500 },
        { tier: "HD 360° (48 frames)", price: 10000 }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F1D9B1]/20 via-white to-[#F1D9B1]/10">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="bg-[#F1D9B1]/20 text-[#B8860B] border-[#F1D9B1] mb-4 px-4 py-2">
                <Camera className="w-4 h-4 mr-2" />
                Pricing Plans
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold leading-tight"
            >
              Choose Your Perfect
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">
                PHOTOGRAPHY
              </span>{" "}
              Package
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Choose from our carefully crafted packages or create a custom solution that fits your needs.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div variants={fadeInUp} className="flex items-center justify-center space-x-4">
              <span className={`font-medium ${billingCycle === 'single' ? 'text-gray-900' : 'text-gray-500'}`}>
                One-time Project
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'single' ? 'monthly' : 'single')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  billingCycle === 'monthly' ? 'bg-[#F1D9B1]' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'monthly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly Retainer
              </span>
              {billingCycle === 'monthly' && (
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  Save 20%
                </Badge>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Pricing Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-4 gap-8"
          >
            {pricingTiers.map((tier, index) => (
              <motion.div key={tier.name} variants={scaleIn}>
                <Card className={`relative h-full transition-all duration-500 border-0 shadow-lg hover:shadow-2xl ${
                  tier.popular 
                    ? 'ring-2 ring-[#F1D9B1] scale-105 bg-gradient-to-br from-[#F1D9B1]/10 to-white' 
                    : 'bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-white'
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] text-gray-800 px-4 py-1 shadow-lg">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <tier.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {tier.name}
                    </CardTitle>
                    <p className="text-gray-600 text-sm mb-6">
                      {tier.description}
                    </p>
                    
                    <div className="space-y-2">
                      {typeof tier.price[billingCycle] === 'string' ? (
                        <div className="text-4xl font-bold text-gray-900">
                          {tier.price[billingCycle]}
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center justify-center space-x-2">
                            <span className="text-4xl font-bold text-gray-900">
                              PKR {tier.price[billingCycle].toLocaleString()}
                            </span>
                            {tier.originalPrice && (
                              <span className="text-lg text-gray-400 line-through">
                                {tier.originalPrice[billingCycle].toLocaleString()}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">
                            {billingCycle === 'monthly' ? 'per month' : 'one-time project'}
                          </p>
                        </>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Included Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        What's Included
                      </h4>
                      <ul className="space-y-2">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3 text-sm">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Not Included */}
                    {tier.notIncluded.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center">
                          <X className="w-4 h-4 text-red-400 mr-2" />
                          Not Included
                        </h4>
                        <ul className="space-y-2">
                          {tier.notIncluded.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3 text-sm">
                              <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-500">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Add-ons */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Popular Add-ons</h4>
                      <ul className="space-y-2">
                        {tier.addOns.map((addon, addonIndex) => (
                          <li key={addonIndex} className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">{addon.name}</span>
                            <span className="font-medium text-[#B8860B]">
                              {typeof addon.price === 'string' ? addon.price : `+PKR ${addon.price}`}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/contact">
                      <Button 
                        className={`w-full font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                          tier.popular
                            ? 'bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800'
                            : 'bg-gray-900 hover:bg-gray-800 text-white'
                        }`}
                      >
                        {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Special Packages */}
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
              Special <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Curated packages designed for specific business needs and use cases.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {specialPackages.map((pkg, index) => (
              <motion.div key={pkg.name} variants={scaleIn}>
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-[#F1D9B1]/10 hover:from-[#F1D9B1]/20 hover:to-[#E6C89A]/20">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#F1D9B1] to-[#E6C89A] flex items-center justify-center mb-4 shadow-lg">
                      <pkg.icon className="w-8 h-8 text-gray-700" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {pkg.name}
                    </CardTitle>
                    <p className="text-gray-600 text-sm mb-4">
                      {pkg.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-3xl font-bold text-gray-900">
                          PKR {pkg.price.toLocaleString()}
                        </span>
                        <span className="text-lg text-gray-400 line-through">
                          {pkg.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        Save PKR {(pkg.originalPrice - pkg.price).toLocaleString()}
                      </Badge>
                      <p className="text-sm text-gray-500">{pkg.duration}</p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3 text-sm">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="p-4 bg-[#F1D9B1]/20 rounded-lg">
                      <p className="text-sm font-medium text-[#B8860B] flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        Bonus: {pkg.bonus}
                      </p>
                    </div>

                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800 font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        Choose Package
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Add-on Services */}
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
              Add-on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance any package with these professional add-on services.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {addOnServices.map((service, index) => (
              <motion.div key={service.name} variants={scaleIn}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white hover:bg-gradient-to-br hover:from-[#F1D9B1]/10 hover:to-white">
                  <CardHeader className="text-center">
                    <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-[#F1D9B1] to-[#E6C89A] flex items-center justify-center mb-4 shadow-lg">
                      <service.icon className="w-7 h-7 text-gray-700" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 mb-2">
                      {service.name}
                    </CardTitle>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      {service.prices.map((price, priceIndex) => (
                        <div key={priceIndex} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">{price.tier}</span>
                          <span className="font-bold text-[#B8860B]">
                            {typeof price.price === 'string' ? price.price : `PKR ${price.price.toLocaleString()}`}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F1D9B1]/10 via-white to-[#E6C89A]/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Pricing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">FAQs</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                question: "What's the difference between one-time projects and monthly retainers?",
                answer: "One-time projects are perfect for specific campaigns or launches, while monthly retainers provide ongoing photography services at a 20% discount, ideal for businesses with regular content needs."
              },
              {
                question: "Can I upgrade or downgrade my package?",
                answer: "You can upgrade your package at any time by paying the difference. For downgrades, changes take effect from your next billing cycle."
              },
              {
                question: "What happens if I need more products than my package includes?",
                answer: "You can add extra products at the rates shown in each package. We also offer bulk discounts for large quantities."
              },
              {
                question: "Do you offer custom packages?",
                answer: "Yes! If none of our standard packages fit your needs, we can create a custom solution. Contact us to discuss your specific requirements."
              },
              {
                question: "What's included in the usage rights?",
                answer: "All packages include standard commercial usage rights for your own marketing and sales. Extended licensing for resale or third-party use can be arranged separately."
              },
              {
                question: "How do payments work?",
                answer: "We require 50% upfront to start the project, with the remaining 50% due upon delivery. Monthly retainers are billed at the beginning of each month."
              }
            ].map((faq, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
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
              Ready to Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">Started?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your perfect package or let us create a custom solution for your unique needs.
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
                    Discuss Pricing on WhatsApp
                  </Button>
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">
                🎯 <strong>Special Offer:</strong> Book any package this month and get a free brand consultation session worth PKR 5,000!
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-[#B8860B]" />
                  Fast turnaround
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-[#B8860B]" />
                  100% satisfaction guarantee
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2 text-[#B8860B]" />
                  5-star rated service
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
