import React, { useEffect, useState } from 'react';

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/products') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            products: [
              { name: 'Color Pencils', price: 50, quantity: 40, rating: 4.5 },
              { name: 'Sketchpens', price: 110, quantity: 20, rating: 3.8 },
              { name: 'Eraser', price: 20, quantity: 20, rating: 4.2 },
              { name: 'Sharpener', price: 22, quantity: 30, rating: 4.7 },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: 'Product list not found.',
        });
      }
    }, 2000);
  });
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fakeFetch('https://example.com/api/products');
        const { data } = response;
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching product list:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Sort the products by rating in descending order
    const sorted = [...products].sort((a, b) => b.rating - a.rating);
    setSortedProducts(sorted);
  }, [products]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Product List</h2>
      <input type="text" placeholder="Search by name" onChange={handleSearch} />
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>
            {product.name} - Rating: {product.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
