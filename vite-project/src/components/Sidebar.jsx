import styles from './Sidebar.module.css'
import ProfileImage from './ProfileImage'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <ProfileImage />
      <div className={styles.content}>
        <h2>About Me</h2>
        <p>I'm an aspiring product designer, project manager, and consultant.</p>
        <p>I'm a people person with a passion for UI/UX design, business strategy, and helping others reach their full potential.</p>
        <p>Currently building <em>Mood to Meal</em> — a sentiment-powered recipe app that turns feelings into flavor.</p>
        
        <div className={styles.skills}>
          <h3>Key Strengths</h3>
          <ul>
            <li>Empathetic Leadership</li>
            <li>Creative Problem-Solving</li>
            <li>Strategic Thinking</li>
            <li>Communication</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
    </aside>
  )
}