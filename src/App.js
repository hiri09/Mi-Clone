import './App.css';
import Navbar from './compoenents/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Slider from "./compoenents/Slider";
import data from "./data/data.json";
import Offers from './compoenents/Offers';
import Heading from "./compoenents/Heading";
import StarProduct  from "./compoenents/StarProduct";
import HotacMenu from "./compoenents/HotacMenu";
import { Routes, Route } from "react-router-dom"
import Hotac from "./compoenents/Hotac";
import ProductRivew from "./compoenents/ProductRivew";
import Videos from "./compoenents/Videos.jsx";
import Banner from "./compoenents/Banner.jsx";
import Footer from "./compoenents/Footer.jsx";
import Navoptions from "./compoenents/Navoptions.jsx";
function App() {
  return (
    <Router>
      <Navbar />

      <Navoptions miPhones={data.miPhones}  redmiPhones={data.redmiPhones} tv={data.tv}
      laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home}
      audio={data.audio} accessories={data.accessories}/>
      
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProduct starProduct={data.starProduct}/>
      <Heading text="HOT ACCESSORIES"/>
      <HotacMenu/>

      <Routes>
        <Route exact path='/music' element={<Hotac music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}></Route>
        <Route exact path='/smartdevices' element={<Hotac smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}></Route>
        <Route exact path='/home' element={<Hotac home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}></Route>
        <Route exact path='/lifestyles' element={<Hotac lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>}></Route>
        <Route exact path='/mobileac' element={<Hotac mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}></Route>
      </Routes>
      <Heading text="PRODUCT REVIEWS"/>
      <ProductRivew productReviews={data.productReviews}/>
      <Heading text="VIDEOS"/>
      <Videos videos={data.videos}/>

      <Heading text="IN THE PRESS" />
      <Banner end={data.banner.end}/>

      <Footer footer={data.footer}/>
    </Router>
  );
}

export default App;
