import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import  {actionCreator} from '../state/index'
import { bindActionCreators } from 'redux'
function StudentForm() {
    const dispatch = useDispatch();
    const { addStudent } = bindActionCreators(actionCreator, dispatch);
  // State variables to hold the form data
  const [name, setName] = useState('');
  const [rollno, setRollno] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [branch, setBranch] = useState('');

  // Handler functions to update the state variables
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRollnoChange = (e) => {
    setRollno(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleBranchChange = (e) => {
    setBranch(e.target.value);
  };

  // Handler function to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the server
    // Implement your API call or data submission logic here

   try {
    addStudent({ name, rollno, gender, age, branch })
    console.log({ name, rollno, gender, age, branch });
    // Clear the form after submission
    setName('');
    setRollno('');
    setGender('');
    setAge('');
    setBranch('');
   } catch (error) {
    console.log(error)
   } 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="rollno">Roll No:</label>
        <input type="text" id="rollno" value={rollno} onChange={handleRollnoChange} />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <input type="text" id="gender" value={gender} onChange={handleGenderChange} />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" value={age} onChange={handleAgeChange} />
      </div>
      <div>
        <label htmlFor="branch">Branch:</label>
        <input type="text" id="branch" value={branch} onChange={handleBranchChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;
