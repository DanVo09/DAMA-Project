
import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Login() {

    const [email,setEmail] =useState();
    const [password,setPassword] =useState();
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate("/pages/Dashboard")
        }
    })

    async function login(){
        
        let item ={email,password};

        let result = await fetch("http://localhost:8000/api/postLogin",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        
        result = await result.json();

        console.log(result)
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/pages/Dashboard")
  
    }





    return (
        <>
            <form onSubmit={login} className="login-form-container">
                <h1>Sign in to Your Account</h1>
                
                <div class="form">
                    <label for="email">Email</label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} name="email" placeholder='Email or Username'/>
                    <label for="name">Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" placeholder='Password'/>
                    <div className='optional-info'>
                        
                            <input type="checkbox" name="keeploggedin" value="keeploggedin"/>
                            <label for="keeploggedin" className='keeploggedin'>Keep me logged in</label>
                            
                        
                        <Link to="/#">Forgot Password?</Link>
                    </div>
                    <Link to="/register">Create a New Account</Link>
                    <button type='submit'>Sign In</button>
                    
                </div>
                  
            </form>  
        </>
    )
}



