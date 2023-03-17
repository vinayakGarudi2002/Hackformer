import {
    ADD_STUDENT_REQUEST,
    ADD_STUDENT_SUCCESS,
    ADD_STUDENT_FAILURE,
  } from "../action-creator/index";
  
  const initialState = {
    isLoading: false,
    error: null,
    student: null,
  };
  
  const studentReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_STUDENT_REQUEST:
        return { ...state, isLoading: true };
      case ADD_STUDENT_SUCCESS:
        return { ...state, isLoading: false, student: action.payload, error: null };
      case ADD_STUDENT_FAILURE:
        return { ...state, isLoading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default studentReducer;
  