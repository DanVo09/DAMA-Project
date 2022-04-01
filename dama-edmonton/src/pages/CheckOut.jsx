import React, {useContext} from 'react'
import CartContext from '../context/cart/CartContext'
import CurrencyFormat from 'react-currency-format';




export default function Checkout() {

    const { cartItems } = useContext(CartContext)
    
    
    

    return (
        <div className='checkout-container'>
            <div className="checkout-wrapper">
                <h2>Check Out</h2>
                <div className="checkout-form">
                    <form action="POST" name="checkoutForm" className='checkout-form'>
                        <div className="contact-form-title">
                            <h3>Customer Information</h3>
                        </div>
                        <div className="form-control">
                            <label htmlFor="firstname" className='form-label'> <span className="required">*</span>First Name</label>
                            <input type="text" name="first-name" className='form-input' aria-required={true} required/>
                        </div>
                        <div className="form-control">
                            <label htmlFor="lastname" className='form-label'> <span className="required">*</span>Last Name</label>
                            <input type="text" name="lastname"  className='form-input' aria-required={true} required/>
                        </div>
                        <div className="form-control">
                            <label htmlFor="phoneNumber" className='form-label'> <span className="required">*</span>Phone number</label>
                            <input type="tel:" name="phoneNumber"  className='form-input' aria-required={true} required defaultValue="(123) 456-7890"/>
                        </div>
                        <div className="form-control">
                            <label htmlFor="email" className='form-label'> <span className="required">*</span>Last Name</label>
                            <input type="mailto:" name="email"  className='form-input' aria-required={true} required defaultValue="janesmith@gmail.com"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}



