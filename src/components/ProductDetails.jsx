import React from "react";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useCart } from "../Context/CartContext";
function ProductDetails() {
const {addToCart}=useCart()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [relatedproducts,setRelatedproducts]=useState([])
  useEffect(() => {
    fetch("/data/productslist.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.products.find((p) => p.id === parseInt(id));
        setProduct(foundProduct);

        if(foundProduct){
        const relatedProducts=data.products.filter((p) => p.category==foundProduct.category  && p.id!==foundProduct.id).slice(0,6)
        setRelatedproducts(relatedProducts)
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <p className="text-white p-10">Loading...</p>;
  
  return (
    <>
      <div className="text-white bg-neutral-700 flex flex-col lg:flex-row p-10  justify-center   items-center lg:items-center">
        <div className="border-[2px] bg-white border-neutral-300 p-5 sm:w-[80%] md:w-[65%] xl:w-[45%] object-contain lg:w-[60%] w-[90%] flex justify-center ">
          <img src={product.image} alt="" className="w-[50%]" />
        </div>

        <div className="mt-5 sm:ml-10 p-5">
          <div className="text-xl sm:text-3xl font-semibold">{product.name}</div>
          <div className="text-lg font-mono ">By: {product.brand}</div>
          <div className=" text-lg sm:text-2xl font-serif mt-2">
           ₹ {product.price.toLocaleString('en-IN')} <span className="font-mono text-lg">(Inclusive of all taxes)</span>
          </div>
          <div className="sm:text-xl mt-3">
            Engineered for performance, crafted for style — experience the best
            of innovation.
          </div>

          <div className="h-[1px] bg-white mt-5 mb-5"></div>
          <div>
            <button className="bg-black font-semibold p-4" onClick={addToCart(product)}>Add to Cart </button>
          </div>
          <div className="border-2 flex p-2 mt-5 items-center">
            <div className="bg-black rounded-full p-3">
              <img src="/images/delivery.svg" alt="" className="" />
            </div>
            <div className="sm:text-lg font-serif ml-5">
              Free Delivery on orders above 15,000
            </div>
          </div>
          <div className="border-2 flex p-2 mt-5 items-center">
            <div className="bg-black rounded-full p-3">
              <img src="/images/delivery.svg" alt="" className="" />
            </div>
            <div className="sm:text-lg font-serif ml-5">
              Return available within 7 days of purchase
            </div>
          </div>
        </div>
      </div>

     
      <div className="flex p-15 pt-25">
        <div className="w-2 mr-1 rounded-2xl bg-white"></div>
        <div className="text-4xl  text-white  ">Related Products</div>
      </div>

       <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10  grid justify-items-center mb-20">
        {relatedproducts.map(product=>(
          <ProductCard key={product.id} product={product}/>

        ))}
       </div>
    </>
  );
}

export default ProductDetails;
