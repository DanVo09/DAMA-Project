import React from 'react'

// Material UI Icons

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import GoogleMap from '../components/googleMap/GoogleMap';
export default function Contact() {
    

    return (
        <>
           <div className="contact-page-container">
               <div className="contact-page-wrapper">
                    <div className="header-banner">
                        <h2>how can we help you?</h2>
                        <p>Do you have a question? Feel free to ask us a question and we will get back to you asap!</p>
                    </div>
                    <section className="contact-form-section">
                        <h3>Contact Us</h3>
                        <div className="icon-container">
                            <a href="mailto:" className='icon-link'>
                                <EmailIcon />
                                <p>mail@dama-edmonton.com</p>
                            </a>
                        </div>
                        <div className="icon-container">
                            <a href="tel:" className='icon-link'>
                                <PhoneIcon />
                                <p>(780) 456-7890</p>
                            </a>
                        </div>
                        <p><span className="required">*</span>All fields are required for form submission</p>
                        <form action="POST" className="contact-form">
                            <div className="form-control">
                                <label htmlFor="firstName" className='form-label'>First Name</label>
                                <input type="text" name="firstName" className='form-input' required/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="lastName" className='form-label'>Last Name</label>
                                <input type="text" name="lastName" className='form-input' required/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="email" className='form-label'>Email</label>
                                <input type="email" name="firstName" className='form-input' required/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="phone" className='form-label'>Phone Number</label>
                                <input type="number" name="phone" className='form-input' required/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="textArea" className='form-label'>Requested Information</label>
                                <textarea name="textArea" id="textArea" cols="30" rows="10" className='form-input'></textarea>
                            </div>
                            <input type="submit" value="Submit" />
                        </form>
                    </section>
                    <section className="google-map-section">
                        <div className="section-header">
                            <h3>NAIT HP Center</h3>
                            <p>Meetings are normally held on Thursday evenings in the Spartan Center - Nexen Theater,  Room Y240 second floor just East of the HP Center.</p>
                            <div className="map-container">
                                <GoogleMap/>
                            </div>
                        </div>
                    </section>
               </div>
           </div>  
        </>
    )
}



