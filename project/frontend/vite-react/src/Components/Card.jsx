import styles from "./CoffeeShop.module.css"
function Card({data}) {

  const { img , title , short_description , price }= data
  return (
    <>
        <div  className={styles.rules}>
                <div className="card mb-8 rounded-5" style={{ maxWidth: 'auto', minWidth:'330px', maxHeight:'auto', minHeight:"180px", marginTop:"10px", }}>
                  <div className="row g-0" style={{display:"flex", alignItems:"center", padding:"10px"}}>
                    <div className="col-md-4">
                      <img src={img} alt={title} style={{ width: '100px' }} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text"><small className="tex-body-secondary">{short_description}</small></p>
                        <p className="card-text"><small className="tex-body-secondary">{price} تومان </small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Card