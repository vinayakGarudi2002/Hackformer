const alertReducer =(state={
    display:"hidden",
    message:"Alert ",
    type:"success"
  },action)=>{

    if(action.type==="alert"){
        return  action.payload
    }else{
        return state
    }
    
    }
    
    export default alertReducer