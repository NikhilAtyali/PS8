import React, {useState, useEffect, StrictMode } from 'react'
import { productsApi } from './api'
const Products7 = () => {
    const [products, setProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc')
    useEffect(()=>{
        const fetchProducts = async ()=>{
            const response = await productsApi('https://example.com/api/products')
            try{
               const data = response.data.products;
               setProducts(data)
            }
            catch(error){
                console.error("error: ", error.message)
            }
        }
        fetchProducts()
    },[])

     const handleFilter = () =>{
        const sortedProducts = [...products];
        sortedProducts.sort((a,b)=>{
            if(sortOrder === 'asc'){
                return a.price - b.price
            } else if( sortOrder === 'des'){
                return b.price - a.price
            }
        })
        setProducts(sortedProducts);
        setSortOrder(sortOrder === 'asc' ? 'des' : 'asc')
     }
  return (
    <div>
        <span><h3>Sort By Price: :</h3></span> <button onClick={handleFilter}>{(sortOrder === 'asc' ? 'Low to High' : 'High to Low' )}</button>
        
        <ul>
            {
                products.map((item)=>{
                    return <li>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default Products7
