import React, { useState } from 'react';
import axios from 'axios';

const CreateHostEventForm = () => {
  const [formData, setFormData] = useState({
    event_name: '',
    name_host: '',
    place: '',
    limit: '',
    category: '',
    contact: '',
    description: '',
    images: "",
    budget: '',
    date: '',
    price: ''
  });

  const { event_name, name_host, place, limit, category, contact, description, images, budget, date, price } = formData;

  const handleChange = e => {
    if (e.target.name === 'image') {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = e => {
        setFormData({ ...formData, image: e.target.result });
      };
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  

  const handleSubmit = async e => {
    e.preventDefault();
  
    if (formData.images === "") {
      return; // return or show an error message
    }
  
    // Upload images to Cloudinary
    const imageUrls = await Promise.all(
      formData.images.map(async image => {
        const formData = new FormData();
        formData.append('image', image);
        const res = await axios.post('http://localhost:5000/api/cloudinary/upload-image', formData);
        return res.data.url;
      })
    );
  
    // Create event with image urls
    try {
      const response = await fetch('http://localhost:5000/api/host/host-events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          mode: 'cors',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ ...formData, images: imageUrls })
      });
  
      const data = await response.json();
      console.log(data); // do something with the response data
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Event Name:
        <input type="text" name="event_name" value={event_name} onChange={handleChange} />
      </label>
      <label>
        Host Name:
        <input type="text" name="name_host" value={name_host} onChange={handleChange} />
      </label>
      <label>
        Place:
        <input type="text" name="place" value={place} onChange={handleChange} />
      </label>
      <label>
        Limit:
        <input type="text" name="limit" value={limit} onChange={handleChange} />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={category} onChange={handleChange} />
      </label>
      <label>
        Contact:
        <input type="text" name="contact" value={contact} onChange={handleChange} />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={description} onChange={handleChange} />
      </label>
      <label>
        Images:
        <input type="file" name="images" onChange={handleChange} multiple />
      </label>
      <label>
        Budget:
        <input type="text" name="budget" value={budget} onChange={handleChange} />
      </label>
      <label>
        Date:
        <input type="text" name="date" value={date} onChange={handleChange} />
      </label>
      <label>
        Price:
        <input type="text" name="price" value={price}
onChange={handleChange} />
</label>
<button type="submit">Create Event</button>
</form>
);
};

export default CreateHostEventForm;

