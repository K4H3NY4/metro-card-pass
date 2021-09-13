import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router} from 'react-router-dom';
import { Link  } from 'react-router-dom';

import Balance from '../components/Balance';
import TopUpAccount from '../components/TopupAccount';
import TopUpHistory from '../components/TopUpHistory';
import Menu from './Menu';





function TopUp () {

return(

    <React.Fragment>   
        <Menu/>

        <div className="container row m-0 p-0" >  
         
            <div className="col-12 mt-5"> 
            <h1>Top Up Account</h1>

             <Balance/>
                    
            <TopUpAccount/>

            <TopUpHistory/>
                         
            </div>

        </div> 

        <br/><br/><br/><br/>


    </React.Fragment>
)


      }

export default TopUp;
