import React, {useContext, useEffect, useState} from 'react';

import CartContext from '../../context/cart/CartContext';



export default function Membershipcards({obj}) {

    const { addCartToStorage } = useContext(CartContext)

    console.log()

    const [data, setData] = useState([]);
    useEffect(async ()=> {
        let result = await fetch("http://dama.web.dmitcapstone.ca/api/all_membership_types");
        result =await result.json();
        setData(result);

    },[])

    return (

        data.map((obj, membership_id) => {

            return(

                <div className='memberCard-container' key={obj.membership_id}>
                    <div className="membercard-content">
                        <h3 className="membercard-title">{obj.membership_type}</h3>
                        <p className="membercard-desc">{obj.membership_desc}</p>
                        <p className="membercard-price">${obj.membership_price}</p>
                        <button className="membercard-btn" onClick={ () => addCartToStorage(obj)}>Purchase</button>
                    </div>
                </div>

            )

          
        })
        
        
    )
}
