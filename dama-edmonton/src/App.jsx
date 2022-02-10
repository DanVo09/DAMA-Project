import "./css/reset.css"
import "./scss/index.scss"

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import HomePage from "./pages/HomePage"
import About from "./pages/About"
import CheckOut from "./pages/CheckOut"
import Contact from "./pages/Contact"
import Courses from "./pages/Courses"
import Dashboard from "./pages/Dashboard"
import Events from "./pages/Events"
import Login from "./pages/Login"
import Memberships from "./pages/Memberships"
import NewsLetter from "./pages/NewsLetter"
import SignUp from "./pages/SignUp"

function App() {
  return (
    <>
       <Router>
          <Routes>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<About />} /> 
              <Route path="/checkout" element={<CheckOut />} /> 
              <Route path="/contact" element={<Contact />} /> 
              <Route path="/courses" element={<Courses />} /> 
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/events" element={<Events />} />  
              <Route path="/login" element={<Login />} />
              <Route path="/memberships" element={<Memberships />} /> 
              <Route path="/newsletter" element={<NewsLetter />} /> 
              <Route path="/signup" element={<SignUp />} />     
          </Routes>
       </Router>
    </>
  );
}

export default App;
