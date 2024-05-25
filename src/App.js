import React from 'react'
import Navbar2 from './components/Navbar/Navbar2'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar1 from './components/Navbar/Navbar1'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'
import Wishlist from './Pages/Wishlist'
import Shop from './Pages/Shop'
import Signup from './components/item/Signup'
import Footer from './Pages/Footer'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Account from './Pages/Account'


const App = () => {
  
  return (

    <div>
       
      <Navbar1/>
      <Navbar2/>
      <Routes>
        <Route path='/home'  element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/men' element={<Men />}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/product'element={<Product/>}/>
        <Route path='/*' element={<Home />} />
        <Route path='/account' element={<Account/>}/>

       

        
      </Routes>
      <Footer/>
       
      
    
      
    </div>
  )
}

export default App
