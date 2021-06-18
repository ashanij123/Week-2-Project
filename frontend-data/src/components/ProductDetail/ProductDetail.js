import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import './ProductDetail.css'

export default function ProductDetail() {
  const { productId } = useParams()
  const [product, setProduct] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/store/${productId}`)
        const product = res?.data?.product
        if (product) {
          setProduct(product)
        }
      } catch(err) {
        console.log(err)
        setError(err)
      }
    }
    fetchProductById()
  }, [productId])

  return (  
    <div className="mainDiv">
        <div className="product-single-info">
            <div className="product-single-image">
                <img src={product.image} alt={product.name}/>
            </div>
            <div className="product-single-category">{product.category}</div>
            <div className="product-single-name">{product.name}</div>
            <div className="product-single-price">${product.price}</div>
            <div className="product-single-desc">{product.description}</div>
            <div className="product-single-error">{error}</div>
        </div>
    </div>
  )
}