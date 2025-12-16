import styles from './CareerDevelopment.module.css'

function CareerDevelopment() {
  return (
    <section id="career" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Career Development Journey</h2>
        
        <div className={styles.blogPost}>
          <div className={styles.intro}>
            <p className={styles.lead}>
              When I started the i.c.stars program, I knew I wanted to work in tech—but I didn't know 
              exactly where I fit or what roles aligned with my strengths. Over 14 weeks, my career 
              vision became clear, focused, and intentional.
            </p>
          </div>

          <article className={styles.article}>
            <h3>Finding Clarity Through Guidance</h3>
            <p>
              Working with the Career Development Director and Program Manager was transformative. Through 
              structured one-on-ones, resume reviews, and career mapping exercises, I learned how to 
              articulate my value beyond just skills—I learned to tell my story.
            </p>
            <p>
              They helped me see patterns I hadn't recognized in myself: my natural ability to organize 
              chaos, communicate with clarity, and lead teams toward shared goals. What I thought were 
              just "things I do" turned out to be core competencies for Product Management, Business 
              Analysis, and Product Design.
            </p>
            <p>
              I refined my resume from a list of tasks into a narrative of impact. I learned to speak 
              about my work in terms of problems solved, outcomes delivered, and value created. This shift 
              in framing changed how I saw myself professionally—not as someone learning to fit in, but 
              as someone bringing distinct value to the table.
            </p>
          </article>

          <article className={styles.article}>
            <h3>Learning from Industry Leaders</h3>
            <p>
              Engagement days with Accenture, Capital One, and Salesforce gave me direct insight into 
              how top-tier companies operate and what they look for in talent. Each session revealed 
              different aspects of the tech and consulting world.
            </p>
            <p>
              <strong>Accenture</strong> showed me the scale and complexity of global consulting—how 
              consultants must balance technical depth with business acumen and client relationships. 
              They emphasized the importance of adaptability, continuous learning, and the ability to 
              translate business problems into actionable solutions.
            </p>
            <p>
              <strong>Capital One</strong> highlighted the intersection of finance, technology, and 
              customer experience. I saw how data-driven decision-making and Agile practices power 
              innovation in financial services. Their focus on product thinking and user-centered design 
              resonated deeply with my own interests.
            </p>
            <p>
              <strong>Salesforce</strong> reinforced the value of ecosystem thinking and platform strategy. 
              I learned about the importance of designing for scalability, integration, and long-term 
              business impact. Their culture of innovation and customer success aligned with the type of 
              environment I want to work in.
            </p>
            <p>
              These experiences didn't just inform me about companies—they shaped my understanding of 
              what real tech roles require: strategic thinking, cross-functional collaboration, 
              technical literacy, and the ability to drive outcomes in complex environments.
            </p>
          </article>

          <article className={styles.article}>
            <h3>Defining My Professional Identity</h3>
            <p>
              Through resume feedback, mock interviews, and professional branding exercises, I developed 
              a clear sense of my professional identity. I'm not just someone who can manage projects or 
              design products—I'm someone who leads with purpose, thinks strategically, and creates 
              experiences that work.
            </p>
            <p>
              My personal brand centers on three core values:
            </p>
            <ul>
              <li>
                <strong>Empathetic Leadership:</strong> Leading with understanding, creating space for 
                others, and building trust through action
              </li>
              <li>
                <strong>Strategic Execution:</strong> Turning complex ideas into clear plans and 
                delivering results that matter
              </li>
              <li>
                <strong>User-Centered Design:</strong> Building solutions that serve people, not just 
                technology for technology's sake
              </li>
            </ul>
          </article>

          <article className={styles.article}>
            <h3>The Roles I'm Pursuing & Why</h3>
            <p>
              After months of self-discovery, industry exposure, and hands-on project work, I've 
              identified three core roles that align with my skills, interests, and purpose:
            </p>
            
            <div className={styles.roleCard}>
              <h4>Product Manager</h4>
              <p>
                Product Management brings together everything I do best: strategic thinking, 
                stakeholder communication, user advocacy, and cross-functional leadership. I'm drawn 
                to this role because it sits at the intersection of business, technology, and design. 
                As a PM, I can shape product vision, prioritize features that drive impact, and lead 
                teams to deliver solutions that matter. I want to be the person who ensures we're 
                building the right thing, not just building things right.
              </p>
            </div>

            <div className={styles.roleCard}>
              <h4>Business Analyst</h4>
              <p>
                Business Analysis allows me to leverage my ability to translate ambiguous problems 
                into structured solutions. I excel at requirements gathering, process mapping, and 
                bridging the gap between technical teams and business stakeholders. This role appeals 
                to me because it's about clarity and alignment—making sure everyone understands the 
                problem, the solution, and the path forward. I want to be the trusted advisor who 
                helps organizations make informed, data-driven decisions.
              </p>
            </div>

            <div className={styles.roleCard}>
              <h4>Product Designer</h4>
              <p>
                Product Design speaks to my passion for creating experiences that feel intuitive and 
                meaningful. I'm drawn to this role because it requires both creative thinking and 
                analytical rigor—understanding user needs, designing flows, prototyping solutions, 
                and iterating based on feedback. I want to design products that don't just work well 
                but feel good to use. Design is where empathy meets execution, and that's where I thrive.
              </p>
            </div>
          </article>

          <article className={styles.article}>
            <h3>Short-Term & Long-Term Goals</h3>
            <p>
              My career goals are structured around continuous growth, impact, and leadership:
            </p>
            <div className={styles.goals}>
              <div className={styles.goalSection}>
                <h4>Short-Term (1-2 Years)</h4>
                <ul>
                  <li>Secure a Product Manager, Business Analyst, or Product Designer role at a company 
                      that values innovation and user-centered design</li>
                  <li>Continue building technical skills (React, API integration, data analysis) to 
                      strengthen my ability to collaborate with engineers</li>
                  <li>Lead cross-functional projects that demonstrate my ability to drive outcomes and 
                      manage complexity</li>
                  <li>Build a portfolio of work that showcases strategic thinking, design excellence, 
                      and business impact</li>
                </ul>
              </div>
              <div className={styles.goalSection}>
                <h4>Long-Term (3-5 Years)</h4>
                <ul>
                  <li>Transition into a Senior PM or Lead Designer role where I can mentor others and 
                      influence product strategy at scale</li>
                  <li>Launch my own product (starting with Mood to Meal) that solves real problems and 
                      demonstrates entrepreneurial thinking</li>
                  <li>Build expertise in EdTech, FinTech, or HealthTech—industries where design and 
                      strategy can create meaningful social impact</li>
                  <li>Become a thought leader in product management and design, sharing insights through 
                      writing, speaking, and community engagement</li>
                </ul>
              </div>
            </div>
          </article>

          <article className={styles.article}>
            <h3>Why This Approach Makes Me Stand Out</h3>
            <p>
              I'm not just showing what I've learned—I'm showing how I've grown. This portfolio isn't 
              a checklist of completed tasks; it's a reflection of self-awareness, intentionality, and 
              strategic thinking.
            </p>
            <p>
              I can articulate why I'm drawn to specific roles, what I bring to the table, and where 
              I'm going. I understand my strengths, my gaps, and how to continue growing. Most 
              importantly, I've proven that I can lead, execute, and deliver—not just in theory, but 
              through real projects, client work, and team collaboration.
            </p>
            <p>
              I didn't just complete a program. I built a career foundation—and I'm ready to build on it.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default CareerDevelopment