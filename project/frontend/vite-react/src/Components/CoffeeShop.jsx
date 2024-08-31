
import { useState, useEffect, useRef } from "react";
import api from "../services/config";
import styles from "./CoffeeShop.module.css";

import Loader from "../Components/Loader";
import { IoMdSearch } from "react-icons/io";
import { searchProducts } from "../helper/helper";
import Card from "./Card";

function Rules() {
  const [categories, setCategories] = useState([]); 
  const [categoryItems, setCategoryItems] = useState({}); 
  const categoryRefs = useRef({}); 
  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState(""); 
  const [searchResults, setSearchResults] = useState([]); 
  const [hasSearched, setHasSearched] = useState(false); 

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const response = await api.get("/get-categories");
        const categoriesData = response || [];

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

        // Filter out categories with no items
        const filteredCategories = categoriesData.filter(category => itemsMap[category.id]?.length > 0);
        setCategories(filteredCategories);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching categories and items:", error.message);
      }
    };
    fetchCategories();
  }, []);

  const searchHandler = () => {
    if (!search.trim()) {
      setHasSearched(false);
      return;
    }
    
    setHasSearched(true);  
    const finalProducts = searchProducts(categoryItems, search);
    
    const results = [];
    Object.keys(finalProducts).forEach(categoryId => {
      finalProducts[categoryId].forEach(item => {
        results.push(item);
      });
    });
    
    setSearchResults(results);  
  };

  const handleCategoryClick = (id) => {
    if (categoryRefs.current[id]) {
      categoryRefs.current[id].scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.website}>
      {isLoading && <Loader />}
      <div className={styles.search}>
        <button className={styles.searchButton} onClick={searchHandler}><IoMdSearch /></button>
        <input
          type="text"
          placeholder="جستجو کنید ..."
          value={search}
          className={styles.searchInput}
          onChange={e => setSearch(e.target.value.toLocaleLowerCase().trim())}  
        />
      </div>
      
      <div className={styles.categoryBox}>
        {categories.map((category) => (
          <div
            key={category.id}
            className={styles.categoryItem}
            onClick={() => handleCategoryClick(category.id)}
          >
            <img src={category.icon} className={styles.icon} />
            {category.title}
          </div>
        ))}
      </div>
      
      <div className={styles.site}>
        {hasSearched && searchResults.length > 0 && (
          <div>       
            {searchResults.map(item => (
              <div key={item.id}><Card data={item}/></div>
            ))}
          </div>
        )}
        
        {hasSearched && searchResults.length === 0 && (
          <p className={styles.notFind}>محصولی یافت نشد</p>
        )}
        
        {categories.map((category) => (
          categoryItems[category.id]?.length > 0 && (
            <div
              key={category.id}
              ref={(el) => (categoryRefs.current[category.id] = el)}
              style={{ marginBottom: '20px', padding: '10px' }}
            >
              <h2 className={styles.title}>{category.title}</h2>
              <div>
                <div className={styles.categoryMenu}>
                  {categoryItems[category.id]?.map((item) => (
                      <div key={item.id}><Card data={item}/></div>
                  ))}
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default Rules;

