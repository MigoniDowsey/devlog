import styles from './Technology.module.css'

function Technology() {
  const technicalSkills = [
    {
      category: 'Frontend Development',
      skills: ['React', 'HTML/CSS/JavaScript', 'Responsive Design', 'UI/UX Implementation']
    },
    {
      category: 'Backend & Data',
      skills: ['SQL', 'Azure SQL', 'API Integration', 'Data Modeling']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Power BI', 'Azure Cognitive Services', 'Git/GitHub', 'Figma']
    },
    {
      category: 'Methodologies',
      skills: ['Agile/Scrum', 'Version Control', 'Testing & Debugging', 'Documentation']
    }
  ]

  const learningJourney = [
    {
      phase: 'Weeks 1-3',
      title: 'Foundation & Discovery',
      focus: 'Design Thinking & Data Fundamentals',
      skills: [
        'UI/UX design principles & user stories',
        'Power BI introduction & dashboards',
        'Data modeling & analysis fundamentals',
        'Design thinking methodology',
        'Agile sprint planning basics'
      ],
      milestone: 'Built first data visualization dashboard'
    },
    {
      phase: 'Weeks 4-7',
      title: 'Technical Development',
      focus: 'Backend Systems & Cloud Integration',
      skills: [
        'Power BI advanced visualizations & DAX',
        'JavaScript functions & error handling',
        'Azure SQL database connections',
        'RESTful APIs & HTTP protocols',
        'SQL joins, queries & aggregations',
        'AI & Machine Learning fundamentals'
      ],
      milestone: 'Integrated Azure services with data pipelines'
    },
    {
      phase: 'Weeks 8-11',
      title: 'Full-Stack Implementation',
      focus: 'Modern Frontend & API Integration',
      skills: [
        'React component architecture',
        'State management & hooks',
        'API integration & data fetching',
        'Frontend unit & integration testing',
        'Git workflow & version control',
        'Responsive design patterns'
      ],
      milestone: 'Deployed production-ready React application'
    },
    {
      phase: 'Weeks 12-14',
      title: 'Client Project Delivery',
      focus: 'United Airlines - Sentiment Analysis Platform',
      skills: [
        'End-to-end project management',
        'Stakeholder presentations & communication',
        'User acceptance testing',
        'Production deployment & monitoring',
        'Technical documentation',
        'Team leadership & Agile ceremonies'
      ],
      milestone: 'Delivered enterprise solution to Fortune 500 client'
    }
  ]

  return (
    <section id="technology" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Technology & Digital Literacy</h2>
        
        <div className={styles.showcase}>
          <div className={styles.featured}>
            <h3>Featured Project: Mood to Meal</h3>
            <p className={styles.projectDesc}>
              A sentiment-powered recipe application that transforms emotions into culinary experiences. 
              This proof-of-concept demonstrates my ability to conceptualize and build user-centered 
              digital products that solve real problems.
            </p>
            <div className={styles.techStack}>
              <span className={styles.tech}>React</span>
              <span className={styles.tech}>Sentiment Analysis</span>
              <span className={styles.tech}>API Integration</span>
              <span className={styles.tech}>Responsive Design</span>
            </div>
            <p className={styles.impact}>
              <strong>What it solves:</strong> Removes decision fatigue around meals by using emotional 
              state as a discovery mechanism. Users input their current mood, and the app suggests 
              meals, recipes, or restaurants that align with how they're feeling.
            </p>
            <button 
              onClick={() => document.querySelector('[class*="moodToMealBtn"]').click()}
              className={styles.tryItBtn}
            >
              Try Mood to Meal →
            </button>
          </div>

          <div className={styles.geekWeek}>
            <h3>Geek Week Experience</h3>
            <p>
              Geek Week was an intensive technical boot camp that tested and accelerated my growth across 
              multiple technical domains. Through timed challenges and performance tracking, I developed 
              rapid problem-solving abilities and technical confidence.
            </p>
            <div className={styles.achievements}>
              <div className={styles.achievement}>
                <span className={styles.metric}>SQL Testing</span>
                <p>Mastered complex queries, joins, and aggregations under pressure</p>
              </div>
              <div className={styles.achievement}>
                <span className={styles.metric}>Excel Challenges</span>
                <p>Advanced formulas, data analysis, and visualization techniques</p>
              </div>
              <div className={styles.achievement}>
                <span className={styles.metric}>Typing Speed</span>
                <p>Achieved 45+ WPM, exceeding the 40 WPM benchmark</p>
              </div>
              <div className={styles.achievement}>
                <span className={styles.metric}>Hot Keys Mastery</span>
                <p>Significantly improved workflow efficiency across applications</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.skillsSection}>
          <h3>Technical Skills</h3>
          <div className={styles.skillsGrid}>
            {technicalSkills.map((category, idx) => (
              <div key={idx} className={styles.skillCard}>
                <h4>{category.category}</h4>
                <ul>
                  {category.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.journey}>
          <h3>14-Week Technical Journey</h3>
          <p className={styles.journeySubtitle}>
            From fundamentals to enterprise delivery — building production-grade solutions through structured sprints
          </p>
          <div className={styles.timeline}>
            {learningJourney.map((phase, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.phaseHeader}>
                  <span className={styles.phaseNumber}>{phase.phase}</span>
                  <h4 className={styles.phaseTitle}>{phase.title}</h4>
                </div>
                <div className={styles.phaseContent}>
                  <div className={styles.focusArea}>
                    <span className={styles.focusLabel}>Focus Area:</span>
                    <span className={styles.focusText}>{phase.focus}</span>
                  </div>
                  <div className={styles.skillsList}>
                    {phase.skills.map((skill, i) => (
                      <div key={i} className={styles.skillItem}>
                        <span className={styles.checkmark}></span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.milestone}>
                    <span className={styles.milestoneLabel}>Key Achievement:</span>
                    <span className={styles.milestoneText}>{phase.milestone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.growthStory}>
          <h3>Technical Growth & Breakthrough Moments</h3>
          <p>
            My journey with technology has been one of continuous discovery and overcoming challenges. 
            There were moments when debugging felt impossible, when code wouldn't behave as expected, 
            and when technical concepts seemed out of reach. But each obstacle became a learning opportunity.
          </p>
          <p>
            The breakthrough came when I stopped seeing code as something foreign and started viewing it as 
            a tool for bringing ideas to life. Learning to ask better technical questions, understanding 
            debugging as a systematic process, and collaborating through GitHub taught me that technical 
            growth isn't about knowing everything—it's about knowing how to learn, adapt, and build.
          </p>
          <p>
            Through 5-hour minimums, Agile ceremonies, and hands-on development, I built not just technical 
            skills but technical confidence. I learned that the best products come from understanding both 
            the code and the people it serves.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Technology