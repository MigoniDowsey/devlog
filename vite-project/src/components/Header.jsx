import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import styles from './Header.module.css'

function Header({ theme, toggleTheme, onMoodToMealClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <span className={styles.logoText}>MD</span>
        </div>
        
        <button 
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <button onClick={() => scrollToSection('about')} className={styles.navLink}>
            About
          </button>
          <button onClick={() => scrollToSection('business-leadership')} className={styles.navLink}>
            Business & Leadership
          </button>
          <button onClick={() => scrollToSection('technology')} className={styles.navLink}>
            Technology
          </button>
          <button onClick={() => scrollToSection('career')} className={styles.navLink}>
            Career
          </button>
          <button onClick={() => scrollToSection('wellness')} className={styles.navLink}>
            Wellness
          </button>
          <button onClick={() => scrollToSection('resume')} className={styles.navLink}>
            Resume
          </button>
          <button 
            onClick={() => {
              onMoodToMealClick()
              setMenuOpen(false)
            }} 
            className={`${styles.navLink} ${styles.moodToMealBtn}`}
          >
            Mood to Meal
          </button>
          
          <button 
            onClick={toggleTheme} 
            className={styles.themeToggle}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header