import styles from "./Layout.module.css"
import Navbar from '../Components/Navbar'
function Layout({children}) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
      <div className={styles.navAndSearch}>
        <Navbar />
      </div>
      <h3 className={styles.title}>Plus You</h3>
    </header>
      {children}
      <footer className={styles.footer}>
        <p>footer</p>
      </footer>
    </div>
  )
}

export default Layout