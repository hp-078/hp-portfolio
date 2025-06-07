"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react"

const timelineData = [
  {
    year: "2023 - Present",
    title: "Bachelor of Technology",
    subtitle: "Computer Science and Engineering",
    organization: "Chandubhai S. Patel Institute of Technology, Charusat University",
    location: "Anand, Gujarat",
    description:
      "Currently pursuing BTech in CSE with a CGPA of 8.5/10. Focusing on full-stack development, data structures, algorithms, and emerging technologies.",
    icon: GraduationCap,
    type: "education",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    year: "2025",
    title: "PyQuest Winner",
    subtitle: "Python-based Hackathon",
    organization: "Department Level Competition",
    location: "CSPIT, Charusat University",
    description:
      "Won the PyQuest hackathon by developing an innovative Python-based solution, demonstrating strong problem-solving and coding skills.",
    icon: Trophy,
    type: "achievement",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    year: "2024",
    title: "Technical Treasure Hunt Winner",
    subtitle: "DSA-based Event",
    organization: "Department Level Competition",
    location: "CSPIT, Charusat University",
    description:
      "Secured first position in a competitive DSA-based technical treasure hunt, showcasing algorithmic thinking and problem-solving abilities.",
    icon: Award,
    type: "achievement",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    year: "2023",
    title: "Higher Secondary Certificate",
    subtitle: "Science Stream",
    organization: "Swami Vivekanand Vidhyalay",
    location: "Surat, Gujarat",
    description:
      "Completed HSC with 95.4% (GSEB Board), specializing in Science stream with focus on Mathematics and Physics.",
    icon: BookOpen,
    type: "education",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    year: "2021",
    title: "Secondary School Certificate",
    subtitle: "SSC",
    organization: "Shree Gayatri Vidhyalaya",
    location: "Surat, Gujarat",
    description:
      "Completed SSC with 96.1% (GSEB Board), establishing a strong foundation in core subjects and academic excellence.",
    icon: BookOpen,
    type: "education",
    gradient: "from-indigo-500 to-purple-500",
  },
]

const certificates = [
  "Web Designing - Great Learning Academy",
  "NPTL Data Structure and Algorithms using Java",
  "Getting Started with AI on Jetson Nano - Nvidia",
  "Problem Solving - HackerRank",
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="experience" className="py-20 relative">
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
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A timeline of my educational milestones, achievements, and continuous learning journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center`}
                      >
                        <item.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <span
                          className={`text-sm px-2 py-1 rounded-full ${
                            item.type === "achievement"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {item.type === "achievement" ? "Achievement" : "Education"}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <h4 className="text-purple-400 font-semibold mb-2">{item.subtitle}</h4>
                    <p className="text-gray-300 mb-2">{item.organization}</p>
                    <p className="text-gray-400 text-sm mb-4">{item.location}</p>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>

                <div className="relative z-10">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black"></div>
                </div>

                <div className="w-1/2 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className={`text-2xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                  >
                    {item.year}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Courses</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <span className="text-gray-300">{cert}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
