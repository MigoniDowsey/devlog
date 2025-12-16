import styles from './About.module.css'

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img 
              src="https://www.plantshop.me/media/product/peony_seeeds.jpg" 
              alt="Migoni Dowsey"
              className={styles.profileImage}
            />
          </div>
          <div className={styles.text}>
            <p className={styles.intro}>
              I'm an aspiring product designer, project manager, and consultant with a passion for 
              creating meaningful digital experiences that solve real problems.
            </p>
            <p>
              Through the i.c.stars program, I completed over 1,000 hours of intensive training in 
              development, Agile methodologies, UX design, business analysis, and leadership. I led 
              cross-functional teams, managed client projects, and developed solutions that blend 
              strategic thinking with user-centered design.
            </p>
            <p>
              I'm a people person who leads with empathy and moves with purpose. Currently building 
              <strong> Mood to Meal</strong> — a sentiment-powered recipe app that turns feelings into flavor.
            </p>
            
            <div className={styles.highlights}>
              <div className={styles.highlightCard}>
                <h3>Key Strengths</h3>
                <ul>
                  <li>Empathetic Leadership</li>
                  <li>Creative Problem-Solving</li>
                  <li>Strategic Thinking</li>
                  <li>Cross-Functional Collaboration</li>
                  <li>User-Centered Design</li>
                </ul>
              </div>
              
              <div className={styles.highlightCard}>
                <h3>Core Focus</h3>
                <ul>
                  <li>Project Management</li>
                  <li>Product Design</li>
                  <li>Business Strategy</li>
                  <li>Agile Practices</li>
                  <li>Team Leadership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About