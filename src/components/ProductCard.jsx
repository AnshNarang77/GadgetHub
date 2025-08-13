import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
function ProductCard({product}) {
  const {id}=useParams()
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[id])
  return (
    <>
<Link to={`/products/${product.id}`}>
 <div className='w-[70vw] h-[60vh] sm:w-[45vw] sm:h-[70vh] md:w-[40vw] lg:w-[30vw] lg:h-[70vh]  bg-neutral-400 rounded-xl lg:py-7 p-5 text-black flex flex-col items-center '>
        <div className='flex justify-center  object-contain p-5 w-[100%] m-2 bg-white h-[70%] lg:h- lg:w-[100%]'><img src={product.image} alt=""  className=''/></div>
        {/* <div className='text-xl font-serif mt-3'>{product.brand}'s</div> */}
        <div className='text-xl font-medium mt-5 bg-red-400  px-2 p-1'>{product.name}</div>
        <div className='text-3xl font-semibold mt-2 mb-2'>₹ <span className='underline'>{product.price.toLocaleString('en-IN')}</span> </div>
        </div> 
</Link>
     
    </>
  )
}

export default ProductCard
