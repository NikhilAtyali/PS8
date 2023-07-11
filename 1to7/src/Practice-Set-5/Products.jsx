import { useState, useEffect } from "react";
import { fakeFetch2 } from "./fetchCalls";

const Products = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fakeFetch2("https://example.com/api/products")
      .then((response) => {
        setproducts(response.data.products);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  const showProducts = (product) => {
    return (
      <ul>
        <li>
          {product.name}, Rs:{product.price}, Quantity: {product.quantity}
        </li>
      </ul>
    );
  };
  const filterQuantity = () => {
    // console.log("....");
    const filteredProducts = products.filter((product) => {
      return product.quantity > 20;
    });
    setproducts(filteredProducts);
  };

  const filterPrice =()=>{
    console.log("Clicked")
    const filteredPrice = products.filter((product=>{
       return  product.price > 20;
    }))
    setproducts(filteredPrice)
    console.log({filteredPrice})
  }
  return (
    <div>
      <button onClick={() => filterQuantity()}>
        Show Products With Quantity More Than 20
      </button>
      <button onClick={filterPrice}>
        Filter By Prcice
      </button>
      {products.map(showProducts)}
    </div>
  );
};

export default Products;
