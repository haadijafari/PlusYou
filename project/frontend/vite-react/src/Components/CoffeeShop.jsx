import { useState ,useEffect } from "react"
import api from "../services/config";

function CoffeeShop() {

    const [ category , setCategory ] = useState([])

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
  return (
    <div>
        {category.map((item)=> <p key={item.id}>{item.title}</p>)}
    </div>
  )
}

export default CoffeeShop