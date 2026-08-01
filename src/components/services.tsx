"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"
import {
  Bot,
  BrainCircuit,
  Database,
  SearchCode,
  Server,
  Workflow,
} from "lucide-react"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      title: "Generative AI Applications",
      description:
        "Develop intelligent applications powered by Large Language Models, prompt engineering, and modern AI frameworks.",
      icon: <Bot className="h-6 w-6 text-primary" />,
    },
    {
      title: "AI Agent Development",
      description:
        "Build AI agents and multi-agent workflows to automate business processes and enhance user experiences.",
      icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    },
    {
      title: "Backend Development",
      description:
        "Create scalable backend systems using FastAPI, Node.js, REST APIs, authentication, and database integration.",
      icon: <Server className="h-6 w-6 text-primary" />,
    },
    {
      title: "Semantic Search & RAG",
      description:
        "Implement semantic search and Retrieval-Augmented Generation (RAG) solutions using vector embeddings.",
      icon: <SearchCode className="h-6 w-6 text-primary" />,
    },
    {
      title: "Database Solutions",
      description:
        "Design and manage scalable databases with PostgreSQL, MongoDB, Supabase, and optimized data architectures.",
      icon: <Database className="h-6 w-6 text-primary" />,
    },
    {
      title: "AI API Integration",
      description:
        "Integrate OpenAI, Gemini, Claude, Azure AI, and other AI services into production-ready applications.",
      icon: <Workflow className="h-6 w-6 text-primary" />,
    },
  ]

  return (
    <section
  id="services"
  className="py-24 bg-muted/30 dark:bg-muted/10"
  ref={ref}
>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
        className="text-sm uppercase tracking-wider text-primary font-semibold mb-2"
      >
        What I Do
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-foreground"
      >
        My Expertise
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-4 h-1 w-24 bg-primary mx-auto origin-left"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6 text-muted-foreground max-w-2xl mx-auto"
      >
        I build AI-powered applications, scalable backend systems, and
        intelligent automation solutions using Large Language Models, modern
        frameworks, and cloud-ready technologies.
      </motion.p>
    </div>

    {/* Services */}
    <div className="flex flex-wrap justify-around items-stretch gap-6">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{
            duration: 0.5,
            delay: 0.2 + index * 0.1,
          }}
          whileHover={{
            y: -6,
            transition: { duration: 0.2 },
          }}
          className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 w-full sm:w-[45%] lg:w-[30%]"
        >
          <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
            {service.icon}
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-3">
            {service.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Footer */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mt-16 text-center"
    >
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Have an AI or software project in mind?{" "}
        <a href="#contact">
          <span className="text-primary font-medium">
            Let&apos;s connect
          </span>
        </a>{" "}
        and discuss how we can build an intelligent solution together.
      </p>
    </motion.div>
  </div>
</section>
  )
}
