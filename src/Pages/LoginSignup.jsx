import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import Account from './Account';

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    usernameOrEmailOrPhone: '',
    password: ''
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { usernameOrEmailOrPhone, password } = formData;
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user =>
      user.username === usernameOrEmailOrPhone ||
      user.email === usernameOrEmailOrPhone ||
      user.phoneNumber === usernameOrEmailOrPhone
    );

    if (!user || user.password !== password) {
      setErrors({ login: 'Invalid username/email/phone or password' });
      return;
    }

    // localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('currentUser', JSON.stringify(user));

    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
  };
  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div>
      {isLoggedIn ? (
        <div>
         <Home/>
        </div>
      ) : (
        <div className="container-fluid" style={{ background: 'linear-gradient(to right, orangeRed, navy)' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4 my-5 d-flex flex-column justify-content-center my-5" style={{ alignItems: 'center', border: '2px solid white', backgroundColor: 'transparent', opacity: '' }}>
                <h1 className='text-center my-5 pt-4 text-white'>Don't have an account yet?</h1>
                <Link to='/signup' className='px-auto'>
                  <button className='btn btn-outline-success text-white py-1 px-5 rounded-pill fs-4' style={{ border: '2px solid white' }}>Sign Up</button>
                </Link>
              </div>
              <div className="col-md-6 col-lg-8 my-5">
                <form onSubmit={handleSubmit} className='d-flex justify-content-center py-5' style={{ border: '2px solid white' }}>
                  <div className='w-75'>
                    <div className='pt-4 w-100 d-flex justify-content-between' style={{ borderBottom: '2px solid white' }}>
                      <i class="fa-solid fa-user fs-2 text-white pe-2"></i>
                      <input className='fs-5 bg-transparent text-white w-100' style={{ border: 'none' }} type="text" name="usernameOrEmailOrPhone" value={formData.usernameOrEmailOrPhone} onChange={handleChange} placeholder='Username/Email/Phone' required />
                    </div>
                    <div className='pt-4 w-100 d-flex justify-content-between' style={{ borderBottom: '2px solid white' }}>
                      <i class="fa-solid fa-key fs-2 text-white pe-2"></i>
                      <input className='fs-5  bg-transparent text-white  w-100' style={{ border: 'none', }} type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} required placeholder='Password' />
                      <span className='w-25 d-flex justify-content-end' onClick={PasswordVisibility}>{showPassword ? <img src='https://cdn-icons-png.flaticon.com/512/1000/1000915.png' alt='' className='img-fluid ' style={{ width: '25%' }} /> : <img src='https://cdn-icons-png.flaticon.com/512/1000/1000957.png' alt='' className='img-fluid ' style={{ width: '25%' }} />} </span>
                    </div>
                    {errors.login && <p className='text-center' style={{ color: 'red' }}>{errors.login}</p>}
                    <div className='d-flex justify-content-center w-100 my-5'>
                      <button type="submit" className='w-50 rounded-pill fs-4 btn btn-outline-success text-white' style={{ border: '2px solid white' }}>Login</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
