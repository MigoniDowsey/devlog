import styles from './SkillsLog.module.css'

export default function SkillsLog() {
  const monthlySkills = [
    {
      month: 'September',
      skills: [
        'UI/UX design stories',
        'Intro to Power BI',
        'Data modeling'
      ]
    },
    {
      month: 'October',
      skills: [
        'Power BI visualizations',
        'Functions & error handling',
        'Azure SQL connections',
        'HTTP requests/responses',
        'SQL joins & aggregations',
        'AI fundamentals'
      ]
    },
    {
      month: 'November',
      skills: [
        'React UI for feedback',
        'Working with APIs',
        'Frontend Testing'
      ]
    }
  ]

  return (
    <section className={styles.skillsLog}>
      <h2>Learning Journey</h2>
      {monthlySkills.map(({ month, skills }) => (
        <div key={month} className={styles.monthSection}>
          <h3>{month}</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}