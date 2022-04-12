import React from "react";

export default function ChangePassword(){


    return (
        <div className="form-wrapper">
            <form className="login-form-container">
            <h1>Change Password</h1>
            <div className="form">
                <label htmlFor="email_address" >E-Mail Address</label>
                    <input type="text" id="email_address" name="email" required autofocus/>
           
                <button type="submit">
                    Send Password Reset Link
                </button>
            </div>
               
            </form>
        </div>
        
    )
}