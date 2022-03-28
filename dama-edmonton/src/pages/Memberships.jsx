import React from 'react'
import {Link} from 'react-router-dom'

export default function Memberships() {

    return (
        <div className='memberships-page'>
          <div className="memberships-wrapper">
            <section>
              <h2>Why Become a Member</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nam assumenda, odit, corrupti, vitae eveniet tenetur nobis libero consequatur pariatur quas ullam perferendis rem fuga repellat inventore maxime beatae delectus.</p>
            </section>

            <section className="individual-memberships memberships">
              <h2>Individual Membership Options</h2>

              <div className="membership-card">
                  <div>
                    <h3>Standard Membership</h3>
                    <p>$75</p>
                  </div>
                  <p>If you purchase an annual membership you are able to attend all monthly meetings - typically 10 meetings/year and access the 15% discount on the annual conferences in Calgary and Edmonton</p>
                  <div className='purchase'>
                    <Link to="#" className='purchase-membership'>PURCHASE</Link>
                  </div>
              </div>

              <div className="membership-card">
                  <div>
                    <h3>Student Membership</h3>
                    <p>$25</p>
                  </div>
                  <p>Enjoy all the same great benefits as the standard membership. Proof of academic enrollment is required.</p>
                  <div className='purchase'>
                    <Link to="#" className='purchase-membership'>PURCHASE</Link>
                  </div>
              </div>
            </section>

            <section className="corporate-memberships memberships">
              <h2>Corporate Membership Options</h2>

              <div className="membership-card">
                  <div>
                    <h3>Up to 5 Members</h3>
                    <p>$250</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eum soluta esse excepturi omnis optio, ab voluptates fugiat reiciendis quae vero repellat id saepe atque illum perspiciatis laborum dolor. Minima?</p>
                  <div className='purchase'>
                    <Link to="#" className='purchase-membership'>PURCHASE</Link>
                  </div>
              </div>

              <div className="membership-card">
                  <div>
                    <h3>6 or more Members</h3>
                    <p>$400</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eum soluta esse excepturi omnis optio, ab voluptates fugiat reiciendis quae vero repellat id saepe atque illum perspiciatis laborum dolor. Minima?</p>
                  <div className='purchase'>
                    <Link to="#" className='purchase-membership'>PURCHASE</Link>
                  </div>
              </div>

              <div className="membership-card">
                  <div>
                    <h3>Unlimited</h3>
                    <p>$1500</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eum soluta esse excepturi omnis optio, ab voluptates fugiat reiciendis quae vero repellat id saepe atque illum perspiciatis laborum dolor. Minima?</p>
                  <div className='purchase'>
                    <Link to="#" className='purchase-membership'>PURCHASE</Link>
                  </div>
              </div>
            </section>

          </div>
        </div>
    )
}



