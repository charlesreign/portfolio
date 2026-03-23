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

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="bg-dark rounded-lg border border-dark-tertiary p-8"
          >
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark-secondary border border-dark-tertiary rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark-secondary border border-dark-tertiary rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 bg-dark-secondary border border-dark-tertiary rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-accent text-dark font-bold rounded-lg hover:bg-accent-muted transition-all"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>
            </div>
          </motion.form>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-sm">
              I typically respond within 24 hours. Looking forward to hearing from you!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
