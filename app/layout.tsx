import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Coral Construct Solutions - Luxury Over-Water Investments in Maldives",
  description:
    "Exclusive over-water real estate investment opportunities in the Maldives. Discover luxury properties and investment plans with Coral Construct Solutions.",
  keywords: "Maldives real estate, over-water properties, luxury investments, coral construction",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased overflow-x-hidden`}>
        <div className="min-h-screen w-full max-w-full">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
