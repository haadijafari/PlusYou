import styles from "./Category.module.css"

function Category({data}) {
    
  return (
    <div className={styles.card} >
        <h3>{data.title}</h3>
    </div>
  )
}

export default Category