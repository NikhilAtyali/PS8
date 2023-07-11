import {fakeFetch1} from  "./api"

import React, {useEffect, useState} from 'react'

const RenderButtons = () => {
const [productData, setProductData] = useState([])
const [filteredData, setFilteredData] = useState(null)
    useEffect(()=>{
        fakeFetch1('https://example.com/api/products')
        .then(response=> {
            setProductData(response.data.products)
        })
        .catch(error=> console.log(error))
    },[])

    const productFilter =(item)=>{
        setFilteredData(item)
    }
  return (
    <div>
        <h2>Render Buttons</h2>
        
            {productData.map((item)=>{
                return (
                <button onClick={()=>productFilter(item)}>{item.name}</button>
                )
            })}
            {
                filteredData && 
                <div>
                    <img src={filteredData.src}/>
                    <h3>Name: {filteredData.name}</h3>
                    <h4>Price: {filteredData.price}</h4>
                    <p>Description: {filteredData.desc}</p>
                </div>
            }
    </div>
  )
}

export default RenderButtons
