"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })

    const projects = [
        {
            title: "CV Analysis",
            description:
                "Boost your job applications with AI-powered resume analysis. Upload your resume and job description to get detailed ATS compatibility analysis and improvement suggestions.",
            image: "/cv_analysis.png",
            technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "OpenAI"],
            github: "https://github.com/Vgurubrahmam",
            demo: "https://cv-analysis-omega.vercel.app/",
            date: "May 2025",
        },
        {
            title: "BlogPost Platform",
            description:
                "A dynamic blogging platform that enables users to seamlessly create, read, update, and delete blog posts. Features persistent data storage with secure backend integration.",
            image: "/blogpost.png",
            technologies: ["React", "Node.js", "MongoDB", "Express.js", "Bootstrap"],
            github: "https://github.com/Vgurubrahmam",
            demo: "https://blogpost-kappa-six.vercel.app/",
            date: "April 2025",
        },
        {
            title: "Nxt Watch",
            description:
                "An interactive video platform built as a YouTube clone. Features pages like Login, Home, Trending, Gaming, and Saved Videos with JWT-based authentication and state persistence.",
            image: "/nxtwatch.png",
            technologies: ["React", "JavaScript", "CSS", "Bootstrap", "React Router", "REST API", "LocalStorage", "JWT"],
            github: "https://github.com/Vgurubrahmam",
            demo: "https://gbnxtwatch.ccbp.tech/",
            date: "March 2025",
        },
        {
            title: "Nxt Trendz (E-Commerce Clone)",
            description:
                "An e-commerce clone of Amazon/Flipkart with Login, Products, and Product Details pages. Implements JWT authentication and dynamic data fetching via REST APIs.",
            image: "/nxt-trendz.png",
            technologies: ["React", "JavaScript", "CSS", "Bootstrap", "React Router", "REST API", "LocalStorage", "JWT"],
            github: "https://github.com/Vgurubrahmam",
            demo: "https://gbnxtproducts.ccbp.tech/",
            date: "February 2025",
        },
        {
            title: "Jobby App",
            description:
                "A job search platform with pages like Login, Home, Jobs, and Job Details. Uses React Router for protected routing, JWT for secure authentication, and REST API for data operations.",
            image: "/jobby-app.png",
            technologies: ["React", "JavaScript", "CSS", "Bootstrap", "React Router", "REST API", "LocalStorage", "JWT"],
            github: "https://github.com/Vgurubrahmam",
            demo: "https://gbjobbyapp.ccbp.tech/",
            date: "January 2025",
        },
    ]
    return (
        <section id="projects" className="py-24 bg-background" ref={ref}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* header omitted for brevity */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm uppercase tracking-wider text-primary font-semibold mb-2"
                    >
                        Featured Work
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-foreground"
                    >
                        Recent Projects
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
                        Explore my latest projects showcasing my technical skills and problem-solving abilities in real-world
                        applications.
                    </motion.p>
                </div>
                <div className="relative">
                    {/* center timeline line */}
                    <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-primary" />
                    {/* left line for mobile */}
                    <div className="block md:hidden absolute inset-y-0 -left-2 w-0.5 bg-primary" />

                    {projects.map((p, i) => {
                        const even = i % 2 === 0
                        const imgSide = even ? "md:pr-8" : "md:order-2 md:pl-8"
                        const cardSide = even ? "md:pl-8" : "md:order-1 md:pr-8"

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                className="relative mb-16 flex flex-col md:flex-row items-center md:gap-x-8"
                            >


                                <span className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary" />

                                <div className={`relative w-full md:w-1/2 mb-5 sm:px-5 sm:py-3 md:mb-0  h-80 ${imgSide}`}>
                                    <Image src={p.image} alt={p.title} fill className="rounded-xl" />
                                </div>
                                <span className="absolute -left-4 md:hidden md:-translate-x-1/2 top-80  w-5 h-5 rounded-full bg-primary" />

                                {/* content side */}
                                <div className={`w-full md:w-1/2 bg-card border border-border rounded-xl p-6 ${cardSide}`}>
                                    <div className="flex items-center mb-3">
                                        <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                                        <span className="text-sm text-muted-foreground">{p.date}</span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                                    <p className="text-muted-foreground mb-4">{p.description}</p>

                                    <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {p.technologies.map((t) => (
                                            <span key={t} className="px-2.5 py-1 bg-muted text-xs rounded-md">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex space-x-3">
                                        <Button variant="outline" size="sm" asChild>
                                            <a href={p.github} target="_blank">
                                                <Github className="h-4 w-4 mr-2" /> Code
                                            </a>
                                        </Button>
                                        <Button size="sm" asChild>
                                            <a href={p.demo} target="_blank">
                                                <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>


               
            </div>
        </section>
    )

}
