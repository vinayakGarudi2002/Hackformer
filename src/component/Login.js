import React , {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import  {actionCreator} from '../state/index'
import { bindActionCreators } from 'redux'


const Login = () => {
  const dispatch = useDispatch();
  const { alertAction } = bindActionCreators(actionCreator, dispatch);

    const [loginForm, setLoginForm] = useState({
  
        email: "",
        password: "",
      });
      const host = "http://localhost:5000"
      const loginFormChange = (e) => {
        setLoginForm((prevState) => {
          return {
            ...prevState,
            [e.target.name]: [e.target.value].toString(),
          };
        });
      };
     
 let navigate = useNavigate();
    
const handleSubmit= async (e)=>{
  e.preventDefault();
  try {
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors',           
      },
      body: JSON.stringify(loginForm)
    });
    const data = await response.json();
    if (response.status === 200) {
      // Set the cookie expiration date to 1 day from now
      localStorage.setItem("token",data.authtoken);
      // Navigate to the home page
      navigate(`/`);
      
      alertAction({
        display:"visible",
        message:"Success fully Logged in ",
        type:"success"
      })    //...alert
      return;
    }else{
      alertAction({
        display:"visible",
        message:"Enter Valid Credentials",
        type:"warning"
      })    //...alert
    }
  } catch (err) {
    alertAction({
      display:"visible",
      message:"Some Error ocurred try letter",
      type:"danger"
    })    //...alert
    console.error(err);
  }
}


  return (
    <div className={"container signUp-container  "} >
    <h1 className={"text-center my-2 login_signupForm"} >Login</h1>
     <div className="form-signUp my-2" >
     <form>
       
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelp"
            value={loginForm.email}
            onChange={(e) => {
              loginFormChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control "
            name="password"
            id="password"
            value={loginForm.password}
            onChange={(e) => {
              loginFormChange(e);
            }}

          />
        </div>
     
        <button type="submit" className="btn  btn-primary" onClick={(e)=>{
            handleSubmit(e)
        }}>
          Submit
        </button>
      </form>
     </div>
    </div>
  )
}

export default Login