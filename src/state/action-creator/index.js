

export const alertAction=(alertObj)=>{
    return (despatch)=>{
        despatch({
            type:"alert",
            payload:alertObj
        })
    }
}

// Define the action types
export const ADD_STUDENT_REQUEST = 'ADD_STUDENT_REQUEST';
export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS';
export const ADD_STUDENT_FAILURE = 'ADD_STUDENT_FAILURE';

// Define the action creator function to submit the form data
export const addStudent = (formData) => async (dispatch) => {
  dispatch({ type: ADD_STUDENT_REQUEST });

  try {
    const response = await fetch('http://localhost:5000/api/form/students', {
      method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "cors",
          "auth-token":
            localStorage.getItem('token'),
        },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    dispatch({ type: ADD_STUDENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_STUDENT_FAILURE, payload: error.message });
  }
};
