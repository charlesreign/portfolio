# Charles Gold - Senior Engineer Portfolio

A premium, performance-first developer portfolio built with React, Tailwind CSS, and Framer Motion.

## Features

✨ **Impact-Driven Project Gallery**
- Case study-style layouts with Context → Architecture → Outcomes
- Measurable metrics for each project
- Filterable project categories

🎯 **Tech Stack Radar**
- Skills organized by proficiency (Expert, Proficient, Familiar)
- Visual proficiency indicators
- Core competencies showcase

📐 **System Design Deep-Dive**
- Engineering logs with expandable content
- Architectural patterns reference
- System diagrams and visualizations

🚀 **Terminal Hero Section**
- Animated terminal window effect
- Minimalist, professional design
- Call-to-action buttons

🧭 **Sticky Navigation**
- Blur effect on scroll
- Mobile-responsive menu
- Smooth scrolling

## Tech Stack

- **Framework**: React 18 with Hooks
- **Language**: Vanilla JavaScript (no TypeScript)
- **Styling**: Tailwind CSS with dark mode
- **Animation**: Framer Motion
- **Build Tool**: Vite
- **Icons/Design**: Custom SVG and CSS

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── ProjectShowcase/     # Project gallery component
│   ├── ArchitectureDeepDive/# Technical deep-dive section
│   ├── TechStackRadar/      # Skills and tech stack display
│   ├── HeroSection/         # Hero section with terminal
│   ├── Navigation/          # Top navigation bar
│   └── ContactSection/      # Contact form
├── styles/
│   ├── index.css           # Global styles
│   └── ProjectShowcase.css # Component-specific styles
├── App.jsx                  # Main app component
└── main.jsx                 # Entry point
```

## Performance Optimizations

- ✓ Code splitting and lazy loading
- ✓ Framer Motion memoization for smooth animations
- ✓ Optimized re-renders with React.memo
- ✓ GPU-accelerated animations
- ✓ Responsive images and assets

## Customization

### Colors
Edit Tailwind config in `tailwind.config.js`:

```js
colors: {
  dark: '#0a0e27',
  'dark-secondary': '#16213e',
  accent: '#00d9ff'
}
```

### Projects
Update project data in `src/components/ProjectShowcase/index.jsx`

### Skills
Modify skill data in `src/components/TechStackRadar/index.jsx`

## Dark Mode

Dark mode is enabled by default and stored in `tailwind.config.js`. Customize the color scheme to match your brand.

## Accessibility

- Semantic HTML structure
- Proper contrast ratios
- Keyboard navigation support
- Reduced motion preferences respected
- ARIA labels where appropriate

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

MIT License - feel free to use this as a template for your own portfolio!

## Author

Charles Gold - Senior Full-Stack Engineer
