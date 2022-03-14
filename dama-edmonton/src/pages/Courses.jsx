import React from 'react';
import { Link } from 'react-router-dom';

/*
import axios from 'axios';

class Courses extends React.Component {
  // State of your application
  state = {
    courses: [],
    error: null,
  };

  // Fetch your courses immediately after the component is mounted
  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/courses');
      this.setState({ courses: response.data.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, course } = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <div className="Courses">
        <ul>
          {this.state.courses.map(course => (
            <li key={course.id}>{course.attributes.name}: {course.attributes.price}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Courses;
*/


import FeedBackForm from '../components/feedbackForm/feedbackForm';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';


export default function Course() {
    

    return (
      
        <>
        <div className="course-page-wrapper">
          <div className='course-banner' style={{background: `linear-gradient(rgba(255,255,255,0.6),
            rgba(2255,255,255,0.6) ), url("assets/images/profile-picture/background.jpg") top/cover no-repeat` }}>
            <h1>TRAINING, EDUCATION, CERTIFICATION</h1>
          </div>
          <div className='search-form'>

            <button>Courses</button>
            <input type="text" name="search-bar" />
            <input type="submit" name="search-submit" id="search-submit" />
            
          </div>
          <div className='main-container'>
            <div className='sidebar'>
              <h2>Online Courses</h2>
              <ul>
                <li><a href="#">Data Governance and Stewardship (Certified DGS Professional)</a></li>
                <li><a href="#">Data Foundations/Data Literacy (Certified Business Intelligence Professional (CBIP, or Certified Data Professional - CDP))</a></li>
                <li><a href="#">Data Management (Prepare for the CDMP )</a></li>
                <li><a href="#">Data Modeling</a></li>
                <li><a href="#">Certified Business Intelligence Professional (CBIP, or Certified Data Professional-CDP)</a></li>
                <li><a href="#">Information Systems (Certified Business Intelligence Professional (CBIP, or Certified Data Professional))</a></li>
                <li><a href="#">Business Intelligence and Data Analytics: (Certified Business Intelligence Professional (CBIP, or Certified Data Professional))</a></li>
              </ul>

            </div>

            <div className='content-detail'>
              <div className='course-card'>
                <h2>Self Study Courses</h2>
                <ul>
                    <li>$595</li>
                    <li>Start at Any Time</li>
                    <li>Work at your own pace</li>
                    <li>Ideal for Experienced Data Professionals</li>
                </ul>
                <Link to="#">Learn More &#62;</Link>
              </div>

              <div className='course-card'>
                <h2>Instrutor-Led, Group Study-paced Learning</h2>
               
                <ul>
                  <li>$1295</li>
                  <li>Live Sessions </li>
                  <li>Cohort Paced, 12 week program</li>
                  <li>One hour weekly live discussion and Q&#38;A</li>
                </ul>
                <a href="#">More infor</a>
              </div>

            </div>

          </div>

          <div className='certification-content'>
            <h2>Certification Examinations</h2>
          
              <ul>
                <li><a href="#"><CallIcon className='call-icon'/> 1.800.843.8227 </a> to schedule a date and time to take the Data Governance and Stewardship Professional examination or </li>
                <li><a href="#"><EmailIcon className='email-icon'/> damaedmonton@gmail.com </a> with your preferred dates for an online proctored examination. </li>
              </ul>
          </div>

        </div>

        <div className='feedback'>
          <FeedBackForm/>
        </div>
        </>
    )
}



