import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'TechCorp Inc.',
      period: '2021 - Present',
      location: 'San Francisco, CA',
      highlights: [
        'Led architecture and implementation of event-driven microservices handling 100K+ events/sec',
        'Reduced database query latency from 5s to 200ms through strategic indexing and caching',
        'Mentored team of 8 engineers on system design, code quality, and best practices',
        'Designed and shipped multi-tenant SaaS platform serving 50+ enterprise customers with 99.95% uptime'
      ]
    },
    {
      title: 'Full-Stack Engineer',
      company: 'StartupXYZ',
      period: '2018 - 2021',
      location: 'Remote',
      highlights: [
        'Built React dashboard for real-time analytics, improving initial load time by 75%',
        'Architected Node.js/PostgreSQL backend supporting 500+ concurrent users',
        'Implemented real-time collaboration engine with WebSocket and Operational Transformation',
        'Grew engineering team from 2 to 6 people while maintaining code quality and team velocity'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'DataSystems Ltd.',
      period: '2016 - 2018',
      location: 'New York, NY',
      highlights: [
        'Developed ETL pipelines processing millions of records daily using Python and PostgreSQL',
        'Optimized REST API response times by implementing caching and query optimization',
        'Contributed to infrastructure migration from monolith to microservices',
        'Wrote comprehensive documentation and technical guides for team onboarding'
      ]
    }
  ]

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section className="experience py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Professional <span className="text-accent">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A journey of building systems, leading teams, and solving complex engineering challenges.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line */}
              {idx !== experiences.length - 1 && (
                <div className="absolute left-6 top-24 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent-muted opacity-30"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-6 w-12 h-12 bg-dark-secondary border-2 border-accent rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-accent rounded-full"></div>
              </div>

              {/* Content */}
              <div className="ml-24 bg-dark rounded-lg border border-dark-tertiary p-6 hover:border-accent transition-colors">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                    <p className="text-gray-500 text-xs">{exp.location}</p>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hidx) => (
                    <motion.li
                      key={hidx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: hidx * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="text-accent mt-1 flex-shrink-0">▸</span>
                      <span className="text-sm leading-relaxed">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Years Experience', value: '8+' },
            { label: 'Engineers Mentored', value: '20+' },
            { label: 'Systems at Scale', value: '10+' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-dark rounded-lg border border-dark-tertiary p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
