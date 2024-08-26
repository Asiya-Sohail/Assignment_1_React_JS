import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/global.css';
import img1 from '../images/hijabs.jpg';
import img2 from '../images/hijab-caps.jpg';
import img3 from '../images/hijab-pins.jpg';
import img4 from '../images/brooch.jpg';
import img5 from '../images/headbands.jpg';
import img6 from '../images/Namaz-chaddar.jpg';

import React from 'react'

function Homepage() {
  return (
    <div class="homepage">
        <div className="header">
          < Header />
        </div>
        <div className="Card">
          <Card image={img1}  title="Elegant Hijabs" description="Soft, flowing hijabs in various colors and 
          patterns." />
          <Card image={img2}  title="Stylish Hijab Caps" description="Smooth and comfortable hijab caps 
          providing a neat, finished look." />
          <Card image={img3}  title="Charming Hijab Pins" description="A collection of hijab pins 
          featuring delicate designs." />
          <Card image={img4}  title="Sophisticated Brooch" description="An elegant brooch with intricate 
          metalwork and pearls." />
          <Card image={img5}  title="Embellished Headbands" description="Headbands designed to 
          complement your hijab, adding a touch of glamor." />
          <Card image={img6}  title="Namaz Chaddar" description=" A beautifully crafted prayer chaddar, 
          made from soft fabric." />
        </div>
        <div className="footer">
          < Footer />
        </div>
    </div>
  )
}

export default Homepage