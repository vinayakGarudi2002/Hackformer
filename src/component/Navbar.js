import React ,{useContext,useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import {  Link,useLocation } from "react-router-dom";

const Navbar = () => {
  const location=useLocation();
  let navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate("/login")
  }

  return (
   <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
   <Link className="navbar-brand" to="/">hacformers</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link className={`nav-link ${location.pathname==="/"?"active":""} `} style={{ color: `${location.pathname==="/"?"purple":"black"}`}} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
         <Link className={`nav-link ${location.pathname==="/about"?"active":""}`}
         style={{ color: `${location.pathname==="/about"?"purple":"black"}`}} 
         
          to="/about">About</Link>
        </li>
       
     
      </ul>
      
      {
        !localStorage.getItem('token')? <span><Link className="btn btn-sm nav-btn"  to="/login" role="button" style={{ boxShadow: `${location.pathname==="/login"?"3px 3px rgb(80 80 80)":""}`,marginLeft: "-4px"}}>Login</Link>
      <Link className="btn   btn-sm nav-btn" to="/signup" role="button"style={{ boxShadow: `${location.pathname==="/signup"?"3px 3px rgb(80 80 80)":""}`,marginLeft:"10px"}}>Sign up</Link></span>: <button className={"btn  btn-sm nav-btn"} onClick={handleLogout} style={{ boxShadow: `${location.pathname==="/logout"?"3px 3px rgb(80 80 80)":""}`,
     marginLeft: "-4px" }}>Logout</button>
      }
      
    </div>
  </div>
</nav>

   </>
  )
}

export default Navbar