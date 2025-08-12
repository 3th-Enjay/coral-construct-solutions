"use client"

import { Mail, Phone, Globe, MessageCircle, Calendar, FileText, MessageSquare, Send } from "lucide-react"
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
      action: "Send Email",
      email: "malcolmlenox8@gmail.com"
    },
    {
      icon: Phone,
      title: "Schedule Call",
      description: "Speak with our investment advisors",
      contact: "+1 (305) 204-8802",
      action: "Call Now",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Quick messaging and support",
      contact: "+1 772 240 8195",
      action: "WhatsApp",
      whatsapp: true
    },
    {
      icon: Send,
      title: "Telegram",
      description: "Instant messaging and updates",
      contact: "+1 305 204 8802",
      action: "Telegram",
      telegram: true
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
    <section id="contact" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
            Ready to explore luxury over-water investment opportunities? Our global team is here to guide you through
            every step of your investment journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="font-playfair text-xl sm:text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
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
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <Textarea placeholder="Tell us about your investment goals and any questions you have..." rows={4} />
                </div>

                <Button className="w-full ocean-gradient text-white py-3 text-sm sm:text-base">Send Message</Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 ocean-gradient rounded-lg flex items-center justify-center">
                        <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">{method.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 mb-2">{method.description}</p>
                      {method.contact && !method.whatsapp && !method.telegram && (
                        <p className="text-xs sm:text-sm font-medium text-teal-600 mb-3 break-words">{method.contact}</p>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-teal-500 text-teal-600 hover:bg-teal-50 bg-transparent text-xs sm:text-sm"
                        onClick={() => {
                          if (method.email) {
                            window.location.href = `mailto:${method.email}?subject=Inquiry about Coral Construct Solutions`;
                          } else if (method.whatsapp) {
                            const whatsappNumber = method.contact.replace(/\s+/g, '');
                            window.open(`https://wa.me/${whatsappNumber}?text=Hello, I'm interested in learning more about Coral Construct Solutions investment opportunities.`, '_blank');
                          } else if (method.telegram) {
                            const telegramNumber = method.contact.replace(/\s+/g, '');
                            window.open(`https://t.me/${telegramNumber}?text=Hello, I'm interested in learning more about Coral Construct Solutions investment opportunities.`, '_blank');
                          } else if (method.contact && method.contact.includes('+')) {
                            const phoneNumber = method.contact.replace(/\s+/g, '');
                            window.location.href = `tel:${phoneNumber}`;
                          }
                        }}
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

        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-slate-800">Additional Services</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Beyond investment opportunities, we offer comprehensive support services to ensure your success in the
              luxury real estate market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 sm:space-x-4 bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 ocean-gradient rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">{service.title}</h4>
                  <p className="text-slate-600 text-xs sm:text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  )
}
