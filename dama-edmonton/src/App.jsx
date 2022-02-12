

import "./css/reset.css"
import "./scss/index.scss"
import Login from "./pages/Login.jsx";
import Homepage from "./pages/HomePage";
import Aboutus from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Events from "./pages/Events";
import Newsletter from "./pages/NewsLetter";
import Register from "./pages/SignUp";
import Memberships from "./pages/Memberships";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      
        <div className="content">
        <Switch>
        
            <Route exact path="/"><Homepage /></Route>
            <Route path="/login"> <Login /> </Route>
            <Route path="/aboutus"> <Aboutus /></Route>
            <Route path="/register"> <Register /></Route>
            <Route path="/memberships"> <Memberships /></Route>
            <Route path="/newsletter"> <Newsletter /></Route>
            <Route path="/events"> <Events /></Route>
            <Route path="/courses"> <Courses /></Route>
            <Route path="/Contact"> <Contact /></Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
