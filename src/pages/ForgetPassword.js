import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router} from 'react-router-dom';
import { Link  } from 'react-router-dom';

import Balance from '../components/Balance';
import TopUpAccount from '../components/TopupAccount';
import TopUpHistory from '../components/TopUpHistory';
import Menu from './Menu';





function ForgetPassword () {

return(

    <React.Fragment> 
        
        <div class="container">
        
            <div class="col-12 pt-5 mt-5 " align="center">
                <img src="client-3.png" alt=""/>
            </div>


            

         <div class="container mt-5" align="center">  
            <div class="col-2"></div>

            <div class="col-10"> 

             <div>

                <p class="text-left pb-0 mb-0 ">Email</p>
                <input type="email" placeholder="username@domain.com" class="form-control " />
                <br/>

                
                 <button class="btn btn-dark">Reset</button>



             </div>


             <div class="row mt-5">
                 <div class="col-6 small text-left"><Link to="/login">Login</Link></div>
                 <div class="col-6 small text-right"><Link to="/register">Register</Link></div>
             </div>



            </div>

            <div class="col-2"></div>

        </div> 


    </div>


    </React.Fragment>
)


      }

export default ForgetPassword;
