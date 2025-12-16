import { useState } from 'react'
import { X } from 'lucide-react'
import styles from './MoodToMeal.module.css'

function MoodToMeal({ onClose }) {
  const [mood, setMood] = useState('')
  const [recommendation, setRecommendation] = useState(null)
  const [usedOptions, setUsedOptions] = useState(new Set())

  // Comprehensive emotion-to-food mapping system
  const foodDatabase = {
    // JOYFUL & CELEBRATORY STATES
    joyful: [
      { food: 'Homemade pizza with your favorite toppings', why: 'Pure joy deserves hands-on fun and bold flavors', type: 'home' },
      { food: 'Korean fried chicken', why: 'Crispy, sweet, spicy—celebration in every bite', type: 'restaurant', place: 'Local Korean spot' },
      { food: 'Tacos from a food truck', why: 'Fun, flavorful, and full of good vibes', type: 'casual' },
      { food: 'Ice cream sundae bar', why: 'Build your own happiness', type: 'home' },
      { food: 'Fresh sushi platter', why: 'Bright, beautiful, and worth savoring', type: 'restaurant', place: 'Your favorite sushi spot' }
    ],
    celebratory: [
      { food: 'Ribeye steak with garlic butter', why: 'This moment deserves something special', type: 'home' },
      { food: 'Champagne and oysters', why: 'Classic celebration, elevated taste', type: 'restaurant', place: 'Upscale seafood restaurant' },
      { food: 'Loaded nachos with all the fixings', why: 'Share-worthy and indulgent', type: 'casual' },
      { food: 'Fancy charcuterie board', why: 'Celebrate with variety and sophistication', type: 'home' },
      { food: 'Dim sum feast', why: 'Small plates, big celebration', type: 'restaurant', place: 'Chinatown dim sum parlor' }
    ],
    excited: [
      { food: 'Nashville hot chicken sandwich', why: 'Match that energy with bold heat', type: 'restaurant', place: 'Howlin\' Rays or local hot chicken joint' },
      { food: 'Build-your-own burrito bowl', why: 'Creative control meets fresh flavors', type: 'casual', place: 'Qdoba or Moe\'s' },
      { food: 'Poke bowl with extra toppings', why: 'Vibrant, fresh, and exciting', type: 'restaurant', place: 'Local poke shop' },
      { food: 'Thai basil stir-fry', why: 'Bold aromatics and dynamic flavors', type: 'restaurant', place: 'Thai restaurant' }
    ],
    playful: [
      { food: 'Mini sliders and sweet potato fries', why: 'Fun-sized and full of flavor', type: 'casual' },
      { food: 'Breakfast for dinner', why: 'Break the rules—pancakes at 8pm', type: 'home' },
      { food: 'Grilled cheese and tomato soup', why: 'Nostalgic fun, adult upgrade', type: 'home' },
      { food: 'Chicken and waffles', why: 'Sweet meets savory in the best way', type: 'restaurant', place: 'Brunch spot or diner' }
    ],

    // COMFORT & NOSTALGIA STATES
    'needing comfort': [
      { food: 'Homemade chicken noodle soup', why: 'Warmth in a bowl, made with care', type: 'home' },
      { food: 'Baked mac and cheese', why: 'Creamy, cheesy, and soul-soothing', type: 'home' },
      { food: 'Meatloaf and mashed potatoes', why: 'Classic comfort, no questions asked', type: 'home' },
      { food: 'Pot roast with carrots', why: 'Slow-cooked comfort that feels like home', type: 'home' },
      { food: 'Chicken pot pie', why: 'Flaky crust, warm filling—pure comfort', type: 'home' }
    ],
    homesick: [
      { food: 'Your family\'s signature recipe', why: 'Nothing beats the taste of home', type: 'home' },
      { food: 'Sunday roast chicken', why: 'The meal that feels like family', type: 'home' },
      { food: 'Grandma\'s lasagna', why: 'Layers of love and nostalgia', type: 'home' },
      { food: 'Fried chicken and biscuits', why: 'Southern comfort for the soul', type: 'restaurant', place: 'Local soul food spot' }
    ],
    lonely: [
      { food: 'Ramen with soft-boiled egg', why: 'A warm hug in a bowl', type: 'home' },
      { food: 'Grilled cheese and tomato soup', why: 'Simple, comforting, just for you', type: 'home' },
      { food: 'Chicken tikka masala', why: 'Rich, warming spices to fill the space', type: 'restaurant', place: 'Indian restaurant or takeout' },
      { food: 'Hot chocolate and cookies', why: 'Small comforts go a long way', type: 'home' }
    ],
    nostalgic: [
      { food: 'Sloppy joes', why: 'Messy, fun, and straight from childhood', type: 'home' },
      { food: 'Tater tots and chicken nuggets', why: 'No shame—pure nostalgia', type: 'home' },
      { food: 'Peanut butter and jelly', why: 'Sometimes simple is best', type: 'home' },
      { food: 'Cereal for dinner', why: 'Throwback comfort, zero effort', type: 'home' }
    ],

    // EXHAUSTED & BURNOUT STATES
    exhausted: [
      { food: 'Rotisserie chicken', why: 'Grab it and go—no cooking required', type: 'ingredients', get: 'Grocery store' },
      { food: 'Frozen dumplings, pan-fried', why: 'Minimal effort, maximum comfort', type: 'home' },
      { food: 'Pasta with butter and parmesan', why: '10 minutes to bliss', type: 'home' },
      { food: 'Scrambled eggs and toast', why: 'Fast, simple, nourishing', type: 'home' },
      { food: 'Prepped salad kit', why: 'Zero thought, all nutrients', type: 'ingredients', get: 'Any grocery store' }
    ],
    drained: [
      { food: 'Delivery pizza', why: 'Let someone else handle it', type: 'delivery', place: 'Your favorite local spot' },
      { food: 'Quesadilla', why: 'Cheese + tortilla = done', type: 'home' },
      { food: 'Instant ramen, upgraded', why: 'Add an egg and call it self-care', type: 'home' },
      { food: 'Smoothie', why: 'Drinkable nutrition, no chewing required', type: 'home' }
    ],
    overwhelmed: [
      { food: 'Avocado toast', why: 'Simple, clean, grounding', type: 'home' },
      { food: 'Rice and beans', why: 'Basic, filling, easy to make', type: 'home' },
      { food: 'Soup from a carton', why: 'Heat and eat—that\'s all you need', type: 'home' },
      { food: 'Bagel with cream cheese', why: 'Minimal decisions, maximum satisfaction', type: 'home' }
    ],
    numb: [
      { food: 'Spicy ramen', why: 'Wake up your senses with heat', type: 'home' },
      { food: 'Hot wings', why: 'Feel something—even if it burns', type: 'restaurant', place: 'Wingstop or local wing spot' },
      { food: 'Salsa and chips', why: 'Sharp flavors to cut through the fog', type: 'home' },
      { food: 'Kimchi fried rice', why: 'Tangy, spicy, alive', type: 'home' }
    ],

    // STRESS & ANXIETY STATES
    anxious: [
      { food: 'Chamomile tea and honey toast', why: 'Gentle and grounding', type: 'home' },
      { food: 'Oatmeal with berries', why: 'Warm, slow, steady', type: 'home' },
      { food: 'Miso soup', why: 'Simple, warm, centering', type: 'home' },
      { food: 'Grilled chicken and rice', why: 'Familiar and uncomplicated', type: 'home' }
    ],
    stressed: [
      { food: 'Cheeseburger and fries', why: 'Sometimes you just need a solid burger', type: 'restaurant', place: 'Five Guys or Shake Shack' },
      { food: 'Fried rice', why: 'Fast, savory, satisfying', type: 'home' },
      { food: 'Takeout lo mein', why: 'Let someone else cook tonight', type: 'delivery', place: 'Local Chinese spot' },
      { food: 'Pizza slice', why: 'Quick, easy, no stress required', type: 'casual', place: 'Any pizza place' }
    ],
    tense: [
      { food: 'BBQ ribs', why: 'Get messy—release the tension', type: 'restaurant', place: 'BBQ joint' },
      { food: 'Crunchy tacos', why: 'The crunch is therapeutic', type: 'casual', place: 'Taco Bell or local taqueria' },
      { food: 'Chips and queso', why: 'Creamy comfort with a satisfying crunch', type: 'restaurant', place: 'Mexican restaurant' },
      { food: 'Celery and peanut butter', why: 'Crunch helps release tension', type: 'home' }
    ],
    restless: [
      { food: 'Walking tacos', why: 'Eat while you move', type: 'casual' },
      { food: 'Street food', why: 'Grab and go energy', type: 'casual', place: 'Food truck' },
      { food: 'Breakfast burrito', why: 'Portable and satisfying', type: 'casual', place: 'Local breakfast spot' },
      { food: 'Fruit and trail mix', why: 'Snack on the move', type: 'home' }
    ],

    // SADNESS & VULNERABILITY
    sad: [
      { food: 'Ice cream (your favorite flavor)', why: 'Classic comfort, no judgment', type: 'home' },
      { food: 'Chocolate lava cake', why: 'Warm, gooey, sweet escape', type: 'restaurant', place: 'Any steakhouse or Chili\'s' },
      { food: 'Macaroni and cheese', why: 'Creamy, warm, unconditionally comforting', type: 'home' },
      { food: 'Warm brownies', why: 'Chocolate fixes things', type: 'home' }
    ],
    heartbroken: [
      { food: 'Cookie dough ice cream', why: 'Sweet therapy, straight from the pint', type: 'home' },
      { food: 'Loaded nachos', why: 'Layers of comfort and cheese', type: 'casual' },
      { food: 'Your favorite takeout', why: 'Order what makes you feel safe', type: 'delivery' },
      { food: 'Warm cinnamon rolls', why: 'Soft, sweet, healing', type: 'home' }
    ],
    discouraged: [
      { food: 'Chicken noodle soup', why: 'Gentle and restorative', type: 'home' },
      { food: 'Vegetable stir-fry', why: 'Nourish yourself—you deserve care', type: 'home' },
      { food: 'Smoothie bowl', why: 'Colorful, fresh, a new start', type: 'home' },
      { food: 'Salmon and asparagus', why: 'Feed yourself like you matter—because you do', type: 'home' }
    ],

    // ANGER & FRUSTRATION
    angry: [
      { food: 'Spicy chicken sandwich', why: 'Channel that fire into flavor', type: 'restaurant', place: 'Popeyes or Chick-fil-A' },
      { food: 'Buffalo wings', why: 'Hot, messy, cathartic', type: 'restaurant', place: 'Buffalo Wild Wings or local wing spot' },
      { food: 'Jalapeño poppers', why: 'Explosive flavor for explosive feelings', type: 'casual' },
      { food: 'Spicy beef tacos', why: 'Bold and unapologetic', type: 'restaurant', place: 'Taqueria' }
    ],
    frustrated: [
      { food: 'Smashburger', why: 'Smash your frustration into something delicious', type: 'restaurant', place: 'Smashburger or homemade' },
      { food: 'Loaded fries', why: 'Messy indulgence to break the tension', type: 'casual' },
      { food: 'Beef jerky', why: 'Aggressive chewing, solid protein', type: 'home' },
      { food: 'Chips and salsa', why: 'Crunch it out', type: 'home' }
    ],
    irritated: [
      { food: 'Sour candy', why: 'Sharp and punchy—matches the mood', type: 'home' },
      { food: 'Pickles', why: 'Tangy, sharp, no-nonsense', type: 'home' },
      { food: 'Salt and vinegar chips', why: 'Aggressive flavor for an aggressive mood', type: 'home' },
      { food: 'Lemon pepper wings', why: 'Bright, bold, and a little biting', type: 'restaurant', place: 'Wingstop' }
    ],

    // ROMANTIC & SENSUAL STATES
    romantic: [
      { food: 'Chocolate-covered strawberries', why: 'Classic romance in every bite', type: 'home' },
      { food: 'Pasta carbonara for two', why: 'Rich, indulgent, intimate', type: 'home' },
      { food: 'Oysters and champagne', why: 'Elegant and sensual', type: 'restaurant', place: 'Upscale seafood spot' },
      { food: 'Fondue night', why: 'Interactive, cozy, romantic', type: 'home' }
    ],
    flirty: [
      { food: 'Tapas and wine', why: 'Small plates, big chemistry', type: 'restaurant', place: 'Spanish tapas bar' },
      { food: 'Sushi date', why: 'Playful, shareable, sophisticated', type: 'restaurant', place: 'Sushi restaurant' },
      { food: 'Espresso martini and dessert', why: 'Sweet with a kick', type: 'restaurant', place: 'Cocktail bar' },
      { food: 'Charcuterie and cocktails', why: 'Classy, playful, and fun to share', type: 'restaurant', place: 'Wine bar' }
    ],

    // WELLNESS & INTENTIONAL STATES
    'health-conscious': [
      { food: 'Quinoa salad with roasted vegetables', why: 'Clean, nutrient-dense, intentional', type: 'home' },
      { food: 'Grilled salmon and broccoli', why: 'Omega-3s and greens—fueling wellness', type: 'home' },
      { food: 'Green smoothie', why: 'Vitamins in a glass', type: 'home' },
      { food: 'Buddha bowl', why: 'Balanced, colorful, nourishing', type: 'restaurant', place: 'Sweetgreen or local health spot' }
    ],
    energized: [
      { food: 'Açai bowl', why: 'Bright, fresh, high-energy fuel', type: 'restaurant', place: 'Smoothie bar' },
      { food: 'Egg scramble with veggies', why: 'Protein-packed and ready to go', type: 'home' },
      { food: 'Chicken breast and sweet potato', why: 'Clean energy, no crash', type: 'home' },
      { food: 'Greek yogurt parfait', why: 'Light, fresh, energizing', type: 'home' }
    ],
    focused: [
      { food: 'Avocado toast with egg', why: 'Brain food with staying power', type: 'home' },
      { food: 'Salmon poke bowl', why: 'Omega-3s for mental clarity', type: 'restaurant', place: 'Poke spot' },
      { food: 'Almond butter and apple slices', why: 'Simple, steady energy', type: 'home' },
      { food: 'Matcha latte and protein bar', why: 'Sustained focus without the crash', type: 'home' }
    ],
    ambitious: [
      { food: 'Power breakfast sandwich', why: 'Fuel up and conquer', type: 'casual', place: 'Dunkin\' or Starbucks' },
      { food: 'Steak salad', why: 'Protein and greens—executive lunch', type: 'restaurant', place: 'Fast-casual spot' },
      { food: 'Espresso and croissant', why: 'Simple, sharp, ready to work', type: 'home' },
      { food: 'Chicken and brown rice', why: 'Meal prep for winners', type: 'home' }
    ],

    // ADVENTUROUS & EXPLORATORY
    adventurous: [
      { food: 'Ethiopian injera platter', why: 'Bold flavors, new experience', type: 'restaurant', place: 'Ethiopian restaurant' },
      { food: 'Pho with all the fixings', why: 'Build your own adventure', type: 'restaurant', place: 'Vietnamese spot' },
      { food: 'Caribbean jerk chicken', why: 'Spicy, smoky, unforgettable', type: 'restaurant', place: 'Caribbean restaurant' },
      { food: 'Indian thali', why: 'A sampler of bold, layered flavors', type: 'restaurant', place: 'Indian restaurant' }
    ],
    curious: [
      { food: 'Bibimbap', why: 'Korean classic—colorful and complex', type: 'restaurant', place: 'Korean restaurant' },
      { food: 'Shakshuka', why: 'Middle Eastern breakfast meets dinner', type: 'home' },
      { food: 'Bao buns', why: 'Fluffy, filled, fun to eat', type: 'restaurant', place: 'Asian fusion spot' },
      { food: 'Falafel wrap', why: 'Mediterranean flavors worth exploring', type: 'casual', place: 'Mediterranean spot' }
    ],

    // LOW MOTIVATION & INDECISIVE
    unmotivated: [
      { food: 'Cereal', why: 'Zero effort, instant satisfaction', type: 'home' },
      { food: 'PB&J sandwich', why: 'Classic, no thinking required', type: 'home' },
      { food: 'Instant noodles', why: 'Add hot water, move on', type: 'home' },
      { food: 'Cheese and crackers', why: 'Snack-level effort, meal-level comfort', type: 'home' }
    ],
    indecisive: [
      { food: 'Order a sampler platter', why: 'Can\'t choose? Get it all', type: 'restaurant', place: 'Applebee\'s or TGI Friday\'s' },
      { food: 'Build your own pizza', why: 'Half pepperoni, half veggie—problem solved', type: 'delivery', place: 'Domino\'s or Pizza Hut' },
      { food: 'Variety sushi roll', why: 'Multiple flavors, one decision', type: 'restaurant', place: 'Sushi spot' },
      { food: 'Mezze platter', why: 'Options on options', type: 'restaurant', place: 'Mediterranean restaurant' }
    ],

    // DEFAULT & GENERAL MOODS
    hungry: [
      { food: 'Classic cheeseburger and fries', why: 'Hits all the right spots', type: 'casual', place: 'Any burger joint' },
      { food: 'Chicken quesadilla', why: 'Fast, filling, satisfying', type: 'casual', place: 'Qdoba or Moe\'s' },
      { food: 'Pepperoni pizza', why: 'Can\'t go wrong with a classic', type: 'delivery', place: 'Local pizza spot' },
      { food: 'Beef burrito', why: 'Wrapped up and ready to go', type: 'casual', place: 'Local burrito shop' }
    ],
    neutral: [
      { food: 'Sandwich and chips', why: 'Simple, solid, reliable', type: 'home' },
      { food: 'Pasta with marinara', why: 'No frills, just good food', type: 'home' },
      { food: 'Grilled chicken wrap', why: 'Clean and easy', type: 'casual', place: 'Panera or local café' },
      { food: 'Veggie stir-fry', why: 'Balanced and straightforward', type: 'home' }
    ]
  }

  // Emotion synonyms and variations
  const emotionMap = {
    // Map variations to base emotions
    happy: 'joyful',
    ecstatic: 'joyful',
    thrilled: 'excited',
    pumped: 'excited',
    hyped: 'excited',
    fun: 'playful',
    goofy: 'playful',
    silly: 'playful',
    
    tired: 'exhausted',
    sleepy: 'exhausted',
    fatigued: 'drained',
    wiped: 'drained',
    burned: 'drained',
    burnout: 'drained',
    
    depressed: 'sad',
    down: 'sad',
    blue: 'sad',
    crying: 'sad',
    broken: 'heartbroken',
    crushed: 'heartbroken',
    
    mad: 'angry',
    pissed: 'angry',
    furious: 'angry',
    annoyed: 'irritated',
    
    nervous: 'anxious',
    worried: 'anxious',
    panicked: 'anxious',
    freaking: 'stressed',
    
    content: 'joyful',
    peaceful: 'joyful',
    chill: 'neutral',
    meh: 'neutral',
    
    cozy: 'needing comfort',
    warm: 'needing comfort',
    snuggly: 'needing comfort',
    
    missing: 'homesick',
    alone: 'lonely',
    isolated: 'lonely',
    
    lost: 'overwhelmed',
    scattered: 'restless',
    wired: 'restless',
    
    motivated: 'ambitious',
    driven: 'ambitious',
    determined: 'focused',
    
    healthy: 'health-conscious',
    fit: 'energized',
    strong: 'energized',
    
    spicy: 'adventurous',
    bold: 'adventurous',
    wild: 'adventurous',
    
    loving: 'romantic',
    sweet: 'romantic',
    intimate: 'romantic',
    attracted: 'flirty',
    
    lazy: 'unmotivated',
    stuck: 'indecisive',
    confused: 'indecisive'
  }

  const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)]
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const normalizedMood = mood.toLowerCase().trim()
    
    // Map to base emotion
    let baseEmotion = emotionMap[normalizedMood] || normalizedMood
    
    // Get food options for this emotion
    let options = foodDatabase[baseEmotion]
    
    // If no match, try partial matching
    if (!options) {
      const matchingKey = Object.keys(foodDatabase).find(key => 
        normalizedMood.includes(key) || key.includes(normalizedMood)
      )
      if (matchingKey) {
        options = foodDatabase[matchingKey]
      }
    }
    
    // Default to neutral if still no match
    if (!options) {
      options = foodDatabase.neutral
    }
    
    // Filter out recently used options
    const availableOptions = options.filter(opt => !usedOptions.has(opt.food))
    
    // If all have been used, reset
    const finalOptions = availableOptions.length > 0 ? availableOptions : options
    
    // Select random option
    const selected = getRandomItem(finalOptions)
    
    // Track usage
    setUsedOptions(prev => {
      const newSet = new Set(prev)
      newSet.add(selected.food)
      // Reset after 5 uses
      if (newSet.size > 5) newSet.clear()
      return newSet
    })
    
    setRecommendation(selected)
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}><X size={24} /></button>
        
        <div className={styles.header}>
          <h2>MoodToMeal</h2>
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
              placeholder="happy, tired, stressed, excited, romantic, adventurous..."
              className={styles.input}
              required
            />
          </div>
          <button type="submit" className={styles.submitBtn}>
            Get My Meal Suggestion
          </button>
        </form>

        {recommendation && (
          <div className={styles.recommendation}>
            <h3>{recommendation.food}</h3>
            <p className={styles.why}>{recommendation.why}</p>
            
            {recommendation.type && (
              <div className={styles.details}>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Type:</span>
                  <span className={styles.value}>
                    {recommendation.type === 'home' && 'Cook at home'}
                    {recommendation.type === 'restaurant' && 'Sit-down restaurant'}
                    {recommendation.type === 'casual' && 'Casual dining'}
                    {recommendation.type === 'delivery' && 'Order delivery'}
                    {recommendation.type === 'ingredients' && 'Quick ingredients'}
                  </span>
                </div>
                
                {(recommendation.place || recommendation.get) && (
                  <div className={styles.detailItem}>
                    <span className={styles.label}>Where:</span>
                    <span className={styles.value}>{recommendation.place || recommendation.get}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <div className={styles.footer}>
          <p>
            <strong>MoodToMeal</strong> is a proof-of-concept that demonstrates 
            sentiment-powered product design with 100+ emotions and 250+ food options.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoodToMeal