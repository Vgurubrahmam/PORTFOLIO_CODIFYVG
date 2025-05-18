"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Briefcase,
  GraduationCap,
  Code, Calendar
} from "lucide-react"


export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [activeTab, setActiveTab] = useState("skills")

  // Technical Skills Data
  const technicalSkills = [
    {
      name: "HTML",
      img: "https://www.svgrepo.com/show/452228/html-5.svg",
    },
    {
      name: "CSS",
      img: "https://www.svgrepo.com/show/452185/css-3.svg",
    },
    {
      name: "JavaScript",
      img: "https://www.svgrepo.com/show/349419/javascript.svg",
    },
    {
      name: "TypeScript",
      img: "https://www.svgrepo.com/show/374146/typescript-official.svg",
    },
    {
      name: "React",
      img: "https://www.svgrepo.com/show/354259/react.svg",
    },
    {
      name: "Next.js",
      img: "https://www.svgrepo.com/show/378440/nextjs-fill.svg",
    },
    {
      name: "Tailwind CSS",
      img: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg",
    },
    {
      name: "Node.js",
      img: "https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
    },
    {
      name: "Express.js",
      img: "https://www.svgrepo.com/show/330398/express.svg",
    },
    {
      name: "MongoDB",
      img: "https://cdn3d.iconscout.com/3d/free/thumb/free-mongo-db-3d-icon-download-in-png-blend-fbx-gltf-file-formats--mongodb-database-document-oriented-nosql-coding-lang-pack-logos-icons-7577996.png",
    },

    {
      name: "Postgres",
      img: "https://static-00.iconduck.com/assets.00/database-postgres-icon-1845x2048-smttmjhf.png",
    },


    {
      name: "Python",
      img: "https://www.svgrepo.com/show/452091/python.svg",
    },

    {
      name: "Bootstrap",
      img: "https://www.svgrepo.com/show/353498/bootstrap.svg"
    },

  ]



  // Education Data
  const education = [
    {
      degree: "Industry-Ready Certification in Full-Stack Development",
      institution: "Nxtwave Disruptive Technologies",
      location: "",
      period: "Aug 2023 - Ongoing",
      description: "",
      achievements: [],
    },
    {
      degree: "B.Tech in Computer Science Engineering (CSE)",
      institution: "Kakinada Institute of Engineering and Technology",
      location: "Kakinada, India",
      period: "2022 - 2026",
      description: "Currently pursuing with a CGPA of 7.6.",
      achievements: [],
    },
  ]


  return (
    <section id="about" className="py-10 px-6 bg-white dark:bg-gray-800 overflow-x-hidden" ref={ref}>
       <div className="container mx-auto px-4 mb-3 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl text-center font-bold  text-gray-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-primary mx-auto"
          />
        </div> 

      <div className="flex flex-col md:flex-row items-center gap-12">

        <Image alt="Profile Image" src={'/profile_image.jpg'} width={400} height={400} className="rounded-xl object-cover" /> 


        {/* Right: 70% Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className=""
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">From Learner to Creator — <span className="text-primary">My Coding Journey</span></h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I’m V. Guru Brahmam, a Full-Stack Developer passionate about building meaningful digital solutions. My journey began with curiosity and a love for solving real-world problems through code. I specialize in the MERN stack, SQL, and Python, delivering both elegant UIs and robust backend systems. I thrive on learning by building, and this portfolio reflects my dedication to continuous growth and innovation.
          </p>
       <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex gap-4  justify-center">
              <TabsTrigger value="skills" className="flex items-center gap-2">
                <Code className="w-4 h-4" /> Skills
              </TabsTrigger>
              <TabsTrigger value="experience" className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Experience
              </TabsTrigger>
              <TabsTrigger value="education" className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Education
              </TabsTrigger>
            </TabsList>

            <TabsContent value="skills">
              <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  gap-3 mb-2">
                {technicalSkills.map(({ name, img }) => (
                  <div key={name} className="flex  flex-wrap justify-center items-center px-4 py-3 dark:bg-none gap-3  bg-muted dark:bg-gray-700  rounded">
                    <img src={img} alt={name} className="w-6 h-6 object-contain" />
                    <span className="text-sm font-medium text-foreground">{name}</span>
                  </div>
                ))}
              </div>
            </TabsContent>


            <TabsContent value="experience">
              <div className="space-y-4">
                <div className="flex flex-wrap justify-between">

                  <h1><span className="text-primary font-semibold text-lg">Web Developer</span> – (Global Coding Club (GCC)) - Kakinada, Andhra Pradesh </h1>
                  <p className="font-semibold">June 2024 - Present</p>
                </div>
                <ul className="list-disc px-8 mb-4 text-foreground/60">
                  <li>Led a team of six members to develop and maintain web applications using React.js and Node.js</li>
                  <li> Integrated APIs to enhance functionality and optimize user experience.</li>
                  <li>Collaborated with teams to build internal tools and gained expertise in full-stack development with React.js, Node.js,
                    MongoDB, Express.js, SQL, Python, JavaScript.</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="education">
              <section id="education" className="bg-white dark:bg-gray-800" ref={ref}>
                <div className="">
                  <div className="">
                    {education.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className="relative pl-4 pb-6 border-l-2 border-primary last:border-transparent last:pb-0"
                      >
                        <div className="absolute -left-3 top-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                          <GraduationCap className="h-3 w-3 text-white" />
                        </div>

                       
                        <div className="flex flex-wrap justify-between ">
                          <div className="flex text-start items-center">
                            <GraduationCap className="h-5 w-5 text-primary mr-2" />
                            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">{item.degree}</h1>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{item.period}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 font-medium mb-2 mx-7">{item.institution}{item.location ? `, ${item.location}` : ""}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-3 px-5">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            </TabsContent>

          </Tabs> 


          <h2 className="text-primary font-semibold text-md">Let’s create exceptional digital experiences—together.</h2>
        </motion.div>
      </div>
    </section>
  )
}
