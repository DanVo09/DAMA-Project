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
import CheckOut from './pages/CheckOut';
import JobsBoard from './pages/JobsBoard';
import PostSingle from './pages/PostSingle';
import CourseDetail from './components/courses/course-detail';
import Navbar from './components/navbar/NavBar';
import InsertJob from './components/jobs/insertJob';
import SelfStudy from './pages/SelfStudy';
import InstructorLed from './pages/instructorlead';
import ChangePassword from './pages/ChangePassword';
import UpdateJob from './components/jobs/update';
import Profile from './components/dashboard/profile';
import CourseHistory from './components/dashboard/coursehistory';
import EventHistory from './components/dashboard/eventhistory';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import ApplyJob from './components/jobs/applyjob';
import UserJobList from './components/jobs/userJoblist';
import JobDetail from './components/jobs/jobdetail';
import Editprofile from './components/dashboard/editprofile';


const PAYPAL_KEY = process.env.REACT_APP_PAYPAL_CLIENT_ID

const initialOptions = {
    "client-id":  PAYPAL_KEY,
    currency: "CAD",
    intent: "capture"
}

function App() {
  
  return (
    <PayPalScriptProvider options={initialOptions}>
        <div className="App">
            <Router>
                <Navbar/> 
                <Routes>  
                    <Route index element={<HomePage />}/>
                    <Route path="/login" element={<Login />}/> 
                    <Route path="/aboutus" element={<About />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/memberships" element={<Memberships />}/> 
                    <Route path="/dashboard" exact element={<Dashboard />}/> 
                    <Route path="/dashboard/:id" element={<Editprofile />}/> 
                    <Route path="/newsletter" element={<Newsletter />}/> 
                    <Route path="/events" exact element={<EventPages />}/> 
                    <Route path="/events/:id" element={<EventDetail />}/> 
                    <Route path="/courses/:id" element={<CourseDetail />}/> 
                    <Route path="/courses" exact element={<Courses />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/checkout" element={<CheckOut />}/>
                    <Route path="/post" element={<PostSingle />}/>
                    <Route path="/selfstudy" element={<SelfStudy />}/>
                    <Route path="/instructorlead" element={<InstructorLed />}/>
                    <Route path="/changepassword" element={<ChangePassword />}/>
                    <Route path="/coursehistory" element={<CourseHistory />}/>
                    <Route path="/eventhistory" element={<EventHistory />}/>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/jobsboard" exact element={<JobsBoard />}/>
                    <Route path="/jobsboard/:posting_id" element={<JobDetail />}/>
                    <Route path="/insertjob" element={<InsertJob />}/>
                    <Route path="/updatejob/:posting_id" element={<UpdateJob />}/>
                    <Route path="/applyjob/:id" element={<ApplyJob />}/>
                    <Route path="/userjobposting" element={<UserJobList />}/>

                </Routes>
                <Footer/>
            </Router>
        </div>
    </PayPalScriptProvider>
    
  );
}

export default App;
