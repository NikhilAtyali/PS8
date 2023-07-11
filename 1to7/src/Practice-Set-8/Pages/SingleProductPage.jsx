import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { eComApi } from "../api";

const SingleProductPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await eComApi("https://example.com/api/products");
      try {
        const data = response?.data?.products;
        // const singleProduct = data.find((item) => item.id === Number(id));
        setProducts(data);
      } catch (err) {
        console.error("error: ", err);
      }
    };
    fetchProducts();
  }, [id]);

  function getProductDetails(products, productId) {
    return products.find((product) => product?.id === productId);
  }
  if (!products) {
    return <div>Loading...</div>;
  }
  const singleProduct = getProductDetails(products, Number(id));
  return (
    <div>
      <h2>About</h2>
      <p>Name: {singleProduct.name} </p>
      <p>Description: {singleProduct.description}</p>
      <p>Price: {singleProduct.price}</p>
      <p>category: {singleProduct.category}</p>
      <p>Brand: {singleProduct.brand} </p>
    </div>
  );
};

export default SingleProductPage;
