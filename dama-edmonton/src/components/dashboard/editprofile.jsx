
import React, {useState, useEffect} from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Editprofile() {
    const navigate = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem('user-infor')){
            navigate("/login")
        }
    })

    const [name, setName] = useState(() => {
        const saved = localStorage.getItem("user-info");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
    
      const userId = Number(name.map(obj => obj.user_id))
    
    const [last_name,setLastName]=useState("")
    const [first_name,setFirstName]=useState("")
    const [email,setEmail]=useState("")
    const [image,setImage]=useState("")
    
    const[allmemberData, setAllmemberData] = useState([])
    useEffect(async ()=> {
        let result = await axios.get("http://dama.web.dmitcapstone.ca/api/all_members");
        setAllmemberData(result.data)
        console.log(allmemberData)
        const userdata= allmemberData.filter(obj=> obj.user_id === userId)
        console.log(userdata)
        setFirstName(userdata.map(obj => obj.first_name).toString())
        setLastName(userdata.map(obj => obj.last_name).toString())
        setEmail(userdata.map(obj => obj.email).toString())
    },[])

    async function signUp()
    {
        
        let item = {first_name, last_name, email, image}
        console.warn(item)

       let result = await fetch("http://localhost:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })

        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/")

    }
    
    return (
        <>
      
            <div className='form-wrapper'>
                <div className="login-form-container">
                    <h1>Edit Profile</h1>
                        
                        <div class="form">    
                            <label for="firstname">First Name</label>
                            <input type="text" value={first_name} onChange={(e)=>setFirstName(e.target.value)} name="firstname" />
                            <label for="lastname">Last Name</label>
                            <input type="text" value={last_name} onChange={(e)=>setLastName(e.target.value)} name="lastname" />
                            <label for="email">Email</label>
                            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" />
                            <label for="image">Profile Picture</label>
                            <input type="file" value={image} onChange={(e)=>setImage(e.target.files[0])} name="image" />
                            <button onClick={signUp}>Sign Up</button>
                        </div>   
                </div>
            </div>

        
       
        </>
    )
}



