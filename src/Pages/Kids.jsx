import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from '../components/item/Cards';

const Kids = () => {
    const [kids, setKids] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://65deedf0ff5e305f32a0e22a.mockapi.io/shivam');
                const kids = response.data.filter(product => product.category === 'kids');
                setKids(kids);
            } catch (error) {
                
                    console.error("Error Occurs", error)
                
            }
        }
        fetchProducts();
    }, [])
    return (
        <div>
            <div className="container-fluid bg-light py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                        {kids.map(product => (
                            <div className="col mb-5">
                                <Cards product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kids
