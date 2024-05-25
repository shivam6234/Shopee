import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import cartlogo from '../Assets/cart.png'
import brandname from '../Assets/SHOPEE.png'
import searchlogo from '../Assets/search-icon-hi.png'
import { useSelector } from 'react-redux';

const Navbar2 = () => {



  const [clickedLink, setClickedLink] = useState('home')
  const handleLinkClick = (linkId) => {
    setClickedLink(linkId);
  }
  const location=useLocation();
  useEffect(() => {
    if (location.pathname === '/home') {
      setClickedLink('home');
    }
    else if(location.pathname==='/shop'){
      setClickedLink('shop')
    }
    else if(location.pathname==='/men'){
      setClickedLink('men')
    }
    else if(location.pathname==='/women'){
      setClickedLink('women')
    }
    else if(location.pathname==='/kids'){
      setClickedLink('kids')
    }
    else{
      setClickedLink('')
    }
  }, [location]); 
  const count = useSelector(state => state.cart.totalItems);
  return (
    <>
      <nav class="navbar navbar-dark navbar-expand-lg  " style={{backgroundColor:'#232F3E'}}>
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">Offcanvas dark navbar</a> */}
          <img src={brandname} className='img-fluid d-none d-lg-block ' style={{ width: '15%' }} alt="Brand Picture" />
          <button class="navbar-toggler float-start" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-2" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel d-flex flex-end" >
            <div className='d-flex justify-content-end'>
              <button type="button" class="btn-close btn-close-white d-lg-none d-md-block " data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-header ">
              <img src={brandname} alt="BrandLogo" className='ms-5' style={{ width: '75%' }} />
            </div>
            <div class="offcanvas-body">
              <ul className="navbar-nav justify-content-center  flex-grow-1  mt-3 my-2 fs-5 fw-bold" >
                <li className="nav-item">
                  <form className="d-flex d-lg-none mx-2 mb-5" role="search">
                    <input className="   form-control me-2 w-100 ms-2" type="search" placeholder="Search Product..." aria-label="Search" />
                    <button className="  btn  rounded-circle" style={{ width: '25%', border: 'none' }} type="submit"><img src={searchlogo} style={{ width: '80%' }} className='img-fluid ' alt="" /></button>
                  </form>
                </li>
                <li className="nav-item " >
                  <Link className="nav-link active" style={{
                    color: clickedLink === 'home' ? 'orangeRed' : 'green',
                    textDecoration: 'none'
                  }} aria-current="page" to="/home" 
                  onClick={() => handleLinkClick('home')}>Home{(clickedLink === 'home' ? <hr /> : <></>)} </Link>
                </li>
                <li className="nav-item  d-lg-none" >
                  <Link className="nav-link active" style={{
                    color: clickedLink === 'login' ? 'orangeRed' : 'white',
                    textDecoration: 'none'
                  }} aria-current="page" to="account" 
                  onClick={() => handleLinkClick('login')}>My Account{(clickedLink === 'login' ? <hr /> : <></>)} </Link>
                </li>
                <li className="nav-item" >
                  <Link className="nav-link " style={{ color: clickedLink === 'shop' ? 'orangeRed' : 'white', textDecoration: 'none' }} to="/shop" 
                  onClick={() => handleLinkClick('shop')}>Shop {(clickedLink === 'shop') ? <hr /> : <></>}</Link>
                </li>
                <li className="nav-item">
                  <Link style={{ color: (clickedLink === 'men') ? 'orangeRed' : 'white', textDecoration: 'none' }} className="nav-link " to="/men" 
                  onClick={() => handleLinkClick('men')}>Men {(clickedLink === 'men') ? <hr /> : <></>}
                  </Link></li>
                <li className="nav-item" >
                  <Link style={{ color: (clickedLink === 'women') ? 'orangeRed' : 'white', textDecoration: 'none' }} className="nav-link " to="/women" 
                  onClick={() => handleLinkClick('women')}>Women {(clickedLink === 'women') ? <hr /> : <></>}</Link>
                </li>
                <li className="nav-item">
                  <Link style={{ color: (clickedLink === 'kids') ? 'orangeRed' : 'white', textDecoration: 'none' }} className="nav-link " to="/kids" 
                  onClick={() => handleLinkClick('kids')}>Kids
                    {(clickedLink === 'kids') ? <hr /> : <></>}</Link>
                </li >
              </ul>

              <p className='mt-3 fs-3 d-none d-lg-block'>CLEARANCE UP TO 30% OFF</p>
            </div>








          </div>

          <img src={brandname} alt="BrandLogo" className='ms-5 d-lg-none' style={{ width: '30%' }} />

          <Link className="nav-link  " to="/cart"><button className='d-flex   d-block  d-lg-none pt-3 bg-dark btn text-white'><i className="fa-solid fa-cart-shopping fs-2"></i>
            <h6 className='bg-danger rounded-circle pb-1  px-2' style={{ marginLeft: '-3px', marginTop: '-10px' }}>{count}</h6></button></Link>

        </div>

      </nav>
    </>
  )
}

export default Navbar2
