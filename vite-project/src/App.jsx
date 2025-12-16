import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import BusinessLeadership from './components/BusinessLeadership'
import Technology from './components/Technology'
import CareerDevelopment from './components/CareerDevelopment'
import Wellness from './components/Wellness'
import Resume from './components/Resume'
import Testimonials from './components/Testimonials'
import MoodToMeal from './components/MoodToMeal'

function App() {
  const [theme, setTheme] = useState('light')
  const [showMoodToMeal, setShowMoodToMeal] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <div className="app-container">
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme}
        onMoodToMealClick={() => setShowMoodToMeal(true)}
      />
      
      {showMoodToMeal && (
        <MoodToMeal onClose={() => setShowMoodToMeal(false)} />
      )}
      
      <main className="main-content">
        <Hero />
        <About />
        <BusinessLeadership />
        <Technology />
        <CareerDevelopment />
        <Wellness />
        <Resume />
        <Testimonials />
      </main>
      
      <footer className="footer">
        <p>&copy; 2025 Migoni Dowsey. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://linkedin.com/in/migoni-dowsey" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/migonidowsey" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:M.Dowsey06@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  )
}

export default App