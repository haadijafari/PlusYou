

const searchProducts = (products, search) => {
    if (!search) return products;
  
    const searchedProducts = {};
  
    
    Object.keys(products).forEach((categoryId) => {
      const filteredItems = products[categoryId].filter((item) =>
        item.title.toLowerCase().includes(search)
      );
      
      
      if (filteredItems.length > 0) {
        searchedProducts[categoryId] = filteredItems;
      }
    });
  
    return searchedProducts;
  };
  



export { searchProducts }