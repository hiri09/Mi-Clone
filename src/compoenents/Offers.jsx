import React from 'react'
import Offer from "../compoenents/Offer";
import "../styles/Offers.css";
const Offers = ({offer}) => {
  return (
    <div className='offerselection'>
      {
        offer.map((item,index)=>(
            <Offer key={item.image} index={index} src={item.image} link={item.url} />
        ))
      }
    </div>
  )
}

export default Offers;
