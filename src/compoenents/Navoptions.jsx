import React,{useEffect,useState} from 'react'
import Navcard from "./Navcard.jsx";
import "../styles/navoptions.css";
const Navoptions = ({miPhones,redmiPhones,laptop,fitnessAndLifeStyle,audio,accessories,tv,home}) => {
  const[miPhonesToggle,setMiPhonesToggle]=useState(false);
  const[redmiPhonesToggle,setRedmiPhonesToggle]=useState(false);
  const[laptopToggle,setLaptopToggle]=useState(false);
  const[fitnessAndLifeStyleToggle,setFitnessAndLifeStyleToggle]=useState(false);
  const[audioToggle,setAudioToggle]=useState(false);
  const[accessoriesToggle,setAccessoriesToggle]=useState(false);
  const[tvToggle,setTvToggle]=useState(false);
  const[homeToggle,setHomeToggle]=useState(false);

  useEffect(()=>{
    if(window.location.pathname === "/miphones"){
        return setMiPhonesToggle(true);
    }
    if(window.location.pathname === "/redmiphones"){
        return setRedmiPhonesToggle(true);
    }
    if(window.location.pathname === "/laptops"){
        return setLaptopToggle(true);
    }
    if(window.location.pathname === "/tv"){
        return setTvToggle(true);
    }
    if(window.location.pathname === "/radio"){
        return setAudioToggle(true);
    }
    if(window.location.pathname === "/accessories"){
        return setAccessoriesToggle(true);
    }
    if(window.location.pathname === "/home"){
        return setHomeToggle(true);
    }
    if(window.location.pathname === "/lifestyles"){
        return setFitnessAndLifeStyleToggle(true);
    }
  },[])
  return (
    <div className='navoptions'>
      {
        miPhonesToggle? miPhones.map((item)=>(
            <Navcard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null
      }
      {
        redmiPhonesToggle? redmiPhones.map((item)=>(
            <Navcard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null
      }
      {
        laptopToggle? laptop.map((item)=>(
            <Navcard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null
      }
      {
        fitnessAndLifeStyleToggle? fitnessAndLifeStyle.map((item)=>(
            <Navcard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null
      }
      {
        audioToggle? audio.map((item)=>(
            <Navcard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null
      }
      {
        accessoriesToggle? accessories.map((item)=>(
            <Navcard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null
      }
      {
        tvToggle? tv.map((item)=>(
            <Navcard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null
      }
      {
        homeToggle? home.map((item)=>(
            <Navcard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null
      }
    </div>
  )
}

export default Navoptions
