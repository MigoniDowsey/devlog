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
      month: 'September',
      skills: ['UI/UX design stories', 'Intro to Power BI', 'Data modeling', 'Design thinking fundamentals']
    },
    {
      month: 'October',
      skills: ['Power BI visualizations', 'Functions & error handling', 'Azure SQL connections', 
               'HTTP requests/responses', 'SQL joins & aggregations', 'AI fundamentals']
    },
    {
      month: 'November',
      skills: ['React UI development', 'Working with APIs', 'Frontend Testing', 
               'Component architecture', 'State management']
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
          <h3>Learning Journey</h3>
          <div className={styles.timeline}>
            {learningJourney.map((month, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.monthLabel}>{month.month}</div>
                <div className={styles.skillsList}>
                  {month.skills.map((skill, i) => (
                    <span key={i} className={styles.skillBadge}>{skill}</span>
                  ))}
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