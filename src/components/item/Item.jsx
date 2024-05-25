import React, { useEffect, useState } from 'react'
import axios  from 'axios'
const Item = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('https://65dcd28ae7edadead7ecf082.mockapi.io/fashion');
          setProducts(response.data); // Assuming your API returns an array of products
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []); // Run once on component mount

  
  return (
    <div>
 <h1>Products</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <h1>{product.category}</h1>
           
            {/* <p>{product.description}</p> */}
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Item

