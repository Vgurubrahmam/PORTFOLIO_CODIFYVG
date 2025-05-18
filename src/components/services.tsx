"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"
import { Code, Database, Smartphone, } from "lucide-react"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

 const services = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Full-Stack App Development",
    description:
      "End-to-end MERN–stack builds—from React/Next.js UIs to secure Node/Express APIs and MongoDB / SQL data layers—delivered production-ready with responsive design and JWT authentication.",
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Data-Driven & AI Integrations",
    description:
      "Designing scalable schemas and integrating OpenAI/REST services to add résumé analysis, search, or other intelligent features that turn raw data into meaningful user value.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Code Review & Performance Tuning",
    description:
      "Debugging, refactoring, and optimizing existing React, Python, or C++ codebases—improving test coverage, fixing edge-case bugs, and boosting load times for seamless cross-device experiences.",
  },
]
    

  return (
    <section id="services" className="py-24 bg-muted/30 dark:bg-muted/10" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="text-sm uppercase tracking-wider text-primary font-semibold mb-2"
          >
            What I Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            My Services
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 h-1 w-24 bg-primary mx-auto origin-left"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-muted-foreground max-w-2xl mx-auto"
          >
            I provide comprehensive web development services to help businesses and individuals establish a strong
            online presence. Here&#39;s what I can do for you:
          </motion.p>
        </div>

      <div
  className="flex flex-wrap justify-around items-center gap-6"
>
  {services.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-card rounded-lg p-6  border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 w-full sm:w-[45%] lg:w-[25%]"
    >
      <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">
        {service.title}
      </h3>
      <p className="text-muted-foreground">{service.description}</p>
    </motion.div>
  ))}
</div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Looking for a custom service not listed here? <a href="#contact"><span className="text-primary font-medium">Contact me</span></a>
            to discuss your specific requirements and how I can help bring your vision to life.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
