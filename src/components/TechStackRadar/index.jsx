import React from 'react'
import { motion } from 'framer-motion'
import TechCategory from './TechCategory'

const TechStackRadar = () => {
  const skillData = {
    expert: {
      label: 'Expert',
      description: 'Deep expertise, production-ready',
      color: 'from-accent to-accent-muted',
      borderColor: 'border-accent',
      technologies: [
        { name: 'Python', proficiency: 95 },
        { name: 'React', proficiency: 92 },
        { name: 'FastAPI', proficiency: 90 },
        { name: 'PostgreSQL', proficiency: 88 },
        { name: 'JavaScript', proficiency: 90 },
        { name: 'System Design', proficiency: 93 }
      ]
    },
    proficient: {
      label: 'Proficient',
      description: 'Strong working knowledge',
      color: 'from-blue-400 to-cyan-400',
      borderColor: 'border-blue-400',
      technologies: [
        { name: 'Docker', proficiency: 85 },
        { name: 'Kubernetes', proficiency: 80 },
        { name: 'Redis', proficiency: 82 },
        { name: 'AWS', proficiency: 78 },
        { name: 'Node.js', proficiency: 85 },
        { name: 'TypeScript', proficiency: 82 }
      ]
    },
    familiar: {
      label: 'Familiar',
      description: 'Can quickly ramp up',
      color: 'from-purple-400 to-pink-400',
      borderColor: 'border-purple-400',
      technologies: [
        { name: 'Kafka', proficiency: 70 },
        { name: 'GraphQL', proficiency: 75 },
        { name: 'Go', proficiency: 65 },
        { name: 'Rust', proficiency: 60 },
        { name: 'Terraform', proficiency: 70 },
        { name: 'Elasticsearch', proficiency: 68 }
      ]
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  return (
    <section className="tech-stack py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Tech Stack <span className="text-accent">Radar</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Technologies organized by proficiency level. Focus on depth over breadth.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {Object.entries(skillData).map(([key, category], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <TechCategory category={category} />
            </motion.div>
          ))}
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 p-8 bg-dark-secondary rounded-lg border border-dark-tertiary"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Full-Stack Engineering',
                items: ['Monolithic & Microservices', 'REST & GraphQL APIs', 'Real-time Systems']
              },
              {
                title: 'System Architecture',
                items: ['Scalability & Performance', 'High Availability Design', 'Cloud Infrastructure']
              },
              {
                title: 'Team Leadership',
                items: ['Code Reviews & Mentoring', 'Technical Documentation', 'Best Practices']
              }
            ].map((comp, idx) => (
              <div key={idx} className="flex flex-col">
                <h4 className="text-accent font-bold mb-3">{comp.title}</h4>
                <ul className="space-y-2">
                  {comp.items.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStackRadar
