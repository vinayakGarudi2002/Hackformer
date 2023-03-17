import React from 'react'
import { useSelector } from 'react-redux'
import "./Style.css"

import { useDispatch } from 'react-redux'
import  {actionCreator} from '../state/index'
import { bindActionCreators } from 'redux'
const Alert = () => {
  const dispatch = useDispatch();
  const { alertAction } = bindActionCreators(actionCreator, dispatch);

  const alert = useSelector(state=>state.alert)
    let {type,message,display}=alert
   
if (display==="visible"){
  setTimeout(() => {
    alertAction({
      display:"hidden",
      message:"",
      type:""
    })  
  }, 1000);
}



  return (
    <div className={`alert alert-${type} alertCss`} style={{visibility:`${display}`,
 }} role="alert">
   {message}
  </div>
  )
}


export default Alert
