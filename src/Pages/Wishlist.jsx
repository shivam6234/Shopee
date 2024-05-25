import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, clearCart, popItem, loadCart } from '../components/features/cart/cartSlice';
import { Link } from 'react-router-dom';
import { addItemList, removeItemList, clearList, loadList } from '../components/app/wishlist/wislistslice';

const Wishlist = () => {
  const wishListItems = useSelector(state => state.wishlist.wishListItems);
  const dispatch = useDispatch();
  const isSignedUp = !!localStorage.getItem('users');
  const [color, setColor] = useState(null)
  const handleClick = (linkedId) => {
    setColor(linkedId)
  }
  const nullColor = () => {
    setColor(null);
  }
 
  const handleAddToList = item => {
    dispatch(addItemList(item));
  };

  const handleRemoveFromList = item => {
    dispatch(removeItemList(item));
  };

  const handleClearCart = () => {
    dispatch(clearList());
  };
  const handleAddProductToCart = (product) => {
    if (!isSignedUp) {
      window.open('/signup', '_blank');
    } else {
      dispatch(addItem(product));
    }
  };

  return (
    <div className="cart-page">
       <div className='d-flex bg-light p-5'>
            <h1 className='text-success mx-auto '>Your 
            <span className='px-3' style={{color:'orange'}}>
              Wishlist 
              </span>
            Store</h1>
          </div>
      {wishListItems.length === 0 ? (
        <>
         
          <div className='w-100 d-flex justify-content-center flex-column ' style={{ height: '80vh', backgroundColor: 'white' }}>
            <div className='d-flex'>
              <img className=' img-fluid mx-auto ' style={{ width: '10%' }} src={'https://cdn.pixabay.com/photo/2012/04/01/18/44/heart-23960_960_720.png'} alt="" />
            </div>
            <div className='d-flex'>
              <h5 className='mx-auto my-4'>No products added to wishlist</h5>
            </div>
            <div className='d-flex justify-content-center ' >
              <button className='px-5 py-2' style={{ borderRadius: '15px', border: 'none', backgroundColor: color === 'shop' ? 'orangered' : 'lightgrey' }} onMouseEnter={() => handleClick('shop')} onMouseLeave={nullColor}  >
                <Link className='text-decoration-none fs-5 fw-bolder  ' style={{ color: color === 'shop' ? 'white' : 'orangered' }} to={'/shop'}>
                  Go To Shop
                </Link>
              </button>
            </div>
        </div>
          </>
      ) : (
      <div className="container-fluid my-5" style={{minHeight:'80vh'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {wishListItems.map(item => (
                <>
                <div className="cart-item " key={item.id}>
                  <table className="table table-cart table-mobile d-none d-lg-block">
                    <thead>
                      <tr>
                        <th className='ps-5'>Product</th>
                        <th>Price</th>
                        <th></th>
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
                        <td className="cart-col w-100 ">
                          <div className='w-100 d-flex justify-content-center my-4 pt-3' style={{ alignItems: 'center' }}>
                            <button className='px-5 py-2 ' style={{ borderRadius: '15px', border: 'none', backgroundColor: color === 'shop' ? 'orangered' : 'lightgrey' }} onMouseEnter={() => handleClick('shop')} onMouseLeave={nullColor} onClick={() => handleAddProductToCart(item)}  to='cart'>
                              <h6 className='fs-5' style={{ color: color === 'shop' ? 'white' : 'orangered' }} to={'/shop'}>
                                <i className="fa-solid fa-cart-plus"></i>
                                <span className='ps-1 '>
                                  Add to cart
                                </span>
                              </h6>

                            </button>
                          </div>
                        </td>

                        <td className="remove-col">
                          <button className='btn btn-outline-light text-danger my-4 py-4 fs-5 fw-bold' style={{ border: 'none' }} onClick={() => handleRemoveFromList(item)}>X</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className=" col Items  w-100 shadow d-none d-md-block  d-lg-none mb-5" style={{ height: '' }}>
                        <div className='d-flex justify-content-end'>
                          <button className='btn btn-outline-danger' onClick={() => handleRemoveFromList(item)}>X</button>
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
                           
                            <h6 className='mt-3 shadow-lg text-center text-warning py-2 fs-2'>Rs. {item.new_price}</h6>
                            <div className='w-100 d-flex justify-content-center my-4 pt-3' style={{ alignItems: 'center' }}>
                            <button className='px-5 py-2 ' style={{ borderRadius: '15px', border: 'none', backgroundColor: color === 'shop' ? 'orangered' : 'green' }} onMouseEnter={() => handleClick('shop')} onMouseLeave={nullColor} onClick={() => handleAddProductToCart(item)}  to='cart'>
                              <h6 className='fs-5' style={{ color: color === 'shop' ? 'white' : 'white' }} to={'/shop'}>
                                <i className="fa-solid fa-cart-plus"></i>
                                <span className='ps-1 '>
                                  Add to cart
                                </span>
                              </h6>

                            </button>
                          </div>
                          </div>
                        </div>
                      </div>
                  <div className=" col Items  w-100 shadow d-block d-md-none  d-lg-none mb-5" style={{ height: '' }}>
                        <div className='d-flex justify-content-end'>
                          <button className='btn btn-outline-danger' onClick={() => handleRemoveFromList(item)}>X</button>
                        </div>
                        <div className='d-flex flex-column ' style={{alignItems:'center'}}>
                          <div className='w-75 '>
                            <Link to={'/product'}>
                            <img src={item.image1} alt="" className='w-100 img-fluid  shadow-lg  mt-5 ' />
                            </Link>
                          </div>
                          <div className='d-flex w-75 flex-column  me-3 ' style={{ justifyContent: 'center' }}>
                            <h6 className='mt-3 w-100 shadow-lg  text-center text-warning py-2 fs-2'>{item.name2}</h6>
                            <h6 className='mt-3 shadow-lg text-center text-warning py-2 fs-2'>{item.category}</h6>
                           
                            <h6 className='mt-3 shadow-lg text-center text-warning py-2 fs-2'>Rs. {item.new_price}</h6>
                            <div className='w-100 d-flex justify-content-center my-4 pt-3' style={{ alignItems: 'center' }}>
                            <button className=' px-2 py-3 w-100' style={{ borderRadius: '15px', border: 'none', backgroundColor: color === 'shop' ? 'orangered' : 'green' }} onMouseEnter={() => handleClick('shop')} onMouseLeave={nullColor} onClick={() => handleAddProductToCart(item)}  to='cart'>
                              <h6 className='fs-6' style={{ color: color === 'shop' ? 'white' : 'white' }} to={'/shop'}>
                                <i className="fa-solid fa-cart-plus"></i>
                                <span className=' '>
                                  Add to cart
                                </span>
                              </h6>

                            </button>
                          </div>
                          </div>
                        </div>
                      </div>
                </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Wishlist;
