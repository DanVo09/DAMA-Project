import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import "./css/reset.css"
import "./scss/index.scss"

import Login from "./pages/Login.jsx";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import EventPages from './pages/Events';
import EventDetail from './components/Events/event-detail';
import Newsletter from "./pages/NewsLetter";
import Register from "./pages/SignUp";
import Memberships from "./pages/Memberships";
import Footer from './components/footer/footer';
import Dashboard from "./pages/Dashboard";
import CourseDetail from './components/courses/course-detail';
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
            <Route path="/dashboard" element={<Dashboard />}/> 
            <Route path="/newsletter" element={<Newsletter />}/> 
            <Route path="/events" exact element={<EventPages />}/> 
            <Route path="/events/:id" element={<EventDetail />}/> 
            <Route path="/courses/:id" element={<CourseDetail />}/> 
            <Route path="/courses" exact element={<Courses />}/> 
            <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
