import React from 'react'
import { motion } from 'framer-motion'
import './BookingSection.css'

const BookingSection = () => {
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
    <section className="booking py-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-8"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Schedule a <span className="text-accent">Meeting</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Book a time to discuss your project, ask questions, or explore opportunities.
            </p>
          </motion.div>

          {/* Cal.com Embed */}
          {!import.meta.env.VITE_CAL_EMBED_URL ? (
            <motion.div
              variants={itemVariants}
              className="bg-dark-secondary rounded-lg border border-dark-tertiary p-8"
            >
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-white mb-4">Cal.com</h3>

                <div className="bg-dark rounded-lg p-6 mb-6 text-left">
                  <p>
                    View full calendar: <a href="https://cal.com/iamcharlie" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">cal.com</a> and schedule a meeting.
                   </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              variants={itemVariants}
              className="flex justify-center w-full"
            >
              <div className="rounded-lg border border-dark-tertiary overflow-hidden" style={{ 
                minHeight: '50vh',
                backgroundColor: '#0a0a0a',
                width: '100%',
                maxWidth: '900px'
              }}>
                <iframe
                  key={import.meta.env.VITE_CAL_EMBED_URL}
                  src={`${import.meta.env.VITE_CAL_EMBED_URL}?embed=true&theme=dark`}
                  title="Cal.com Booking Calendar"
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    minHeight: '40vh',
                    border: 'none',
                    display: 'block'
                  }}
                  frameBorder="0"
                  scrolling="auto"
                  allowFullScreen
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default BookingSection
