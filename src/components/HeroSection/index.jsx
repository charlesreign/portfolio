import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = '$ senior_engineer.solutions.build()'

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Terminal Window */}
          <motion.div
            variants={itemVariants}
            className="inline-block w-full"
          >
            <div className="bg-dark-secondary border border-dark-tertiary rounded-lg overflow-hidden shadow-2xl max-w-3xl mx-auto">
              {/* Window Header */}
              <div className="bg-dark-tertiary px-4 py-3 flex items-center gap-2 border-b border-dark-secondary">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
                  <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
                </div>
                <span className="text-xs text-gray-500 font-mono ml-3">terminal — bash</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-left">
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-500 text-sm">Last login: Today</p>
                    <p className="text-gray-500 text-sm">charles@portfolio ~ %</p>
                  </div>

                  <div className="text-accent text-lg">
                    {displayText}
                    {displayText.length < fullText.length && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      >
                        |
                      </motion.span>
                    )}
                  </div>

                  {displayText === fullText && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-gray-300 text-sm space-y-1"
                    >
                      <p>Building scalable systems.</p>
                      <p>Full-Stack Architecture | System Design | Performance Optimization</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl sm:text-7xl font-bold text-white">
              Charles Gold
            </h1>
            <p className="text-xl sm:text-2xl text-accent font-mono">
              Software Engineer
            </p>
            <p className="text-lg text-white max-w-2xl font-mono mx-auto">
              Software engineer dedicated to bridging the gap between complex technical 
              challenges and seamless user experiences through clean code and strategic system design.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-dark font-bold rounded-lg"
            >
              View Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-lg"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-12"
          >
            <p className="text-white text-sm mb-3">Scroll to explore</p>
            <svg
              className="w-6 h-6 mx-auto text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
