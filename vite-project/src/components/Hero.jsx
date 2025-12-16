import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.greeting}>Hello, I'm Migoni Dowsey</h1>
        <p className={styles.tagline}>
          Project Manager & Product Designer
        </p>
        <p className={styles.description}>
          Blending strategy, design, and execution to deliver user-centered digital solutions.
        </p>
        <div className={styles.cta}>
          <button 
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            className={styles.primaryBtn}
          >
            Explore My Journey
          </button>
          <a 
            href="mailto:M.Dowsey06@gmail.com"
            className={styles.secondaryBtn}
          >
            Get In Touch
          </a>
        </div>
      </div>
      <div className={styles.heroVisual}>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
      </div>
    </section>
  )
}

export default Hero