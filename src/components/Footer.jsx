import React from 'react'

function Footer() {
  return (
    <>

     <div className='p-10 pb-5  bg-neutral-600 flex flex-col items-center   '>
<div className='h-[2px] w-screen bg-neutral-800  mt-10 mb-5'></div>


<div className='sm:grid-cols-2 sm:grid items-center  md:grid-cols-3 lg:grid-cols-4 w-screen  '>
<div className='text-white  text-center'>
  <p className='text-2xl font-bold'>GadgetHub</p>
  <p className='text-lg '>Subscribe</p>
  <p className=''>Get 10%off on your first order</p>
</div>

<div className='text-white  mt-5  text-center'>
  <p className='text-xl font-bold'>Support</p>
  <p className=''>Panipat, Haryana, India.</p>
  <p className=''>gadgethub@gmail.com</p>
  <p className=''>+91-348633947</p>
</div>


<div className='text-white  mt-5  text-center'>
 <p className='text-xl font-bold'>Account</p>
  <p className=''>MyAccount</p>
  <p className=''>Cart</p>
  <p className=''>Wishlist</p>
  <p className=''>SHop</p>
</div>


<div className='text-white mt-5  text-center'>
   <p className='text-xl font-bold'>QuickLInk</p>
  <p className=''>PrivacyPolicy</p>
  <p className=''>Terms oF use</p>
  <p className=''>FAQ</p>
  <p className=''>Contact</p>
</div>

</div>
<div className='h-[2px] w-screen bg-neutral-800 mt-10 mb-5'></div>
<div className='text-center text-neutral-300'>COPYRIGHTS INFRINGEMENT</div>
 </div>


    </>
  )
}

export default Footer
