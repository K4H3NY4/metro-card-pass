import React, { useState } from 'react';
import axios from 'axios';
import { Link , useHistory, Redirect, withRouter } from 'react-router-dom';

const api = axios.create({
    baseURL:'http://127.0.0.1:5000/'
    
})




        



function Login () {
       
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const history = useHistory();


    const handleSubmit = (e) => {
        //e.preventDefault();
      api.post('/pass/login', {email, password}).then(function (response){    
        if( response.data.message === 'Authentication failed'){    
            // wrong password
            console.log(response);

            document.getElementById("message").innerHTML="<p class='alert-danger p-2 m-4'>Invalid Email/Password</p> ";
            //history.push("/login");

          }    
       
        if( response.data.message === 'ok'){
          
            console.log('hapo sawa');
            localStorage.setItem("token",response.data.access_token);
            history.push("/");
            // return <Redirect  to="/home" />
        
        } else{
            document.getElementById("message").innerHTML="<p class='alert-danger p-2 m-4'>Invalid Email/Password</p> ";

        }
              
    
    });
     
       
    }



    return (
       
  
      
        <React.Fragment>
        



         <div className="container mt-5" align="center">  
         <img src="client-3.png" alt=""/>
            <div className="col-2"></div>

            <div className="col-10"> 
                
             

                <p className="text-left pb-0 mb-0 ">Email</p>
                <input
                type="email"
                id="email" 
                className="form-control w-100"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
               
                placeholder="Enter email" /> 
                <br/>

                <p className="text-left pb-0 mb-0">Password</p>

                <input 
                type="password"  
                id="password"  
                className="form-control w-100" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                autoComplete="false"
                placeholder="Enter password" /> 
                

                <div>
                    
        <p id="message"></p>
    </div>


                 <button className="mt-1 mb-2 btn btn-dark w-25"  onClick={handleSubmit} >Login</button> 



             


             <div className="row mt-4">
                 <div className="col-6 small text-left"><Link to="/forgot-password" >Reset Password</Link></div>
                 <div className="col-6 small text-right"><Link to="/register" >Register </Link></div>
             </div>



            </div>

            <div className="col-2"></div>

        </div> 

        
    
    



        </React.Fragment>
    )

}




export default Login;
