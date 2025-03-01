import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './TopBar.module.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function TopBar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.navbarLogo}>
                <img src="phoenixLogo.png" alt="Phoenix LAN logo" width='50px' />
                <h2 className={styles.navbarHeader}>Phoenix LAN</h2>
            </Link>
            <span className={styles.navbarLinks}>
                <a href='https://delta.phoenixlan.no/' target="_blank" className={styles.navbarLink} >Kjøp Billetter <FontAwesomeIcon icon={faArrowRight} /></a>
                <a href='https://delta.phoenixlan.no/crew' target="_blank" className={styles.navbarLink}>Søk Crew <FontAwesomeIcon icon={faArrowRight} /></a>
            </span>
        </nav>
    )
}

export default TopBar;