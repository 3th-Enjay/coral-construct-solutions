"use client"

import { Mail, Phone, Globe, MessageCircle, Calendar, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get detailed information about our projects",
      contact: "invest@coralconstruct.com",
      action: "Send Email",
    },
    {
      icon: Phone,
      title: "Schedule Call",
      description: "Speak with our investment advisors",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant support for quick questions",
      contact: "Available 24/7",
      action: "Start Chat",
    },
    {
      icon: Globe,
      title: "Virtual Office",
      description: "Global presence, local expertise",
      contact: "Worldwide Operations",
      action: "Learn More",
    },
  ]

  const services = [
    {
      icon: Calendar,
      title: "Investment Consultation",
      description: "Personalized investment strategy session",
    },
    {
      icon: FileText,
      title: "Project Documentation",
      description: "Detailed project reports and financial projections",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to explore luxury over-water investment opportunities? Our global team is here to guide you through
            every step of your investment journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                    <Input placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Investment Interest</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
                    <option>Select Investment Plan</option>
                    <option>Coral Starter ($250K)</option>
                    <option>Ocean Elite ($500K)</option>
                    <option>Paradise Platinum ($1M+)</option>
                    <option>Custom Investment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <Textarea placeholder="Tell us about your investment goals and any questions you have..." rows={4} />
                </div>

                <Button className="w-full ocean-gradient text-white py-3">Send Message</Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 ocean-gradient rounded-lg flex items-center justify-center">
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 mb-1">{method.title}</h3>
                      <p className="text-sm text-slate-600 mb-2">{method.description}</p>
                      <p className="text-sm font-medium text-teal-600 mb-3">{method.contact}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-teal-500 text-teal-600 hover:bg-teal-50 bg-transparent"
                      >
                        {method.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="font-playfair text-3xl font-bold mb-4 text-slate-800">Additional Services</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Beyond investment opportunities, we offer comprehensive support services to ensure your success in the
              luxury real estate market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white rounded-xl p-6 shadow-sm">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 ocean-gradient rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">{service.title}</h4>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="ocean-gradient text-white px-8 py-3">Schedule Free Consultation</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
