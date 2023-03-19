import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterEvent() {
  const location = useLocation();
  const navigate = useNavigate();
  const eventId = location.state.id;
  const [loading, setLoading] = useState(false);

  async function handleRegistration() {
    setLoading(true);
    // try {
    //   const res = await axios.post(`http://localhost:5000/api/customer/register-event/${eventId}`);
    //   console.log(res.data); // do something with the response
    //   navigate("/about"); // navigate to success page
    // } catch (error) {
    //   console.error(error);
    //   // handle error and display error message to user
    // }

    try {
      const response = await fetch(`http://localhost:5000/api/customer/register-event/${eventId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "cors",
          "auth-token":
            localStorage.getItem('token'),
        },
        body: JSON.stringify({}),
      });
      if (!response.ok) {
        throw new Error("Failed to register for event");
      }
      navigate("/about");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <div className="Register-page jumbotron p-3 p-md-5 text-white bg-dark">
      <div className="col-md-6 px-0 padd">
        <img src={location.state.img} className="image-register"></img>
        <h1 className="display-4 font-italic">{location.state.name}</h1>
        <p className="lead my-3">{location.state.description}</p>
      </div>
      <div className="bg-secondary  register-desc ">
        <button
          type="button"
          onClick={handleRegistration}
          className="btn btn-light button-register"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </div>
    </div>
  );
}

export default RegisterEvent;
