import { useState, useEffect, useRef } from "react";
import api from "../services/config";
import styles from "./Rules.module.css"
import Loader from "../Components/Loader";

function Rules() {
  const [categories, setCategories] = useState([]); 
  const [categoryItems, setCategoryItems] = useState({}); 
  const categoryRefs = useRef({}); 
  const [ isLoading , setIsLoading ] = useState(true)
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true)
        const response = await api.get("/get-categories");
        const categoriesData = response || [];
        setCategories(categoriesData);

        
        const itemsResponses = await Promise.all(
          categoriesData.map(async (category) => {
            const itemsResponse = await api.get(`/get-categories/${category.id}`);
            return {
              id: category.id,
              items: itemsResponse.results.menu_items || [],
            };
          })
        );

        
        const itemsMap = itemsResponses.reduce((acc, curr) => {
          acc[curr.id] = curr.items;
          return acc;
        }, {});
        setCategoryItems(itemsMap);
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching categories and items:", error.message);
      }
    };

    fetchCategories();
  }, []);

  
  const handleCategoryClick = (id) => {
    if (categoryRefs.current[id]) {
      categoryRefs.current[id].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div>
        {isLoading && <Loader />}
        <div>
        {categories.map((category)=> <button key={category.id} onClick={() => handleCategoryClick(category.id)} >
          {category.title}
        </button>)}
        </div>
        {categories.map((category) => (
          <div
            key={category.id}
            ref={(el) => (categoryRefs.current[category.id] = el)} // تنظیم ref برای هر دسته‌بندی
            style={{ marginBottom: '20px', border: '1px solid #941818', padding: '10px' }}
          >
            <h2 className={styles.title}>{category.title}</h2>
            <div>
              <div className={styles.category}>
                {categoryItems[category.id]?.map((item) => (
                  <div key={item.id} className={styles.rules}>
                    <div className="card mb-8 rounded-5" style={{ maxWidth: 'auto', minWidth:'340px',maxHeight:'auto',minHeight:"180px",marginTop:"10px" }}>
                     <div className="row g-0" style={{display:"flex", alignItems:"center", padding:"10px"}}>
                      <div className="col-md-4">
                        <img src={item.img} alt={item.title} style={{ width: '100px' }} />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text"><small className="tex-body-secondary">{item.short_description}</small></p>
                          <p className="card-text"><small className="tex-body-secondary">{item.price} تومان </small></p>
                        </div>
                      </div>
                      
                     </div>
                    </div>
                  </div>
                )) || <p>No items available</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rules;





