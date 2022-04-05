
import React, {Component, useEffect} from 'react'
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

class Login extends Component{

    state = {
        email: '',
        password: '',
        error_list: [],
    }

    loginForm = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://127.0.0.1:8000/api/signin', this.state);
        if(res.data.status === 200)
        {
            console.log(this.state)
            localStorage.setItem("user-info",JSON.stringify(this.state))
            window.location.reload();
            console.log(res.data.message)
            fetch('http://127.0.0.1:8000/api/signin',{
                method: 'post',
                body: JSON.stringify(
                    this.state
                ),
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                }
            }).then(function(response){
                response.json().then(function(resp){
                    console.log(resp)
                })
            })
        } else {
            this.setState({
                error_list: res.data.validate_err,
           }); 
        }
    }


    render(){
        
        return(
            
            <form onSubmit={this.loginForm} className="login-form-container">
                <h1>Sign in to Your Account</h1>
                
                <div class="form">
                    <label for="email">Email</label>
                    <input type="text" onChange={(item) => {this.setState({email:item.target.value})}} name="email" placeholder='Your email'/>
                    <span className='error'>{this.state.error_list.email}</span>
                    <label for="name">Password</label>
                    <input type="password" onChange={(item) => {this.setState({password:item.target.value})}} name="password" placeholder='Password'/>
                    <span className='error'>{this.state.error_list.password}</span>
                    <div className='optional-info'>
                        <input type="checkbox" name="keeploggedin" value="keeploggedin"/>
                        <label for="keeploggedin" className='keeploggedin'>Keep me logged in</label>
                        <Link to="/#">Forgot Password?</Link>
                    </div>
                    <Link to="/register">Create a New Account</Link>
                    <button type='submit'>Sign In</button>
                    
                </div>
            </form>  
        );
    }
}

export default function (props){

    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate("/dashboard")
        }
    })

    return (
        <Login/>
    )
}



