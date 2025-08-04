"use client"

import { ArrowDown, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import NextImage from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <NextImage
          src="/maldivees-hero.jpg?height=1080&width=1920"
          alt="Maldives over-water villa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 ocean-gradient opacity-60"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 bg-white/30 rounded-full"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-6 h-6 bg-teal-400/40 rounded-full"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "4s" }}>
        <div className="w-3 h-3 bg-cyan-300/50 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-wave">
          Luxury Over-Water
          <span className="block gradient-text">Investments</span>
          <span className="block text-white">in Paradise</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover exclusive investment opportunities in the pristine waters of the Maldives with Coral Construct
          Solutions
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="#projects" passHref>
          <Button size="lg" className="glass-effect text-white border-white/30 hover:bg-white/20 px-8 py-3">
            Explore Projects
          </Button>
          </Link>
          {/* <Button
            variant="outline"
            size="lg"
            className="glass-effect text-white border-white/30 hover:bg-white/10 px-8 py-3 bg-transparent"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Video
          </Button> */}
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-white/70 mx-auto" />
        </div>
      </div>

      {/* Wave Animation */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 animate-wave">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="rgb(248 250 252)" />
        </svg>
      </div>
    </section>
  )
}
