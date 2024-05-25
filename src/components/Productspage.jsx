// ProductsPage.js
import React from 'react';

function ProductsPage({ onProductClick }) {
    const products = [
        { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 19.99 },
        { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 29.99 },
        // Add more products as needed
    ];

    const handleClick = (product) => {
        onProductClick(product);
    };

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id} onClick={() => handleClick(product)}>
                        {product.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductsPage;
