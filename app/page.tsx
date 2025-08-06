"use client";

import { motion } from "framer-motion";
import {
  Camera,
  TrendingUp,
  Edit3,
  MessageCircle,
  Globe,
  ShoppingBag,
  RotateCcw,
  ImageIcon,
  Users,
  Brush,
  Grid3X3,
  Video,
  Sparkles,
  Palette,
  Zap,
  Package,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Plus,
  Minus,
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  HelpCircle,
  Clock,
  Award,
  Target,
  Heart,
  Lightbulb,
  Eye,
  BookOpen,
  Calendar,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import EnhancedCarousel from "@/components/enhanced-carousel";
import ImageLightbox from "@/components/image-lightbox";
import ContactForm from "@/components/contact-form";
import FAQSection from "@/components/faq-section";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

// WhatsApp Button Component
const WhatsAppButton = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.a
        href="https://wa.me/923268044557"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group whatsapp-pulse"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="white"
          className="group-hover:scale-110 transition-transform"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
        </svg>
      </motion.a>
    </motion.div>
  );
};

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const heroImages = [
    {
      src: "/images/plum-chutney.webp",
      alt: "Plum Chutney",
      title: "Artisan Preserves",
      category: "Food & Beverage",
    },
    {
      src: "/images/mango-jam.webp",
      alt: "Mango Jam",
      title: "Tropical Flavors",
      category: "Gourmet Foods",
    },
    {
      src: "/images/nail-polish.webp",
      alt: "Nail Polish",
      title: "Beauty Products",
      category: "Cosmetics",
    },
    {
      src: "/images/watch.webp",
      alt: "Luxury Watch",
      title: "Premium Accessories",
      category: "Fashion",
    },
    {
      src: "/images/perfume-bottle.webp",
      alt: "Perfume",
      title: "Luxury Fragrance",
      category: "Beauty",
    },
    {
      src: "/images/skincare-tube.webp",
      alt: "Skincare",
      title: "Premium Skincare",
      category: "Beauty",
    },
    {
      src: "/images/seeds-package.webp",
      alt: "Health Products",
      title: "Wellness Products",
      category: "Health",
    },
  ];

  const portfolioImages = [
    {
      src: "/images/nail-polish.webp",
      alt: "Beauty Products",
      title: "Premium Nail Polish Collection",
      description:
        "Elegant product photography showcasing luxury beauty products",
    },
    {
      src: "/images/skincare-tube.webp",
      alt: "Skincare Line",
      title: "Natural Skincare Products",
      description: "Clean, professional shots highlighting natural ingredients",
    },
    {
      src: "/images/seeds-package.webp",
      alt: "Health Products",
      title: "Wellness & Health Products",
      description: "Lifestyle photography emphasizing health benefits",
    },
    {
      src: "/images/perfume-bottle.webp",
      alt: "Luxury Fragrance",
      title: "Premium Fragrance Collection",
      description: "Sophisticated photography capturing elegance and luxury",
    },
    {
      src: "/images/mango-jam.webp",
      alt: "Artisan Foods",
      title: "Gourmet Food Products",
      description: "Mouth-watering photography showcasing artisanal quality",
    },
    {
      src: "/images/watch.webp",
      alt: "Luxury Accessories",
      title: "Premium Timepiece Collection",
      description: "High-end photography highlighting craftsmanship",
    },
  ];

  const testimonials = [
    {
      name: "Fittea Pakistan",
      logo: "/images/fittea-logo.webp",
      review:
        "I'm here to give review of the best product photography. I booked my shoot twice, best experience! The quality exceeded our expectations and really helped boost our online sales. Professional service from start to finish.",
      rating: 5,
      position: "Marketing Director",
      results: "150% increase in online sales",
    },
    {
      name: "The Jar Affairs",
      logo: "/images/jar-affairs-logo.webp",
      review:
        "Outstanding quality and professional service. The product photos exceeded our expectations and really helped boost our online sales. The attention to detail and creative approach made our products look absolutely stunning.",
      rating: 5,
      position: "Founder",
      results: "200% boost in social engagement",
    },
    {
      name: "Skin Novella",
      logo: "/images/skin-novella-logo.webp",
      review:
        "The attention to detail in every shot is remarkable. Our products have never looked better. The team understood our brand perfectly and delivered images that truly represent our quality and values.",
      rating: 5,
      position: "Brand Manager",
      results: "75% reduction in return rates",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Product Photography Tips for E-commerce Success",
      excerpt:
        "Master the fundamentals of product photography with these proven techniques that will boost your online sales.",
      image: "/images/nail-polish.webp",
      category: "Photography Tips",
      author: "Product Imagery Team",
      date: "2024-01-15",
      readTime: "8 min read",
      slug: "essential-product-photography-tips-ecommerce",
    },
    {
      id: 2,
      title: "Behind the Scenes: Creating the Perfect Flat Lay",
      excerpt:
        "Take a peek behind the camera as we break down our process for creating stunning flat lay compositions.",
      image: "/images/seeds-package.webp",
      category: "Behind the Scenes",
      author: "Product Imagery Team",
      date: "2024-01-10",
      readTime: "6 min read",
      slug: "behind-scenes-perfect-flat-lay",
    },
    {
      id: 3,
      title: "Equipment Review: Best Cameras for Product Photography in 2024",
      excerpt:
        "Our comprehensive review of the top cameras for product photography, from budget-friendly to professional-grade.",
      image: "/images/watch.webp",
      category: "Equipment Reviews",
      author: "Product Imagery Team",
      date: "2024-01-05",
      readTime: "10 min read",
      slug: "best-cameras-product-photography-2024",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevImage = () => {
    setLightboxIndex(
      (prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F1D9B1]/20 via-white to-[#F1D9B1]/10">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-6 lg:space-y-8"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                Next-Level Product
                <br />
                Shots That Are{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">
                  TAILORED
                </span>
              </motion.h1>

              <motion.div
                variants={fadeInUp}
                className="space-y-4 lg:space-y-6"
              >
                <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light">
                  Your brand deserves more than just photos
                </p>
                <p className="text-lg sm:text-xl text-gray-500">
                  It needs a visual vibe that converts.
                </p>
                <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                  We specialize in creating stunning product photography that
                  doesn't just showcase your products—it tells your brand story,
                  builds trust with customers, and drives measurable results for
                  your business.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      {"Let's get started!"}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/portfolio">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto border-2 border-[#F1D9B1] text-gray-700 hover:bg-[#F1D9B1]/10 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      View Portfolio
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-6 pt-4"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    5.0 Rating
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-[#B8860B]" />
                  <span className="text-sm font-medium text-gray-600">
                    500+ Happy Clients
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-[#B8860B]" />
                  <span className="text-sm font-medium text-gray-600">
                    5+ Years Experience
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <EnhancedCarousel images={heroImages} />

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] rounded-full p-4 shadow-xl"
              >
                <Camera className="w-6 h-6 text-gray-700" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#E6C89A] to-[#D4B896] rounded-full p-4 shadow-xl"
              >
                <Sparkles className="w-6 h-6 text-gray-700" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Icons */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#F1D9B1]/30 to-[#E6C89A]/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8"
          >
            {[
              {
                icon: Camera,
                label: "Capture",
                description: "Professional photography",
              },
              {
                icon: TrendingUp,
                label: "Grow",
                description: "Boost your sales",
              },
              {
                icon: Edit3,
                label: "Transform",
                description: "Expert retouching",
              },
              {
                icon: MessageCircle,
                label: "Engage",
                description: "Connect with customers",
              },
              {
                icon: Globe,
                label: "Connect",
                description: "Reach global markets",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 group-hover:shadow-xl transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#F1D9B1] group-hover:to-[#E6C89A]">
                  <item.icon className="w-8 h-8 lg:w-10 lg:h-10 text-gray-600 group-hover:text-gray-800 transition-colors" />
                </div>
                <p className="font-semibold text-gray-700 group-hover:text-[#B8860B] transition-colors text-base lg:text-lg mb-1">
                  {item.label}
                </p>
                <p className="text-xs lg:text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-[#F1D9B1]/20 text-[#B8860B] border-[#F1D9B1] mb-4 px-4 py-2">
              <BookOpen className="w-4 h-4 mr-2" />
              Latest Insights
            </Badge>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-gray-900">
              Photography Tips &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">
                Behind the Scenes
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover professional photography techniques, industry insights,
              and behind-the-scenes stories from our studio.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div key={post.id} variants={scaleIn}>
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white group">
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
                        <span className="mr-3">{post.author}</span>
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#B8860B] hover:text-[#B8860B] hover:bg-[#F1D9B1]/20 group"
                        >
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

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/blog">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                View All Articles
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F1D9B1]/10 via-white to-[#E6C89A]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-[#F1D9B1]/20 text-[#B8860B] border-[#F1D9B1] mb-4 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-gray-900">
              How Can We Work{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">
                Together?
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              From creative concepts to e-commerce ready shots, we provide
              comprehensive photography solutions tailored to your brand's
              unique needs and business goals.
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
                icon: Camera,
                title: "Creative Product Photography",
                description:
                  "Stunning, on-brand visuals that capture attention and drive engagement across all platforms with artistic flair and professional quality.",
                features: [
                  "Custom lighting setups",
                  "Brand-aligned styling",
                  "Multiple angle shots",
                  "High-resolution delivery",
                ],
                price: "From PKR 15,000",
              },
              {
                icon: Grid3X3,
                title: "Flat Lay & Styled Shoots",
                description:
                  "Clean flat lays to styled storytelling that reflects your brand's personality perfectly and creates Instagram-worthy content.",
                features: [
                  "Creative compositions",
                  "Brand storytelling",
                  "Social media ready",
                  "Props included",
                ],
                price: "From PKR 12,000",
              },
              {
                icon: ShoppingBag,
                title: "E-Commerce Ready Shots",
                description:
                  "High-quality product shots optimized for Amazon, Shopify, and other e-commerce platforms with platform-specific requirements.",
                features: [
                  "White background shots",
                  "Platform compliance",
                  "Bulk handling",
                  "Quick turnaround",
                ],
                price: "From PKR 8,000",
              },
              {
                icon: Package,
                title: "Custom Photography Packages",
                description:
                  "Flexible packages that fit your brand's goals, timeline, and budget requirements with personalized service and attention.",
                features: [
                  "Tailored solutions",
                  "Flexible pricing",
                  "Dedicated support",
                  "Custom deliverables",
                ],
                price: "Custom Pricing",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="h-full hover:shadow-2xl transition-all duration-500 group cursor-pointer border-0 shadow-lg bg-gradient-to-br from-white to-[#F1D9B1]/10 hover:from-[#F1D9B1]/20 hover:to-[#E6C89A]/20">
                  <CardContent className="p-6 lg:p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F1D9B1] to-[#E6C89A] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <service.icon className="w-8 h-8 text-gray-700" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold mb-4 group-hover:text-[#B8860B] transition-colors text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-[#B8860B] rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge className="bg-[#F1D9B1]/20 text-[#B8860B] border-none text-xs">
                        {service.price}
                      </Badge>
                      <Link href="/services">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#B8860B] hover:bg-[#F1D9B1]/20 group"
                        >
                          Learn More
                          <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-[#F1D9B1]/20 text-[#B8860B] border-[#F1D9B1] mb-4 px-4 py-2">
              <ImageIcon className="w-4 h-4 mr-2" />
              Our Work
            </Badge>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-gray-900">
              Portfolio{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">
                Showcase
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped brands transform their visual identity
              and boost their sales through stunning product photography that
              converts visitors into customers.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioImages.map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-0">
                  <CardContent className="p-0 relative">
                    <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#F1D9B1]/20 to-white">
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-200">
                        {item.description}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/portfolio">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#F1D9B1] to-[#E6C89A] hover:from-[#E6C89A] hover:to-[#D4B896] text-gray-800 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                View Full Portfolio
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F1D9B1]/10 via-white to-[#E6C89A]/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">
              CLIENT SUCCESS STORIES
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              See how our professional product photography has helped businesses
              increase sales, reduce returns, and build stronger brand presence.
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Card className="bg-gradient-to-br from-[#F1D9B1]/20 to-[#E6C89A]/20 border-0 shadow-2xl">
                <CardContent className="p-8 lg:p-12">
                  <div className="mb-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
                      <Image
                        src={
                          testimonials[currentTestimonial].logo ||
                          "/placeholder.svg"
                        }
                        alt={testimonials[currentTestimonial].name}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-[#B8860B] font-medium mb-2">
                      {testimonials[currentTestimonial].position}
                    </p>
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        )
                      )}
                    </div>
                  </div>

                  <Quote className="w-8 h-8 text-[#B8860B] mx-auto mb-6" />

                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed italic mb-6">
                    "{testimonials[currentTestimonial].review}"
                  </p>

                  <Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {testimonials[currentTestimonial].results}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-[#F1D9B1]"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-gray-800" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-[#F1D9B1]"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-gray-800" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-[#B8860B] scale-125"
                    : "bg-gray-300 hover:bg-[#F1D9B1]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F1D9B1]/20 via-white to-[#E6C89A]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-[#F1D9B1]/20 text-[#B8860B] border-[#F1D9B1] mb-4 px-4 py-2">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-gray-900">
              Ready to Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">
                Brand?
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Let's create stunning visuals that tell your story and drive
              results. Get your custom quote today and see how professional
              photography can transform your business.
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16 grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/logo.webp"
                  alt="Product Imagery Logo"
                  width={120}
                  height={60}
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Creating stunning product photography that drives sales and
                builds brands. Your visual story starts here with professional
                quality and creative excellence.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: "#", color: "hover:text-pink-400" },
                  { icon: Facebook, href: "#", color: "hover:text-blue-400" },
                  { icon: Twitter, href: "#", color: "hover:text-sky-400" },
                  { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className={`w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-gray-600`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-[#F1D9B1]">
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  "Product Photography",
                  "E-commerce Shoots",
                  "Lifestyle Imagery",
                  "360° Product Views",
                  "Photo Retouching",
                  "Brand Storytelling",
                  "Video Content",
                  "Custom Packages",
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href="/services"
                      className="text-gray-300 hover:text-[#F1D9B1] transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-[#F1D9B1]">Company</h3>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Portfolio", href: "/portfolio" },
                  { name: "Services", href: "/services" },
                  { name: "Pricing", href: "/pricing" },
                  { name: "Blog", href: "/blog" },
                  { name: "Contact", href: "/contact" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-[#F1D9B1] transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-[#F1D9B1]">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#F1D9B1] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a
                      href="mailto:Andywarhol4242@gmail.com"
                      className="text-white hover:text-[#F1D9B1] transition-colors"
                    >
                      Andywarhol4242@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-[#F1D9B1] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a
                      href="tel:+923268044557"
                      className="text-white hover:text-[#F1D9B1] transition-colors"
                    >
                      +92 326 8044557
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#F1D9B1] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Location</p>
                    <p className="text-white">Remote Worldwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#F1D9B1] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Response Time</p>
                    <p className="text-white">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="py-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Product Imagery. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-[#F1D9B1] text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#F1D9B1] text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#F1D9B1] text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Image Lightbox */}
      <ImageLightbox
        images={portfolioImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrevious={prevImage}
      />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
