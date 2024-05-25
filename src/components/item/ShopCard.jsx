import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { increment } from '../features/counter/counterslice';
import { addItem } from '../features/cart/cartSlice';
import { setSelectedProduct } from '../features/product/productSlice'; 

const ShopCard = ({ product }) => {
    const [color,setcolor]=useState(null)
    const [showFirstCard, setShowFirstCard] = useState(true);
    const dispatch = useDispatch();
    const isSignedUp = !!localStorage.getItem('currentUser');

    const toggleCard = () => {
        setShowFirstCard(!showFirstCard);
    };

    const handleAddToCart = () => {
        if (!isSignedUp) {
            window.open('/login', '_blank');
        } else {
            dispatch(increment());
            dispatch(addItem(product));
            alert('Item added to cart'); // Displaying a simple alert for now, you can customize this message or use a modal
        }
    };

    const handleaddProducts = () => {
        dispatch(setSelectedProduct(product));
    }

    const handleColor=(linkedId)=>{
        setcolor(linkedId)
    }
    const nullColor=()=>{
        setcolor('white')
    }

    const { name2, image1, image2, category, new_price } = product;

    return (
        <div>
            {showFirstCard ? (
                <div className="card mx-auto d-lg-block " style={{ width: "18rem", border: 'none' }} onMouseEnter={toggleCard}>
                    <div className='w-100 shadow p-5' style={{ height: '40vh', backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                    <div className="card-body">
                        <h5 className="text-center name">{name2}</h5>
                        <h5 className="text-center category">{category}</h5>
                        <h5 className="text-center prize">Rs. {new_price}</h5>
                        <h5 className='cart w-100'><Link className='text-dark text-center w-100' style={{ textDecoration: 'none' }} to={{ pathname: '/cart', state: { product } }}>View Cart</Link></h5>
                    </div>
                </div>
            ) : (
                <div className="card -lg mx-auto shadow-lg" style={{ width: '18rem', border: 'none' }} onMouseLeave={toggleCard}>
                    <Link to='/product' onClick={handleaddProducts}>
                        <div className='w-100 d-flex ' style={{ height: '40vh', alignItems: 'end', backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                            <div className='w-100'onMouseLeave={nullColor} onMouseEnter={()=>handleColor('cart')} style={{backgroundColor:color==='cart'?'orangered':'white'}}>
                                <Link to='/cart'>
                          
                                <button className='btn  w-100' onClick={handleAddToCart}   style={{ textDecoration: 'none', border: 'none',borderBottom:'2px solid grey',color:color==='cart'?'white':'orangeRed' }} to='cart'>
                                    <h6 className='fs-5'>
                                        <i className="fa-solid fa-cart-plus"></i>
                                        <span className='ps-1 '>
                                            Add to cart
                                        </span>
                                    </h6>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </Link>
                    <div className="card-body">
                        <h5 className="text-center category">{category}</h5>
                        <h5 className="text-center name">{name2}</h5>
                        <h5 className="text-center price">Rs.{new_price}</h5>
                        <h5 className='cart w-100'><Link className='text-dark text-center w-100' style={{ textDecoration: 'none' }} to={{ pathname: '/cart', state: { product } }}>View Cart</Link></h5>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShopCard;
