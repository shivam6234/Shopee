import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { increment } from '../features/counter/counterslice';
import { addItem } from '../features/cart/cartSlice';
import { setSelectedProduct } from '../features/product/productSlice'; 


const Cards = ({ product }) => {
    const[color,setcolor]=useState(null);
    
    const [showFirstCard, setShowFirstCard] = useState(true);
    const dispatch = useDispatch();
    const loggedin = !!localStorage.getItem('currentUser');

    const toggleCard = () => {
        setShowFirstCard(!showFirstCard);
    };

const handleaddProduct=()=>{
    dispatch(setSelectedProduct(product));
}
    const handleaddItem = () => {
        if (!loggedin) {
            window.open('/login', '_blank');
        } else {
            dispatch(increment());
            dispatch(addItem(product));
           
        }
    };
    const handleColor=(linkedId)=>{
        setcolor(linkedId);
    }
    const nullColor=()=>{
        setcolor('white');
    }

    const { name2, image1, image2, category, new_price } = product;

    return (
        <div>
            {showFirstCard ? (
                <>
                    <div className="card mx-auto d-lg-block  " style={{ width: "18rem", border: 'none' }} onMouseEnter={toggleCard}>
                        <div className='w-100 ' style={{ height: '40vh', backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        </div>
                        <div className="card-body bg-light   " style={{ backgroundColor: 'grey' }}>
                            <h5 className="name shadow">{name2}</h5>
                            <h5 className="category shadow">{category}</h5>
                            <h5 className="prize shadow">Rs. {new_price}</h5>
                            <h5 className='cart w-100  shadow'><Link className=' shadow  text-dark text-center w-100' style={{ textDecoration: 'none' }} to={{ pathname: '/cart', state: { product } }}>View Cart</Link>
                            </h5>
                        </div>
                    </div>
                    {/* Additional card layouts */}
                </>
            ) : (
                <div className="card shadow-lg mx-auto" style={{ width: '18rem', border: 'none' }} onMouseLeave={toggleCard}>
                    <Link to='/product' onClick={handleaddProduct}>

                        <div className='w-100 d-flex ' style={{ height: '40vh', alignItems: 'end', backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                            <Link className='w-100' to={'/cart'}>
                            
                            <div className='w-100 'onMouseLeave={nullColor} onMouseEnter={()=>handleColor('cart')} style={{borderBottom:'2px solid grey',backgroundColor:color==='cart'?'orangered':'white' }}>
                                <button  className='btn  w-100 '  onClick={handleaddItem}  style={{ textDecoration: 'none', border: 'none',color:color==='cart'?'white':'orangered'}} to='cart'>
                                    <h6 className='fs-5'>
                                        <i class="fa-solid fa-cart-plus"></i>
                                        <span className='ps-1 '>
                                            Add to cart
                                        </span>
                                    </h6>

                                </button>
                            </div>
                            
                            </Link>
                            
                        <hr />
                        </div>
                    </Link>
                    
                    <div className="card-body bg-light " style={{ backgroundColor: 'grey' }}>
                        <h5 className="category shadow">{category}</h5>
                        <h5 className="name shadow">{name2}</h5>
                        <h5 className="price shadow">Rs.{new_price}</h5>
                        <h5 className='cart w-100  shadow'><Link className=' shadow  text-dark text-center w-100' style={{ textDecoration: 'none' }} to={{ pathname: '/cart', state: { product } }}>View Cart</Link></h5>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cards;
