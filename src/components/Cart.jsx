import React, { useState } from 'react'
import CartProductCard from './CartProductCard'
import {useCart} from '../Context/CartContext'
function Cart() {
 const {cartItems, removeFromCart}=useCart()

 
  return (
<>
 <div className="min-h-screen  text-white p-6 sm:p-10 bg-neutral-900">
  <h1 className="text-3xl font-bold mb-8 text-center">🛒 Your Cart</h1>

  <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3  flex-wrap gap-10">

    {cartItems.length === 0 ? (
        <div className='w-screen text-center text-3xl sm:text-5xl'>No products in the cart.</div>
      ) : (
cartItems.map((item) => (
        <CartProductCard
          key={item.id}
          product={item}
          onRemove={removeFromCart}
          
        />
      ))
      )}
  
  </div>
</div>



</>

  )
}

export default Cart
