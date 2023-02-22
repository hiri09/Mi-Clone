import React from 'react'
import "../styles/navcard.css";
const Navcard = ({name,price,image}) => {
  return (
    <div className='navcard'>
      <img src={image} alt="phones" />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  )
}

export default Navcard;
