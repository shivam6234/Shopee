import React, { useEffect, useState } from 'react'
import LoginSignup from './LoginSignup'
import loginlogo from '../components/Assets/webdevelopment1.png'
import { Link } from 'react-router-dom'
const Account = () => {
  const [savedData, setSavedData] = useState([])
  useEffect(() => {
    const data = localStorage.getItem('users')
    if (data) {

      const parseData = JSON.parse(data)
      setSavedData(parseData)
    }
  }, [])
  const[hover,setHover]=useState('')
  const handleHover=(id)=>{
    setHover(id);
  }
  const nullColor=()=>{
    setHover('');
  }
  const isloggedIn = !!localStorage.getItem('currentUser')
  const handleLogout=()=>{
    localStorage.removeItem('currentUser');
  }
  return (
    <div>
      <div className="container-fluid p-5 bg-light">
        <h1 className='text-center' style={{ color: "orange" }}>My <span className='text-success'>Account</span></h1>

      </div>
      {isloggedIn ? (
        <div className="container-fluid  " style={{ background: 'linear-gradient(to right,orangeRed,purple)' }}>
          <div className="container ">
            <h2 className='text-center text-warning p-5 text-decoration-underline'>Personal Details</h2>
          
            <div className="row ">
              {savedData.map(data => (
                <>
                
                <div className="col-md-12 p-5 d-none d-md-block ">
                  <h4 style={{ borderBottom: '2px solid white', color: 'white' }} className='p-4 text-uppercase'><i class="fa-solid fa-signature"></i> FullName:- {data.name}</h4>
                  <h4 style={{ borderBottom: '2px solid white', color: 'white' }} className='p-4 text-uppercase'><i class="fa-solid fa-user"></i> UserNAme:- {data.username}</h4>
                  <h4 style={{ borderBottom: '2px solid white', color: 'white' }} className='p-4 text-uppercase'><i class="fa-solid fa-phone"></i> Mobile:- {data.phoneNumber}</h4>
                  <h4 style={{ borderBottom: '2px solid white', color: 'white' }} className='p-4 '> <i class="fa-solid fa-envelope"></i> GMAIL:- {data.email}</h4>
                  <h4 style={{ borderBottom: '2px solid white', color: 'white' }} className='p-4 text-uppercase'><i class="fa-solid fa-location-dot"></i> address:- {data.address}</h4>
                  <h4 style={{ borderBottom: '2px solid white', color: 'white' }} className='p-4 '><i class="fa-solid fa-baby"></i> Date-of-Birth:- {data.dob}</h4>
                </div>
                <div className="col-md-12 p-5 d-block d-md-none ">
                  <h4 style={{ borderBottom: ' 2px solid white', color: 'white' }} className='fs-6 text-center py-4 text-uppercase'><i class="fa-solid fa-signature"></i> FullName:- <br /> {data.name}</h4>
                  <h4 style={{ borderBottom: ' 2px solid white', color: 'white' }} className='fs-6 text-center py-4 text-uppercase'><i class="fa-solid fa-user"></i> UserNAme:- <br />{data.username}</h4>
                  <h4 style={{ borderBottom: ' 2px solid white', color: 'white' }} className='fs-6 text-center py-4 text-uppercase'><i class="fa-solid fa-phone"></i> Mobile:- <br />{data.phoneNumber}</h4>
                  <h4 style={{ borderBottom: ' 2px solid white', color: 'white' }} className='fs-6 text-center py-4 '> <i class="fa-solid fa-envelope"></i> GMAIL:- <br />{data.email}</h4>
                  <h4 style={{ borderBottom: ' 2px solid white', color: 'white' }} className='fs-6 text-center py-4 text-uppercase'><i class="fa-solid fa-location-dot"></i> address:- <br />{data.address}</h4>
                  <h4 style={{ borderBottom: ' 2px solid white', color: 'white' }} className='fs-6 text-center py-4 '><i class="fa-solid fa-baby"></i> Date-of-Birth:- <br />{data.dob}</h4>
                </div>
                </>

              ))}
              <div className='w-100 d-flex justify-content-center pb-5 '>
               <Link className='w-100 ' to={'/login'}>
            <button onMouseLeave={nullColor} onMouseEnter={()=>handleHover('logout')} style={{backgroundColor: hover==='logout'?'green':'aqua',color:hover==='logout'?'white':'green'}}  className='btn fs-4 btn-outline-success  rounded-pill w-100 ' onClick={handleLogout}>Log Out</button>
           </Link>
              </div>

            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid  bg-white" style={{ background: 'linear-gradient(to right,orangeRed,purple)' }}>
          <div className="container">
            <div className="row">
            <div className="col-md-6 mt-5 d-block d-md-none">
                <img src={loginlogo} className='img-fluid p-5 ' alt="" />
              </div>
              <div className="col-md-6  my-5 d-flex flex-column justify-content-center " style={{ alignItems: 'center', border: '10px solid white', backgroundColor: 'transparent', opacity: '' }}>
                <h1 className='text-center my-5 pt-4 text-white' >Already have an account with us ?</h1>
                <Link to='/login' className='px-auto'><button className='btn btn-outline-success text-white mb-5 py-1 px-5 rounded-pill fs-4' style={{ border: '2px solid white' }}>Sign In</button></Link>
              </div>
              <div className="col-md-6 my-5 d-none d-md-block">
                <img src={loginlogo} className='img-fluid p-5 ' alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Account
