"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, GraduationCap, Award } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-full overflow-hidden">
                <img
                  src="/my_pic.jpg"
                  alt="Harsh Pipaliya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Hello! I'm Harsh</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate Computer Science Engineering student at Chandubhai S. Patel Institute of Technology,
                Charusat University, with a strong foundation in full-stack development and problem-solving. I love
                creating innovative web solutions and have experience working with modern technologies like React,
                Node.js, Python, and more.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me solving algorithmic challenges on platforms like LeetCode,
                HackerRank, and GeeksforGeeks, or participating in hackathons and technical competitions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
              >
                <MapPin className="text-purple-400 mb-3" size={24} />
                <h4 className="text-white font-semibold mb-2">Location</h4>
                <p className="text-gray-300">Surat, Gujarat, India</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6"
              >
                <GraduationCap className="text-blue-400 mb-3" size={24} />
                <h4 className="text-white font-semibold mb-2">Education</h4>
                <p className="text-gray-300">BTech CSE</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 md:col-span-2"
              >
                <Award className="text-green-400 mb-3" size={24} />
                <h4 className="text-white font-semibold mb-2">Recent Achievements</h4>
                <p className="text-gray-300">Winner of PyQuest Hackathon (2025) & Technical Treasure Hunt (2024)</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
