import styles from './ProfileImage.module.css'

export default function ProfileImage() {
  return (
    <div className={styles.imageContainer}>
      <img 
        src="https://www.plantshop.me/media/product/peony_seeeds.jpg" 
        alt="Migoni Dowsey profile"
        className={styles.profileImage}
      />
    </div>
  )
}