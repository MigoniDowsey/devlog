import styles from './Resume.module.css'

function Resume() {
  return (
    <section id="resume" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Resume</h2>
        
        <div className={styles.resumeCard}>
          <div className={styles.resumeHeader}>
            <div>
              <h3>Migoni Dowsey</h3>
              <p className={styles.title}>Project Manager & Product Designer</p>
            </div>
            <a 
              href="/mnt/user-data/uploads/Migoni_Dowsey_Resume_PM.pdf" 
              download
              className={styles.downloadBtn}
            >
              Download PDF
            </a>
          </div>

          <div className={styles.contactInfo}>
            <span>Chicago, IL</span>
            <span>•</span>
            <a href="mailto:M.Dowsey06@gmail.com">M.Dowsey06@gmail.com</a>
            <span>•</span>
            <a href="https://linkedin.com/in/migoni-dowsey" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>

          <div className={styles.section}>
            <h4>Professional Summary</h4>
            <p>
              Project Manager and Product Designer who blends strategy, design, and execution to deliver
              user-centered digital solutions. Skilled in leading cross-functional teams, coordinating Agile 
              workflows, gathering requirements, and translating ideas into structured project plans and 
              intuitive product experiences. Known for empathy-driven leadership, strong communication, and 
              the ability to guide stakeholders and team members toward a shared vision.
            </p>
          </div>

          <div className={styles.section}>
            <h4>Core Skills</h4>
            <div className={styles.skills}>
              <div className={styles.skillCategory}>
                <h5>Project Management</h5>
                <p>Agile Methodologies, Scrum Practices, Sprint Planning, Backlog Prioritization, 
                   Requirements Gathering, Workflow Optimization, Documentation, Risk & Issue Tracking</p>
              </div>
              <div className={styles.skillCategory}>
                <h5>Collaboration & Leadership</h5>
                <p>Cross-Functional Leadership, Stakeholder Communication, Meeting Facilitation, 
                   Client Presentations, Task Delegation</p>
              </div>
              <div className={styles.skillCategory}>
                <h5>Technical & Product</h5>
                <p>Figma, Wireframing, UI/UX Prototyping, HTML/CSS/JavaScript, SQL, Power BI, 
                   Azure Cognitive Services, Git/GitHub</p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h4>Relevant Experience</h4>
            
            <div className={styles.experience}>
              <div className={styles.expHeader}>
                <div>
                  <h5>Project Manager & Lead Product Designer — United Airlines Project</h5>
                  <p className={styles.company}>i.c.stars | Chicago, IL</p>
                </div>
                <span className={styles.date}>2025</span>
              </div>
              <ul>
                <li>Managed a 4-person cross-functional team to deliver a digital solution for United Airlines</li>
                <li>Oversaw project planning, requirements gathering, Agile ceremonies, and stakeholder communication</li>
                <li>Delivered a sentiment and trend analysis web app supporting real-time and historical insights</li>
                <li>Created UX flows, documentation, and prototypes to guide development</li>
                <li>Presented milestones, timelines, and deliverables to client leaders</li>
              </ul>
            </div>

            <div className={styles.experience}>
              <div className={styles.expHeader}>
                <div>
                  <h5>Product Designer & Software Development Intern</h5>
                  <p className={styles.company}>i.c.stars | Chicago, IL</p>
                </div>
                <span className={styles.date}>2025</span>
              </div>
              <ul>
                <li>Completed 1,000+ hours of training in development, Agile teamwork, UX design, BA, and leadership</li>
                <li>Participated in Agile ceremonies and collaborated on iterative improvements</li>
                <li>Built applications, dashboards, and prototypes based on user feedback</li>
                <li>Conducted usability testing and aligned design with technical teams</li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <h4>Education</h4>
            
            <div className={styles.education}>
              <div className={styles.eduHeader}>
                <div>
                  <h5>Northeastern Illinois University</h5>
                  <p>Bachelor's in Information Technology (In Progress)</p>
                </div>
                <span className={styles.date}>2024–Present</span>
              </div>
            </div>

            <div className={styles.education}>
              <div className={styles.eduHeader}>
                <div>
                  <h5>i.c.stars</h5>
                  <p>Technology & Leadership Program</p>
                </div>
                <span className={styles.date}>2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume