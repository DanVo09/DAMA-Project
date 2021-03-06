import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import Membershipcards from '../components/membershipOptionsCard/MembershipCards';

export default function Memberships() {
  

  return (
    
        <section className="membership-content">
              <div className="banner" style={{background: `url("assets/images/profile-picture/background.jpg") center/cover no-repeat` }}>
                <div className="header-banner">
                    <h1>Memberships</h1>
                  
                </div>

            </div>
            <div className="memberships-wrapper">
              <p className='benefits-subtext'>Purchase your DAMA Membership today to recieve exclusive benefits such as free attendance to any of our meetings!</p>
              <div className="member-benefits-container">
                <div className="member-benefits">
                  <h3>Membership Benefits</h3>
                  <ul className="benefits-list">
                    <li className="benefits-item"><CheckIcon /> <p>Networking opportunity to connect with local Information Management Professionals for sharing industry trends, problems and solutions.</p> </li>
                    <li className="benefits-item"><CheckIcon /> Quarterly Newsletter of activities and events to members.</li>
                    <li className="benefits-item"><CheckIcon /> Professional certification through the Institute for Certification of Computer Professionals (ICCP).</li>
                    <li className="benefits-item"><CheckIcon /> Excellent platform for job seekers and hiring organizations to connect.</li>
                    <li className="benefits-item"><CheckIcon /> Publicity through chapter website for sponsoring and participating organizations. For more information contact damaedmoton@gmail.com</li>
                    <li className="benefits-item"><CheckIcon /> 20% Discount on local chapter meetings.</li>
                    <li className="benefits-item"><CheckIcon /> 10% Discount for events organized by chapter including conference registrations, workshops and networking events.</li>
                  </ul>
                </div>
                <aside className="monthly-meetings">
                    <h3>Attend Monthly Meetings</h3>
                    <p>A small meeting fee is required to offset the cost of the meeting to cover finger food, coffee and soft drinks  <b>$12 for members including cooperating associations: IIBA, NAIT, CIPS, URISA, MRIA,; $15 non-members.</b></p>

                    <p><b>Students and unemployed</b> are encouraged to attend for a very small fee $5</p>

                    <b>Members get to attend monthly events without paying any additional monthly fees - Just bring your membership payment confirmation.</b>
                </aside>
              </div>
           
              <div className="membership-options">
                  <h2 className='membership-options-title'>Our Membership Options</h2>
                  <p className="member-options-subtext">
                    With 5 plans to choose from DAMA has many different ways to accomodate the membership needs of you or your company.
                  </p>
                  <div className="membership-options-container">
                      <Membershipcards />
                  </div>
                  
              </div>
            </div>
        </section>
  )
}
