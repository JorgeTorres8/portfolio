import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.display}>
          <div className={styles.word}>Portfolio</div>
          <div className={styles.word}>Portfolio | Jorge Torres</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer