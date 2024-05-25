import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from '../components/item/Cards';

const Men = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://65deedf0ff5e305f32a0e22a.mockapi.io/shivam');
                const men = response.data.filter(product => product.category === 'men');
                setProducts(men);
            } catch (error) {
                console.error('Error occurs', error);
            }
        }
        fetchData();
    }, []); // Empty dependency array to run only once after initial render

    return (
        <div>
            <div className="conatiner-fluid py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                        {products.map(product => (
                            <div className="col mb-5"  >
                                <Cards product={product}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Men;
