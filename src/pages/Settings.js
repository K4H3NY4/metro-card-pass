import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router} from 'react-router-dom';
import { Link  } from 'react-router-dom';

import Balance from '../components/Balance';
import TopUpAccount from '../components/TopupAccount';
import TopUpHistory from '../components/TopUpHistory';
import Menu from './Menu';





function Settings () {


    var token = localStorage.getItem('token');
    axios.defaults.headers.common.Authorization = token;

    const [profile, setProfile] = useState([])
    const [first_name, setFirstName] = useState([])
    const [last_name, setLastName] = useState([])

    const api = axios.create({
        baseURL:'http://127.0.0.1:5000/',
            headers:{
    Authorization:`Bearer ${token}`,
    'Content-Type' : 'application/json',
    'Accept': 'application/json'
    }
       
    })
    api.get('/pass/profile',).then(function (response){ 
        setProfile(response.data)
    })

return(

    <React.Fragment> 
        
<Menu/>  

<div class="container row m-0 p-0" >  
           

           <div class="col-12 mt-5"> 

               <div class="col-12 m-0 p-0">
                   <h1>Settings</h1>
                   <h4></h4>
               </div>

                   <hr/>

               <div  class="mt-4" align="left">
   
                   <p class="text-left pb-0 mb-0">First Name</p>
                   <input type="text"
                    placeholder={profile.first_name}
                    class="form-control"
                    value={ profile.first_name || first_name}
                    onChange={(e)=>setFirstName(e.target.value)}
                     />

                   <br/>

                   <p class="text-left pb-0 mb-0">Last Name</p>
                   <input type="text" 
                   placeholder={profile.last_name} 
                   class="form-control" 
                   value={last_name}
                   onChange={(e)=>setLastName(e.target.value)}
                    />

                   <br/>

                   <p class="text-left pb-0 mb-0">E mail</p>
                   <input type="text" placeholder={profile.email} disabled 
                   class="form-control" />

                   <br/>

                   <p class="text-left pb-0 mb-0">Phone</p>
                   <input type="text" placeholder={profile.phone} disabled 
                   class="form-control" />

                   <br/>


                    <button class="btn btn-dark col-12">Update Profile</button>
                    
                    
   
   
   
                </div>


                <hr/>
                <div  class="mt-4" align="left">
    
                    <p class="text-left pb-0 mb-0">New Password</p>
                    <input type="password" name="" id=" " class="form-control" />

                    <br/>

                    <p class="text-left pb-0 mb-0">Confirm Password</p>
                    <input type="password"  name="" id=" " class="form-control" />

                    <br/>

                     <button class="btn btn-dark col-12">Change Password</button>
                    
    
    
    
                 </div>

                
<br/><br/><br/>
                


        



           </div>


       </div> 
    


    </React.Fragment>
)


      }

export default Settings;
