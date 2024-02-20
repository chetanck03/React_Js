import React from 'react'
import "./Cards.css"

// Props =  Properties used for the objects
const Cards = (props) => {
  return (
    <div className='card'>
        <img src="https://th.bing.com/th/id/OIP.qj_N12iezCRBk3IJa0ezCwHaD5?rs=1&pid=ImgDetMain" alt=""  width={230}
        style={{border:"2px solid black" }}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>

    </div>
  )
}

export default Cards