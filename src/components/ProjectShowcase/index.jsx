import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import '../../styles/ProjectShowcase.css'

const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'High-Throughput Event Processing System',
      category: 'Backend',
      context: 'Enterprise needed to process 100k+ events/sec from IoT sensors with sub-100ms latency requirements.',
      architecture: {
        components: ['FastAPI', 'Redis', 'PostgreSQL', 'Kafka', 'Docker', 'Kubernetes'],
        diagram: 'iot-sensors → kafka-cluster → event-processor → redis-cache → postgres'
      },
      outcome: {
        metrics: [
          '100,000+ events/sec throughput',
          '45ms avg latency (requirement: <100ms)',
          '99.99% uptime over 12 months',
          '40% cost reduction vs legacy system'
        ]
      },
      tech: ['Python', 'FastAPI', 'Kafka', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
      link: '#',
      year: 2024
    },
    {
      id: 2,
      title: 'React Performance Optimization Dashboard',
      category: 'Frontend',
      context: 'SaaS dashboard suffered from 8s+ initial load times, affecting user engagement and SEO ranking.',
      architecture: {
        components: ['React 18', 'Code Splitting', 'React Query', 'Vite', 'TailwindCSS'],
        diagram: 'components → code-splitting → lazy-loading → optimized-bundles'
      },
      outcome: {
        metrics: [
          '1.8s → 450ms first load (75% improvement)',
          '40% reduction in bundle size',
          'Lighthouse score: 95 (Core Web Vitals)',
          '24% increase in conversion rate'
        ]
      },
      tech: ['React', 'JavaScript', 'Vite', 'TailwindCSS', 'React Query'],
      link: '#',
      year: 2024
    },
    {
      id: 3,
      title: 'Multi-Tenant Architecture Migration',
      category: 'System Design',
      context: 'Migrated monolithic application to multi-tenant SaaS platform serving 50+ enterprise customers.',
      architecture: {
        components: ['Node.js', 'PostgreSQL', 'Row-Level Security', 'Docker', 'AWS RDS'],
        diagram: 'api-gateway → tenant-router → isolated-databases → monitoring'
      },
      outcome: {
        metrics: [
          '50+ enterprise tenants onboarded',
          '99.95% uptime SLA maintained',
          'Database isolation with RLS',
          '200ms max query latency per tenant'
        ]
      },
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'AWS'],
      link: '#',
      year: 2023
    },
    {
      id: 4,
      title: 'Real-time Collaboration Engine',
      category: 'Full-Stack',
      context: 'Built real-time collaborative editing platform supporting 500+ concurrent users per document.',
      architecture: {
        components: ['WebSocket', 'Operational Transformation', 'Redis', 'React', 'Node.js'],
        diagram: 'client → websocket-server → redis-sync → operational-transform → all-clients'
      },
      outcome: {
        metrics: [
          '500+ concurrent users per document',
          '<200ms sync latency',
          'Conflict resolution: OT algorithm',
          '99.9% message delivery guarantee'
        ]
      },
      tech: ['React', 'Node.js', 'WebSocket', 'Redis', 'Docker'],
      link: '#',
      year: 2023
    }
  ]

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter(p => p.category === activeFilter)
  }, [activeFilter])

  const categories = ['all', ...new Set(projects.map(p => p.category))]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section className="project-showcase py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Impact-Driven <span className="text-accent">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Engineering solutions that scale. Each project represents a complete system—from architecture decisions to measurable outcomes.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-accent text-dark'
                  : 'bg-dark-tertiary text-gray-300 hover:border-accent border border-dark-secondary'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectShowcase
