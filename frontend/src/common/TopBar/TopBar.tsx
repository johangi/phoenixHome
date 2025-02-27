import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './TopBar.module.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function TopBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <img src="phoenixLogo.png" alt="Phoenix LAN logo" width='50px' />
                <h2 className={styles.navbarHeader}>Phoenix LAN</h2>
            </div>
            <span className={styles.navbarLinks}>
                <a href='https://delta.phoenixlan.no/' className={styles.navbarLink}>Kjøp Billetter <FontAwesomeIcon icon={faArrowRight} /></a>
                <a href='https://delta.phoenixlan.no/' className={styles.navbarLink}>Søk Crew <FontAwesomeIcon icon={faArrowRight} /></a>
            </span>
        </nav>
    )
}

export default TopBar;