

import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { eComApi } from "../api";
import { cartContext } from "../cartContext";
import { WishListContext } from "../WishListContext";

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(cartContext);
  const {addToWishList} = useContext(WishListContext)

  useEffect(() => {
    const fetchData = async () => {
      const response = await eComApi("https://example.com/api/products");
      try {
        const data = response.data.products;
        setProducts(data);
      } catch (error) {
        console.error("error: ", error);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleWishList = (product) =>{
    addToWishList(product)
  }
  return (
    <div>
      <h2>Product Listing</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              {product.name} {product.memory}
            </div>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <Link to={`/singleproductpage/${product.id}`}>View Details</Link>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <button onClick={()=>handleWishList(product)}>Add To WishList</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListingPage;

