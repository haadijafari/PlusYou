import styles from "./Product.module.css"

function Product({data}) {
    const { title, price,img, short_description } = data
  return (
    <div className={styles.container}>
        <img src={img} alt="Image description" />
        <div className={styles.inf}>
            <h3>{title}</h3>
            <p>{short_description}</p>
            <span>{price} تومان</span>
        </div>
    </div>
  )
}

export default Product