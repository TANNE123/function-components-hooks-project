import React from "react"
import './css.modules.css'


const Card=({title,img,text})=>{
    return(
        <div className="useAge">
        <h1>{title}</h1>
        <img src={img} alt="" />
        <h3>{text}</h3>
        </ div>
    )
}

export default Card