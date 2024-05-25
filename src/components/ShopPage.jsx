// ShopPage.js
import React from 'react';

function ShopPage({ product }) {
    return (
        <div>
            <h1>Shop Page</h1>
            <div>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                {/* Add more product details here */}
            </div>
        </div>
    );
}

export default ShopPage;
