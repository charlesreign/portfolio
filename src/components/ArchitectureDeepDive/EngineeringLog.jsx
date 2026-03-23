import React, { useState } from 'react'
import { motion } from 'framer-motion'

const EngineeringLog = ({ log, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left bg-dark rounded-lg border border-dark-tertiary p-6 hover:border-accent transition-all"
        whileHover={{ x: 4 }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2 py-1 text-xs rounded bg-accent bg-opacity-10 text-accent border border-accent border-opacity-30 font-mono">
                {log.category}
              </span>
              <span className="text-xs text-gray-500">{log.date}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
              {log.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {log.excerpt}
            </p>
          </div>
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-accent text-xl flex-shrink-0 mt-1"
          >
            ↓
          </motion.span>
        </div>
      </motion.button>

      {/* Expanded Content */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="bg-dark rounded-b-lg border border-t-0 border-dark-tertiary p-6 border-accent border-opacity-50">
          <div className="prose prose-invert max-w-none text-sm">
            {log.content.split('\n').map((line, idx) => {
              if (line.startsWith('## ')) {
                return (
                  <h3 key={idx} className="text-lg font-bold text-accent mt-4 mb-2">
                    {line.replace('## ', '')}
                  </h3>
                )
              }
              if (line.startsWith('### ')) {
                return (
                  <h4 key={idx} className="text-base font-semibold text-white mt-3 mb-1">
                    {line.replace('### ', '')}
                  </h4>
                )
              }
              if (line.startsWith('- ')) {
                return (
                  <li key={idx} className="text-gray-300 ml-4">
                    {line.replace('- ', '')}
                  </li>
                )
              }
              if (line.startsWith('1. ') || line.match(/^\d+\. /)) {
                return (
                  <li key={idx} className="text-gray-300 ml-4">
                    {line.replace(/^\d+\. /, '')}
                  </li>
                )
              }
              if (line.trim() === '') {
                return <div key={idx} className="my-3" />
              }
              if (line.startsWith('`')) {
                return (
                  <pre key={idx} className="bg-dark-secondary rounded p-3 overflow-x-auto text-xs text-gray-300 my-3">
                    <code>{line}</code>
                  </pre>
                )
              }
              return (
                <p key={idx} className="text-gray-300 leading-relaxed my-1">
                  {line}
                </p>
              )
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default EngineeringLog
