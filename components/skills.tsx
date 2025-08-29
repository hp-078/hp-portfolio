"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Globe, Cpu, Brain, Settings } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["C++", "Java", "Python", "JavaScript", "SQL"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML/CSS", "JavaScript", "React.js", "Node.js", "Express.js"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: ["MongoDB", "XAMPP", "Gradio", "ReportLab"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Core Subjects",
    icon: Brain,
    skills: ["DSA", "Operating Systems", "DBMS", "Networking", "OOPS"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Frameworks & Libraries",
    icon: Settings,
    skills: [ "Framer Motion", "Recharts", "Pandas", "NumPy"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Specializations",
    icon: Cpu,
    skills: ["Machine Learning", "IoT", "Voice Recognition", "Data Analytics"],
    color: "from-pink-500 to-rose-500",
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:border-white/20 transition-all duration-300">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`}></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Problem Solving Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Problem Solving Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Problems Solved</div>
                <div className="text-sm text-gray-400">LeetCode, HackerRank, GeeksforGeeks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">2</div>
                <div className="text-gray-300">Hackathon Wins</div>
                <div className="text-sm text-gray-400">PyQuest & Technical Treasure Hunt</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">4+</div>
                <div className="text-gray-300">Certifications</div>
                <div className="text-sm text-gray-400">Web Design, DSA, AI, Problem Solving</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
