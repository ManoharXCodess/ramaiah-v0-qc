"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Download, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-24 pb-16 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center">
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? "animate-bounce-in" : "opacity-0"}`}>
          <div className="relative w-40 h-40 mx-auto mb-6 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 animate-gradient animate-pulse-glow"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-600/30 backdrop-blur-sm">
              <img
                src="/professional-headshot-of-ai-ml-engineer.jpg"
                alt="Ramaiah Kunchala"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute -top-2 -right-2 animate-bounce">
              <Sparkles className="w-6 h-6 text-gray-400" />
            </div>
            <div className="absolute -bottom-2 -left-2 animate-bounce" style={{ animationDelay: "1s" }}>
              <Sparkles className="w-4 h-4 text-gray-500" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
            <span style={{ color: "#f3f4f6 !important" }}>Ramaiah Kunchala</span>
          </h1>

          <div className="relative inline-block mb-6">
            <p className="text-2xl md:text-3xl font-semibold text-gray-300 animate-pulse">AI/ML Engineer</p>
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg blur opacity-30 animate-pulse"></div>
          </div>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 text-pretty leading-relaxed">
            Motivated and detail-oriented AI/ML Engineer with 2 years of hands-on experience in Python programming,
            computer vision, and image annotation workflows. Passionate about developing AI-driven solutions for
            real-world problems.
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-4 mb-8 transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-in-up" : "opacity-0 translate-y-10"}`}
        >
          <Button
            variant="outline"
            size="sm"
            className="glass-effect hover:neon-glow transition-all duration-300 hover:scale-105 bg-transparent border-gray-600/30 hover:border-gray-400"
            asChild
          >
            <a href="tel:6301300074" className="flex items-center gap-2 text-gray-200 hover:text-gray-100">
              <Phone size={16} />
              6301300074
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="glass-effect hover:neon-glow transition-all duration-300 hover:scale-105 bg-transparent border-gray-600/30 hover:border-gray-400"
            asChild
          >
            <a
              href="mailto:ramaiahkunchala258@gmail.com"
              className="flex items-center gap-2 text-gray-200 hover:text-gray-100"
            >
              <Mail size={16} />
              Email
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="glass-effect hover:neon-glow transition-all duration-300 hover:scale-105 bg-transparent border-gray-600/30 hover:border-gray-400"
            asChild
          >
            <a
              href="http://www.linkedin.com/in/ramaiah-kunchala-65896118b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-200 hover:text-gray-100"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </Button>
        </div>

        <div
          className={`flex justify-center gap-4 transition-all duration-1000 delay-500 ${isVisible ? "animate-slide-in-up" : "opacity-0 translate-y-10"}`}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-semibold px-8 py-3 rounded-full shadow-2xl hover:shadow-gray-600/50 transition-all duration-300 hover:scale-105 animate-pulse-glow"
          >
            <Download size={20} className="mr-2" />
            Download Resume
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="glass-effect text-gray-200 border-gray-600/30 hover:border-gray-400 hover:text-gray-100 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
