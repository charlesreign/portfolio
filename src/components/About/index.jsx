import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section className="about py-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent-muted rounded"></div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Professional Summary</h3>
            <div className="space-y-4 text-white leading-relaxed">
              <p>
                Senior Full-Stack Engineer with 8+ years of experience architecting and scaling distributed systems that process millions of events daily. Specialized in building high-performance, fault-tolerant systems that serve enterprise and consumer-facing applications.
              </p>
              <p>
                Proven track record of leading technical teams, mentoring junior engineers, and delivering systems that directly impact business metrics. Core expertise spans full-stack development (React, Node.js, Python), cloud infrastructure (AWS, Kubernetes, Docker), and system design patterns that prioritize scalability, reliability, and developer experience.
              </p>
              <p>
                Passionate about writing clean code, fostering collaborative engineering cultures, and solving complex architectural challenges. Known for clear technical communication, both in code and documentation, enabling teams to ship with confidence.
              </p>
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Key Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  metric: '100K+ Events/sec',
                  description: 'Built event processing system handling real-time IoT data'
                },
                {
                  metric: '75% Performance Gain',
                  description: 'Optimized React dashboard from 8s to 450ms load time'
                },
                {
                  metric: '50+ Enterprise Clients',
                  description: 'Architected multi-tenant SaaS platform with 99.95% uptime'
                },
                {
                  metric: '500+ Concurrent Users',
                  description: 'Built real-time collaboration engine with <200ms sync latency'
                },
                {
                  metric: '40% Cost Reduction',
                  description: 'Optimized infrastructure reducing cloud spend significantly'
                },
                {
                  metric: '12+ Direct Reports',
                  description: 'Led and mentored teams across multiple departments'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-dark-secondary rounded-lg p-4 hover:border-accent transition-colors shadow-sm"
                >
                  <div className="text-lg font-bold font-mono text-accent mb-1">{item.metric}</div>
                  <div className="text-sm text-white font-mono">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership & Values */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Leadership Philosophy</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Quality First',
                  description: 'Advocate for clean code, comprehensive testing, and thoughtful architecture decisions that compound over time.'
                },
                {
                  title: 'Mentorship Matters',
                  description: 'Invest in growing engineers through code reviews, technical discussions, and creating opportunities for skill development.'
                },
                {
                  title: 'Systems Thinking',
                  description: 'Design solutions with the full product lifecycle in mind—from initial scalability concerns to long-term maintainability.'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-dark-secondary border border-dark-tertiary rounded-lg p-6 shadow-sm"
                >
                  <h4 className="text-lg font-bold text-accent mb-2">{item.title}</h4>
                  <p className="text-white text-sm leading-relaxed font-mono">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
