import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import brandImg from '../components/Assets/SHOPEE.png'

const Footer = () => {
    const [clickedLink, setClickedLink] = useState('home')
    const handleLinkClick = (linkId) => {
        setClickedLink(linkId);
    }
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/home') {
            setClickedLink('home');
        }
        else if (location.pathname === '/shop') {
            setClickedLink('shop')
        }
        else if (location.pathname === '/men') {
            setClickedLink('men')
        }
        else if (location.pathname === '/women') {
            setClickedLink('women')
        }
        else if (location.pathname === '/kids') {
            setClickedLink('kids')
        }
        else if (location.pathname === '/login') {
            setClickedLink('login')
        }
        else if (location.pathname === '/cart') {
            setClickedLink('cart')
        }
        else if (location.pathname === '/wishlist') {
            setClickedLink('wishlist')
        }
        else if (location.pathname === '/account') {
            setClickedLink('account')
        }
        else {
            setClickedLink('')
        }
    }, [location]);
    const [color, setcolor] = useState(null)
    const [colorClick, setColorClick] = useState(null)
    const handleColor = (linkedId) => {
        setcolor(linkedId)
    }
    const handleClick = (Linkedid) => {
        setColorClick(Linkedid)
    }
    const nullColor = (linkedId) => {
        setcolor(linkedId)
    }


    return (
        <div>
            <div className="container-fluid  text-white  py-5" style={{backgroundColor:'#232F3E'}}>

                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5  px-4 d-flex justify-content-between">
                    <div className="col fs-4 ">
                        <h5 className='pb-3 fs-2 text-warning'>About Shopee</h5>
                        <p className='text-align-start' style={{ textAlign: 'start' }}>Shopee is an innovative e-commerce platform built with the latest technologies, including React.js, to provide users with a seamless and enjoyable shopping experience.
                            <div className='d-flex w-100 justify-content-start pt-3 '>
                                <button className='btn btn-outline-danger rounded-circle ' style={{ border: 'none' }} ><i className="fa-brands fa-instagram  fs-4" ></i></button>
                                <button className='btn btn-outline-primary rounded-circle ' style={{ border: 'none' }} ><i className="fa-brands fa-facebook-f fs-4" ></i></button>
                                <button className='btn btn-outline-danger rounded-circle ' style={{ border: 'none' }} ><i className="fa-brands fa-pinterest fs-4" ></i></button>
                                <button className='btn btn-outline-primary rounded-circle ' style={{ border: 'none' }} ><i className="fa-brands fa-twitter fs-4" ></i></button>
                            </div>
                        </p>
                    </div>
                    <div className="  col ">
                        <h5 className='pb-3 fs-2 text-warning' >Useful Links</h5>
                        <div className='fs-4'>

                            <Link className="nav-link active" style={{
                                color: clickedLink === 'home' ? 'orangeRed' : 'green',
                                textDecoration: 'none'
                            }} aria-current="page" to="/home"
                                onClick={() => handleLinkClick('home')}>Home </Link>
                            
                           
                       
                                <Link className="nav-link " style={{ color: clickedLink === 'shop' ? 'orangeRed' : 'white', textDecoration: 'none' }} to="/shop"
                                    onClick={() => handleLinkClick('shop')}>Shop</Link>
                          
                         
                                <Link style={{ color: (clickedLink === 'men') ? 'orangeRed' : 'white', textDecoration: 'none' }} className="nav-link " to="/men"
                                    onClick={() => handleLinkClick('men')}>Men                  </Link>
                        
                                <Link style={{ color: (clickedLink === 'women') ? 'orangeRed' : 'white', textDecoration: 'none' }} className="nav-link " to="/women"
                                    onClick={() => handleLinkClick('women')}>Women</Link>
                           
                                <Link style={{ color: (clickedLink === 'kids') ? 'orangeRed' : 'white', textDecoration: 'none' }} className="nav-link " to="/kids"
                                    onClick={() => handleLinkClick('kids')}>Kids
                                </Link>
                           
                        </div>
                    </div>
                 
                    <div className="col fs-4">
                        <h5 className='pt-3 pb-3 fs-2 text-warning'>My Account</h5>
                       
                        <Link className="nav-link" style={{
                                color: clickedLink === 'login' ? 'orangeRed' : 'white',
                                textDecoration: 'none'
                            }} aria-current="page" to="/login"
                                onClick={() => handleLinkClick('login')}>Sign In </Link>
                        <Link className="nav-link" style={{
                                color: clickedLink === 'cart' ? 'orangeRed' : 'white',
                                textDecoration: 'none'
                            }} aria-current="page" to="/cart"
                                onClick={() => handleLinkClick('cart')}>My Cart </Link>
                        <Link className="nav-link" style={{
                                color: clickedLink === 'wishlist' ? 'orangeRed' : 'white',
                                textDecoration: 'none'
                            }} aria-current="page" to="/wishlist"
                                onClick={() => handleLinkClick('wishlist')}>WishList </Link>
                        <Link className="nav-link" style={{
                                color: clickedLink === 'account' ? 'orangeRed' : 'white',
                                textDecoration: 'none'
                            }} aria-current="page" to="/account"
                                onClick={() => handleLinkClick('account')}>My Account</Link>
                      
                    </div>
                </div>
                <hr />
                <div className="row-cols-1 pt-5">
                    <div className="col d-flex justify-content-center"><img src={'https://d-themes.com/react/molla/demo-6/images/payments.png'} alt="" /></div>
                    <div className="col d-flex justify-content-center  w-100 d-md-block d-lg-none d-none">
                        <div className='w-100 d-flex justify-content-center '>
                            <img src={brandImg} className='img-fluid  ' style={{ width: '30%' }} alt="" /></div>
                            </div>
                    <div className="col d-flex justify-content-center  w-100 d-md-none d-lg-block d-none">
                        <div className='w-100 d-flex justify-content-center '>
                            <img src={brandImg} className='img-fluid  ' style={{ width: '15%' }} alt="" /></div>
                            </div>
                    <div className="col d-flex justify-content-center w-100 d-md-none d-block"><img src={brandImg} className='img-fluid ' style={{ width: '50%' }} alt="" /></div>
                    <div className="col d-flex justify-content-center text-secondary text-center d-none d-md-block">Copyright © 2024 Shopee Store.  All Rights Reserved</div>
                    <div className="col d-flex justify-content-center text-secondary text-center d-block d-md-none">Copyright © 2024 Shopee Store. <br /> All Rights Reserved</div>
                </div>
            </div>

        </div>


    )
}

export default Footer
