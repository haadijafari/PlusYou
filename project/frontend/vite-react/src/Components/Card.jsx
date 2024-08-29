import styles from "./Card.module.css"
function Card({data}) {

  const { img , title , short_description , price }= data
  return (
    <>
        {/* <div  className={styles.rules}>
          <div className={`card mb-8 rounded-5 ${styles.cards}`} >
            <div className="row g-0" style={{display:"flex", alignItems:"center", padding:"10px"}}>
              <div className="col-md-4 ">
                <img src={img} alt={title} style={{ width: '100px' }} className="rounded-1"/>
              </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"><small className="tex-body-secondary">{short_description}</small></p>
                    <p className="card-text"><small className="tex-body-secondary">{price} هزار تومان</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.img}>
            <img src={img} alt={title} />
          </div>
          <div className={styles.info}>
            <h5 className={styles.title}>{title}</h5>
            <p className={styles.description}>{short_description}</p>
            <p className={styles.price}>{price} هزار تومان</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card