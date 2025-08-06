"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, User, Mail, Phone, MessageSquare, CheckCircle, AlertCircle, MapPin, Clock, Globe } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Create WhatsApp message
      const message = `
🎯 *NEW CONTACT FORM SUBMISSION*

👤 *CLIENT DETAILS*
• Name: ${data.name}
• Email: ${data.email}
• Phone: ${data.phone}

📋 *PROJECT INFORMATION*
• Subject: ${data.subject}
• Project Type: ${data.projectType}
${data.budget ? `• Budget: ${data.budget}` : ''}

💬 *MESSAGE*
${data.message}

📅 Submitted: ${new Date().toLocaleString()}
      `.trim()

      const whatsappUrl = `https://wa.me/923268044557?text=${encodeURIComponent(message)}`
      
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank')
      
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Thank you for reaching out! We've received your message and will get back to you within 24 hours.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          className="bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800"
        >
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <div className="grid lg:grid-cols-3 gap-12">
      {/* Contact Information */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="space-y-8"
      >
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            Ready to transform your product photography? Let's discuss your project and create stunning visuals that drive results.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#F1D9B1] to-[#E6C89A] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
              <Mail className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
              <p className="text-gray-600 text-sm mb-2">Get a response within 24 hours</p>
              <a 
                href="mailto:Andywarhol4242@gmail.com" 
                className="text-[#B8860B] hover:text-[#B8860B]/80 transition-colors font-medium"
              >
                Andywarhol4242@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#F1D9B1] to-[#E6C89A] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
              <Phone className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Call or WhatsApp</h4>
              <p className="text-gray-600 text-sm mb-2">Available 9 AM - 8 PM PKT</p>
              <a 
                href="tel:+923268044557" 
                className="text-[#B8860B] hover:text-[#B8860B]/80 transition-colors font-medium"
              >
                +92 326 8044557
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#F1D9B1] to-[#E6C89A] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
              <MapPin className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
              <p className="text-gray-600 text-sm mb-2">Serving clients worldwide</p>
              <p className="text-[#B8860B] font-medium">Remote & On-location</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#F1D9B1] to-[#E6C89A] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
              <Clock className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Response Time</h4>
              <p className="text-gray-600 text-sm mb-2">Quick turnaround guaranteed</p>
              <p className="text-[#B8860B] font-medium">Within 24 hours</p>
            </div>
          </div>
        </div>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-[#F1D9B1]/20 to-[#E6C89A]/10">
          <CardContent className="p-6">
            <h4 className="font-bold text-gray-900 mb-3">Why Choose Us?</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                5+ years of experience
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                500+ successful projects
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                100% satisfaction guarantee
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Fast turnaround times
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2 }}
        className="lg:col-span-2"
      >
        <Card className="border-0 shadow-2xl bg-white">
          <CardHeader className="bg-gradient-to-r from-[#F1D9B1]/20 to-[#E6C89A]/20">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <MessageSquare className="w-6 h-6 mr-3 text-[#B8860B]" />
              Send us a Message
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      {...register("name")}
                      className={`pl-10 py-3 ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:ring-[#F1D9B1] focus:border-[#F1D9B1]`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      {...register("email")}
                      type="email"
                      className={`pl-10 py-3 ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:ring-[#F1D9B1] focus:border-[#F1D9B1]`}
                      placeholder="your@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone and Project Type Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      {...register("phone")}
                      type="tel"
                      className={`pl-10 py-3 ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:ring-[#F1D9B1] focus:border-[#F1D9B1]`}
                      placeholder="+92 300 1234567"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    {...register("projectType")}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1D9B1] focus:border-transparent transition-all ${
                      errors.projectType ? 'border-red-500' : 'border-gray-200'
                    }`}
                  >
                    <option value="">Select project type</option>
                    <option value="E-commerce Photography">E-commerce Photography</option>
                    <option value="Product Photography">Product Photography</option>
                    <option value="Lifestyle Photography">Lifestyle Photography</option>
                    <option value="Brand Photography">Brand Photography</option>
                    <option value="360° Photography">360° Photography</option>
                    <option value="Video Content">Video Content</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.projectType && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.projectType.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject and Budget Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    {...register("subject")}
                    className={`py-3 ${errors.subject ? 'border-red-500' : 'border-gray-200'} focus:ring-[#F1D9B1] focus:border-[#F1D9B1]`}
                    placeholder="Brief description of your project"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Budget Range (Optional)
                  </label>
                  <select
                    {...register("budget")}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1D9B1] focus:border-transparent transition-all"
                  >
                    <option value="">Select budget range</option>
                    <option value="Under PKR 25,000">Under PKR 25,000</option>
                    <option value="PKR 25,000 - 50,000">PKR 25,000 - 50,000</option>
                    <option value="PKR 50,000 - 100,000">PKR 50,000 - 100,000</option>
                    <option value="PKR 100,000 - 200,000">PKR 100,000 - 200,000</option>
                    <option value="Over PKR 200,000">Over PKR 200,000</option>
                    <option value="Let's discuss">Let's discuss</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  {...register("message")}
                  rows={6}
                  className={`resize-none ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:ring-[#F1D9B1] focus:border-[#F1D9B1]`}
                  placeholder="Tell us more about your project, timeline, specific requirements, or any questions you have..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                className="pt-4"
              >
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800 font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
