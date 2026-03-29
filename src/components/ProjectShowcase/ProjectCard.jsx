import React from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ project, index }) => {
  const hoverVariants = {
    initial: { y: 0, boxShadow: '0 10px 30px rgba(0, 217, 255, 0.1)' },
    hover: { y: -8, boxShadow: '0 30px 60px rgba(0, 217, 255, 0.25)' }
  }

  const borderVariants = {
    initial: { opacity: 0.2 },
    hover: { opacity: 0.8 }
  }

  return (
    <motion.div
      variants={hoverVariants}
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.3 }}
      className="group relative h-full"
    >
      {/* Gradient Border Effect */}
      <motion.div
        variants={borderVariants}
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent to-accent-muted opacity-20 -z-10"
        style={{ filter: 'blur(8px)' }}
      />

      {/* Card Content */}
      <div className="relative bg-dark-secondary border border-dark-tertiary rounded-xl p-8 h-full flex flex-col hover:border-accent transition-colors duration-300">
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
          className="inline-flex w-fit mb-4"
        >
          <span className="text-xs font-mono text-accent bg-accent bg-opacity-10 px-3 py-1 rounded-full border border-accent border-opacity-30">
            {project.category}
          </span>
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        {/* Context */}
        <div className="mb-6">
          <h4 className="text-sm font-mono text-accent uppercase tracking-wider mb-2">
            Context
          </h4>
          <p className="text-gray-400 leading-relaxed text-sm">
            {project.context}
          </p>
        </div>

        {/* Architecture */}
        <div className="mb-6">
          <h4 className="text-sm font-mono text-accent uppercase tracking-wider mb-2">
            Architecture Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.architecture.components.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded bg-dark-tertiary text-gray-300 border border-dark-secondary group-hover:border-accent transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-3 text-xs font-mono text-gray-500 bg-dark px-3 py-2 rounded text-center">
            {project.architecture.diagram}
          </div>
        </div>

        {/* Outcomes */}
        <div className="mb-6 flex-grow">
          <h4 className="text-sm font-mono text-accent uppercase tracking-wider mb-3">
            Measurable Outcomes
          </h4>
          <ul className="space-y-2">
            {project.outcome.metrics.map((metric, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="text-accent mt-1 flex-shrink-0">→</span>
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6 pt-6 border-t border-dark-tertiary">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs text-gray-400 font-mono opacity-70 group-hover:opacity-100 group-hover:text-accent transition-all"
            >
              #{tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
