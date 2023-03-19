import { Provider } from 'react-redux';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Home from './component/Home';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Signup from './component/Signup';
import StudentForm from './component/StudentForm';
import store from './state/store';
import CreateHostEventForm from './component/CreateHostEventForm';
import HostHomepage from './component/HostHomepage';
import TransportationAccomodation from './component/TransportationAccomodation';
import EventList from './component/Fetch';

function App() {
  return (
    <div className="App">
    <Provider store={store}>

 <Router>
<div className="header">
<Navbar />

 <Alert/>
</div>
   

<Routes>
    <Route exact path="/" element={ <div className=" "><Home/></div>} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/form" element={<StudentForm/>} />
      <Route path="/host_form" element={<CreateHostEventForm/>} />
      <Route path="/host_home" element={<HostHomepage/>} />
      <Route path="/transport_accomodate" element={<TransportationAccomodation/>} />
      <Route path="/event_list" element={<EventList/>} />
     
</Routes>
    {/* </div> */}

    </Router>
   
</Provider>
 
    </div>
  );
}

export default App;
