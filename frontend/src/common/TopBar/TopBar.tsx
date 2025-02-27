import styles from './TopBar.module.css'

function TopBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <img src="phoenixLogo.png" alt="Phoenix LAN logo" width='50px' />
                <h3 className={styles.navbarHeader}>PhoenixLAN</h3>
            </div>
        </nav>
    )
}

export default TopBar;