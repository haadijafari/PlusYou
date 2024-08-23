import { useState ,useEffect } from "react"

import styles from "./CoffeeShop.module.css"
import { IoMdSearch } from "react-icons/io";

import Product from './Product';
import Category from "./Category";
import Loader from "./Loader";

import api from "../services/config";
import { filterProducts, searchProducts } from "../helper/helper";

function CoffeeShop() {

    const [ category , setCategory ] = useState([])
    const [ products , setProducts ] = useState([])
    const [ search , setSearch ] = useState([])
    const [ displayed , setDisplayed ] =useState([])
    const [ query , setQuery ] = useState({})

    useEffect(()=>{
      setDisplayed(products)
    },[products])

    useEffect(()=>{
      console.log(query);
      let finalProducts = searchProducts(products , query.search)
      finalProducts = filterProducts(finalProducts , query.category)
      setDisplayed(finalProducts)
    },[query])

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

      const searchHandler = ()=>{
        setQuery((query)=> ({...query, search}))
      }
      
      const CategoryHandler = (event)=>{
        const category = event.target.innerText.toLowerCase()
        setQuery((query)=> ({ ...query, category }))
      }
     
    
  return (
    <>
    <div>
      <button className={styles.searchButton} onClick={searchHandler}><IoMdSearch /></button>
      <input type="text" placeholder="جستجو کنید ..." value={search} onChange={e => setSearch(e.target.value.toLocaleLowerCase().trim())} />
    </div>
    <div className={styles.container}>
      {!displayed.length && <Loader />}
      <div className={styles.category}>
        {category.map((item)=> 
        <div key={item.id}  onClick={CategoryHandler}><Category data={item}/></div>)}
        
      </div>
      <div className={styles.products}>
        {displayed.map(p=> <div key={p.id}><Product data={p} /></div>)}
      </div>
    </div>
    </>
  )
}

export default CoffeeShop