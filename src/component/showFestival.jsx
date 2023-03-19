import React from "react";
import FestivalCard from "./cardFestival";


const ShowFestival=()=>{
    const card = [{name:"ganesh chaturti",img:"../../GaneshChaturthi.png",description:"Ganesh Chaturthi is a Hindu festival that celebrates the birth of Lord Ganesha, who is revered as the god of wisdom, prosperity, and good fortune. The festival is also known as Vinayaka Chaturthi or Vinayaka Chavithi and is observed during the Hindu month of Bhadrapada, which falls between August and September in the Gregorian calendar."},{name:"onam",img:"../../onam.png",description:"Onam is a major festival celebrated in the southern Indian state of Kerala, typically in the months of August or September. It is a ten-day harvest festival that marks the homecoming of the legendary King Mahabali, who is believed to visit Kerala during this period to ensure the well-being of his people."}]
    var state_arr = ["Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal"]
    
    const [place, setPlace] = React.useState('Enter state');

    const handleChange = (event) => {

   setPlace(event.target.value);

    }
    
    return (
<div>


<div style={{marginBottom:"50px"}}> 
<label>
  Select state  
  <select style={{marginLeft:"10px" }}value={place} onChange={handleChange} >
     <option value="null">Enter State</option>

    {state_arr.map(j =>{
       return <option value={j}>{j}</option>
    }) }
  </select>
</label>
</div>



<div class="row">
      
      {card.map((i,id) => {
        return <FestivalCard id={id} name={i.name} img ={i.img} description={i.description}  />;
      })}

      </div>
</div>
        

    )
}


export default ShowFestival;