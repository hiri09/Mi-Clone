import React from 'react'
import ProductReviewCard from "./ProductReviewCard.jsx";
import "../styles/productreview.css"
const ProductRivew = ({productReviews}) => {
  return (
    <div className='productreview'>
      {
        productReviews.map((item,index)=>(
            <ProductReviewCard price={item.price} review={item.review} name={item.name} image={item.image} index={index} key={item.image}/>
        ))
      }
    </div>
  )
}

export default ProductRivew;
