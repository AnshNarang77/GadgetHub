import React, { useState,useEffect } from "react";
import ProductCard from "./ProductCard";

function Products() {
  const [category, setCategory] = useState("");
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleClear = () => {
    setCategory("");
  };

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

    const [products,setProducts]=useState([]);
    useEffect(() => {
  fetch("/data/productslist.json")
    .then(res => res.json())
    .then(data => {
      if (category === "phones") {
        setProducts(data.products.filter(p => p.category === "phones"));
      } else if (category === "laptops") {
        setProducts(data.products.filter(p => p.category === "laptops"));
      } else if (category === "cameras") {
        setProducts(data.products.filter(p => p.category === "cameras"));
      } else {
        setProducts(data.products); // show all if no filter
      }
    })
    .catch(err => console.log(err));
}, [category]);

 if (!products) return <p className="text-white p-10">Loading...</p>;

  return (
    <>
      <div className="mt-30 mb-10  flex justify-center">
        <div className="border-2 bg-neutral-500 rounded-lg w-[50%] p-5 sm:w-[50%] lg:w-[70%]">
          <p className="text-white font-semibold text-2xl sm:text-3xl mb-5 text-center">
            Filter by category
          </p>
          <div className="text-white text-xl sm:text-2xl flex flex-col  items-center lg:flex-row  sm:justify-around ">
            <div className="mb-5 ">
              <label className="">
                <input
                  type="radio"
                  name="category"
                  value="phones"
                  checked={category === "phones"}
                  onChange={handleChange}
                />
                Phones
              </label>
            </div>
            <div className="mb-5">
              <label>
                <input
                  type="radio"
                  name="category"
                  value="laptops"
                  checked={category === "laptops"}
                  onChange={handleChange}
                />
                Laptops
              </label>
            </div>
            <div className="mb-5">
              <label>
                <input
                  type="radio"
                  name="category"
                  value="cameras"
                  checked={category === "cameras"}
                  onChange={handleChange}
                />
                Cameras
              </label>
            </div>
            <div>
              <button
                className="p-2 px-3 rounded-md bg-black font-semibold text-xl"
                onClick={handleClear}
              >
                Clear filter
              </button>
            </div>
          </div>
        </div>
      </div>

     {/* PRODUCTS */}
      <div className="flex p-20 pt-0 mt-30 ">
        <div className="w-2 mr-1 rounded-2xl bg-white"></div>
        <div className="text-4xl  text-white  ">Products</div>
      </div>


      <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10  grid justify-items-center mb-20">
       {/* Products Show  */}
       {products.map((product)=>(
        <ProductCard  key={product.id} product={product}/>

       ))}
      </div>

    </>
  );
}

export default Products;
Products;
