import styles from "./Card.module.css"
function Card({data}) {

  const { img , title , short_description , price }= data
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.img}>
            <img src={img} alt={title} />
          </div>
          <div className={styles.info}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{short_description}</p>
            <p className={styles.price}>{price} هزار تومان</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card