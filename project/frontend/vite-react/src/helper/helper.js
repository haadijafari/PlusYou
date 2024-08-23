
const searchProducts = ( products , search)=>{
    if (!search ) return products
    const searchedProducts = products.filter((p)=> p.title.toLowerCase().includes(search))
    return searchedProducts
}

const filterProducts = ( products, category ) =>{
    if(!category) return products
    const filteredProducts = products.filter(p => p.category == category)
    return filteredProducts 
}

export { searchProducts, filterProducts }