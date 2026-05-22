import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/style.css'
import './assets/loader.css'
import NavBar from "./layouts/NavBar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import MyOrders from "./pages/MyOrders"
import MyAccount from "./pages/MyAccount"
import Auth from "./pages/Auth"
import SingleProduct from './pages/SingleProduct'
import Footer from './layouts/Footer.jsx'
import Loader from './layouts/loader.jsx'
import './Api.js'
import { useState } from 'react'

function App() {

  const[loader, setLoader] = useState(false)
  const [cart, setCart] = useState([])

  const setPageLoading = (status) => {
    setLoader(status)
  }

  const addProductsToCart = (product) => {

    product.quantity = 1
    console.log(product)
  }


  return (
    <>
      <Router>
        <NavBar/>

        <div className='container'>

          { loader && <Loader /> }

          <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/products' element={ <Products onAddToCart = { addProductsToCart } setPageLoading = { setPageLoading } /> }/>
          <Route path='/cart' element={ <Cart /> }/>
          <Route path='/checkout' element={ <Checkout /> }/>
          <Route path='/my-orders' element={ <MyOrders /> }/>
          <Route path='/my-account' element={ <MyAccount /> }/>
          <Route path='/login' element={ <Auth /> }/>
          <Route path='/product/:id' element={ <SingleProduct onAddToCart = { addProductsToCart } setPageLoading = { setPageLoading } /> }/>
        </Routes>
        </div>

        <Footer />
      </Router>
    </>
  )
}

export default App
