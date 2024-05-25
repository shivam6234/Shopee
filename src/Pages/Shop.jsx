import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cards from '../components/item/Cards';
import axios from 'axios';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(9); 
    const [remainingProducts, setRemainingProducts] = useState(0); 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://65deedf0ff5e305f32a0e22a.mockapi.io/shivam');
                setProducts(response.data);
                setRemainingProducts(response.data.length - visibleProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [visibleProducts]); // Fetch products whenever visibleProducts changes

    const handleViewMore = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + remainingProducts);
        setRemainingProducts(0);
    };

    return (
        <div>
            <div className="container-fluid  py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                        {products.slice(0, visibleProducts).map(product => (
                            <div className="col mb-5" key={product.id}>
                                <Cards product={product} />
                            </div>
                        ))}
                    </div>
                    {remainingProducts > 0 && (
                        <div className="text-center">
                            <button className="btn btn-outline-danger fs-3" onClick={handleViewMore}>
                                View More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Shop;
