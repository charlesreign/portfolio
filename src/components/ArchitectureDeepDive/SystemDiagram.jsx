import React from 'react'
import { motion } from 'framer-motion'

const SystemDiagram = () => {
  const diagrams = [
    {
      title: 'Microservices Communication Architecture',
      description: 'Multi-layer resilience pattern with circuit breakers and graceful degradation',
      svg: `
        <svg viewBox="0 0 800 400" className="w-full h-auto">
          <!-- User -->
          <rect x="50" y="20" width="100" height="60" fill="#00d9ff" fillOpacity="0.2" stroke="#00d9ff" strokeWidth="2" rx="4"/>
          <text x="100" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Client</text>
          
          <!-- API Gateway -->
          <rect x="250" y="20" width="120" height="60" fill="#00d9ff" fillOpacity="0.2" stroke="#00d9ff" strokeWidth="2" rx="4"/>
          <text x="310" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">API Gateway</text>
          
          <!-- Circuit Breaker -->
          <rect x="250" y="120" width="120" height="60" fill="#0099cc" fillOpacity="0.3" stroke="#0099cc" strokeWidth="2" rx="4"/>
          <text x="310" y="155" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Circuit</text>
          <text x="310" y="170" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Breaker</text>
          
          <!-- Microservices -->
          <g>
            <rect x="500" y="20" width="100" height="60" fill="#16213e" stroke="#00d9ff" strokeWidth="2" rx="4"/>
            <text x="550" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">User Service</text>
          </g>
          
          <g>
            <rect x="640" y="20" width="100" height="60" fill="#16213e" stroke="#00d9ff" strokeWidth="2" rx="4"/>
            <text x="690" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Order Service</text>
          </g>
          
          <g>
            <rect x="500" y="120" width="100" height="60" fill="#16213e" stroke="#00d9ff" strokeWidth="2" rx="4"/>
            <text x="550" y="155" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Payment Service</text>
          </g>
          
          <g>
            <rect x="640" y="120" width="100" height="60" fill="#16213e" stroke="#00d9ff" strokeWidth="2" rx="4"/>
            <text x="690" y="155" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Inventory Service</text>
          </g>
          
          <!-- Cache Layer -->
          <rect x="500" y="250" width="240" height="60" fill="#1f2937" stroke="#00d9ff" strokeWidth="2" rx="4"/>
          <text x="620" y="285" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Redis Cache</text>
          
          <!-- Message Queue -->
          <rect x="50" y="250" width="100" height="60" fill="#1f2937" stroke="#00d9ff" strokeWidth="2" rx="4"/>
          <text x="100" y="285" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Message Queue</text>
          
          <!-- Arrows -->
          <line x1="150" y1="50" x2="250" y2="50" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <line x1="310" y1="80" x2="310" y2="120" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <line x1="370" y1="150" x2="500" y2="50" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <line x1="370" y1="150" x2="640" y2="50" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <line x1="370" y1="150" x2="500" y2="120" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <line x1="370" y1="150" x2="640" y2="120" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          
          <!-- Cache connections -->
          <line x1="550" y1="80" x2="580" y2="250" stroke="#0099cc" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <line x1="690" y1="80" x2="660" y2="250" stroke="#0099cc" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          
          <!-- Message queue connection -->
          <line x1="100" y1="120" x2="100" y2="250" stroke="#0099cc" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          
          <!-- Arrow marker definition -->
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill="#00d9ff"/>
            </marker>
          </defs>
        </svg>
      `
    },
    {
      title: 'Database Scaling Strategy',
      description: 'Read replicas with caching and write optimization',
      svg: `
        <svg viewBox="0 0 800 400" className="w-full h-auto">
          <!-- Application -->
          <rect x="100" y="20" width="120" height="60" fill="#00d9ff" fillOpacity="0.2" stroke="#00d9ff" strokeWidth="2" rx="4"/>
          <text x="160" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Application</text>
          
          <!-- Cache Layer -->
          <rect x="300" y="20" width="100" height="60" fill="#1f2937" stroke="#00d9ff" strokeWidth="2" rx="4"/>
          <text x="350" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Redis</text>
          
          <!-- Primary DB -->
          <rect x="100" y="140" width="120" height="80" fill="#16213e" stroke="#00d9ff" strokeWidth="2" rx="4"/>
          <text x="160" y="175" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Primary</text>
          <text x="160" y="195" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">PostgreSQL</text>
          <text x="160" y="210" textAnchor="middle" fill="#0099cc" fontSize="10">(Write)</text>
          
          <!-- Read Replicas -->
          <rect x="300" y="140" width="110" height="80" fill="#16213e" stroke="#00d9ff" strokeWidth="2" rx="4"/>
          <text x="355" y="175" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Replica 1</text>
          <text x="355" y="195" textAnchor="middle" fill="white" fontSize="10">(Read)</text>
          
          <rect x="470" y="140" width="110" height="80" fill="#16213e" stroke="#00d9ff" strokeWidth="2" rx="4"/>
          <text x="525" y="175" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Replica 2</text>
          <text x="525" y="195" textAnchor="middle" fill="white" fontSize="10">(Read)</text>
          
          <rect x="640" y="140" width="110" height="80" fill="#16213e" stroke="#00d9ff" strokeWidth="2" rx="4"/>
          <text x="695" y="175" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Replica 3</text>
          <text x="695" y="195" textAnchor="middle" fill="white" fontSize="10">(Read)</text>
          
          <!-- Connections -->
          <line x1="160" y1="80" x2="160" y2="140" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <line x1="220" y1="50" x2="300" y2="50" stroke="#00d9ff" strokeWidth="2"/>
          <line x1="350" y1="80" x2="355" y2="140" stroke="#0099cc" strokeWidth="2" markerEnd="url(#arrowhead2)"/>
          <line x1="160" y1="140" x2="300" y2="150" stroke="#00d9ff" strokeWidth="2"/>
          <line x1="160" y1="160" x2="470" y2="160" stroke="#00d9ff" strokeWidth="2"/>
          <line x1="160" y1="180" x2="640" y2="180" stroke="#00d9ff" strokeWidth="2"/>
          
          <!-- Tags -->
          <text x="400" y="320" textAnchor="middle" fill="#00d9ff" fontSize="12" fontWeight="bold">Write Path</text>
          <text x="400" y="340" textAnchor="middle" fill="#0099cc" fontSize="12" fontWeight="bold">Read Path (load balanced)</text>
          
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill="#00d9ff"/>
            </marker>
            <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill="#0099cc"/>
            </marker>
          </defs>
        </svg>
      `
    }
  ]

  return (
    <div className="space-y-8">
      {diagrams.map((diagram, idx) => (
        <motion.div
          key={diagram.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2 }}
          className="bg-dark rounded-lg border border-dark-tertiary p-8"
        >
          <h3 className="text-xl font-bold text-white mb-2">{diagram.title}</h3>
          <p className="text-gray-400 text-sm mb-6">{diagram.description}</p>
          <div
            dangerouslySetInnerHTML={{ __html: diagram.svg }}
            className="svg-container bg-dark-secondary rounded p-4"
          />
        </motion.div>
      ))}
    </div>
  )
}

export default SystemDiagram
