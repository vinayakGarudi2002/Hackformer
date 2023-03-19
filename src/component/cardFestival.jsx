import React, { useState } from "react";
import {  Link,useLocation } from "react-router-dom";
import RegisterEvent from "./RegisterFestival";




const FestivalCard =(props)=>{
    

   
    



    function handleClick(name){
        console.log(props.contact);

      


    }


    return (
        
        <div className="col-lg-4">
        <div >
        
          <img className=" imagecard " src={"https://drive.google.com/file/d/1AdvrDhAicThAFT0WxMgTnottuVqgc6Xl/view"} alt="Generic placeholder image" width="200" height="170" />
          </div>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          
          <p><button className="btn btn-secondary"><Link className="navbar-brand" onClick={()=>handleClick(props.name)} to="/RegisterFestival" state={{ name: props.name , description: props.description ,img: props.img,id:props.id }}>Register</Link></button></p>
          
        </div>

    );
}

export default FestivalCard;