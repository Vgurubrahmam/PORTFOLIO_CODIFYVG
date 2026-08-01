"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Head from "next/head"
export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
    <Head>
      <link
          rel="preload"
          href="/path-to-your-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
    </Head>
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* === Grid Background === */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,theme(colors.primary.DEFAULT)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.primary.DEFAULT)_1px,transparent_1px)]",
          "[mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]",
          "dark:[background-image:linear-gradient(to_right,theme(colors.primary.DEFAULT)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.primary.DEFAULT)_1px,transparent_1px)]"
        )}
      />

      {/* Radial Center Fade */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-16">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium"
          >
            Hello, I&#39;m
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
          >
            Guru Brahmam
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-2xl md:text-3xl font-semibold text-foreground"
          >
            <span className="text-primary">Tech Enthusiast</span> & Software Engineer Building AI-Driven Backend Platforms
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Software developer with production internship experience in backend engineering and GenAI integration. Built multi-agent LLM workflows, semantic search features, and WhatsApp automation for a CRM platform using FastAPI and vector embeddings. Delivered projects including an AI-powered ATS resume analysis platform and QuizMakerAI, an AI quiz generator.
          </motion.p>

          {/* Buttons */}
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
                href="https://drive.google.com/file/d/1N3DAckB_7PWK8UHbJ9_WO-ppolQ-0ZpR/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Social Icons */}
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
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/guru-brahmam-velpula"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
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
    </section>
    </>
  )
}

