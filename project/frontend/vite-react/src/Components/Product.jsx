import styles from "./Product.module.css"

function Product({data}) {
    const { title, price,img, short_description } = data
  return (
    <>
    {/* <div className={styles.container}>
        <img src={img} alt="Image description" />
        <div className={styles.inf}>
            <h3>{title}</h3>
            <p>{short_description}</p>
            <span>{price} تومان</span>
        </div>
    </div> */}
     <div className="card mb-8 rounded-5" style={{ maxWidth: 'auto', minWidth:'340px',maxHeight:'auto',minHeight:"180px",marginTop:"10px" }}>
        <div className="row g-0" style={{display:"flex", alignItems:"center", padding:"10px"}}>
          <div className="col-md-4">
            <img src={img}  className="img-fluid rounded-full " style={{ width: "100px", height: "100px" }} alt="..."></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text"><small className="tex-body-secondary">{short_description}</small></p>
              <p className="card-text"><small className="text-body-secondary">{price} تومان </small></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product