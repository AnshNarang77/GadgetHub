import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import ProductCard from './components/ProductCard.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import Cart from './components/Cart.jsx'
import { CartProvider } from './Context/CartContext.jsx'



const router= createBrowserRouter(
  createRoutesFromElements(
<Route path="/" element={<App/>}>
    <Route path='' element={<Home/>} />
    <Route path='products' element={<Products/>} />
    <Route path='contact' element={<Contact/>} />
    <Route path='about' element={<About />}/>
    <Route path='products/:id' element={<ProductDetails />}/>
    <Route path='cart' element={<Cart />}/>

</Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>  
      <CartProvider>
    <RouterProvider router={router}/>
      </CartProvider>
  </StrictMode>,
)
