"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* === Grid Background === */}
 <div
  className={cn(
    "absolute inset-0 pointer-events-none z-0",
    "[background-size:40px_40px]",
    "[background-image:linear-gradient(to_right,theme(colors.primary.DEFAULT)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.primary.DEFAULT)_1px,transparent_1px)]",
    // radial mask to show only at 4 corners and reduce towards center
    "[mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]",
    "dark:[background-image:linear-gradient(to_right,theme(colors.primary.DEFAULT)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.primary.DEFAULT)_1px,transparent_1px)]"
  )}
/>

  
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black">
        
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-16">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} />
          {/* check */}
          
            <h2 className="text-primary font-medium">Hello, I&#39;m</h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">Guru Brahmam</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-foreground">
              <span className="text-primary">Tech Enthusiast</span> & Full-Stack Web Developer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate coder dedicated to turning ideas into intuitive and efficient digital experiences.
              Skilled in leveraging modern web technologies to build responsive, scalable, and user-friendly applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Button className="group" asChild>
              <a href="#contact">
                Hire Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" className="group" asChild>
              <a
                href="https://drive.google.com/uc?export=download&id=1sTSwM5MwTWVmTO7rQXR3qHy78eh_3zOZ"
                download="VGuruBrahmam_CV.pdf"
              >
                <FileText className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex justify-center space-x-5"
          >
            <a
              href="https://github.com/Vgurubrahmam"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/guru-brahmam-velpula"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:vgurubrahmam338@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll Down</span>
        </a>
      </div>
    </section>
  )
}
