import React from 'react'
import "../styles/hotitemcard.css"
const Hotitemcard = ({index,image,price,name}) => {
  return (
    <div className='hotitemcard'>
      <img src={image} alt={`${index} product`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  )
}

export default Hotitemcard;
