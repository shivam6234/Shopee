import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
import { increment } from '../features/counter/counterslice';
import { addItemList } from '../app/wishlist/wislistslice';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cards from './Cards';

const ProductCard = ({ product }) => {
  const [border, setBorder] = useState('image1')
  const [color, setColor] = useState('description')
  const [dataProduct, setDataProducts] = useState({
    men: null,
    women: null,
    kids: null,
    men2: null
  })
  const handleborder = (id) => {
    setBorder(id);
  }
  const dispatch = useDispatch();
  const isSignedUp = !!localStorage.getItem('currentUser');
  const handleColor = (linkedId) => {
    setColor(linkedId)
  }
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://65deedf0ff5e305f32a0e22a.mockapi.io/shivam')
        const men = response.data.filter(products => products.category === 'men')
        const women = response.data.filter(products => products.category === 'women')
        const kids = response.data.filter(products => products.category === 'kids')

        setDataProducts({
          men: men[5] || null,
          women: women[5] || null,
          kids: kids[5] || null,
          men2: men[6] || null
        })

      } catch (error) {
        console.error('Error Fetching Products', error)
      }
    }
    fetchProducts();
  }, [])

  const handleAddProductToCart = () => {
    if (!isSignedUp) {
      window.open('/signup', '_blank');
    } else {
      dispatch(increment());
      dispatch(addItem(product));


    }
  };

  const [add, setAdd] = useState(false)
  const handleAdd = () => {
    dispatch(addItemList(product))
    setAdd(true);
  }
  const { name, name2, image3, image4, old_price, description, image1, image2, category, new_price, discount, shipping } = product;

  return (
    <div>
      <div className="container-fluid">
        <div className="cart-page">
          <div className='d-flex bg-light p-5'>
            <h1 className='text-success mx-auto '>
              Products
            </h1>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row mb-5  ">
            <div className="col-lg-6">
              <div className='d-none d-lg-block'>
                <div className="d-flex align-items-start ">
                  <div className="py-5 w-25 flex-column nav nav-pills my-auto me-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button onClick={() => handleborder('image1')} className="d-flex  nav-link active bg-transparent " style={{ width: '100%', backgroundImage: `url(${image1})`, minHeight: '15vh', backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image1' ? '2px dashed orangeRed' : 'none', }} id="v-pills-description-tab" data-bs-toggle="pill" data-bs-target="#v-pills-description" type="button" role="tab" aria-controls="v-pills-description" aria-selected="true">
                    </button>
                    <button onClick={() => handleborder('image2')} className=" d-flex  nav-link bg-transparent mt-5" style={{ width: '100%', minHeight: '15vh', backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image2' ? '2px dashed orangeRed' : 'none' }} id="v-pills-Shipping-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Shipping" type="button" role="tab" aria-controls="v-pills-Shipping" aria-selected="false">
                    </button>
                    <button onClick={() => handleborder('image3')} className="d-flex  nav-link bg-dark mt-5" style={{ width: '100%', minHeight: '15vh', backgroundImage: `url(${image3})`, backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image3' ? '2px dashed orangeRed' : 'none' }} id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                    </button>
                    <button onClick={() => handleborder('image4')} className="d-flex  nav-link bg-black mt-5" style={{ width: '100%', minHeight: '15vh', backgroundImage: `url(${image4})`, backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image4' ? '2px dashed orangeRed' : 'none' }} id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                    </button>
                  </div>
                  <div className="tab-content w-75" id="v-pills-tabContent ">
                    <div style={{ minHeight: '80vh' }} className="shadow-lg my-5 me-3 tab-pane fade show active w-100 p-5" id="v-pills-description" role="tabpanel" aria-labelledby="v-pills-description-tab" tabindex="0">
                      <div style={{ backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '60vh' }}></div>

                    </div>
                    <div style={{ minHeight: '80vh' }} className="shadow-lg my-5 p-5 me-3 tab-pane fade" id="v-pills-Shipping" role="tabpanel" aria-labelledby="v-pills-Shipping-tab" tabindex="0">
                      <div style={{ backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '60vh' }}></div>

                    </div>
                    <div style={{ minHeight: '80vh' }} className="shadow-lg my-5 p-5 me-3 tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                      <div style={{ backgroundImage: `url(${image3})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '60vh' }}></div>

                    </div>
                    <div style={{ minHeight: '80vh' }} className="shadow-lg my-5 p-5 me-3 tab-pane fade " id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                      <div style={{ backgroundImage: `url(${image4})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '60vh' }}></div>

                    </div>
                  </div>
                </div>
              </div>
              <div className='d-none d-md-block d-lg-none'>
                <div className="d-flex align-items-start ">
                  <div className="py-5 w-25 flex-column nav nav-pills my-auto me-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button onClick={() => handleborder('image1')} className="d-flex  nav-link active bg-transparent " style={{ width: '100%', backgroundImage: `url(${image1})`, minHeight: '15vh', backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image1' ? '2px dashed orangeRed' : 'none', }} id="v-pills-descriptionmd-tab" data-bs-toggle="pill" data-bs-target="#v-pills-descriptionmd" type="button" role="tab" aria-controls="v-pills-descriptionmd" aria-selected="true">
                    </button>
                    <button onClick={() => handleborder('image2')} className=" d-flex  nav-link bg-transparent mt-5" style={{ width: '100%', minHeight: '15vh', backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image2' ? '2px dashed orangeRed' : 'none' }} id="v-pills-Shippingmd-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Shippingmd" type="button" role="tab" aria-controls="v-pills-Shippingmd" aria-selected="false">
                    </button>
                    <button onClick={() => handleborder('image3')} className="d-flex  nav-link bg-dark mt-5" style={{ width: '100%', minHeight: '15vh', backgroundImage: `url(${image3})`, backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image3' ? '2px dashed orangeRed' : 'none' }} id="v-pills-messagesmd-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messagesmd" type="button" role="tab" aria-controls="v-pills-messagesmd" aria-selected="false">
                    </button>
                    <button onClick={() => handleborder('image4')} className="d-flex  nav-link bg-black mt-5" style={{ width: '100%', minHeight: '15vh', backgroundImage: `url(${image4})`, backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image4' ? '2px dashed orangeRed' : 'none' }} id="v-pills-settingsmd-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settingsmd" type="button" role="tab" aria-controls="v-pills-settingsmd" aria-selected="false">
                    </button>
                  </div>
                  <div className="tab-content w-75" id="v-pills-tabContent ">
                    <div style={{ minHeight: '80vh' }} className="shadow-lg my-5 me-3 tab-pane fade show active w-100 p-5" id="v-pills-descriptionmd" role="tabpanel" aria-labelledby="v-pills-descriptionmd-tab" tabindex="0">
                      <div style={{ backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '60vh' }}></div>

                    </div>
                    <div style={{ minHeight: '80vh' }} className="shadow-lg my-5 p-5 me-3 tab-pane fade" id="v-pills-Shippingmd" role="tabpanel" aria-labelledby="v-pills-Shippingmd-tab" tabindex="0">
                      <div style={{ backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '60vh' }}></div>

                    </div>
                    <div style={{ minHeight: '80vh' }} className="shadow-lg my-5 p-5 me-3 tab-pane fade" id="v-pills-messagesmd" role="tabpanel" aria-labelledby="v-pills-messagesmd-tab" tabindex="0">
                      <div style={{ backgroundImage: `url(${image3})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '60vh' }}></div>

                    </div>
                    <div style={{ minHeight: '80vh' }} className="shadow-lg my-5 p-5 me-3 tab-pane fade " id="v-pills-settingsmd" role="tabpanel" aria-labelledby="v-pills-settingsmd-tab" tabindex="0">
                      <div style={{ backgroundImage: `url(${image4})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '60vh' }}></div>

                    </div>
                  </div>
                </div>
              </div>
              <div className='d-block d-md-none d-lg-none'>
                <div className="d-flex flex-column align-items-start ">
                  <div className=" w-100  w-25 d-flex flex-row nav nav-pills mt-4 me-4 justify-content-between" id="v-pills-tab" role="tablist">
                    <button onClick={() => handleborder('image1')} className="d-flex  nav-link active bg-transparent mt-5  " style={{ width: '20%', backgroundImage: `url(${image1})`, minHeight: '15vh', backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image1' ? '2px dashed orangeRed' : 'none', }} id="v-pills-imageist-tab" data-bs-toggle="pill" data-bs-target="#v-pills-imageist" type="button" role="tab" aria-controls="v-pills-imageist" aria-selected="true">
                    </button>
                    <button onClick={() => handleborder('image2')} className=" d-flex  nav-link bg-transparent mt-5" style={{ width: '20%', minHeight: '15vh', backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image2' ? '2px dashed orangeRed' : 'none' }} id="v-pills-image2nd-tab" data-bs-toggle="pill" data-bs-target="#v-pills-image2nd" type="button" role="tab" aria-controls="v-pills-image2nd" aria-selected="false">
                    </button>
                    <button onClick={() => handleborder('image3')} className="d-flex  nav-link bg-dark mt-5" style={{ width: '20%', minHeight: '15vh', backgroundImage: `url(${image3})`, backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image3' ? '2px dashed orangeRed' : 'none' }} id="v-pills-image3rd-tab" data-bs-toggle="pill" data-bs-target="#v-pills-image3rd" type="button" role="tab" aria-controls="v-pills-image3rd" aria-selected="false">
                    </button>
                    <button onClick={() => handleborder('image4')} className="d-flex  nav-link bg-black mt-5" style={{ width: '20%', minHeight: '15vh', backgroundImage: `url(${image4})`, backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image4' ? '2px dashed orangeRed' : 'none' }} id="v-pills-image4th-tab" data-bs-toggle="pill" data-bs-target="#v-pills-image4th" type="button" role="tab" aria-controls="v-pills-image4th" aria-selected="false">
                    </button>
                  </div>
                  <div className="tab-content w-100" id="v-pills-tabContent ">
                    <div style={{ minHeight: '80vh' }} className="shadow-lg my-4  me-3 tab-pane fade show active w-100 p-5" id="v-pills-imageist" role="tabpanel" aria-labelledby="v-pills-imageist-tab" tabindex="0">
                      <div className='' style={{ backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '60vh' }}></div>

                    </div>
                    <div style={{ minHeight: '80vh' }} className="shadow-lg my-4  p-5 me-3 tab-pane fade" id="v-pills-image2nd" role="tabpanel" aria-labelledby="v-pills-image2nd-tab" tabindex="0">
                      <div style={{ backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '60vh' }}></div>

                    </div>
                    <div style={{ minHeight: '80vh' }} className="shadow-lg my-4  p-5 me-3 tab-pane fade" id="v-pills-image3rd" role="tabpanel" aria-labelledby="v-pills-image3rd-tab" tabindex="0">
                      <div style={{ backgroundImage: `url(${image3})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '60vh' }}></div>

                    </div>
                    <div style={{ minHeight: '80vh' }} className="shadow-lg my-4  p-5 me-3 tab-pane fade " id="v-pills-image4th" role="tabpanel" aria-labelledby="v-pills-image4th-tab" tabindex="0">
                      <div style={{ backgroundImage: `url(${image4})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '60vh' }}></div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 my-auto">

              <h1 style={{ color: "orangered" }}>{name2}</h1>
              <h3 className='text-success'>{discount}% Off <span className='text-primary'>
                ₹ {new_price}
              </span>
              </h3>
              <h6 className='text-danger' style={{ textDecoration: 'line-through' }}> M.R.P.  ₹ {old_price}</h6>
              <h5>{name}</h5>

              <hr />


              <h4 style={{ color: 'orange' }}>Colour</h4>
              <div className='d-none d-lg-block'>
                <div className=" d-flex justify-content-between w-100  nav nav-pills me-3" id="v-pills-tab" role="tablist" >
                  <button onClick={() => handleborder('image1')} className="d-flex  nav-link active bg-transparent" style={{ width: '20%', backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image1' ? '2px dashed orangeRed' : 'none' }} id="v-pills-description-tab" data-bs-toggle="pill" data-bs-target="#v-pills-description" type="button" role="tab" aria-controls="v-pills-description" aria-selected="true">
                  </button>
                  <button onClick={() => handleborder('image2')} className=" d-flex  nav-link bg-transparent" style={{ width: '20%', backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image2' ? '2px dashed orangeRed' : 'none' }} id="v-pills-Shipping-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Shipping" type="button" role="tab" aria-controls="v-pills-Shipping" aria-selected="false">
                  </button>
                  <button onClick={() => handleborder('image3')} className="d-flex  nav-link bg-dark" style={{ width: '20%', minHeight: '15vh', backgroundImage: `url(${image3})`, backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image3' ? '2px dashed orangeRed' : 'none' }} id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                  </button>
                  <button onClick={() => handleborder('image4')} className="d-flex  nav-link bg-orangeRed" style={{ width: '20%', backgroundImage: `url(${image4})`, backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image4' ? '2px dashed orangeRed' : 'none' }} id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                  </button>
                </div>
              </div>
              <div className='d-none d-lg-none d-md-block'>
                <div className=" d-flex justify-content-between w-100  nav nav-pills me-3" id="v-pills-tab" role="tablist" >
                  <button onClick={() => handleborder('image1')} className="d-flex  nav-link active bg-transparent" style={{ width: '20%', backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image1' ? '2px dashed orangeRed' : 'none' }} id="v-pills-descriptionmd-tab" data-bs-toggle="pill" data-bs-target="#v-pills-descriptionmd" type="button" role="tab" aria-controls="v-pills-descriptionmd" aria-selected="true">
                  </button>
                  <button onClick={() => handleborder('image2')} className=" d-flex  nav-link bg-transparent" style={{ width: '20%', backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image2' ? '2px dashed orangeRed' : 'none' }} id="v-pills-Shippingmd-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Shippingmd" type="button" role="tab" aria-controls="v-pills-Shippingmd" aria-selected="false">
                  </button>
                  <button onClick={() => handleborder('image3')} className="d-flex  nav-link bg-dark" style={{ width: '20%', minHeight: '15vh', backgroundImage: `url(${image3})`, backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image3' ? '2px dashed orangeRed' : 'none' }} id="v-pills-messagesmd-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messagesmd" type="button" role="tab" aria-controls="v-pills-messagesmd" aria-selected="false">
                  </button>
                  <button onClick={() => handleborder('image4')} className="d-flex  nav-link bg-orangeRed" style={{ width: '20%', backgroundImage: `url(${image4})`, backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image4' ? '2px dashed orangeRed' : 'none' }} id="v-pills-settingsmd-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settingsmd" type="button" role="tab" aria-controls="v-pills-settingsmd" aria-selected="false">
                  </button>
                </div>
              </div>
              <div className='d-block d-md-none d-lg-none '>
                <div className=" d-flex justify-content-between w-100  nav nav-pills me-3" id="v-pills-tab" role="tablist" >
                  <button onClick={() => handleborder('image1')} className="d-flex  nav-link active bg-transparent" style={{ width: '20%', backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image1' ? '2px dashed orangeRed' : 'none' }} id="v-pills-imageist-tab" data-bs-toggle="pill" data-bs-target="#v-pills-imageist" type="button" role="tab" aria-controls="v-pills-imageist" aria-selected="true">
                  </button>
                  <button onClick={() => handleborder('image2')} className=" d-flex  nav-link bg-transparent" style={{ width: '20%', backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image2' ? '2px dashed orangeRed' : 'none' }} id="v-pills-image2nd-tab" data-bs-toggle="pill" data-bs-target="#v-pills-image2nd" type="button" role="tab" aria-controls="v-pills-image2nd" aria-selected="false">
                  </button>
                  <button onClick={() => handleborder('image3')} className="d-flex  nav-link bg-dark" style={{ width: '20%', minHeight: '15vh', backgroundImage: `url(${image3})`, backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image3' ? '2px dashed orangeRed' : 'none' }} id="v-pills-image3rd-tab" data-bs-toggle="pill" data-bs-target="#v-pills-image3rd" type="button" role="tab" aria-controls="v-pills-image3rd" aria-selected="false">
                  </button>
                  <button onClick={() => handleborder('image4')} className="d-flex  nav-link bg-orangeRed" style={{ width: '20%', backgroundImage: `url(${image4})`, backgroundSize: 'cover', backgroundPosition: 'center', border: border === 'image4' ? '2px dashed orangeRed' : 'none' }} id="v-pills-image4th-tab" data-bs-toggle="pill" data-bs-target="#v-pills-image4th" type="button" role="tab" aria-controls="v-pills-image4th" aria-selected="false">
                  </button>
                </div>
              </div>
              <div className='d-flex   my-4' style={{ alignItems: 'center' }}>
                <button className='d-none d-lg-block btn btn-outline-success w-50 ' onClick={handleAddProductToCart} style={{ textDecoration: 'none' }} to='cart'>
                  <h6 className='fs-5'>
                    <i className="fa-solid fa-cart-plus"></i>
                    <span className='ps-1 '>
                      Add To Cart
                    </span>
                  </h6>

                </button>
                <button className='d-none d-lg-none d-md-block btn btn-outline-success w-50 ' onClick={handleAddProductToCart} style={{ textDecoration: 'none' }} to='cart'>
                  <h6 className='fs-5'>
                    <i className="fa-solid fa-cart-plus"></i>
                    <span className='ps-1 '>
                      Add To Cart
                    </span>
                  </h6>

                </button>
                <div className='mx-5 d-flex align-items-center d-none d-lg-block'>
                    {add ? (
                      <Link className='' style={{ textDecoration: 'none', color: 'orange' }} to='/wishlist'>
                        <h6 className=' text-center'>
                          <i className="fa-solid fa-heart"></i>  Go To Wishlist
                        </h6>
                      </Link>
                    ) : (
                      <button className='btn btn-outline-success w-100  ' onClick={handleAdd} style={{ textDecoration: 'none' }} to='cart'>
                        <h6 className='fs-5 '>
                          <i className="fa-solid fa-heart"></i>
                          <span className='ps-1 '>
                            Add To Wishlist
                          </span>
                        </h6>
                      </button>
                    )}
                  </div>
                <div className='w-50 d-flex align-items-center d-none d-lg-none d-md-block'>
                    {add ? (
                      <Link className='' style={{ textDecoration: 'none', color: 'orange' }} to='/wishlist'>
                        <h6 className=' text-center'>
                          <i className="fa-solid fa-heart"></i>  Go To Wishlist
                        </h6>
                      </Link>
                    ) : (
                      <button className='btn btn-outline-success w-100  ' onClick={handleAdd} style={{ textDecoration: 'none' }} to='cart'>
                        <h6 className='fs-5 '>
                          <i className="fa-solid fa-heart"></i>
                          <span className='ps-1 '>
                            Add To Wishlist
                          </span>
                        </h6>
                      </button>
                    )}
                  </div>
                <div className='d-flex flex-column d-block d-md-none d-lg-none w-100' style={{alignItems:'center'}}>
                  <div className='mb-3 ' >
                  <button className=' btn btn-outline-success  ps-3 pe-3 w-100 ' onClick={handleAddProductToCart} style={{ textDecoration: 'none' }} to='cart'>
                    <h6 className='fs-5'>
                      <i className="fa-solid fa-cart-plus"></i>
                      <span className='ps-1 '>
                        Add To Cart
                      </span>
                    </h6>

                  </button>
                  </div>
                  <div className=' d-flex align-items-center'>
                    {add ? (
                      <Link className='' style={{ textDecoration: 'none', color: 'orange' }} to='/wishlist'>
                        <h6 className=' text-center'>
                          <i className="fa-solid fa-heart"></i>  Go To Wishlist
                        </h6>
                      </Link>
                    ) : (
                      <button className='btn btn-outline-success w-100' onClick={handleAdd} style={{ textDecoration: 'none' }} to='cart'>
                        <h6 className='fs-5 '>
                          <i className="fa-solid fa-heart"></i>
                          <span className='ps-1 '>
                            Add To Wishlist
                          </span>
                        </h6>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <hr />
              <h6 className='text-secondary d-none d-lg-block'> Category:{category}</h6>
              <div className='d-none d-lg-block'>
                <button className='btn btn-outline-danger rounded-circle mx-auto px-auto' style={{ border: 'none' }} ><i className="fa-brands fa-instagram" ></i></button>
                <button className='btn btn-outline-primary rounded-circle mx-auto px-auto' style={{ border: 'none' }} ><i className="fa-brands fa-facebook-f" ></i></button>
                <button className='btn btn-outline-danger rounded-circle mx-auto px-auto' style={{ border: 'none' }} ><i className="fa-brands fa-pinterest" ></i></button>
                <button className='btn btn-outline-primary rounded-circle mx-auto px-auto' style={{ border: 'none' }} ><i className="fa-brands fa-twitter" ></i></button>
              </div>
              <h6 className='text-secondary d-none d-lg-none d-md-block fs-1 text-center'> Category:{category}</h6>
              <div className='w-100 d-none d-lg-none d-md-block '>
                <div className='w-100 d-flex justify-content-center'>
                <button className='btn btn-outline-danger rounded-circle ' style={{ border: 'none' }} ><i className="fs-2 fa-brands fa-instagram" ></i></button>
                <button className='btn btn-outline-primary rounded-circle ' style={{ border: 'none' }} ><i className="fs-2 fa-brands fa-facebook-f" ></i></button>
                <button className='btn btn-outline-danger rounded-circle ' style={{ border: 'none' }} ><i className="fs-2 fa-brands fa-pinterest" ></i></button>
                <button className='btn btn-outline-primary rounded-circle ' style={{ border: 'none' }} ><i className="fs-2 fa-brands fa-twitter" ></i></button>
                </div>
              </div>
              <h6 className='text-secondary d-block d-md-none d-lg-none d-md-none text-center'> Category:{category}</h6>
              <div className='d-block d-lg-none d-md-none text-center'>
                <button className='btn btn-outline-danger rounded-circle mx-auto px-auto' style={{ border: 'none' }} ><i className="fa-brands fa-instagram" ></i></button>
                <button className='btn btn-outline-primary rounded-circle mx-auto px-auto' style={{ border: 'none' }} ><i className="fa-brands fa-facebook-f" ></i></button>
                <button className='btn btn-outline-danger rounded-circle mx-auto px-auto' style={{ border: 'none' }} ><i className="fa-brands fa-pinterest" ></i></button>
                <button className='btn btn-outline-primary rounded-circle mx-auto px-auto' style={{ border: 'none' }} ><i className="fa-brands fa-twitter" ></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className=' d-none d-lg-block'>
            <ul className=" nav nav-pills mb-3 d-flex justify-content-center fw-bold" id="pills-tab" role="tablist">
              <li className="nav-item active" role="presentation">
                <button className="nav-link active" onClick={() => handleColor('description')} style={{ backgroundColor: color === 'description' ? 'orangeRed' : 'white', color: color === 'description' ? 'white' : 'black' }} id="pills-Description-tab" data-bs-toggle="pill" data-bs-target="#pills-Description" type="button" role="tab" aria-controls="pills-Description" aria-selected="true" >Description</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" onClick={() => handleColor('shipping')} style={{ backgroundColor: color === 'shipping' ? 'orangered' : 'white', color: color === 'shipping' ? 'white' : 'black' }} id="pills-Shipping-tab" data-bs-toggle="pill" data-bs-target="#pills-Shipping" type="button" role="tab" aria-controls="pills-Shipping" aria-selected="false">Shipping</button>
              </li>

            </ul>
            </div>
            <div className=' d-none d-lg-none d-md-block'>
            <ul className=" nav nav-pills mb-3 d-flex justify-content-center fw-bold" id="pills-tab" role="tablist">
              <li className="nav-item active" role="presentation">
                <button className="nav-link active" onClick={() => handleColor('description')} style={{ backgroundColor: color === 'description' ? 'orangeRed' : 'white', color: color === 'description' ? 'white' : 'black' }} id="pills-Description3-tab" data-bs-toggle="pill" data-bs-target="#pills-Description3" type="button" role="tab" aria-controls="pills-Description3" aria-selected="true" >Description</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" onClick={() => handleColor('shipping')} style={{ backgroundColor: color === 'shipping' ? 'orangered' : 'white', color: color === 'shipping' ? 'white' : 'black' }} id="pills-Shipping3-tab" data-bs-toggle="pill" data-bs-target="#pills-Shipping3" type="button" role="tab" aria-controls="pills-Shipping3" aria-selected="false">Shipping</button>
              </li>

            </ul>
            </div>
            <div className='d-block d-lg-none d-md-none'>
            <ul className="nav nav-pills mb-3 d-flex justify-content-center fw-bold" id="pills-tab" role="tablist">
              <li className="nav-item active" role="presentation">
                <button className="nav-link active" onClick={() => handleColor('description')} style={{ backgroundColor: color === 'description' ? 'orangeRed' : 'white', color: color === 'description' ? 'white' : 'black' }} id="pills-DescriptionSM-tab" data-bs-toggle="pill" data-bs-target="#pills-DescriptionSM" type="button" role="tab" aria-controls="pills-DescriptionSM" aria-selected="true" >Description</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" onClick={() => handleColor('shipping')} style={{ backgroundColor: color === 'shipping' ? 'orangered' : 'white', color: color === 'shipping' ? 'white' : 'black' }} id="pills-ShippingSM-tab" data-bs-toggle="pill" data-bs-target="#pills-ShippingSM" type="button" role="tab" aria-controls="pills-ShippingSM" aria-selected="false">Shipping</button>
              </li>

            </ul>
            </div>
            <div className="tab-content shadow-lg  pt-3 mb-5 d-block d-md-none d-lg-none" style={{ height: '50vh' }} id="pills-tabContent">
              <div className="tab-pane fade show active " id="pills-DescriptionSM" role="tabpanel" aria-labelledby="pills-DescriptionSM-tab" tabindex="0">{description}</div>
              <div className="tab-pane fade" id="pills-ShippingSM" role="tabpanel" aria-labelledby="pills-ShippingSM-tab" tabindex="0">{shipping}</div>
            </div>
            <div className=" tab-content shadow-lg  pt-3 mb-5 d-none d-lg-block" style={{ height: '20vh' }} id="pills-tabContent">
              <div className="tab-pane fade show active " id="pills-Description" role="tabpanel" aria-labelledby="pills-Description-tab" tabindex="0">{description}</div>
              <div className="tab-pane fade" id="pills-Shipping" role="tabpanel" aria-labelledby="pills-Shipping-tab" tabindex="0">{shipping}</div>
            </div>
            <div className=" tab-content shadow-lg  pt-3 mb-5 d-none d-lg-none d-md-block" style={{ height: '20vh' }} id="pills-tabContent">
              <div className="tab-pane fade show active " id="pills-Description3" role="tabpanel" aria-labelledby="pills-Description3-tab" tabindex="0">{description}</div>
              <div className="tab-pane fade" id="pills-Shipping3" role="tabpanel" aria-labelledby="pills-Shipping3-tab" tabindex="0">{shipping}</div>
            </div>
          </div>

        </div>
      </div>
      <div className="container-fluid mb-5">
        <div className="container">
          <h1 className='text-center text-decoration-underline' style={{ color: 'orange' }}>You <span className='text-success pe-2 text-decoration-underline'>
            May
          </span>
            Also
            <span className='text-success pe-2 text-decoration-underline'>
              Like
            </span>
          </h1>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 ">


            {dataProduct.men && (
              <div className="col text-center p-4">
                <Cards product={dataProduct.men} />
              </div>
            )}
            {dataProduct.men2 && (
              <div className="col text-center p-4">
                <Cards product={dataProduct.men2} />
              </div>
            )}
            {dataProduct.women && (
              <div className="col text-center p-4">
                <Cards product={dataProduct.women} />
              </div>
            )}
            {dataProduct.kids && (
              <div className="col text-center p-4">
                <Cards product={dataProduct.kids} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div >
  );
};


export default ProductCard;
