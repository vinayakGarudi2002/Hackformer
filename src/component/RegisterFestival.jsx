import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import TransportationAccomodation from "./TransportationAccomodation";
import { useDispatch } from 'react-redux'
import  {actionCreator} from '../state/index'
import { bindActionCreators } from 'redux'
function RegisterEvent() {
  const location = useLocation();
  const navigate = useNavigate();
  const eventId = location.state.id;
  const [loading, setLoading] = useState(false);
  const [isTransportAccomNeeded, setIsTransportAccomNeeded] = useState(false);
  const dispatch = useDispatch();
  const { alertAction } = bindActionCreators(actionCreator, dispatch);
  async function handleRegistration() {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/customer/register-event/${eventId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "cors",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          isTransportAccomNeeded,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to register for event");
      }
      alertAction({
        display:"visible",
        message:"Success fully registered",
        type:"success"
      }) 
      navigate("/");

      return;
      
      //...alert
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  function handleRadioChange(e) {
    setIsTransportAccomNeeded(e.target.checked);
  }

  return (
    <div className="Register-page jumbotron p-3 p-md-5 text-white bg-dark">
      <div className="col-md-6 px-0 padd">
        <img src={location.state.img} className="image-register"></img>
        <h1 className="display-4 font-italic">{location.state.name}</h1>
        <p className="lead my-3">{location.state.description}</p>
      </div>
      <div className="bg-secondary register-desc">
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="transportAccomYes"
            name="transportAccomNeeded"
            value="true"
            checked={isTransportAccomNeeded}
            onChange={handleRadioChange}
          />
          <label className="form-check-label" htmlFor="transportAccomYes">
            Accommodation and Transportation Required
          </label>
        </div>
        <button
          type="button"
          onClick={handleRegistration}
          className="btn btn-light button-register"
          disabled={!isTransportAccomNeeded || loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </div>

      {isTransportAccomNeeded && <TransportationAccomodation />}
    </div>
  );
}

export default RegisterEvent;
