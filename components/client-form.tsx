"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, Send, User, Building, Mail, Phone, Globe, Camera, Package, Palette, DollarSign, MessageSquare } from 'lucide-react'

export default function ClientForm() {
  const [formData, setFormData] = useState({
    brandName: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    businessType: '',
    customBusiness: '',
    targetAudience: '',
    numberOfProducts: '',
    photographyTypes: [] as string[],
    needModels: '',
    needStyling: '',
    hasBudget: '',
    budgetAmount: '',
    additionalNotes: ''
  })

  const [files, setFiles] = useState<FileList | null>(null)

  const businessTypes = [
    'Clothing / Apparel',
    'Cosmetics / Skincare',
    'Jewelry / Accessories',
    'Food Products',
    'Electronics',
    'Home Decor',
    'Other'
  ]

  const photographyTypes = [
    'White Background Shots',
    'Flatlays',
    'Lifestyle Photography',
    'Model Shoots',
    'Creative Concepts',
    'Stop Motion / GIFs',
    'E-commerce Shots'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      photographyTypes: prev.photographyTypes.includes(value)
        ? prev.photographyTypes.filter(type => type !== value)
        : [...prev.photographyTypes, value]
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const message = `
🎯 *NEW PROJECT INQUIRY*

👤 *CLIENT DETAILS*
• Brand/Company: ${formData.brandName}
• Contact Person: ${formData.contactPerson}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Website: ${formData.website || 'Not provided'}
• Business Type: ${formData.businessType === 'Other' ? formData.customBusiness : formData.businessType}
• Target Audience: ${formData.targetAudience || 'Not specified'}

📸 *PROJECT REQUIREMENTS*
• Number of Products: ${formData.numberOfProducts}
• Photography Types: ${formData.photographyTypes.join(', ')}
• Need Models: ${formData.needModels}
• Need Styling/Props: ${formData.needStyling}

💰 *BUDGET*
• Has Budget: ${formData.hasBudget}
${formData.budgetAmount ? `• Budget Amount: Rs. ${formData.budgetAmount}` : ''}

📝 *ADDITIONAL NOTES*
${formData.additionalNotes || 'None'}

${files ? `📎 Files attached: ${files.length} file(s)` : ''}
    `.trim()

    const whatsappUrl = `https://wa.me/923268044557?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F1D9B1]/20 via-white to-[#E6C89A]/10 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="bg-[#F1D9B1]/20 text-[#B8860B] border-[#F1D9B1] mb-4 px-4 py-2">
            <Camera className="w-4 h-4 mr-2" />
            Get Your Quote
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Let's Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">Amazing</span>
          </h1>
          <p className="text-xl text-gray-600">
            Tell us about your project and we'll get back to you with a custom quote
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-[#F1D9B1]/20 to-[#E6C89A]/20">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <User className="w-6 h-6 mr-3 text-[#B8860B]" />
                Project Information Form
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Client Details Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center border-b border-[#F1D9B1]/30 pb-3">
                    <Building className="w-5 h-5 mr-2 text-[#B8860B]" />
                    Client Details
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Brand / Company Name *
                      </label>
                      <input
                        type="text"
                        name="brandName"
                        required
                        value={formData.brandName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1D9B1] focus:border-transparent transition-all"
                        placeholder="Enter your brand name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        required
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1D9B1] focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1D9B1] focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1D9B1] focus:border-transparent transition-all"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Website / Instagram (Optional)
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1D9B1] focus:border-transparent transition-all"
                        placeholder="https://your-website.com or @instagram"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Type of Business
                      </label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1D9B1] focus:border-transparent transition-all"
                      >
                        <option value="">Select business type</option>
                        {businessTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    
                    {formData.businessType === 'Other' && (
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Please specify
                        </label>
                        <input
                          type="text"
                          name="customBusiness"
                          value={formData.customBusiness}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1D9B1] focus:border-transparent transition-all"
                          placeholder="Specify your business type"
                        />
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Target Audience (Optional)
                    </label>
                    <textarea
                      name="targetAudience"
                      value={formData.targetAudience}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1D9B1] focus:border-transparent transition-all"
                      placeholder="Brief description of your target audience..."
                    />
                  </div>
                </div>

                {/* Project Requirements Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center border-b border-[#F1D9B1]/30 pb-3">
                    <Package className="w-5 h-5 mr-2 text-[#B8860B]" />
                    Project Requirements
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Number of Products to be Shot *
                    </label>
                    <input
                      type="number"
                      name="numberOfProducts"
                      required
                      value={formData.numberOfProducts}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1D9B1] focus:border-transparent transition-all"
                      placeholder="e.g., 5, 10, 50"
                      min="1"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Type of Photography Needed (Select all that apply)
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {photographyTypes.map(type => (
                        <label key={type} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-[#F1D9B1]/10 transition-colors cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.photographyTypes.includes(type)}
                            onChange={() => handleCheckboxChange(type)}
                            className="w-4 h-4 text-[#B8860B] border-gray-300 rounded focus:ring-[#F1D9B1]"
                          />
                          <span className="text-sm text-gray-700">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Do you need models?
                      </label>
                      <select
                        name="needModels"
                        value={formData.needModels}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1D9B1] focus:border-transparent transition-all"
                      >
                        <option value="">Select option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="I have my own models">I have my own models</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Do you need styling/props?
                      </label>
                      <select
                        name="needStyling"
                        value={formData.needStyling}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1D9B1] focus:border-transparent transition-all"
                      >
                        <option value="">Select option</option>
                        <option value="Yes, please provide styling and props">Yes, please provide styling and props</option>
                        <option value="No, we will send everything">No, we will send everything</option>
                        <option value="Partially – we will discuss">Partially – we will discuss</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Budget Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center border-b border-[#F1D9B1]/30 pb-3">
                    <DollarSign className="w-5 h-5 mr-2 text-[#B8860B]" />
                    Budget
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Do you have a budget in mind?
                    </label>
                    <select
                      name="hasBudget"
                      value={formData.hasBudget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1D9B1] focus:border-transparent transition-all"
                    >
                      <option value="">Select option</option>
                      <option value="Yes">Yes, I have a specific budget</option>
                      <option value="No">No, open to discussion</option>
                    </select>
                  </div>
                  
                  {formData.hasBudget === 'Yes' && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Budget Amount (PKR)
                      </label>
                      <input
                        type="number"
                        name="budgetAmount"
                        value={formData.budgetAmount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1D9B1] focus:border-transparent transition-all"
                        placeholder="Enter amount in PKR"
                        min="0"
                      />
                    </div>
                  )}
                </div>

                {/* Upload Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center border-b border-[#F1D9B1]/30 pb-3">
                    <Upload className="w-5 h-5 mr-2 text-[#B8860B]" />
                    Upload Files
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Upload Logo, Brand Manual, Sample Images, or Reference Files
                    </label>
                    <div className="border-2 border-dashed border-[#F1D9B1] rounded-lg p-8 text-center hover:border-[#E6C89A] transition-colors">
                      <Upload className="w-12 h-12 text-[#B8860B] mx-auto mb-4" />
                      <input
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-upload"
                        accept="image/*,.pdf,.doc,.docx"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <span className="text-[#B8860B] font-semibold">Click to upload</span>
                        <span className="text-gray-500"> or drag and drop</span>
                      </label>
                      <p className="text-sm text-gray-400 mt-2">
                        PNG, JPG, PDF up to 10MB each
                      </p>
                      {files && (
                        <p className="text-sm text-green-600 mt-2">
                          {files.length} file(s) selected
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center border-b border-[#F1D9B1]/30 pb-3">
                    <MessageSquare className="w-5 h-5 mr-2 text-[#B8860B]" />
                    Additional Notes
                  </h3>
                  
                  <div>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1D9B1] focus:border-transparent transition-all"
                      placeholder="Any extra requests, instructions, or questions you'd like to share..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.div 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }}
                  className="pt-6"
                >
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800 font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Quote Request via WhatsApp
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
