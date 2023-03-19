import React, { useState } from 'react';
import './CreateHostEventForm.css'

const CreateHostEventForm = () => {
  const [formData, setFormData] = useState({
    event_name: '',
    name_host: '',
    place: '',
    limit: '',
    category: '',
    contact: '',
    description: '',
    images: [],
    budget: '',
    date: '',
  
    price: ''
  });

  const { event_name, name_host, place, limit, category, contact, description, images, budget, date,  price } = formData;

  const handleChange = e => {
    if(e.target.name==="images"){
        setFormData({ ...formData, [e.target.name]: [e.target.value] });

    }else{
        setFormData({ ...formData, [e.target.name]: e.target.value });

    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/host/host-events', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          mode: "cors",
          "auth-token":
            localStorage.getItem('token'),
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log(data); // do something with the response data
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="myform" onSubmit={handleSubmit}>
      <h2> REGISTER TO HOST AN EVENT </h2>
      <br />
      <div className="form-box">
      <div className="wrapper">
        <label>
          Event Name:
          <br /><input type="text" name="event_name" value={event_name} onChange={handleChange} />
        </label>
        <label>
          Host Name:
          <br /><input type="text" name="name_host" value={name_host} onChange={handleChange} />
        </label>
        <label>
          Place:
          <br /><input type="text" name="place" value={place} onChange={handleChange} />
        </label>
  
        <label>
          Limit:
          <br /><input type="text" name="limit" value={limit} onChange={handleChange} />
        </label>
  
        <label>
          Category:
          <br /><input type="text" name="category" value={category} onChange={handleChange} />
        </label>
  
        <label>
          Contact:
          <br /><input type="text" name="contact" value={contact} onChange={handleChange} />
        </label>
          
        <label>
          Description:
          <br /><input type="text" name="description" value={description} onChange={handleChange} />
        </label>

        <label>
          Images:
          <br /><input type="text" name="images" value={images} onChange={handleChange} />
        </label>

        <label>
          Budget:
          <br /><input type="text" name="budget" value={budget} onChange={handleChange} />
        </label>
  
        <label>
          Date:
          <br /><input type="text" name="date" value={date} onChange={handleChange} />
        </label>
  
        <label>
          Price per person:
          <br /><input type="text" name="price" value={price} onChange={handleChange} />
        </label>
  
        <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}
export default CreateHostEventForm;