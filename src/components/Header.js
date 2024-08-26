import React from 'react'
import '../styles/Header.css'
import img from '../images/logo.png'

function Header() {
  return (
    <div class="head">
      <img src={img} alt="logo"/>
      <h1>Finest Hijab and Headwear Accessories</h1>
    </div>
  )
}

export default Header