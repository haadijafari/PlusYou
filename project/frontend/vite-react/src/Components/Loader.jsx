
const cofeeHot = "./static/assets/coffeeHot.gif"

import styles from "./Loader.module.css"
function Loader() {
  return (
  <div className={styles.loader}>
    <img src={cofeeHot} alt="Loader..." />
  </div>
  )
}

export default Loader