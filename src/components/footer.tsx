"use client"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-foreground">
              <span className="text-primary">Codify</span>VG
            </h2>
            <p className="text-muted-foreground mt-2 max-w-md">
              A passionate full-stack developer specializing in building exceptional digital experiences with modern web
              technologies.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-5 mb-4">
              <a
                href="https://github.com/Vgurubrahmam"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/guru-brahmam-velpula"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://vgurubrahmam338@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Back to top
              <ArrowUp className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} CodifyVG. All rights reserved.</p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
