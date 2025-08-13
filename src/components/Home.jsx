import React, { useState, useEffect } from "react";
import ProductCard from './ProductCard'
import { Link  } from "react-router-dom";
function Home() {
  const bannerImages = [
    "/images/iphones.png",
    "/images/s24.png",
    "/images/fold.png",
    "/images/galaxyb4.png",
  ];

  const [products,setProducts]=useState([]);
  useEffect(()=>{
      fetch("/data/productslist.json")
      .then(res=> res.json())
      .then(data=>{setProducts(data.products)
      })
      .catch(err=> console.log(err))
  },[])

  const bestSellers= products.filter(product=> product.isBestSeller).slice(0,6)

  const latestLaunches = [...products]
  .sort((a, b) => new Date(b.launchDate) - new Date(a.launchDate))
  .slice(0, 6);

  const phones = products.filter(product => product.category === "phones").slice(0, 3);
const laptops = products.filter(product => product.category === "laptops").slice(0, 3);
const cameras = products.filter(product => product.category === "cameras").slice(0, 3);

const exploreProducts = [...phones, ...laptops, ...cameras];
 
  const [bannerimg, setBannerimg] = useState(bannerImages[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setBannerimg((prevImg) => {
        const currentImg = bannerImages.indexOf(prevImg);
        const nextImg = (currentImg + 1) % bannerImages.length;
        return bannerImages[nextImg];
      });
    }, 2000); // every 2 seconds

    return () => clearInterval(interval); // cleanup
  }, []);
  return (
    <div className="w-screen box-border">
      <div className="h-[100vh] md:h-[60vh] w-screen flex flex-col md:flex-row">
        <div className="p-5 bg-neutral-600  md:w-[60%] h-[50%] md:h-[100%] text-white font-semibold justify-center items-center  flex-col flex md:items-start md:pl-10 xl:pl-20 ">
          <p className="text-3xl md:text-4xl mb-2 text-center md:text-start border-b-1  p-1">
            Welcome to GadgetHub
          </p>
          <p className="text-3xl md:text-4xl mb-1">Latest Tech.</p>
          <p className="text-3xl md:text-4xl">Latest Designs.</p>
          <p className="text-center md:text-start mt-2">
            Explore the newest gadgets with our curated tech collection.
          </p>
        </div>
        <div className="bg-neutral-600  md:w-[50%] w-[100%] h-[50%] md:h-[100%] flex justify-center">
          <img src={bannerimg} alt="" className="h-[100%] transition-all" />
        </div>
      </div>

      <div className="flex p-15 pt-25">
        <div className="w-2 mr-1 rounded-2xl bg-white"></div>
        <div className="text-4xl  text-white  ">Best selling products</div>
      </div>

      <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10  grid justify-items-center">
      {bestSellers.map(product=>(
        <ProductCard key={product.id} product={product} />
      ))}
      </div>

      <div className="h-[2px] mt-30 w-screen bg-neutral-400 "></div>

      <div className="flex p-20 pt-0 mt-30">
        <div className="w-2 mr-1 rounded-2xl bg-white"></div>
        <div className="text-4xl  text-white  ">Latest Launches</div>
      </div>


      <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10  grid justify-items-center">
        {latestLaunches.map(product=>(
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="h-[2px] mt-30 w-screen bg-neutral-400 "></div>

      <div className="flex p-20 pt-0 mt-30">
        <div className="w-2 mr-1 rounded-2xl bg-white"></div>
        <div className="text-4xl  text-white  ">Explore our products</div>
      </div>
      <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10  grid justify-items-center ">
       {exploreProducts.map( product=>(
        <ProductCard  key={product.id} product={product}/>
       ))}
      </div>

    <div className="flex justify-center">
      <Link to="/products">
      <button className="bg-black text-white p-3 cursor-pointer mt-15 font-semibold text-lg">View All Products</button>
      </Link>
      </div>
       
      <div className="h-[2px] mt-30 w-screen bg-neutral-400 "></div>

      <div className="px-10 py-20 md:px-5  text-white flex flex-col   md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col items-center justify-center mb-20 md:mb-0 ">
          <div className="bg-gray-400 rounded-full p-3 border-yellow-600 border-8">
            <img src="/images/delivery.svg" alt="" className="" />
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold mt-4">
              FREE AND FAST DELIVERY
            </p>
            <p className="mt-1 text-lg ">
              Free delivery for all orders over 10,000
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mb-20 md:mb-0">
          <div className="bg-gray-400 rounded-full p-3 border-yellow-600 border-8">
            <img src="/images/support.svg" alt="" className="" />
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold mt-4">24/7 CUSTOMER SERVICE</p>
            <p className="mt-1 text-lg ">Friendly 24/7 customer support</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <div className="bg-gray-400 rounded-full p-3 border-yellow-600 border-8">
            <img src="/images/secure.svg" alt="" className="" />
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold mt-4">MONEY BACK GUARANTEE</p>
            <p className="mt-1 text-lg ">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
