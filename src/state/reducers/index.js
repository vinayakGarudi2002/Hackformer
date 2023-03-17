import { combineReducers } from "redux"
import alertReducer from "./alertReducer"
import studentReducer from "./studentReducer"

const reducer = combineReducers({
    alert:alertReducer,
    student:studentReducer
})

export default reducer