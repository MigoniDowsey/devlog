import { useState } from 'react'
import styles from './BusinessLeadership.module.css'

function BusinessLeadership() {
  const [activeTab, setActiveTab] = useState('leadership')

  const leadershipContent = {
    teamWeek: {
      title: 'Team Week Experience',
      content: `During Team Week, I took on the role of organizer and facilitator, ensuring our team stayed aligned on goals and deadlines. I learned that leadership isn't about being the loudest voice—it's about creating space for others to shine while keeping the collective vision clear. My ability to listen, synthesize ideas, and drive consensus helped our team navigate challenges and deliver strong results.`
    },
    giftsProject: {
      title: 'Gifts Project',
      content: `The Gifts Project taught me to recognize and articulate the unique strengths I bring to any team. I discovered my gift of strategic clarity—the ability to take complex, messy ideas and turn them into actionable plans. This project reinforced that my value lies not just in execution, but in helping others see the path forward.`
    },
    communityRole: {
      title: 'Community Leadership',
      content: `Through my community role, I showed leadership by consistently being present, reliable, and willing to take on unglamorous tasks that kept things running smoothly. Whether organizing materials, coordinating schedules, or supporting cohort members, I learned that leadership in service means showing up with intention and following through with excellence.`
    },
    planetaryResponsibility: {
      title: 'Planetary Responsibility',
      content: `The Planetary Responsibility workshop challenged me to think beyond immediate outcomes and consider the long-term impact of my work. I learned to ask better questions about sustainability, equity, and ethical design. This shifted my approach to leadership—now I lead with purpose, not just performance.`
    },
    feedback: {
      title: 'Giving & Receiving Feedback',
      content: `Learning to give and receive feedback with grace was transformative. I practiced being direct without being harsh and receiving critique without defensiveness. This skill became central to how I collaborate—creating a culture where feedback isn't feared but expected and appreciated.`
    },
    tea: {
      title: 'Tea Host Experience',
      content: `Serving as a Tea Host taught me the art of professional presence. Preparing for and engaging with Tea Guests required me to be both poised and personable, balancing formality with warmth. I learned that first impressions matter, but authentic connection matters more.`
    },
    teaDebriefs: {
      title: 'Tea Debriefs',
      content: `Tea Debriefs were moments of collective reflection where I learned to process experiences through multiple perspectives. These discussions taught me that leadership growth happens in the reflection, not just the action. I discovered patterns in how I showed up and areas where I could be more intentional.`
    },
    dreamSpeech: {
      title: 'Dream Speech',
      content: `My Dream Speech was a defining moment where I articulated my vision as a service and business leader. I spoke about creating products and experiences that serve communities while driving sustainable business outcomes. Being recognized as a service leader affirmed that my path is about impact, not just innovation.`
    },
    civicsProject: {
      title: 'CIVICs Project',
      content: `The CIVICs Project deepened my understanding of how technology and leadership intersect with civic responsibility. I learned to design solutions that consider policy, community needs, and systemic barriers. Post-internship, I plan to apply this by leading with civic consciousness—ensuring my work doesn't just solve problems, but solves the right problems for the right people.`
    }
  }

  const businessContent = {
    clientProject: {
      title: 'United Airlines Client Project',
      content: `Our team tackled a critical business problem: United Airlines needed real-time sentiment and trend analysis to better understand customer feedback and improve service delivery. We approached the solution by building a web application that processed social media data, flight feedback, and customer reviews to surface actionable insights.\n\nMy role as Project Manager and Lead Product Designer involved overseeing sprint planning, gathering requirements, facilitating Agile ceremonies, and ensuring seamless communication between technical and business stakeholders. I created UX flows, wireframes, and prototypes that guided development while keeping the end-user experience central to every decision.\n\nI presented milestones and deliverables to United's leadership team, translating technical complexity into clear business value. This project taught me how to balance stakeholder expectations, team dynamics, and product quality under tight deadlines.`
    },
    consultingCompany: {
      title: 'Working in Haven Consulting',
      content: `As part of Haven, our consulting company, I experienced what it's like to operate as a professional services firm. We managed internal processes, client relationships, and team dynamics while delivering high-stakes projects. I learned the importance of structure, accountability, and brand consistency. Haven taught me that great consulting isn't just about solving problems—it's about building trust, delivering with excellence, and leaving clients better than you found them.`
    },
    rfp: {
      title: 'RFP Proposal Process',
      content: `Responding to the Request for Proposal (RFP) was one of the most rigorous exercises in business thinking and presentation. We had to analyze the client's needs, define a compelling solution, outline deliverables, and present a persuasive case—all while competing with other consulting firms.\n\nThe biggest insights: clarity wins over complexity, and proposals must speak to both the problem and the people. I learned to write with precision, present with confidence, and anticipate client concerns before they're voiced.`
    },
    companyEngagement: {
      title: 'Company Engagement Days',
      content: `Engagement days with Accenture and Salesforce gave me exposure to how world-class consulting and tech firms operate. I saw how they structure teams, manage client relationships, and scale solutions globally. These experiences reinforced the importance of process discipline, client-centric thinking, and continuous learning. I left each session with new frameworks and a clearer vision of where I want to take my career.`
    },
    mentorship: {
      title: 'Learning from Mentors & Clients',
      content: `Working directly with mentors, clients, and guest consultants was invaluable. I learned to receive feedback without taking it personally, adapt quickly to new expectations, and communicate with clarity and professionalism. Mentors challenged me to think bigger, move faster, and own my decisions. They taught me that business professionalism isn't about perfection—it's about responsiveness, accountability, and always bringing your best thinking to the table.`
    }
  }

  return (
    <section id="business-leadership" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Business & Leadership</h2>
        
        <div className={styles.tabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'leadership' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('leadership')}
          >
            Leadership
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'business' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('business')}
          >
            Business
          </button>
        </div>

        <div className={styles.content}>
          {activeTab === 'leadership' && (
            <div className={styles.grid}>
              {Object.entries(leadershipContent).map(([key, { title, content }]) => (
                <div key={key} className={styles.card}>
                  <h3>{title}</h3>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'business' && (
            <div className={styles.grid}>
              {Object.entries(businessContent).map(([key, { title, content }]) => (
                <div key={key} className={styles.card}>
                  <h3>{title}</h3>
                  {content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default BusinessLeadership