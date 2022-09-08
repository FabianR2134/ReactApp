import React from "react";
import './Title.css'; 


export const Title = ({ text }) => {
   
  return (
    <div className="tittle-container">
        <label className="tittle-label">{text}</label> 
    </div>
  )
}
