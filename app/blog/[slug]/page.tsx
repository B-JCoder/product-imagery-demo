"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Copy, Check } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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

// Mock blog post data - in a real app, this would come from a CMS or API
const getBlogPost = (slug: string) => {
  const posts = [
    {
      id: 1,
      title: "10 Essential Product Photography Tips for E-commerce Success",
      slug: "essential-product-photography-tips-ecommerce",
      excerpt: "Master the fundamentals of product photography with these proven techniques that will boost your online sales and customer engagement.",
      content: `Product photography is the cornerstone of successful e-commerce. Here are 10 essential tips that will transform your product images:

## 1. Lighting is Everything
Natural light is your best friend, but consistency is key. Set up near a large window with diffused light, or invest in a simple lighting kit with softboxes.

**Pro Tip:** The golden hour (1 hour after sunrise or before sunset) provides the most flattering natural light for product photography.

## 2. Use a Tripod
Stability ensures sharp images and consistent framing across your product line. A sturdy tripod is worth the investment.

**Recommended:** Manfrotto 055 series tripods offer excellent stability and versatility for product photography.

## 3. White Balance Matters
Ensure accurate colors by setting proper white balance. Your customers need to see true-to-life colors to make confident purchases.

**Technical Note:** Use a gray card or color checker for precise white balance, especially when mixing light sources.

## 4. Multiple Angles Tell the Story
Show your product from various angles - front, back, sides, and detail shots. Give customers a complete view of what they're buying.

**Best Practice:** Include at least 5-7 images per product: main shot, back view, side views, detail shots, and lifestyle context.

## 5. Context and Scale
Include props or lifestyle elements to show scale and usage. A simple ruler or everyday objects can provide valuable context.

**Example:** When photographing jewelry, include a hand model or place items next to common objects like coins for scale reference.

## 6. Clean Backgrounds
White or neutral backgrounds keep focus on your product. They're also easier to edit and work across different platforms.

**Platform Requirements:**
- Amazon: Pure white background (RGB 255, 255, 255)
- Instagram: Can be more creative with backgrounds
- Website: Consistent with brand colors

## 7. Post-Processing Consistency
Develop a consistent editing style across all your product images. This creates a cohesive brand look.

**Workflow Tip:** Create and save presets in Lightroom or Photoshop for consistent editing across your product line.

## 8. Optimize for Web
Balance image quality with file size. Large files slow down your website, affecting user experience and SEO.

**Recommended Settings:**
- JPEG quality: 80-90%
- Web resolution: 72 DPI
- Max width: 2000px for zoom functionality

## 9. Show Products in Use
Lifestyle shots help customers visualize using your product in their daily lives.

**Strategy:** Create scenarios that your target audience can relate to and aspire to.

## 10. Test and Iterate
Monitor which images perform best and continuously improve your photography based on data and customer feedback.

**Analytics to Track:**
- Conversion rates by image type
- Time spent on product pages
- Customer feedback and reviews
- Return rates

## Conclusion

Great product photography is an investment that pays dividends in increased sales, reduced returns, and stronger brand perception. Start with these fundamentals and gradually build your skills and equipment as your business grows.

Remember: the goal isn't just to show what your product looks like—it's to help customers imagine owning and using it.`,
      image: "/images/nail-polish.webp",
      category: "Photography Tips",
      author: "Product Imagery Team",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["E-commerce", "Tips", "Lighting", "Beginner"],
      featured: true
    }
    // Add more posts here...
  ]
  
  return posts.find(post => post.slug === slug)
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [copied, setCopied] = useState(false)
  const post = getBlogPost(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F1D9B1]/20 via-white to-[#F1D9B1]/10">
        <Navigation />
        <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button className="bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800">
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const handleShare = async (platform: string) => {
    const url = window.location.href
    const title = post.title
    
    switch (platform) {
      case 'copy':
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
        break
    }
  }

  const relatedPosts = [
    {
      title: "Behind the Scenes: Creating the Perfect Flat Lay",
      slug: "behind-scenes-perfect-flat-lay",
      image: "/images/seeds-package.webp",
      category: "Behind the Scenes"
    },
    {
      title: "Equipment Review: Best Cameras for Product Photography",
      slug: "best-cameras-product-photography-2024",
      image: "/images/watch.webp",
      category: "Equipment Reviews"
    },
    {
      title: "Lighting Secrets: Natural vs Artificial Light",
      slug: "lighting-secrets-natural-vs-artificial-light",
      image: "/images/skincare-tube.webp",
      category: "Photography Tips"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F1D9B1]/20 via-white to-[#F1D9B1]/10">
      <Navigation />

      {/* Article Header */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <Link href="/blog" className="inline-flex items-center text-[#B8860B] hover:text-[#B8860B]/80 transition-colors mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <Badge className="bg-[#F1D9B1]/20 text-[#B8860B] border-[#F1D9B1]">
                {post.category}
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="aspect-video overflow-hidden rounded-2xl shadow-2xl">
              <Image 
                src={post.image || "/placeholder.svg"} 
                alt={post.title} 
                width={800} 
                height={500} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg max-w-none"
              >
                <div 
                  className="text-gray-700 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ 
                    __html: post.content.replace(/\n/g, '<br>').replace(/## (.*?)<br>/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h2>').replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>') 
                  }}
                />
              </motion.div>

              {/* Share Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-12 pt-8 border-t border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('facebook')}
                    className="flex items-center space-x-2"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('twitter')}
                    className="flex items-center space-x-2"
                  >
                    <Twitter className="w-4 h-4" />
                    <span>Twitter</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('linkedin')}
                    className="flex items-center space-x-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('copy')}
                    className="flex items-center space-x-2"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="sticky top-32 space-y-8"
              >
                {/* Author Info */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-[#F1D9B1]/10 to-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#F1D9B1] to-[#E6C89A] rounded-full flex items-center justify-center mb-4">
                      <User className="w-8 h-8 text-gray-700" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{post.author}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Professional product photographers with 5+ years of experience helping brands showcase their products beautifully.
                    </p>
                    <Link href="/contact">
                      <Button size="sm" className="bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800">
                        Work With Us
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Related Posts */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost, index) => (
                        <Link key={index} href={`/blog/${relatedPost.slug}`}>
                          <div className="flex space-x-3 group cursor-pointer">
                            <div className="w-16 h-16 overflow-hidden rounded-lg flex-shrink-0">
                              <Image 
                                src={relatedPost.image || "/placeholder.svg"} 
                                alt={relatedPost.title} 
                                width={64} 
                                height={64} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <Badge className="bg-[#F1D9B1]/20 text-[#B8860B] border-none text-xs mb-1">
                                {relatedPost.category}
                              </Badge>
                              <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#B8860B] transition-colors line-clamp-2">
                                {relatedPost.title}
                              </h4>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
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
              Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">Product Photography?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let our team of professional photographers help you create stunning images that drive sales and build your brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Your Quote
                </Button>
              </Link>
              
              <Link href="/portfolio">
                <Button 
                  variant="outline"
                  size="lg" 
                  className="border-2 border-[#F1D9B1] text-gray-700 hover:bg-[#F1D9B1]/10 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
