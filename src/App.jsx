
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Outlet} from "react-router-dom"
import ProductCard from './components/ProductCard'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
function App() {
 

  return (
     <>

   {/* <Cart />   */}

<Navbar />
<Outlet />
<Footer />   
     </>
  )
}

export default App
