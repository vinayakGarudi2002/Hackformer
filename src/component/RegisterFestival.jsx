import React, { useState } from "react";
import { Route,useLocation, useNavigate } from 'react-router-dom'



function RegisterEvent(){
    const location = useLocation();
    const navigate = useNavigate();
    const name = location.state.name
    const description=location.state.description
    const img=location.state.img

    // let [hidden,setHidden]=useState(true);
    // let [hiddenLast,setHiddenLast]=useState(true);

   function handleSubmit(){
    // setHidden(false)
    // setTimeout(() => {
    //   }, 3000);
    //   setHidden(true)
    // //   setHiddenLast(false);
    // //   setTimeout(() => {
    // //   }, 5000);
      navigate("/about");
    

   }
    return(
        <div class="Register-page jumbotron p-3 p-md-5 text-white bg-dark">
        <div class="col-md-6 px-0 padd">
        <img src={img} className="image-register"></img>
          <h1 class="display-4 font-italic">{name}</h1>
          <p class="lead my-3">{description}</p>
        </div>
        <div className="bg-secondary  register-desc " >
        <button type="button" onSubmit={handleSubmit} class="btn btn-light button-register">Register</button>
      </div>
      </div>
      
        
    )
}

export default RegisterEvent;