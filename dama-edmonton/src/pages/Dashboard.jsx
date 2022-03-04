import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import React  from 'react'



export default function Dashboard() {

    
    
    return (
        <div className='dashboard-page'>
          <aside className='dashboard-sidebar'>
            <a href="#" className='sidebar-dk'><UploadFileIcon className="cart-icon"/>Upload Files</a>
            <a href="#" className='sidebar-mb' title='Upload Files'><UploadFileIcon className="cart-icon"/></a>

            <a href="#" className='sidebar-dk'><BookOutlinedIcon className="cart-icon"/>Your Courses</a>
            <a href="#" className='sidebar-mb' title='Your Courses'><BookOutlinedIcon className="cart-icon"/></a>

            <a href="#" className='sidebar-dk'><CalendarTodayIcon className="cart-icon"/>Your Events</a>
            <a href="#" className='sidebar-mb' title='Your Events'><CalendarTodayIcon className="cart-icon"/></a>

            <a href="#" className='sidebar-dk'><WorkOutlineIcon className="cart-icon"/>Job Postings</a>
            <a href="#" className='sidebar-mb' title='Job Postings'><WorkOutlineIcon className="cart-icon"/></a>
          </aside>
          <div>
            <section className='user-profile'>
              <img src="https://picsum.photos/360/360" alt="User profile image" />
              <h3>User Email</h3>
              <h3>User Name</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatem autem eum aspernatur corrupti est iusto consectetur at in. Iusto consequuntur earum, sapiente distinctio accusantium commodi facere impedit expedita adipisci?</p>
              <button>Edit Profile</button>
            </section>
            <section className='user-courses'>
              <div>
                <h3>Your Courses and Events</h3>
                <div>
                  <p>placeholder</p>
                </div>
                <div>
                  <p>placeholder</p>
                </div>
              </div>
            </section>
            <section className='user-feedback'>
              <h3>You have recently completed... course</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae nihil eligendi vel vitae cum similique, nam quam fugiat maxime totam id itaque temporibus aut ab illo cumque aspernatur quasi?</p>
              <button>Give Feedback</button>
            </section>
          </div>
        </div>
      );
}



