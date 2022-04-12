import React from 'react'
import 
MemberCardData from './memberCardData'



export default function Membershipcards() {

    

    console.log()

    return (

        MemberCardData.map((obj, id) => {

            return(

                <div className='memberCard-container' key={obj.id}>
                    <div className="membercard-content">
                        <h3 className="membercard-title">{obj.title}</h3>
                        <p className="membercard-desc">{obj.detail}</p>
                        <p className="membercard-price">${obj.price}.00</p>
                        <button className="membercard-btn">Purchase</button>
                    </div>
                </div>

            )

          
        })
        
        
    )
}
