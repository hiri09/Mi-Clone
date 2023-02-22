import React from 'react'

import  Carousel  from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
const Banner = ({end}) => {
  return (
    <div>
    <Carousel fade>
        {
            end.map((item,index)=>{
                return (
                    <Carousel.Item key={item.image} id="banner" interval={1000}>
                        <img src={item.image} alt={`${index} banner`} className="d-block w-100" id='bannerimage'/>
                        <Carousel.Caption>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{item.source}</p>
                            <u>Read More</u>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })
        }
    </Carousel>
    </div>
  )
}

export default Banner
