import React from 'react'
import  Carousel  from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
const Slider = ({start}) => {
  return (
    <Carousel fade>
        {
            start.map((item,index)=>{
                return (
                    <Carousel.Item key={index}>
                        <img src={item} alt="not found" />
                    </Carousel.Item>
                );
            })
        }
    </Carousel>
  )
}

export default Slider;

