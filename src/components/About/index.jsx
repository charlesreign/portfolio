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
                Dynamic Software Engineer with over 5 years of experience architecting and deploying scalable, full-stack enterprise solutions.<br />
                Proven expertise in designing high-performance backend architectures using Python (FastAPI) and Java (Spring Boot), alongside modern frontend frameworks. 
                A strong advocate for DevOps best practices, with a track record of automating CI/CD pipelines and managing containerized deployments across Kubernetes and AWS. 
                Dedicated to building secure, user-centric systems that drive measurable business impact and operational efficiency.
                Passionate about writing clean code, fostering collaborative engineering cultures, and solving complex architectural challenges. Known for clear technical communication, both in code and documentation, enabling teams to ship with confidence.
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
                  metric: '40% Workflow Improvement',
                  description: 'Architected and deployed a scalable Python-based microservices solution using FastAPI, which improved security scanning workflows by 40%'
                },
                {
                  metric: '1M+ Trades/Min',
                  description: 'Engineered a high-frequency stock trading engine supporting 1M+ simulated trades per minute with sub-millisecond latency using Python, Java, and WebSockets.'
                },
                {
                  metric: '30% UI Load Time Reduction',
                  description: 'Reduced UI load times by 30% by designing responsive React.js and Vue.js components and optimizing state management.'
                },
                {
                  metric: '50% Faster Deployments',
                  description: 'Automated deployment pipelines by migrating to Jenkins Pipeline as Code (JPAC), significantly accelerating release cycles across Kubernetes clusters.'
                },
                {
                  metric: '99.9% Uptime',
                  description: 'Maintained 99.9% uptime for critical security tools by configuring load balancers, DNS routing, and real-time Splunk monitoring dashboards.'
                },
                {
                  metric: 'Mentored Engineers',
                  description: 'Led technical mentorship and quality standards by conducting rigorous code reviews, authoring Architectural Decision Records (ADRs), and onboarding junior engineers.'
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
