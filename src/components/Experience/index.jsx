import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Morgan Stanley',
      period: '2022 - Present',
      location: 'Ghana, Accra',
      highlights: [
        'Led end-to-end Python implementation of Enterprise Security Platforms, Executor Service using FastAPI, achieving 40% faster security scanning workflows.',
        'Built RESTful backend services with Spring Boot and FastAPI, implementing Kerberos and OIDC authentication for enterprise security.',
        'Spearheaded CI/CD pipeline migrations from StashCI to Jenkins Pipeline as Code (JPAC), automating deployments across Kubernetes clusters and cutting release cycles time.',
        'Configured infrastructure with load balancers, DNS routing, and Splunk monitoring for 99.9% uptime on critical security tools.',
        'Led cross-functional DART teams to deliver zero-defect production features using design patterns and comprehensive testing.',
        'Conducted code reviews and authored Architectural Decision Records (ADRs) to prevent bugs and foster best practices.'
      ]
    },
    {
      title: 'Software Engineer II',
      company: 'Turntabl',
      period: '2021 - present',
      location: 'Ghana, Accra',
      highlights: [
        'Built a high-frequency stock trading engine in Python/Java with FastAPI and WebSockets, processing 1M+ trades/minute at sub-millisecond latency.',
        'Architected high-availability trading backend with API gateways and Redis-based rate limiting for peak market load handling.',
        'Mentored 5 junior interns and new hires through pair programming and code walkthroughs, accelerating their onboarding by 40% and contributing to team velocity in Agile sprints.',
      ]
    },
    {
      title: 'Software Engineering Tutor',
      company: 'UPI',
      period: '2018 - 2021',
      location: 'Ghana, Kumasi',
      highlights: [
        'Designed and delivered curricula for 100+ students across Android, Java/Python, and full-stack web development with 85% project completion and job placement for top performers.',
        'Led hands-on workshops on secure coding practices and DevOps fundamentals, integrating tools like Git and Docker to prepare students for industry roles.',
        'Supervised capstone projects, providing feedback on architecture, testing, and deployment, with 75+ student apps deployed to production environments.',
        'Interviewed and onboarded 20+ tech candidates through technical assessments and skills evaluation.'
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
          <p className="text-gray-400 font-mono text-lg max-w-2xl">
            A journey of building systems, and solving complex engineering challenges.
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
            { label: 'Years Experience', value: '5+' },
            { label: 'Engineers Mentored', value: '10+' },
            { label: 'Systems at Scale', value: '3+' }
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
