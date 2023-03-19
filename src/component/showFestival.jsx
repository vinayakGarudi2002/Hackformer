import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FestivalCard from "./cardFestival";


const ShowFestival=()=>{
    const [events, setEvents] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [id, setId] = useState();
  
    const host = "http://localhost:5000";
  
 
  
    const fetchEvents = async () => {
      const response = await axios.get('http://localhost:5000/api/host/events');
      const categories = [...new Set(response.data.map(event => event.place))];
      setEvents(response.data);
      setCategories(categories);
      return response.data;
    };
  
    const filterEvents = (place) => {
      setSelectedCategory(place);
      setFilteredEvents(events.filter(event => event.place === place));
      // console.log(filteredEvents)
    };
  
    useEffect(() => {
      fetchEvents();
    }, []);


    const card = [{name:"ganesh chaturti",img:"../../GaneshChaturthi.png",description:"Ganesh Chaturthi is a Hindu festival that celebrates the birth of Lord Ganesha, who is revered as the god of wisdom, prosperity, and good fortune. The festival is also known as Vinayaka Chaturthi or Vinayaka Chavithi and is observed during the Hindu month of Bhadrapada, which falls between August and September in the Gregorian calendar."},{name:"onam",img:"../../onam.png",description:"Onam is a major festival celebrated in the southern Indian state of Kerala, typically in the months of August or September. It is a ten-day harvest festival that marks the homecoming of the legendary King Mahabali, who is believed to visit Kerala during this period to ensure the well-being of his people."}]
    var state_arr = ["Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal"]
    
    const [place, setPlace] = React.useState('Enter state');

    const handleChange = (event) => {

   setPlace(event.target.value);

    }
    
    return (
<div>


<div>
      <select value={selectedCategory} onChange={(e) => filterEvents(e.target.value)}>
        <option value="">All States</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      {(filteredEvents.length > 0 ? filteredEvents : events).map(event => (
<FestivalCard key={event._id} id={event._id} name={event.event_name} img ={event.images[0]} description={event.description}  />
      ))}
    </div>
</div>
        

    )
}


export default ShowFestival;