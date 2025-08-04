"use client"

import { Waves, Mail, Phone, Globe } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Investment Plans", href: "#investments" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Investment Disclaimer", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
    resources: [
      { name: "Investment Guide", href: "#" },
      { name: "Market Reports", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Blog", href: "#" },
    ],
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Waves className="h-8 w-8 text-teal-400" />
              <span className="font-playfair text-xl font-bold">Coral Construct Solutions</span>
            </Link>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Pioneering luxury over-water real estate investments in the pristine waters of the Maldives. Global reach,
              virtual excellence.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <span className="text-slate-300">invest@coralconstruct.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-teal-400" />
                <span className="text-slate-300">Global Virtual Operations</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-300 hover:text-teal-400 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-300 hover:text-teal-400 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-300 hover:text-teal-400 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 Coral Construct Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <span className="text-slate-400 text-sm">Licensed Investment Firm</span>
              <span className="text-slate-400 text-sm">Maldives Tourism Board Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
