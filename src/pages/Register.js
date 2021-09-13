import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router} from 'react-router-dom';
import { Link  } from 'react-router-dom';

const api = axios.create({
    baseURL:'http://127.0.0.1:5000/'
    
})


function Register () {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirm] = useState('');

    

    const handleSubmit = (e) => {
    e.preventDefault();

    if(password ===confirmPassword){
        api.post('/pass/register', {first_name,last_name,email,phone,password}).then(function (response) {
            const status = response.status
            if(status === 200){
                console.log(response.data);
                sessionStorage.setItem("token",response.data.token);
             }
            else {
                console.log('Email/Phone number already taken');
            }

           
         });
    
    }
  
}




return(

    <React.Fragment>
            
         <div className="container mt-5" align="center">  
         <img src="client-3.png" alt=""/>
            <div className="col-2"></div>

            <div className="col-10"> 

             
            <p class="text-left pb-0 mb-0 ">First Name</p> 
            <input type="text" className="w-100"
                 placeholder="First Name"
                 value={first_name}
                 className="form-control"
                 onChange={(e)=>setFirstName(e.target.value)}
                 
                 /> 
                 <br/>

            <p class="text-left pb-0 mb-0 ">Last Name</p>
                <input type="text" className="w-100" 
                placeholder="Last Name"                 
                value={last_name}
                className="form-control"
                onChange={(e)=>setLastName(e.target.value)}
                /> 
                 <br/>


                <p class="text-left pb-0 mb-0 ">E-mail</p>
                <input type="email" className="w-100" 
                placeholder="E-mail"                 
                value={email}
                className="form-control"
                onChange={(e)=>setEmail(e.target.value)}
                />

<br/>

                <p class="text-left pb-0 mb-0 ">Phone</p>
                <input type="tel" className="w-100" 
                placeholder="2547XXXXXX"                 
                value={phone}
                className="form-control"
                onChange={(e)=>setPhone(e.target.value)}
                
                /> 
 <br/>
  
                <p class="text-left pb-0 mb-0 ">Password</p>
                <input type="password" className="w-100" placeholder="Enter Password" 
                autoComplete="false"                
                value={password}
                className="form-control"
                onChange={(e)=>setPassword(e.target.value)}
                
                /> 
 <br/>

               <p class="text-left pb-0 mb-0 ">Confirm Password</p>
                <input type="password" className="w-100" placeholder="Confirm Password"
                autoComplete="false"               
                value={confirmPassword}
                className="form-control"
                onChange={(e)=>setConfirm(e.target.value)}
                
                /> 
                 <br/>

                 <button className="mt-4 btn btn-dark w-25"  
                 onClick={handleSubmit } >Register</button> 



             


             <div className="row mt-4">
                 <div className="col-6 small text-left"><Link to="/forgot-password"> Reset Password </Link></div>
                 <div className="col-6 small text-right"><Link to="/login">Login</Link></div>
             </div>



            </div>

            <div className="col-2"></div>

        </div> 


    
    


        <br/><br/><br/>
        </React.Fragment>
    )

}



export default Register;
