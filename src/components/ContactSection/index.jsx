import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

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
    <section className="contact py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Let's <span className="text-accent">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Have a project in mind? Let's discuss how I can help scale your systems.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
          {[
            {
            label: 'Email',
            value: 'charlesgold45@gmail.com',
            icon: '📧',
            href: 'mailto:charlesgold45@gmail.com'
            },
            {
            label: 'GitHub',
            value: 'github.com/charlesreign',
            icon: '🐙',
            href: 'https://github.com/charlesreign'
            },
            {
            label: 'LinkedIn',
            value: 'linkedin.com/in/charles',
            icon: '💼',
            href: 'https://www.linkedin.com/in/charles-gold-066aa811a/'
            }
          ].map((contact, idx) => (
            <a key={idx} href={contact.href} target="_blank" rel="noopener noreferrer" className="bg-dark rounded-lg border border-dark-tertiary p-6 text-center hover:border-accent transition-colors">
            <span className="text-3xl mb-3 block">{contact.icon}</span>
            <p className="text-gray-400 text-sm mb-2">{contact.label}</p>
            <p className="text-white font-mono text-sm hover:text-accent transition-colors">
              {contact.value}
            </p>
            </a>
          ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
