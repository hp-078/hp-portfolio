"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Calendar, Users, Database, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
	{
		title: "Clubs Management System",
		description:
			"A responsive web app to simplify club event management and member engagement with dedicated interfaces for Students, Faculty Coordinators, and Admin.",
		image: "/club managment.jpeg",
		tech: ["HTML", "CSS", "JavaScript", "Python", "XAMPP"],
		features: [
			"Student registration and event participation",
			"Faculty event management and coordination",
			"Admin dashboard with comprehensive controls",
			"Feedback system and participation tracking",
		],
		status: "Completed",
		icon: Users,
		gradient: "from-purple-500 to-pink-500",
		github: "https://github.com/Mitanshu56/SGP-1.git",
		demo: "#",
	},
	{
		title: "FreshTrack",
		description:
			"A responsive MERN web app to manage food inventory and reduce waste in retail with predictive analytics and donation tracking.",
		image: "/Reduce food loss.jpeg",
		tech: ["MongoDB", "Express.js", "React", "Node.js", "Framer Motion", "Recharts"],
		features: [
			"Real-time inventory management",
			"Expiry-based discount automation",
			"Donation tracking and management",
			"Visual insights and demand prediction",
		],
		status: "Ongoing",
		icon: Database,
		gradient: "from-green-500 to-emerald-500",
		github: "https://github.com/cs-cspit/23CS-SEM4-CSE210_64_78_83.git",
		demo: "https://fresh-track-six.vercel.app/",
	},
	{
		title: "Inventory Management System",
		description:
			"A Python-based web app for managing product inventory with real-time sales tracking, predictive analytics, and voice-based search.",
		image: "/pyquest.png",
		tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Gradio", "ReportLab"],
		features: [
			"Dual panel system (Admin & User)",
			"Voice-based product search",
			"Sales forecasting with ML",
			"Automated report generation",
		],
		status: "Completed",
		icon: Brain,
		gradient: "from-blue-500 to-cyan-500",
		github: "https://github.com/hp-078/Inventory-Management-System.git",
		demo: "https://inventory-management-system-vwkq.onrender.com/",
	},
]

export default function Projects() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	return (
		<section id="projects" className="py-20 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
						Featured{" "}
						<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
							Projects
						</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
					<p className="text-gray-400 mt-6 max-w-2xl mx-auto">
						A showcase of my recent work, demonstrating my skills in full-stack
						development, machine learning, and problem-solving
					</p>
				</motion.div>

				<div className="space-y-12">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 50 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							className={`grid lg:grid-cols-2 gap-8 items-center ${
								index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
							}`}
						>
							<div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
								<motion.div
									whileHover={{ scale: 1.02 }}
									className="relative group"
								>
									<div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
									<div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
										<img
											src={project.image || "/placeholder.svg"}
											alt={project.title}
											className="w-full h-64 object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
									</div>
								</motion.div>
							</div>

							<div
								className={`space-y-6 ${
									index % 2 === 1 ? "lg:col-start-1" : ""
								}`}
							>
								<div className="flex items-center space-x-4">
									<div
										className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center`}
									>
										<project.icon className="text-white" size={24} />
									</div>
									<div>
										<h3 className="text-2xl font-bold text-white">
											{project.title}
										</h3>
										<div className="flex items-center space-x-2 mt-1">
											<Calendar size={16} className="text-gray-400" />
											<span
												className={`text-sm px-2 py-1 rounded-full ${
													project.status === "Ongoing"
														? "bg-yellow-500/20 text-yellow-400"
														: "bg-green-500/20 text-green-400"
												}`}
											>
												{project.status}
											</span>
										</div>
									</div>
								</div>

								<p className="text-gray-300 leading-relaxed">
									{project.description}
								</p>

								<div className="space-y-4">
									<h4 className="text-white font-semibold">Key Features:</h4>
									<ul className="space-y-2">
										{project.features.map((feature, featureIndex) => (
											<motion.li
												key={featureIndex}
												initial={{ opacity: 0, x: -20 }}
												animate={
													isInView
														? { opacity: 1, x: 0 }
														: { opacity: 0, x: -20 }
												}
												transition={{
													duration: 0.5,
													delay: index * 0.2 + featureIndex * 0.1,
												}}
												className="flex items-center space-x-3 text-gray-300"
											>
												<div
													className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`}
												></div>
												<span>{feature}</span>
											</motion.li>
										))}
									</ul>
								</div>

								<div className="space-y-4">
									<h4 className="text-white font-semibold">
										Technologies Used:
									</h4>
									<div className="flex flex-wrap gap-2">
										{project.tech.map((tech, techIndex) => (
											<motion.span
												key={tech}
												initial={{ opacity: 0, scale: 0.8 }}
												animate={
													isInView
														? { opacity: 1, scale: 1 }
														: { opacity: 0, scale: 0.8 }
												}
												transition={{
													duration: 0.3,
													delay: index * 0.2 + techIndex * 0.05,
												}}
												className="px-3 py-1 bg-gradient-to-r from-gray-700/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300"
											>
												{tech}
											</motion.span>
										))}
									</div>
								</div>

								<div className="flex space-x-4">
									<Button
										className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
										onClick={() => window.open(project.github, "_blank")}
									>
										<Github className="mr-2 h-4 w-4" />
										View Code
									</Button>
									<Button
										className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
										onClick={() => window.open(project.demo, "_blank")}
									>
										<ExternalLink className="mr-2 h-4 w-4" />
										Live Demo
									</Button>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
