import styles from './Home.module.css'

function Home() {
    return (
        <div className={styles.homeName}>
            <img src="phoenixLogo.png" alt="Phoenix LAN's logo" width='300px' style={{ marginTop: '10px'}} />
            <h1>Gaming og Digital kultur i Asker Kulturhus</h1>
        </div>
    )
}

export default Home;