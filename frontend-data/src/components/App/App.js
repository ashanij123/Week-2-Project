import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from 'axios'

import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import ProductDetail from '../ProductDetail/ProductDetail'
import './App.css'

export default function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const req = await axios.get("http://localhost:3001/store")
        const products = req?.data?.products
        if (products) {
          setProducts(products)
        }
      } catch(err) {
        setError(err)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className="App">
      <div></div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home products={products} error={error}/>}></Route>
          <Route path="/store/:productId" element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}