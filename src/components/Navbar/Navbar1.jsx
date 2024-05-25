import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import searchlogo from '../Assets/search-icon-hi.png';
import logo from '../Assets/Shopeelogo.png';
import cartlogo from '../Assets/cart.png';
import wishlistlogo from '../Assets/icone-de-coeur-orange-1.png';
import './navbar1.css';
import './Navbar.css';
import { useSelector } from 'react-redux';

const Navbar1 = () => {
  const [color, setColor] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/cart') {
      setColor('cart');
    } else if (location.pathname === '/wishlist') {
      setColor('wish');
    } else if (location.pathname === '/account') {
      setColor('account');
    } else {
      setColor('');
    }
  }, [location]);

  const count = useSelector(state => state.cart.totalItems);
  const count2 = useSelector(state => state.wishlist.totalwishListItems);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light d-lg-block d-none">
        <div className="container-fluid d-flex justify-content-between">

          <div className="logo d-lg-none" style={{ width: '15%' }}>
            <Link to='/home' className='w-100 d-flex justify-content-center'>
              <img src={logo} alt="" className='img-fluid w-100' />
            </Link>
          </div>
          <form className="d-flex w-25" role="search">
            <button className=" d-none d-lg-block btn  rounded-circle" style={{ width: '20%', border: 'none' }} type="submit"><img src={searchlogo} style={{ width: '80%' }} className='img-fluid ' alt="" /></button>
            <input className=" d-none d-lg-block form-control me-2 w-100" type="search" placeholder="Search Product..." aria-label="Search" />
          </form>
          <div className="logo  d-none d-lg-block" style={{ width: '10%' }}>
            <Link to='/home' className='w-100 d-flex justify-content-center'>
              <img src={logo} alt="" className='img-fluid w-75' />
            </Link>
          </div>
          <div className="content " style={{ width: '20%' }}>
            <ul className="navbar-nav  mb-2 mb-lg-0   d-flex justify-content-center">
              <li className=' cart  d-flex '>
                <Link to='/cart' className='d-flex w-100 d-none d-lg-block'>
                  <button className='p-4 mt-1  rounded-circle' style={{ backgroundImage: `url(${cartlogo})`, backgroundPosition: 'center', backgroundSize: 'cover', border: '5px solid green', borderColor: color === 'cart' ? 'orange' : 'green' }}></button>
                </Link>
                <div className='text-white rounded-circle cartcount d-none d-lg-block pt-1 pb-2'>
                  {count}
                </div>
              </li>
              <li className=' cart  d-flex  rounded-circle p-1'  >
                <Link to='/wishlist' className=' w-100 d-none d-lg-block'>
                  <button className='p-4 rounded-circle' style={{ backgroundImage: `url(${wishlistlogo})`, backgroundSize: 'cover', backgroundPosition: 'center', border: '5px solid green', borderColor: color === 'wish' ? 'orange' : 'green' }}></button>
                </Link>
                <div className='text-white rounded-circle cartcount d-none d-lg-block'>
                  {count2}
                </div>
              </li>

              <li className=' cart  d-flex flex-coloumn'>
                <Link to='/account' className='d-flex w-100 d-none d-lg-block'>
                  <button className='btn rounded-circle p-4 mt-1' style={{ backgroundImage: `url('https://th.bing.com/th/id/R.b908414265a3226b02921b8fc6ca74b8?rik=4yxutcluTnwkHg&riu=http%3a%2f%2fsomebooks.es%2fwp-content%2fuploads%2f2018%2f12%2fPoner-una-imagen-a-la-cuenta-de-usuario-en-Windows-10-000.png&ehk=VPPwcZYTyDePzC7MxhYmKS9OIqMmGAx2g7lHlFdzDu4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1)`, backgroundSize: 'cover', backgroundPosition: 'center', border: '5px solid green', borderColor: color === 'account' ? 'orange' : 'green', color: 'white' }} >
                  </button>
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar1;
