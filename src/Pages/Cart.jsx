// CartPage.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, clearCart, popItem, loadCart } from '../components/features/cart/cartSlice';
import { Link } from 'react-router-dom';
import PopUpMessage from './PopUpMessage';
import './Cart.css'

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [color, setColor] = useState(null)
  const [showPopup, setShowPopup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleClick = (linkedId) => {
    setColor(linkedId)
  }
  const handleonClick = (linkedId) => {
    setColor(linkedId)
  }
  const nullColor = () => {
    setColor(null)
  }

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      dispatch(loadCart(savedCartItems));
    }
  }, [dispatch]);
  const imageUrl = 'https://image.slidesdocs.com/responsive-images/background/3d-rendered-cut-pineapple-character-in-quirky-fashion-holding-shopping-cart-on-a-lively-yellow-backdrop-powerpoint-background_39618599c6__960_540.jpg'

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = item => {
    dispatch(addItem(item));

  };

  const handleRemoveFromCart = item => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    setShowPopup(true);

  };

  const handlePopItem = item => {
    dispatch(popItem(item));
  };

  const total = cartItems.reduce((total, item) => total + (item.new_price * item.quantity), 0);
  const standard = total + 150;
  const express = total + 300;
  return (
    <div className="cart-page">
      <div className='d-flex bg-light p-5'>
        <h1 className='text-success mx-auto '>Your
          <span className='px-3' style={{ color: 'orange' }}>
            Cart
          </span>
          Store</h1>
      </div>
      {cartItems.length === 0 ? (
        <div className='w-100 bg-success' style={{ background: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
          <div className='d-flex  h-100 ms-5 flex-column' style={{ justifyContent: 'center' }}>
            <h1>
              No Product
              Added To Cart

            </h1>
            <div className='d-flex justify-content-center' style={{ width: '25%' }}>
              <button className='p-2   ' onMouseEnter={() => handleClick('cart')} style={{ borderBottom: color === 'cart' ? '2px solid blue' : 'none', border: 'none', borderRadius: '10%', backgroundColor: color === 'cart' ? 'orangered' : 'white', }} onMouseLeave={nullColor}  >
                <Link style={{ color: color === 'cart' ? 'white' : 'orangeRed' }} className='text-decoration-none fw-bolder ' to={'/shop'}>
                  Return To Shop
                </Link>
              </button>
            </div>

          </div>
        </div>
      ) : (
        <div className="container-fluid mt-5 " style={{ minHeight: '80vh' }}>
          <div className="container pt-5">
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 pt-5">
              <div className="col-lg-9">
                {cartItems.map(item => (
                  <div className="cart-item" key={item.id}>
                    <table className="table table-cart table-mobile d-lg-block d-none">
                      <thead>
                        <tr>
                          <th className='ps-5'>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="product-col" style={{ width: '40%' }}>
                            <div className="product d-flex mt-3">
                              <figure className="product-media w-25">
                                <Link className="product-image" to={'/product'}>
                                  <img src={item.image2} className='image-fluid w-75' alt="product" />
                                </Link>
                              </figure>
                              <div className='my-4'>
                                <h4 className="product-title">
                                  <Link className='text-dark text-decoration-none' to={'/product'}>
                                    {item.name2}
                                  </Link>
                                </h4>
                              </div>
                            </div>
                          </td>
                          <td className="price-col">
                            <div className="d-flex my-5" style={{ alignContent: 'center' }}>
                              <h5>Rs.{item.new_price}</h5>
                            </div>
                          </td>
                          <td className="quantity-col">
                            <div className="product-details-quantity cart-product-quantity">
                              <div className="input-group input-spinner">
                                <div className="input-group-prepend my-5 " style={{ border: '2px solid black' }}>
                                  <button className='btn btn-outline-light text-success px-2 fw-bold' onClick={() => handleAddToCart(item)}>+</button>
                                  <span className='fs-5 fw-bold pt-2 px-3'>
                                    {item.quantity}
                                  </span>
                                  <button className='btn btn-outline-light text-success px-2 fw-bold' onClick={() => handlePopItem(item)}>-</button>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="total-col mt-4">
                            <div className="d-flex my-5">
                              <h5>Rs.{item.new_price * item.quantity}</h5>
                            </div>
                          </td>
                          <td className="remove-col">
                            <button className='btn btn-outline-light text-danger my-4 py-4 fs-5 fw-bold' style={{ border: 'none' }} onClick={() => handleRemoveFromCart(item)}>X</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <>
                      <div className=" col Items  w-100 shadow  d-lg-none mb-5" style={{ height: '' }}>
                        <div className='d-flex justify-content-end'>
                          <button className='btn btn-outline-danger' onClick={() => handleRemoveFromCart(item)}>X</button>
                        </div>
                        <div className='d-flex'>
                          <div className='w-50 '>
                            <Link to={'/product'}>
                            <img src={item.image1} alt="" className='w-100 img-fluid  shadow-lg  my-5 mx-4' />
                            </Link>
                          </div>
                          <div className='d-flex w-50 flex-column ms-5 me-3 my-5' style={{ justifyContent: 'center' }}>
                            <h6 className='mt-3 w-100 shadow-lg  text-center text-warning py-2 fs-2'>{item.name2}</h6>
                            <h6 className='mt-3 shadow-lg text-center text-warning py-2 fs-2'>{item.category}</h6>
                            <div className='mt-3 d-flex justify-content-between w-50 shadow-lg  mx-auto' style={{ border: '2px solid orange' }}>
                            <button className='btn btn-outline-light text-success  fs-1 fw-bold' onClick={() => handleAddToCart(item)}>+</button>
                                  <h2 className=' fs-1 fw-bold pt-2 text-warning'>
                                    {item.quantity}
                                  </h2>
                                  <button className='btn btn-outline-light text-danger fs-1 fw-bold' onClick={() => handlePopItem(item)}>-</button>                            </div>
                            <h6 className='mt-3 shadow-lg text-center text-warning py-2 fs-2'>Rs. {item.new_price}</h6>

                          </div>
                        </div>
                      </div>
                    </>
                  </div>
                ))}
              </div>
              <div className="col-lg-3  mb-5" style={{ backgroundColor: 'lightgray', border: '2px solid grey', borderRadius: '14px' }}>
                <h6 className='pt-3 fs-5 text-secondary'>Cart Total</h6>
                <hr />
                <div className='d-flex justify-content-between'>
                  <h5 className='fs-5'>SubTotal:
                  </h5>
                  <h5 className='fs-5'>
                    Rs.{cartItems.reduce((total, item) => total + (item.new_price * item.quantity), 0)}

                  </h5>

                </div>
                <hr />

                <h5 className='fs-5'>Shipping:</h5>
                <div>
                  <ul className="nav nav-tab mb-3 d-flex flex-column" id="tab-tab " role="tablist">
                    <li className="nav-item active" role="presentation">
                      <button className="nav-link active w-100 d-flex justify-content-between" id="tab-FreeShipping-tab" data-bs-toggle="pill" data-bs-target="#tab-FreeShipping" type="button" role="tab" aria-controls="tab-FreeShipping" aria-selected="true" onMouseLeave={nullColor} onMouseEnter={() => handleClick('Free')} style={{ backgroundColor: color === 'Free' ? 'orangeRed' : color === 'freship' ? 'green' : 'lightgrey', color: color === 'Free' ? 'white' : color === 'freship' ? 'white' : 'orangeRed', border: 'none', borderRadius: '15px' }} onClick={() => handleonClick('freship')}>
                        <h5> Free Shipping</h5>
                        <h5> ₹ 0</h5>
                      </button>
                    </li>
                    <li className="nav-item " role="presentation">
                      <button className="nav-link w-100 d-flex justify-content-between" id="tab-Standard-tab" data-bs-toggle="pill" data-bs-target="#tab-Standard" type="button" role="tab" aria-controls="tab-Standard" aria-selected="false" onMouseLeave={nullColor} onMouseEnter={() => handleClick('standard')} style={{ backgroundColor: color === 'standard' ? 'orangeRed' : color === 'standardship' ? 'green' : 'lightgrey', color: color === 'standard' ? 'white' : color === 'standardship' ? 'white' : 'orangeRed', border: 'none', borderRadius: '15px' }} onClick={() => handleonClick('standardship')}>
                        <h5>Standard</h5>
                        <h5> ₹ 150</h5>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link w-100 d-flex justify-content-between" id="tab-Express-tab" data-bs-toggle="pill" data-bs-target="#tab-Express" type="button" role="tab" aria-controls="tab-Express" aria-selected="false" onMouseLeave={nullColor} onMouseEnter={() => handleClick('express')} style={{ backgroundColor: color === 'express' ? 'orangeRed' : color === 'expressship' ? 'green' : 'lightgrey', color: color === 'express' ? 'white' : color === 'expressship' ? 'white' : 'orangeRed', border: 'none', borderRadius: '15px' }} onClick={() => handleonClick('expressship')}>
                        <h5>Express</h5>
                        <h5> ₹ 300</h5>
                      </button>
                    </li>

                  </ul>
                  <div className="tab-content " id="tab-tabContent">
                    <div className="tab-pane fade show active pt-4 px-4" id="tab-FreeShipping" role="tabpanel" aria-labelledby="tab-FreeShipping-tab" tabindex="0">
                      <div className='d-flex justify-content-between'>
                        <h5>Total:</h5>
                        <h5>₹ {total} </h5>
                      </div>
                    </div>
                    <div className="tab-pane fade  pt-4 px-4" id="tab-Standard" role="tabpanel" aria-labelledby="tab-Standard-tab" tabindex="0">
                      <div className='d-flex justify-content-between'>
                        <h5>Total:</h5>
                        <h5>₹ {standard} </h5>
                      </div>
                    </div>
                    <div className="tab-pane fade pt-4 px-4" id="tab-Express" role="tabpanel" aria-labelledby="tab-Express-tab" tabindex="0">
                      <div className='d-flex justify-content-between'>
                        <h5>Total:</h5>
                        <h5>₹ {express} </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className='d-flex justify-content-center'>
                  <button className='btn btn-outline-danger px-4 mb-3 fs-5' onClick={handleClearCart}>Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showPopup && (
        <PopUpMessage
          message="Order placed successfully!"
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Cart;
