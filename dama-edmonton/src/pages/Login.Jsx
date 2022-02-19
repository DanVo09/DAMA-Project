
import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


export default function Login() {


    const [email,setEmail] =useState();
    const [password,setPassword] =useState();
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate("/aboutus")
        }
    })

    async function login(){
        
        let item ={email,password};

        let result = await fetch("http://localhost:8000/api/login",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/aboutus")
  
    }


    return (
        <>
            <div className="login-form-container">
                <h1>Login Form</h1>
                
                <div class="form">    
                    <label for="email">Email</label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} name="email" />
                    <label for="name">Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" />
                    <button onClick={login}>Login</button>
                </div>   
            </div>  
        </>
    )
}



