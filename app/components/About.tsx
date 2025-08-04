"use client"

import { Building2, Waves, Award, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import NextImage from "next/image"

export default function About() {
  const features = [
    {
      icon: Building2,
      title: "Over-Water Expertise",
      description: "Specialized in luxury over-water construction with cutting-edge marine engineering",
    },
    {
      icon: Waves,
      title: "Maldives Focus",
      description: "Deep local knowledge and partnerships in the pristine waters of the Maldives",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Award-winning designs that blend luxury with environmental sustainability",
    },
    {
      icon: Users,
      title: "Global Reach",
      description: "Virtual operations enabling worldwide investor participation",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Coral Construct Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We are a pioneering real estate investment firm specializing in luxury over-water developments in the
            Maldives. Operating without traditional boundaries, we connect global investors with exclusive paradise
            properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-slate-50 to-white"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 ocean-gradient rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-4 text-slate-800">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-playfair text-3xl font-bold mb-6 text-slate-800">Virtual Excellence, Real Results</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Operating without a physical address allows us to maintain lower overhead costs while providing premium
                services. Our virtual-first approach enables us to work with the best talent globally and pass savings
                directly to our investors.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-slate-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">$2B+</div>
                  <div className="text-slate-600">Total Investment</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <NextImage
                  src="/about-maldives.jpg?height=400&width=600"
                  alt="Maldives aerial view"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
