import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/hotacmenu.css";
const HotacMenu = () => {
  return (
    <div className='HotacMenu'>
      <Link className="HotacLink" to="/music">Music Store</Link>
      <Link className="HotacLink" to="/smartdevices">Smart Devices</Link>
      <Link className="HotacLink" to="/home">Home</Link>
      <Link className="HotacLink" to="/lifestyles">Lifestyle</Link>
      <Link className="HotacLink" to="/mobileac">Mobile Accessories</Link>
    </div>
  )
}

export default HotacMenu;
