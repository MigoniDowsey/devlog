import { useState } from 'react'
import styles from './Wellness.module.css'

function Wellness() {
  const [activeWellness, setActiveWellness] = useState('physical')

  const wellnessContent = {
    physical: {
      title: 'Physical Wellness',
      icon: '💪',
      content: (
        <>
          <h4>My Journey with Long-Term Knee Pain</h4>
          <p>
            Coming into the i.c.stars program, I had been dealing with chronic knee pain for years. 
            It was something I'd learned to live with—until Wellness Wednesdays challenged me to take 
            it seriously.
          </p>
          <p>
            Through the program's wellness sessions, I was introduced to mobility stretches, proper 
            movement patterns, and the importance of strength training. I started going to the gym 
            regularly and focusing on exercises that supported my knee health rather than aggravating it.
          </p>
          <p>
            The transformation wasn't immediate, but it was profound. As I lost weight and built strength, 
            my knee pain significantly reduced. I learned that physical wellness isn't about perfection—
            it's about consistency, intentionality, and listening to your body.
          </p>
          <p>
            More importantly, I realized that managing school, work, and the demanding i.c.stars schedule 
            required me to slow down and prioritize recovery. I learned to take intentional breaks, 
            respect my body's need for rest, and understand that peak performance requires proper care.
          </p>
          <p>
            Now, physical wellness is non-negotiable. It's not a side task—it's the foundation that 
            allows me to show up fully in every other area of my life.
          </p>
        </>
      )
    },
    mental: {
      title: 'Mental Wellness',
      icon: '🧠',
      content: (
        <>
          <h4>Managing Stress & Maintaining Focus</h4>
          <p>
            Balancing a full-time intensive program, school, and life demands pushed me to develop 
            real mental wellness strategies. There were moments of overwhelm, burnout, and doubt—but 
            I learned to manage them constructively.
          </p>
          <p>
            Through workshops and self-reflection, I built a mental wellness toolbox that includes:
          </p>
          <ul>
            <li><strong>Structured breaks:</strong> Taking intentional time away from work to reset</li>
            <li><strong>Prioritization:</strong> Learning to say no and focus on what truly matters</li>
            <li><strong>Mindfulness practices:</strong> Using breathing exercises and meditation to stay centered</li>
            <li><strong>Clear boundaries:</strong> Protecting time for rest and recovery</li>
          </ul>
          <p>
            One of the biggest lessons came during Geek Week. The pressure was intense, and I had to 
            develop strategies to stay mentally sharp under stress. I learned that mental wellness 
            isn't about avoiding stress—it's about building resilience and maintaining clarity even 
            when things get hard.
          </p>
          <p>
            I now approach challenges with a calmer, more strategic mindset. I know when to push and 
            when to pause. That awareness has made me not just more productive, but more sustainable 
            in how I work.
          </p>
        </>
      )
    },
    emotional: {
      title: 'Emotional Wellness',
      icon: '❤️',
      content: (
        <>
          <h4>Building Emotional Resilience</h4>
          <p>
            Emotional wellness became a central part of my growth during the program. I learned to 
            name my emotions, understand their sources, and manage them in healthy ways rather than 
            letting them control my reactions.
          </p>
          <p>
            Through feedback sessions and leadership workshops, I confronted imposter syndrome and 
            negative self-talk. I learned to challenge the voice that said "you're not ready" or 
            "you don't belong" by grounding myself in evidence of my progress and impact.
          </p>
          <p>
            Giving and receiving feedback taught me emotional regulation. I practiced staying open 
            to critique without becoming defensive, and I learned to offer feedback with empathy and 
            clarity. These skills transformed how I show up in teams and relationships.
          </p>
          <p>
            I also built a practice of daily affirmations and self-check-ins. Some mantras that helped me:
          </p>
          <ul>
            <li>"I am capable of learning what I don't yet know."</li>
            <li>"My worth isn't defined by perfection—it's built through progress."</li>
            <li>"I can hold space for discomfort without letting it define me."</li>
          </ul>
          <p>
            Emotional wellness taught me that vulnerability isn't weakness—it's the foundation of 
            authentic leadership. I now lead with emotional intelligence, creating spaces where others 
            feel seen, heard, and valued.
          </p>
        </>
      )
    },
    financial: {
      title: 'Financial Wellness',
      icon: '💰',
      content: (
        <>
          <h4>Learning to Manage Money & Invest in Myself</h4>
          <p>
            Financial wellness was one of the hardest areas for me during the program. Managing expenses 
            while committing to an intensive schedule with limited income required strategy, discipline, 
            and intentionality.
          </p>
          <p>
            The i.c.stars program challenged me to budget carefully, track spending, and make conscious 
            financial decisions. But I also learned an important lesson: financial wellness isn't about 
            deprivation—it's about alignment.
          </p>
          <p>
            Yes, I budgeted. Yes, I tracked every dollar. But I also made sure not to skip on the small 
            things that kept me motivated. My morning Starbucks became a daily ritual—a reminder that 
            investing in small joys is part of sustainable wellness. It wasn't frivolous; it was fuel.
          </p>
          <p>
            Through financial workshops, I learned:
          </p>
          <ul>
            <li><strong>Budgeting with purpose:</strong> Allocating money toward needs, goals, and self-care</li>
            <li><strong>Building credit awareness:</strong> Understanding how to improve my credit score 
                and set myself up for long-term financial health</li>
            <li><strong>Setting short- and long-term financial goals:</strong> From saving for emergencies 
                to planning for post-program stability</li>
            <li><strong>Investing in myself:</strong> Recognizing that spending on wellness, growth, and 
                motivation isn't a luxury—it's essential</li>
          </ul>
          <p>
            I left the program with a clearer financial foundation and the tools to build toward 
            independence. More importantly, I learned that financial wellness isn't about restriction—
            it's about creating freedom through smart choices and self-respect.
          </p>
        </>
      )
    }
  }

  return (
    <section id="wellness" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Wellness & Self Exploration</h2>
        
        <p className={styles.intro}>
          Wellness became a real part of my routine during the i.c.stars program. It wasn't just about 
          checking boxes—it was about building sustainable habits that support my performance, growth, 
          and long-term success across physical, mental, emotional, and financial dimensions.
        </p>

        <div className={styles.wellnessTabs}>
          {Object.keys(wellnessContent).map((key) => (
            <button
              key={key}
              className={`${styles.wellnessTab} ${activeWellness === key ? styles.activeTab : ''}`}
              onClick={() => setActiveWellness(key)}
            >
              <span className={styles.icon}>{wellnessContent[key].icon}</span>
              <span>{wellnessContent[key].title}</span>
            </button>
          ))}
        </div>

        <div className={styles.wellnessContent}>
          <div className={styles.contentCard}>
            <h3>{wellnessContent[activeWellness].title}</h3>
            <div className={styles.contentBody}>
              {wellnessContent[activeWellness].content}
            </div>
          </div>
        </div>

        <div className={styles.reflection}>
          <h3>Wellness as a Performance Multiplier</h3>
          <p>
            What I learned throughout this journey is that wellness isn't separate from success—it's 
            the foundation of it. When I took care of my body, my mind was sharper. When I managed my 
            emotions, I showed up better for my team. When I handled my finances responsibly, I reduced 
            stress and could focus on growth.
          </p>
          <p>
            Wellness Wednesdays gave me structure, but the real growth came from making these practices 
            my own. I stopped seeing wellness as an obligation and started seeing it as a competitive 
            advantage.
          </p>
          <p>
            This approach didn't just help me survive the program—it helped me thrive. And I'm carrying 
            these practices forward as I build my career, knowing that sustainable success requires taking 
            care of the whole person, not just the professional.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Wellness