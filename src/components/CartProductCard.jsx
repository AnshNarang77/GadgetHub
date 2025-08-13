import React, { useState } from "react";
import { useCart } from "../Context/CartContext";

function CartProductCard({ product }) {
  const { removeFromCart } = useCart();
  const [qty,setQty]=useState(1)

  const handleIncrease = () => {
    
        setQty(qty+1)
     if(qty==5){
        setQty(5)
        document.getElementById("warn").innerText="MAX LIMIT REACHED";
      }
  };

  const handleDecrease = () => {
    if (qty > 1) {
      setQty(qty-1)
    }
  };

  return (
    <div className="flex-1">
      <div className="flex flex-col sm:flex-row gap-4 bg-neutral-800 border border-neutral-700 rounded-xl p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full sm:w-40 h-[35vh] sm:h-auto object-contain bg-white rounded-lg p-2"
        />

        <div className="flex flex-col justify-between w-full">
          <div>
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-400">By {product.brand}</p>
            <p className="text-lg font-medium mt-2">
              ₹{product.price.toLocaleString("en-IN")}
            </p>
            <p className="text-sm text-gray-400">Qty: {qty}</p>
            <div className="flex mt-2 items-center">
              <button
                className="bg-white text-black font-bold p-1 px-3 mr-2 text-lg"
                onClick={handleDecrease}
              >
                -
              </button>
              <p className="text-lg font-bold">{qty}</p>
              <button
                className="bg-white text-black text-lg font-bold p-1 px-3 ml-2"
                onClick={handleIncrease}
              >
                +
              </button>
              <span id="warn" className="font-mono text-red-400 ml-2"></span>
            </div>
          </div>

          <button
            className="mt-3 text-red-400 hover:underline w-fit"
            onClick={() => removeFromCart(product.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
