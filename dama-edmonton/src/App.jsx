import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import "./css/reset.css"
import "./scss/index.scss"

import Login from "./pages/Login.jsx";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Events from "./pages/Events";
import Newsletter from "./pages/NewsLetter";
import Register from "./pages/SignUp";
import Memberships from "./pages/Memberships";

import Navbar from './components/navbar/NavBar'

function App() {
  return (
    <Router>
        <Navbar/> 
        <Routes>   
            <Route index element={<HomePage />}/>
            <Route path="/login" element={<Login />}/> 
            <Route path="/aboutus" element={<About />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/memberships" element={<Memberships />}/> 
            <Route path="/newsletter" element={<Newsletter />}/> 
            <Route path="/events" element={<Events />}/> 
            <Route path="/courses" element={<Courses />}/> 
            <Route path="/contact" element={<Contact />}/>
        </Routes>
    </Router>
  );
}

export default App;
