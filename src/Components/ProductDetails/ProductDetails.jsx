import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    let idProduct = useParams();
    console.log(idProduct.id); 

  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails