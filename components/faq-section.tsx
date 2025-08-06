"use client"

import { motion } from "framer-motion"
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface FAQ {
  id: number
  question: string
  answer: string
  category: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What types of products do you photograph?",
    answer: "We photograph all types of products including food & beverages, beauty & cosmetics, fashion accessories, electronics, home goods, jewelry, health products, and more. Our versatile studio setup can accommodate products of various sizes and requirements, from small jewelry pieces to large furniture items.",
    category: "Services"
  },
  {
    id: 2,
    question: "How long does a typical photoshoot take?",
    answer: "A standard product photoshoot typically takes 2-4 hours depending on the number of products and complexity of shots required. Simple e-commerce shots might take 1-2 hours, while complex lifestyle or creative shoots can take 4-8 hours. We'll provide a detailed timeline during our consultation based on your specific needs.",
    category: "Process"
  },
  {
    id: 3,
    question: "Do you provide props and styling?",
    answer: "Yes! We have an extensive collection of props, backgrounds, and styling accessories including various textures, fabrics, plants, lifestyle elements, and seasonal items. We also offer creative direction and styling consultation to ensure your products are presented in the most appealing way that aligns with your brand aesthetic.",
    category: "Services"
  },
  {
    id: 4,
    question: "What's included in the final delivery?",
    answer: "You'll receive high-resolution edited images (300 DPI for print, 72 DPI for web), multiple formats (JPEG, PNG with transparency if needed), web-optimized versions for e-commerce platforms, and all images are professionally retouched and color-corrected. We also provide different aspect ratios for various social media platforms upon request.",
    category: "Delivery"
  },
  {
    id: 5,
    question: "Can you shoot at our location?",
    answer: "We offer both studio and on-location shoots. Our mobile setup allows us to create professional results anywhere, whether it's your office, warehouse, retail space, or any location that fits your brand story. On-location shoots are perfect for lifestyle photography and showing products in their natural environment.",
    category: "Services"
  },
  {
    id: 6,
    question: "What's your turnaround time?",
    answer: "Standard turnaround is 3-5 business days for edited images after the photoshoot. For urgent projects, we offer rush delivery options: same-day delivery (additional 100% charge), next-day delivery (additional 50% charge), and 2-day delivery (additional 25% charge). Large projects may require longer timelines, which we'll discuss upfront.",
    category: "Delivery"
  },
  {
    id: 7,
    question: "How much does product photography cost?",
    answer: "Our pricing varies based on the scope of work, number of products, complexity of shots, and turnaround time. Basic e-commerce photography starts from PKR 8,000, while comprehensive packages with styling and lifestyle shots start from PKR 15,000. We offer custom quotes for large projects and provide detailed pricing during consultation.",
    category: "Pricing"
  },
  {
    id: 8,
    question: "Do you offer revisions?",
    answer: "Yes, we include 2-3 rounds of revisions in all our packages to ensure you're completely satisfied with the results. Additional revisions beyond the included amount are charged at PKR 500 per image. We work closely with you throughout the process to minimize the need for extensive revisions.",
    category: "Process"
  },
  {
    id: 9,
    question: "What equipment do you use?",
    answer: "We use professional-grade equipment including Canon and Sony full-frame cameras, various lenses (macro, wide-angle, telephoto), professional lighting systems (strobes and continuous LED), light modifiers (softboxes, umbrellas, reflectors), and high-end editing software. Our equipment is regularly updated to ensure the highest quality results.",
    category: "Technical"
  },
  {
    id: 10,
    question: "Can you help with Amazon and e-commerce requirements?",
    answer: "We're well-versed in the specific requirements for major e-commerce platforms including Amazon (white background, specific dimensions, no watermarks), Shopify, Daraz, and others. We ensure all images meet platform guidelines and are optimized for maximum conversion rates.",
    category: "E-commerce"
  },
  {
    id: 11,
    question: "Do you provide 360-degree product photography?",
    answer: "Yes, we offer 360-degree product photography services. This includes basic 360° views (24 frames) starting from PKR 5,000, premium 360° (36 frames) for PKR 7,500, and HD 360° (48 frames) for PKR 10,000. These interactive views significantly increase customer engagement and reduce return rates.",
    category: "Services"
  },
  {
    id: 12,
    question: "What about usage rights and licensing?",
    answer: "All our standard packages include full commercial usage rights for your own marketing, advertising, and sales purposes. This includes use on your website, social media, print materials, and e-commerce platforms. Extended licensing for resale or third-party use can be arranged separately if needed.",
    category: "Legal"
  }
]



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

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredFAQs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F1D9B1]/10 via-white to-[#E6C89A]/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-[#F1D9B1]/20 text-[#B8860B] border-[#F1D9B1] mb-4 px-4 py-2">
            <HelpCircle className="w-4 h-4 mr-2" />
            FAQ
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our product photography services, process, and pricing.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
         
         
       
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {filteredFAQs.map((faq, index) => (
            <motion.div key={faq.id} variants={fadeInUp}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-[#F1D9B1]/5 transition-colors"
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center mb-2">
                        <Badge className="bg-[#F1D9B1]/20 text-[#B8860B] border-none text-xs mr-3">
                          {faq.category}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 text-left">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] flex items-center justify-center transition-transform duration-300 ${
                      openFAQ === faq.id ? 'rotate-180' : ''
                    }`}>
                      {openFAQ === faq.id ? (
                        <Minus className="w-4 h-4 text-gray-700" />
                      ) : (
                        <Plus className="w-4 h-4 text-gray-700" />
                      )}
                    </div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFAQ === faq.id ? "auto" : 0,
                      opacity: openFAQ === faq.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500 mb-4">No FAQs found in this category.</p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="text-[#B8860B] hover:text-[#B8860B]/80 font-medium"
            >
              View all FAQs
            </button>
          </div>
        )}

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="border-0 shadow-xl bg-gradient-to-br from-[#F1D9B1]/20 to-[#E6C89A]/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help you with any questions about our photography services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact">
                  <button className="bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800 font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Contact Us
                  </button>
                </a>
                <a href="https://wa.me/923268044557" target="_blank" rel="noopener noreferrer">
                  <button className="border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Chat on WhatsApp
                  </button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
