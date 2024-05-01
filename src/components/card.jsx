import React from 'react'
import "../App.css"

const Card = (props) => {
  return (
    <div className="card-container">
        
            <h1 style={{textAlign:"center",marginBottom:"10px" ,fontSize:"20px", color:"#ffc300"}}>{props.title}</h1>
           
            <div className="service-content" style={{textAlign:"center"}}>
                <p style={{textAlign:"center" ,fontWeight:"lighter"}}>
                    {props.content}
                </p>

            </div>
        
    </div>

  )
}

export default Card;
