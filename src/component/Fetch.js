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
        <img src={event.images[0]}/>
      </div>
    </div>
  );
};

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get('http://localhost:5000/api/host/events');
      setEvents(response.data);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      {events.map(event => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
