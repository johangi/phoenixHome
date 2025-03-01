import styles from './notFound.module.css';

function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <h2>Page not found...</h2>
    </div>
  )
}

export default NotFound;