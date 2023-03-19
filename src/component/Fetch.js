import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventCard = ({ event }) => {
  return (
    <div className="card">
      <div className="card-header">{event.event_name}</div>
      <div className="card-body">
        <p>{event.description}</p>
        <p>Hosted by {event.name_host}</p>
        <p>Category: {event.category}</p>
        <p>Place: {event.place}</p>
        <p>Price: {event.price}</p>
        <p>Date: {event.date}</p>
        <p>Number of people: {event.no_people}</p>
        <p>Number of people: {event.no_people}</p>
      </div>
    </div>
  );
};

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [id, setId] = useState();

  const host = "http://localhost:5000";

  const getuserdata = async () => {
    try {
      const response = await fetch(`${host}/api/auth/getuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "cors",
          "auth-token": localStorage.getItem('token'),
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        setId(data.register[data.register.length -1])
        return ;
      } else {
        return false;
      }
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const fetchEvents = async () => {
    const response = await axios.get('http://localhost:5000/api/host/events');
    const categories = [...new Set(response.data.map(event => event.category))];
    setEvents(response.data);
    setCategories(categories);
    return response.data;
  };

  const filterEvents = (category) => {
    setSelectedCategory(category);
    setFilteredEvents(events.filter(event => event.category === category));
  };

  useEffect(() => {
    getuserdata();
    fetchEvents();
  }, []);

  return (
    <div>
      <select value={selectedCategory} onChange={(e) => filterEvents(e.target.value)}>
        <option value="">All categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      {(filteredEvents.length > 0 ? filteredEvents : events).map(event => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  );
};


export default EventList;
