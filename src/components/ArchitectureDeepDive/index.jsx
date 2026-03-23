import React, { useState } from 'react'
import { motion } from 'framer-motion'
import EngineeringLog from './EngineeringLog'
import SystemDiagram from './SystemDiagram'

const ArchitectureDeepDive = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const engineeringLogs = [
    {
      id: 1,
      title: 'Scaling Database Queries from 5s to 200ms',
      date: 'December 2024',
      category: 'Performance',
      excerpt: 'How proper indexing, query optimization, and strategic caching reduced database load by 96%.',
      content: `
## Challenge
Production queries on our user analytics table were consistently hitting the 5-second timeout threshold. This was impacting real-time dashboard performance and user experience.

## Root Cause Analysis
- Missing composite indexes on frequently queried columns (user_id, created_at)
- N+1 query problem in ORM layer
- No query result caching for repeated aggregations
- Table size: 500M+ rows

## Solution Stack
- PostgreSQL EXPLAIN ANALYZE for profiling
- Strategic index creation (B-tree for equality, BRIN for range queries)
- Redis caching layer for aggregated metrics
- Query batch optimization using window functions

## Results
- **Response time**: 5000ms → 200ms (96% improvement)
- **DB load**: 89% CPU → 34% CPU
- **Cache hit ratio**: 87% for aggregations
- **User dashboard load time**: 8s → 1.2s

## Key Learnings
1. Always profile before optimizing
2. Indexes are free on reads, expensive on writes
3. Aggregate at query time when possible, cache the result
4. Batch operations to reduce round trips
      `
    },
    {
      id: 2,
      title: 'Designing a Resilient Microservices Communication Layer',
      date: 'November 2024',
      category: 'Architecture',
      excerpt: 'Building fault-tolerant service-to-service communication with retry logic, circuit breakers, and graceful degradation.',
      content: `
## The Problem
As we scaled to 12+ microservices, network failures and service degradation became increasingly common. We needed a robust communication pattern.

## Architecture Decision
We implemented a multi-layer resilience pattern:

### Layer 1: Connection Management
- HTTP/2 multiplexing (6x fewer connections)
- Connection pooling with adaptive sizing
- DNS TTL tuning (60s for faster failover)

### Layer 2: Fault Tolerance
- Exponential backoff with jitter (prevents thundering herd)
- Circuit breaker (open, half-open, closed states)
- Timeout enforcement per endpoint

### Layer 3: Graceful Degradation
- Fallback responses for non-critical services
- Request queuing with priority levels
- Bulkhead isolation (separate thread pools per service)

## Implementation
Built a custom HTTP client with:
- Configurable retry policies per endpoint
- Real-time health checks via /health endpoints
- Automatic circuit breaker state transitions
- Metrics collection using comprehensive observability

## Outcomes
- **Service availability**: 98.2% → 99.97%
- **Cascading failures**: Eliminated (previously 3-4 per month)
- **P99 latency**: Reduced by 45%
- **Operational overhead**: 60% reduction in incident response time

## Lessons Learned
1. Never trust the network—always implement timeouts
2. Circuit breakers should be environment-aware
3. Observability must precede implementation
4. Test failure scenarios continuously
      `
    },
    {
      id: 3,
      title: 'Building a Feature Flag System for Safe Deployments',
      date: 'October 2024',
      category: 'Infrastructure',
      excerpt: 'Zero-downtime deployments using feature flags with percentage-based rollouts, A/B testing, and instant rollback capability.',
      content: `
## Motivation
Traditional canary deployments had blind spots. We needed granular control over feature rollouts.

## Feature Flag Hierarchy
\`\`\`
Remote Config → User Segments → Feature Flags
                  ↓
         Environment-specific rules
                  ↓
         Real-time evaluation
\`\`\`

## Core Components
1. **Flag Definition Service**: YAML-based flag definitions compiled to JSON
2. **Evaluation Engine**: Sub-millisecond flag evaluation using in-process cache
3. **Control Plane**: Web UI for rollout management and analytics
4. **Audit Trail**: Complete history of flag changes with rollback support

## Rollout Strategies
- **Gradual rollout**: 1% → 5% → 25% → 100% with metrics validation
- **User-based**: Target specific segments (internal users, beta testers)
- **Geographic**: Region-specific feature availability
- **A/B Testing**: Automatic analytics collection for statistical significance

## Impact
- **Deploy frequency**: 2x per week → 10x per week
- **Rollback time**: 5 minutes → <10 seconds
- **Risk reduction**: Zero prod incidents from new features
- **A/B test velocity**: 80% faster validation cycles

## Best Practices
1. Always have a kill switch
2. Monitor flag values in production
3. Automate cleanup of stale flags
4. Version your flag configurations
      `
    }
  ]

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  }

  return (
    <section className="architecture-deepdive py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            System Design <span className="text-accent">Deep-Dive</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Technical writing demonstrating complex system design decisions, architectural patterns, and lessons learned at scale.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex gap-2 mb-8 border-b border-dark-tertiary overflow-x-auto pb-4"
        >
          {[
            { id: 'overview', label: 'Engineering Logs', icon: '📝' },
            { id: 'patterns', label: 'Architectural Patterns', icon: '⚙️' },
            { id: 'systems', label: 'System Diagrams', icon: '📊' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap transition-all duration-300 border-b-2 ${
                activeTab === tab.id
                  ? 'text-accent border-accent'
                  : 'text-gray-400 border-transparent hover:text-gray-300'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <div className="relative min-h-[600px]">
          {/* Engineering Logs */}
          {activeTab === 'overview' && (
            <motion.div
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {engineeringLogs.map((log, idx) => (
                <EngineeringLog key={log.id} log={log} index={idx} />
              ))}
            </motion.div>
          )}

          {/* Architectural Patterns */}
          {activeTab === 'patterns' && (
            <motion.div
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <ArchitecturalPatterns />
            </motion.div>
          )}

          {/* System Diagrams */}
          {activeTab === 'systems' && (
            <motion.div
              variants={tabVariants}
              initial="hidden"
              animate="visible"
            >
              <SystemDiagram />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

// Architectural Patterns Component
const ArchitecturalPatterns = () => {
  const patterns = [
    {
      name: 'CQRS (Command Query Responsibility Segregation)',
      description: 'Separate read and write models for optimal performance',
      benefits: ['Independent scaling', 'Optimized queries', 'Event sourcing capability'],
      useCase: 'High-volume analytics with real-time dashboards'
    },
    {
      name: 'Event Sourcing',
      description: 'Store all changes as an immutable sequence of events',
      benefits: ['Complete audit trail', 'Temporal queries', 'Replay capability'],
      useCase: 'Financial transactions, compliance-heavy systems'
    },
    {
      name: 'Circuit Breaker',
      description: 'Prevent cascading failures in distributed systems',
      benefits: ['Automatic failover', 'Fail fast', 'Self-healing'],
      useCase: 'Microservice communication, external API calls'
    },
    {
      name: 'Bulkhead Isolation',
      description: 'Isolate resources to prevent total system failure',
      benefits: ['Fault containment', 'Resource limits', 'Priority queuing'],
      useCase: 'Multi-tenant systems, shared infrastructure'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {patterns.map((pattern, idx) => (
        <motion.div
          key={pattern.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-dark rounded-lg border border-dark-tertiary p-6 hover:border-accent transition-colors"
        >
          <h4 className="text-lg font-bold text-white mb-2">{pattern.name}</h4>
          <p className="text-gray-400 text-sm mb-4">{pattern.description}</p>
          <div className="mb-4">
            <p className="text-xs text-accent font-mono mb-2">Benefits:</p>
            <ul className="space-y-1">
              {pattern.benefits.map(benefit => (
                <li key={benefit} className="text-xs text-gray-300 flex items-start gap-2">
                  <span className="text-accent">✓</span> {benefit}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-gray-500 italic">
            <strong>Use Case:</strong> {pattern.useCase}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

export default ArchitectureDeepDive
