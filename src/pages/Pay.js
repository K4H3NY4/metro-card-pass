import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router} from 'react-router-dom';
import { Link  } from 'react-router-dom';
import PayRide from '../components/PayRide';
import Balance from '../components/Balance';
import PaymentHistory from '../components/PaymentHistory';
import Menu from './Menu';





function Pay () {

return(

    <React.Fragment> 
        <Menu/>  

        <div className="container row m-0 p-0" >  
         
            <div className="col-12 mt-5"> 
            <h1>Pay Ride</h1>

             <Balance/>
                    
            <PayRide/>

            <PaymentHistory/>
                         
            </div>

        </div> 


<br/><br/><br/><br/>
    </React.Fragment>
)


      }

export default Pay;
