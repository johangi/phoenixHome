import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './TopBar.module.css';
import { faArrowRight, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function TopBar() {
    const [dropdownActive, setDropdownActive] = useState(false);

    function handleMenuClick() {
        setDropdownActive(!dropdownActive);
    }

    return (
        <nav className={dropdownActive? styles.navbarWithMenu : styles.navbar}>
            <Link to="/" className={styles.navbarLogo}>
                <img src="phoenixLogo.png" alt="Phoenix LAN logo" width='50px' />
                <h2 className={styles.navbarHeader}>Phoenix LAN</h2>
            </Link>
            <span className={styles.navbarLinks}>
                <span>
                    <Link to="/info" className={styles.navbarPageLink}>Info</Link>
                </span>
                <span>
                    <a href='https://delta.phoenixlan.no/' target="_blank" className={styles.navbarLink}>Kjøp Billetter <FontAwesomeIcon icon={faArrowRight} /></a>
                    <a href='https://delta.phoenixlan.no/crew' target="_blank" className={styles.navbarLink}>Søk Crew <FontAwesomeIcon icon={faArrowRight} /></a>
                </span>
            </span>
            <div className={styles.navbarDropdown}>
                <span className={styles.dropdownIcon} onClick={handleMenuClick}><FontAwesomeIcon icon={!dropdownActive ? faBars : faXmark} /></span>
            </div>
            {dropdownActive &&
                <div className={styles.navbarDropdownContentActive}>
                    <Link to="/info" className={styles.navbarDropdownContentLinks}>Info</Link>
                    <a href='https://delta.phoenixlan.no/' target="_blank" className={styles.navbarDropdownContentLinks}>Kjøp Billetter <FontAwesomeIcon icon={faArrowRight} /></a>
                    <a href='https://delta.phoenixlan.no/crew' target="_blank" className={styles.navbarDropdownContentLinks}>Søk Crew <FontAwesomeIcon icon={faArrowRight} /></a>
                </div>
            }
        </nav>
    );
}

export default TopBar;