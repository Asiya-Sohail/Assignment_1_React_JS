import React from 'react'
import '../styles/Footer.css'
import img from '../images/icons.png'

function Footer() {
  return (
    <div class="foot">
        <div class="cont">
            <ul>
            <li class="bold">Our Satisfied Customers</li>
          </ul>
          <ul>
            <li class="bold">Favourites</li>
            <li>Hijabs</li>
            <li>Hijab caps</li>
            <li>Brooch</li>
            <li>Hijab pins</li>
          </ul>
          <ul>
            <li class="bold">Privacy Policy</li>
            <li>Term & Conditions</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
          </ul>
      </div>
      <div class="contact">
          <h3>Contact </h3>
          <img src={img} alt="icons"/>
      </div>
    </div>
  )
}

export default Footer