import React, { useState,useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Products from './Products'


function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const showNav = () => {

    setIsMobileNavOpen(true)

  };
  const closeNav = () => setIsMobileNavOpen(false);

   useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden'; // Stop background scroll
    } else {
      document.body.style.overflow = ''; // Restore scroll
    }
  }, [isMobileNavOpen]);

  return (

    <>
    <div className='bg-neutral-500 flex justify-between p-5 h-[10vh] items-center' id="pcnav">
      <div className='text-red-500 bg-neutral-200 p-1 text-lg sm:text-xl font-semibold md:text-2xl'>GadgetHub</div>
      <div className='hidden md:flex w-[45%] justify-between'>
       <NavLink to="/" className={({isActive})=>`text-lg p-2 ${isActive? ' font-semibold text-black bg-neutral-300': 'text-black'}`}>Home</NavLink>
      
        <NavLink to="/products" className={({isActive})=>`text-lg p-2 ${isActive? ' font-semibold text-black bg-neutral-300': 'text-black'}`}>Products</NavLink>
        <NavLink to="/about" className={({isActive})=>`text-lg p-2 ${isActive? ' font-semibold text-black bg-neutral-300': 'text-black'}`}>About</NavLink>
        <NavLink to="/contact" className={({isActive})=>`text-lg p-2 ${isActive? ' font-semibold text-black bg-neutral-300': 'text-black'}`}>Contact Us</NavLink>
      
        </div>
      <div className='text-lg flex items-center'>
    <NavLink to="/cart"  className={({isActive})=>`text-lg p-2 ${isActive? ' font-semibold text-black bg-neutral-300': 'text-black'}`}>
        <div className='flex '><p>Cart</p><img src="/images/shopping-cart.png" alt="png" />
        </div>
    </NavLink>

      
      <div className='md:hidden ml-2' onClick={showNav}><img src="/images/hamburger (1).png" alt="" /></div>
      </div>
    </div>

{/* Mobile NAvbar */}

{isMobileNavOpen && (
  <div id="mobnav" className='fixed w-screen h-[100vh] bg-neutral-800  top-0 left-0 z-50 md:hidden '>

    <div className='h-[10vh] bg-neutral-500 p-5 flex justify-between items-center'>
    <div className='text-lg text-red-500 p-1 bg-neutral-200 font-semibold'>GadgetHub</div>
    <div className='flex items-center'>
    <div className='text-lg flex items-center'>
    <NavLink to="/cart"  className={({isActive})=>`text-lg p-2 ${isActive? ' font-semibold text-black bg-neutral-300': 'text-black'}`} onClick={closeNav} >
        <div className='flex '><p>Cart</p><img src="/images/shopping-cart.png" alt="png" />
        </div>
    </NavLink>
    </div>
    <div onClick={closeNav} className='ml-2'><img src="/images/icons-32.png" alt="" /></div>
    </div>
    </div>

  <div className='w-screen h-[100%] '>

   <div className='w-[100%] h-[100%] flex flex-col p-25 pt-5 justify-around  items-center text-white'>
    <NavLink to="/" className={({isActive})=>`text-xl p-2 ${isActive? ' font-semibold border-b-2   border-red-500': 'text-white'}`} onClick={closeNav}>Home</NavLink>
    <NavLink to="/products" className={({isActive})=>`text-xl p-2 ${isActive? ' font-semibold border-b-2   border-red-500': 'text-white'}`} onClick={closeNav}>Products</NavLink>
    <NavLink to="/about" className={({isActive})=>`text-xl p-2 ${isActive? ' font-semibold border-b-2   border-red-500': 'text-white'}`} onClick={closeNav}>About</NavLink>
    <NavLink to="/contact" className={({isActive})=>`text-xl p-2 ${isActive? ' font-semibold border-b-2   border-red-500': 'text-white'}`} onClick={closeNav}>Contact Us</NavLink>
   
      
   </div>
    
       
  </div>

    </div>
  
)}
    
    </>
    
  )
}

export default Navbar
