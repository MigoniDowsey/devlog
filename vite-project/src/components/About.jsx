import styles from './About.module.css'
import headshotImage from '../assets/Migoni.D - Headshot.png'

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img 
              src={headshotImage} 
              alt="Migoni Dowsey"
              className={styles.profileImage}
            />
          </div>
          <div className={styles.text}>
            <p className={styles.intro}>
              Project Manager and Product Designer who blends strategy, design, and execution to deliver
user-centered digital solutions.
            </p>
            <p>
              I am a dedicated Project Manager who leads through strengths-based leadership, blending strategy, design, and execution to deliver user-centered digital solutions. I excel at guiding cross-functional teams, aligning stakeholders, and translating ideas into clear project plans that drive meaningful impact.
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