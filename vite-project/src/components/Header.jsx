import styles from './Header.module.css'

function Header (){
return(
<> 
<header className={styles.header}>
<h1>Migoni Dowsey Developer Log</h1>
<nav className={styles.nav}>
<a href="#home">Home</a>
<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
</nav>
</header>
</>
)
}

export default Header;

