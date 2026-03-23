import React from 'react'
import { motion } from 'framer-motion'

const TechCategory = ({ category }) => {
  return (
    <div>
      {/* Category Header */}
      <div className="mb-8">
        <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
          {category.label}
        </h3>
        <p className="text-gray-400">{category.description}</p>
      </div>

      {/* Technologies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.technologies.map((tech, idx) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="group"
          >
            <div
              className={`bg-dark rounded-lg p-4 border ${category.borderColor} border-opacity-30 group-hover:border-opacity-100 transition-all h-full`}
            >
              {/* Tech Name */}
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-semibold text-sm group-hover:text-accent transition-colors">
                  {tech.name}
                </h4>
                <span className={`text-xs font-mono bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {tech.proficiency}%
                </span>
              </div>

              {/* Proficiency Bar */}
              <div className="relative h-2 bg-dark-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.05 + 0.2 }}
                  className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                />
              </div>

              {/* Skill Level Description */}
              <p className="text-xs text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">
                {getSkillLevel(tech.proficiency)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Helper function to determine skill level
function getSkillLevel(proficiency) {
  if (proficiency >= 90) return 'Master Level'
  if (proficiency >= 80) return 'Advanced'
  if (proficiency >= 70) return 'Intermediate'
  if (proficiency >= 60) return 'Beginner'
  return 'Learning'
}

export default TechCategory
