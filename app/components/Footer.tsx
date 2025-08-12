"use client"

import { Waves, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const footerLinks = [
    { name: "About Us", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-slate-900 text-white w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4 sm:mb-6">
              <Waves className="h-6 w-6 sm:h-8 sm:w-8 text-teal-400" />
              <span className="font-playfair text-lg sm:text-xl font-bold">Coral Construct Solutions</span>
            </Link>
            <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Pioneering luxury over-water real estate investments in the pristine waters of the Maldives. Global reach,
              virtual excellence.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm sm:text-base break-words">invest@coralconstruct.com</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm sm:text-base">+1 (305) 204-8802</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Company</h3>
            <div className="flex flex-col space-y-2 sm:space-y-3">
              {footerLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-slate-300 hover:text-teal-400 transition-colors duration-200 text-sm sm:text-base py-1 w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-xs sm:text-sm text-center md:text-left">
              © 2024 Coral Construct Solutions. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
              <span className="text-slate-400 text-xs sm:text-sm">Licensed Investment Firm</span>
              <span className="text-slate-400 text-xs sm:text-sm">Maldives Tourism Board Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
