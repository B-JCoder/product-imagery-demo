"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, User, Tag, ArrowRight, Search, Filter, Camera, Lightbulb, Eye, TrendingUp } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
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

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['All', 'Photography Tips', 'Behind the Scenes', 'Equipment Reviews', 'Client Stories', 'Industry Trends']

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Product Photography Tips for E-commerce Success",
      slug: "essential-product-photography-tips-ecommerce",
      excerpt: "Master the fundamentals of product photography with these proven techniques that will boost your online sales and customer engagement.",
      content: `Product photography is the cornerstone of successful e-commerce. Here are 10 essential tips that will transform your product images:

## 1. Lighting is Everything
Natural light is your best friend, but consistency is key. Set up near a large window with diffused light, or invest in a simple lighting kit with softboxes.

## 2. Use a Tripod
Stability ensures sharp images and consistent framing across your product line. A sturdy tripod is worth the investment.

## 3. White Balance Matters
Ensure accurate colors by setting proper white balance. Your customers need to see true-to-life colors to make confident purchases.

## 4. Multiple Angles Tell the Story
Show your product from various angles - front, back, sides, and detail shots. Give customers a complete view of what they're buying.

## 5. Context and Scale
Include props or lifestyle elements to show scale and usage. A simple ruler or everyday objects can provide valuable context.

## 6. Clean Backgrounds
White or neutral backgrounds keep focus on your product. They're also easier to edit and work across different platforms.

## 7. Post-Processing Consistency
Develop a consistent editing style across all your product images. This creates a cohesive brand look.

## 8. Optimize for Web
Balance image quality with file size. Large files slow down your website, affecting user experience and SEO.

## 9. Show Products in Use
Lifestyle shots help customers visualize using your product in their daily lives.

## 10. Test and Iterate
Monitor which images perform best and continuously improve your photography based on data and customer feedback.`,
      image: "/images/nail-polish.webp",
      category: "Photography Tips",
      author: "Product Imagery Team",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["E-commerce", "Tips", "Lighting", "Beginner"],
      featured: true
    },
    {
      id: 2,
      title: "Behind the Scenes: Creating the Perfect Flat Lay",
      slug: "behind-scenes-perfect-flat-lay",
      excerpt: "Take a peek behind the camera as we break down our process for creating stunning flat lay compositions that tell compelling brand stories.",
      content: `Flat lay photography has become a cornerstone of modern product marketing. Here's how we create those picture-perfect overhead shots:

## The Planning Phase
Every great flat lay starts with a mood board. We consider:
- Brand personality and color palette
- Target audience preferences  
- Seasonal relevance
- Product story we want to tell

## Setting Up the Scene
Our flat lay setup includes:
- Large, clean surface (usually white or textured)
- Overhead lighting rig with diffusers
- Camera mounted on boom arm or ladder
- Collection of props and styling elements

## The Styling Process
1. **Start with the hero product** - Place your main product first
2. **Add supporting elements** - Props that complement without competing
3. **Create visual flow** - Guide the eye through the composition
4. **Balance colors and textures** - Ensure harmony in the overall look
5. **Leave breathing room** - Don't overcrowd the frame

## Technical Considerations
- Shoot tethered to see composition in real-time
- Use manual focus for consistency
- Bracket exposures for perfect lighting
- Shoot in RAW for maximum editing flexibility

## Common Mistakes to Avoid
- Overcrowding the composition
- Inconsistent lighting across the frame
- Props that distract from the main product
- Forgetting about negative space

The result? Flat lays that not only showcase products beautifully but tell a complete brand story in a single frame.`,
      image: "/images/seeds-package.webp",
      category: "Behind the Scenes",
      author: "Product Imagery Team",
      date: "2024-01-10",
      readTime: "6 min read",
      tags: ["Flat Lay", "Styling", "Process", "BTS"],
      featured: false
    },
    {
      id: 3,
      title: "Equipment Review: Best Cameras for Product Photography in 2024",
      slug: "best-cameras-product-photography-2024",
      excerpt: "Our comprehensive review of the top cameras for product photography, from budget-friendly options to professional-grade equipment.",
      content: `Choosing the right camera for product photography can make or break your business. Here's our detailed review of the best options in 2024:

## Professional Level: Canon EOS R5
**Price: $3,899**
- 45MP full-frame sensor
- Exceptional image quality
- Great for high-end commercial work
- **Pros:** Outstanding detail, excellent color science
- **Cons:** Expensive, overkill for beginners

## Mid-Range Champion: Sony A7 IV
**Price: $2,498**
- 33MP full-frame sensor
- Excellent value for money
- Great low-light performance
- **Pros:** Versatile, good video capabilities
- **Cons:** Menu system can be complex

## Budget-Friendly: Canon EOS M50 Mark II
**Price: $599**
- 24MP APS-C sensor
- Perfect for small businesses
- Lightweight and portable
- **Pros:** Affordable, user-friendly
- **Cons:** Limited lens selection

## Mirrorless Alternative: Fujifilm X-T4
**Price: $1,699**
- 26MP APS-C sensor
- Excellent color reproduction
- Great build quality
- **Pros:** Film simulation modes, compact
- **Cons:** Smaller sensor than full-frame

## Our Recommendation
For most product photography businesses, we recommend starting with the Sony A7 IV. It offers the perfect balance of image quality, features, and price.

## Essential Accessories
- Sturdy tripod (Manfrotto 055 series)
- Macro lens (100mm f/2.8)
- Lighting kit (Godox AD200 Pro)
- Color checker for accurate colors`,
      image: "/images/watch.webp",
      category: "Equipment Reviews",
      author: "Product Imagery Team",
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["Equipment", "Cameras", "Reviews", "Gear"],
      featured: false
    },
    {
      id: 4,
      title: "Client Success Story: How We Boosted Fittea's Sales by 150%",
      slug: "fittea-success-story-sales-boost",
      excerpt: "Discover how strategic product photography helped Fittea Pakistan transform their online presence and achieve remarkable sales growth.",
      content: `When Fittea Pakistan approached us, they were struggling with low-quality product images that weren't converting visitors into customers. Here's how we turned things around:

## The Challenge
- Inconsistent product photography
- Poor lighting and composition
- Low engagement on social media
- Declining online sales

## Our Solution
### Phase 1: Brand Analysis
We studied Fittea's target audience and brand positioning to understand what would resonate with their customers.

### Phase 2: Photography Strategy
- Created a consistent visual style
- Focused on lifestyle and health benefits
- Incorporated natural, organic styling
- Emphasized product quality and purity

### Phase 3: Content Creation
- 50+ product images across their range
- Lifestyle shots showing products in use
- Social media optimized content
- Seasonal campaign imagery

## The Results
After implementing our photography strategy:
- **150% increase in online sales**
- **200% boost in social media engagement**
- **75% reduction in product return rates**
- **Improved brand perception and trust**

## Key Takeaways
1. Consistent visual branding builds trust
2. Lifestyle imagery helps customers visualize benefits
3. Quality photography directly impacts sales
4. Professional images reduce return rates

## Client Testimonial
*"The product photography transformation was incredible. Our customers now have complete confidence in our products before purchasing, and our sales have never been better."* - Fittea Pakistan Team

This case study demonstrates the direct impact that professional product photography can have on business success.`,
      image: "/images/mango-jam.webp",
      category: "Client Stories",
      author: "Product Imagery Team",
      date: "2023-12-28",
      readTime: "7 min read",
      tags: ["Case Study", "Success Story", "ROI", "Client"],
      featured: true
    },
    {
      id: 5,
      title: "The Rise of 360° Product Photography: Why Your Business Needs It",
      slug: "rise-360-product-photography-business-needs",
      excerpt: "Explore the growing trend of 360° product photography and how this immersive technology is revolutionizing online shopping experiences.",
      content: `360° product photography is no longer a luxury—it's becoming a necessity for competitive e-commerce businesses. Here's why:

## What is 360° Product Photography?
360° photography captures a product from every angle, allowing customers to rotate and examine items as if they were holding them in person.

## The Business Benefits
### Increased Conversion Rates
Studies show that products with 360° views have:
- 27% higher conversion rates
- 40% longer time spent on product pages
- 60% reduction in return rates

### Enhanced Customer Confidence
Interactive product views help customers:
- Examine details thoroughly
- Understand product scale and proportions
- Feel more confident about their purchase

### Competitive Advantage
Stand out from competitors who only offer static images.

## Industries That Benefit Most
1. **Fashion & Accessories** - Show fit, texture, and details
2. **Electronics** - Display ports, buttons, and build quality
3. **Home Decor** - Reveal craftsmanship and finish quality
4. **Jewelry** - Highlight sparkle and intricate details

## Technical Requirements
- Specialized 360° photography rig
- Consistent lighting setup
- High-resolution camera
- Post-processing software
- Web integration platform

## Implementation Costs
- Basic setup: PKR 50,000-100,000
- Professional setup: PKR 200,000-500,000
- Per-product cost: PKR 3,000-8,000

## ROI Expectations
Most businesses see ROI within 3-6 months through:
- Increased sales conversion
- Reduced return rates
- Higher average order values
- Improved customer satisfaction

## Getting Started
1. Identify high-value products for 360° treatment
2. Partner with experienced 360° photographers
3. Integrate viewing technology on your website
4. Monitor performance and optimize

The future of product photography is interactive, and businesses that adopt 360° technology now will have a significant advantage in the competitive e-commerce landscape.`,
      image: "/images/perfume-bottle.webp",
      category: "Industry Trends",
      author: "Product Imagery Team",
      date: "2023-12-20",
      readTime: "9 min read",
      tags: ["360 Photography", "Technology", "Trends", "E-commerce"],
      featured: false
    },
    {
      id: 6,
      title: "Lighting Secrets: Creating Mood with Natural vs Artificial Light",
      slug: "lighting-secrets-natural-vs-artificial-light",
      excerpt: "Master the art of lighting in product photography. Learn when to use natural light versus artificial lighting to create the perfect mood for your brand.",
      content: `Lighting is the soul of photography. Understanding when and how to use different lighting sources can transform your product images from ordinary to extraordinary.

## Natural Light: The Organic Choice
### Advantages
- Soft, flattering quality
- Cost-effective (it's free!)
- Great for lifestyle and organic products
- Easy color temperature consistency

### Best Uses
- Food photography
- Natural/organic products
- Lifestyle shots
- Soft, romantic brand aesthetics

### Challenges
- Weather dependent
- Limited control
- Inconsistent throughout the day
- Seasonal variations

## Artificial Light: Complete Control
### Advantages
- Consistent and repeatable
- Complete creative control
- Work any time of day
- Precise shadow control

### Best Uses
- Technical products
- High-end luxury items
- Consistent brand imagery
- Commercial photography

### Setup Options
1. **Continuous LED Lights**
   - What you see is what you get
   - Great for beginners
   - Lower power output

2. **Strobe/Flash Lighting**
   - High power output
   - Freezes motion
   - Professional standard

## Hybrid Approach: Best of Both Worlds
Many successful product photographers combine both:
- Natural light as key light
- Artificial fill light for shadows
- Reflectors to bounce natural light
- Scrims to diffuse harsh sunlight

## Lighting Patterns for Products
### Front Lighting
- Even illumination
- Minimal shadows
- Good for technical documentation

### Side Lighting
- Creates dimension and texture
- Shows product form
- More dramatic and interesting

### Back Lighting
- Creates rim lighting
- Separates product from background
- Adds drama and sophistication

## Color Temperature Considerations
- Daylight: 5500K (neutral)
- Tungsten: 3200K (warm)
- LED panels: Variable (2700K-6500K)
- Mixed lighting: Use gels or adjust in post

## Pro Tips
1. **Golden Hour Magic**: Shoot 1 hour after sunrise or before sunset for warm, soft light
2. **Overcast Days**: Perfect natural softbox for even lighting
3. **Window Light**: Large north-facing windows provide consistent, soft light
4. **Light Modifiers**: Use diffusers, reflectors, and flags to shape light
5. **Test Shots**: Always take test shots to check lighting before the main shoot

## Common Lighting Mistakes
- Mixing color temperatures without correction
- Creating harsh, unflattering shadows
- Overexposing highlights
- Underexposing shadow details
- Inconsistent lighting across product line

Remember: Great lighting isn't about expensive equipment—it's about understanding how light behaves and using it creatively to serve your brand's story.`,
      image: "/images/skincare-tube.webp",
      category: "Photography Tips",
      author: "Product Imagery Team",
      date: "2023-12-15",
      readTime: "12 min read",
      tags: ["Lighting", "Natural Light", "Studio", "Advanced"],
      featured: false
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.slice(0, 3)

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
                <Lightbulb className="w-4 h-4 mr-2" />
                Photography Blog
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold leading-tight"
            >
              Photography Tips &
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">
                INSIGHTS
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover professional photography techniques, behind-the-scenes stories, and industry insights that will elevate your product photography game.
            </motion.p>

            {/* Search and Filter */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-3 border-gray-200 focus:ring-[#F1D9B1] focus:border-[#F1D9B1]"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1D9B1] focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#F1D9B1]/30 to-[#E6C89A]/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">Articles</span>
              </h2>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {featuredPosts.map((post, index) => (
                <motion.div key={post.id} variants={scaleIn}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white group">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <Image 
                        src={post.image || "/placeholder.svg"} 
                        alt={post.title} 
                        width={600} 
                        height={400} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge className="bg-[#F1D9B1]/20 text-[#B8860B] border-none">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#B8860B] transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Link href={`/blog/${post.slug}`}>
                        <Button className="bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800 font-semibold group">
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">Articles</span>
            </h2>
            <p className="text-lg text-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <motion.div key={post.id} variants={scaleIn}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white group">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <Image 
                      src={post.image || "/placeholder.svg"} 
                      alt={post.title} 
                      width={400} 
                      height={300} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-[#F1D9B1]/20 text-[#B8860B] border-none text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#B8860B] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="text-[#B8860B] hover:text-[#B8860B] hover:bg-[#F1D9B1]/20 group">
                          Read More
                          <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No articles found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSelectedCategory('All')
                  setSearchQuery('')
                }}
                className="mt-4 bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
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
              Stay Updated with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">Photography Tips</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get the latest photography tips, behind-the-scenes content, and industry insights delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 py-3 border-gray-200 focus:ring-[#F1D9B1] focus:border-[#F1D9B1]"
              />
              <Button className="bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800 font-semibold px-8 py-3">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-gray-500">
              Join 500+ photographers and business owners. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
