import { useState ,useEffect } from "react"
import api from "../services/config";
import Product from './Product';
import Category from "./Category";
import styles from "./CoffeeShop.module.css"
import Loader from "./Loader";
function CoffeeShop() {

    const [ category , setCategory ] = useState([])
    const [ products , setProducts ] = useState([])

    useEffect(() => {
        const fetchCagtegory = async () => {
          try {
            const data = await api.get("/get-categories");
            setCategory(data);  
          } catch (error) {
            console.log(error.message);
          }
        };
        fetchCagtegory();
      }, []);
      useEffect(() => {
        const fetchProducts = async () => {
          try {
            const data = await api.get("/get-items");
            setProducts(data.results);  
          } catch (error) {
            console.log(error.message);
          }
        };
        fetchProducts();
      }, []);

      const CategoryHandler = (event)=>{
        const { tagName } = event.target;
        const category = event.target.innerText.toLowerCase()
        console.log(category);
    }
  return (
    <div className={styles.container}>
      {!products.length && <Loader />}
      <div className={styles.category}>
        {category.map((item)=> 
        <div key={item.id} onClick={CategoryHandler}><Category data={item}/></div>)}
      </div>
      <div className={styles.products}>
        {products.map(p=> <div key={p.id}><Product data={p} /></div>)}
      </div>
    </div>
  )
}

export default CoffeeShop