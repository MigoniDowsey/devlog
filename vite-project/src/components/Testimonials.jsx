import styles from './Testimonials.module.css'

function Testimonials() {
  const testimonials = [
    {
      name: 'Brandies Mevaa',
      role: 'i.c.stars Program Manager',
      text: 'Migoni is powerful, polished, and deeply driven. She has a natural center-of-gravity energy—people look to her for direction without her needing to shout for attention. She brings focus, style, and clarity into any room, thinking like a strategist and moving like a project leader. Migoni is willing to do the unglamorous work to ensure things actually get done, and she has strong instincts for people and presentation—understanding how things look, feel, and land with others to move teams forward. She consistently brings order to chaos and helps align people, priorities, and outcomes.'
    },
    {
      name: 'Elijah King',
      role: 'CEO of EWK Design, Microsoft',
      text: 'Migoni brings a rare combination of strategic thinking, design intuition, and executional discipline. During our time working together at EWK Design, she consistently demonstrated the ability to translate complex ideas into clear, user-centered solutions while keeping teams aligned and moving forward. She leads with confidence, communicates with intention, and has a sharp understanding of how design decisions impact both users and business outcomes. Migoni operates with the mindset of a leader—someone you can trust to own problems, drive clarity, and deliver results.'
    }
  ]

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Testimonials</h2>
        <p className={styles.subtitle}>
          What others have said about working with me
        </p>
        
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.quote}>"</div>
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.author}>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials