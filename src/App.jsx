import React, { useState } from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Experience from './components/Experience'
import ProjectShowcase from './components/ProjectShowcase'
import TechStackRadar from './components/TechStackRadar'
import ArchitectureDeepDive from './components/ArchitectureDeepDive'
import BookingSection from './components/BookingSection'
import ContactSection from './components/ContactSection'
import './styles/index.css'

function App() {
  return (
    <div className="min-h-screen bg-dark text-gray-300">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Experience Section */}
        <section id="experience">
          <Experience />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <ProjectShowcase />
        </section>

        {/* Tech Stack Radar */}
        <section id="skills">
          <TechStackRadar />
        </section>

        {/* Architecture Deep Dive */}
        <section id="architecture">
          <ArchitectureDeepDive />
        </section>

        {/* Booking Section */}
        <section id="booking">
          <BookingSection />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark-secondary border-t border-dark-tertiary py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p className="mb-2">© 2026 Charles Gold. Building systems, mentoring teams.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
