import { useState } from 'react'
import styles from './MoodToMeal.module.css'

function MoodToMeal({ onClose }) {
  const [mood, setMood] = useState('')
  const [recommendation, setRecommendation] = useState(null)

  const moodRecommendations = {
    happy: {
      meal: 'Vibrant Buddha Bowl',
      description: 'A colorful mix of quinoa, roasted vegetables, avocado, and tahini dressing',
      restaurant: 'Local fresh food spots or build it at home',
      why: 'Your positive energy deserves bright, nourishing food that keeps your vibe high'
    },
    sad: {
      meal: 'Comfort Mac & Cheese',
      description: 'Creamy, warm, soul-soothing goodness',
      restaurant: 'Try Lou Malnati\'s for deep dish comfort or make homemade mac and cheese',
      why: 'Sometimes you just need something warm and familiar to lift your spirits'
    },
    stressed: {
      meal: 'Green Smoothie Bowl',
      description: 'Blended greens, banana, berries, topped with granola and honey',
      restaurant: 'Jamba Juice or make it fresh at home',
      why: 'Quick, nourishing, and energizing—fuel to help you power through'
    },
    tired: {
      meal: 'Protein-Packed Breakfast Burrito',
      description: 'Eggs, black beans, cheese, salsa wrapped in a warm tortilla',
      restaurant: 'Chipotle or your favorite breakfast spot',
      why: 'Give your body the fuel it needs to recharge and keep going'
    },
    excited: {
      meal: 'Sushi Adventure',
      description: 'Fresh rolls, sashimi, and edamame',
      restaurant: 'Arami or Momotaro for elevated sushi',
      why: 'Your energy is high—match it with something fresh and adventurous'
    },
    anxious: {
      meal: 'Herbal Tea & Toast with Avocado',
      description: 'Simple, grounding, and gentle on the stomach',
      restaurant: 'Make it at home or visit a cozy café',
      why: 'Light and calming—exactly what you need to ease your mind'
    },
    motivated: {
      meal: 'Power Salad with Grilled Chicken',
      description: 'Mixed greens, grilled protein, nuts, and balsamic vinaigrette',
      restaurant: 'Sweetgreen or Protein Bar',
      why: 'You\'re in go-mode—fuel up with something that supports your momentum'
    },
    lonely: {
      meal: 'Warm Soup & Bread',
      description: 'Tomato basil soup with crusty bread for dipping',
      restaurant: 'Panera Bread or a local café',
      why: 'Warm, comforting, and familiar—like a hug in a bowl'
    },
    celebratory: {
      meal: 'Fine Dining Experience',
      description: 'Multi-course meal at a restaurant you\'ve been wanting to try',
      restaurant: 'Girl & the Goat, RPM Italian, or The Purple Pig',
      why: 'You deserve to celebrate yourself—go all out!'
    },
    neutral: {
      meal: 'Build-Your-Own Bowl',
      description: 'Choose your base, protein, and toppings',
      restaurant: 'Chipotle, Cava, or Pokéworks',
      why: 'Not sure what you want? Keep it flexible and customizable'
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const normalizedMood = mood.toLowerCase().trim()
    
    const moodMatch = Object.keys(moodRecommendations).find(key => 
      normalizedMood.includes(key) || key.includes(normalizedMood)
    )
    
    if (moodMatch) {
      setRecommendation(moodRecommendations[moodMatch])
    } else {
      setRecommendation(moodRecommendations.neutral)
    }
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        
        <div className={styles.header}>
          <h2>🍽️ Mood to Meal</h2>
          <p>Tell me how you're feeling, and I'll suggest what to eat</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="mood">How are you feeling right now?</label>
            <input
              id="mood"
              type="text"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="happy, sad, stressed, excited, tired..."
              className={styles.input}
              required
            />
          </div>
          <button type="submit" className={styles.submitBtn}>
            Get My Meal Suggestion →
          </button>
        </form>

        {recommendation && (
          <div className={styles.recommendation}>
            <h3>{recommendation.meal}</h3>
            <p className={styles.description}>{recommendation.description}</p>
            <div className={styles.details}>
              <div className={styles.detailCard}>
                <strong>Where to get it:</strong>
                <p>{recommendation.restaurant}</p>
              </div>
              <div className={styles.detailCard}>
                <strong>Why this works:</strong>
                <p>{recommendation.why}</p>
              </div>
            </div>
          </div>
        )}

        <div className={styles.footer}>
          <p>
            <strong>Mood to Meal</strong> is a proof-of-concept project that demonstrates 
            sentiment-powered product design. This is just the beginning—imagine mood tracking, 
            personalized nutrition, and AI-powered meal planning all in one place.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoodToMeal