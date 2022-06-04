import React, { useEffect } from 'react'
import { useParams} from 'react-router-dom'


const ProductDetail = () => {
  useEffect(() => {
    console.log(useParams)
  }, [])
  
  return (
    <div style={{marginTop: "100px"}}>ProductDetail</div>
  )
}

export default ProductDetail