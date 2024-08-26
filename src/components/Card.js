import React from 'react'
import '../styles/Card.css'

function Card(props) {
  return (
    <div class="card">
        <img src={props.image} alt="Alt_Image" />
        <div class="container">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default Card