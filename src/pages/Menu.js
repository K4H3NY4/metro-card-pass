import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router} from 'react-router-dom';
import { Link , useHistory } from 'react-router-dom';





function Menu () {
    const history = useHistory();

    const [login, setLogin] = useState([])
    
    var token = localStorage.getItem('token');
    axios.defaults.headers.common.Authorization = token;

 


    const api = axios.create({
        baseURL:'http://127.0.0.1:5000/',
            headers:{
    Authorization:`Bearer ${token}`,
    'Content-Type' : 'application/json',
    'Accept': 'application/json'
    }
       
    })
    api.get('/pass/profile',).then(function (response){ 
        console.log(response.status)

         

            if( response.data.message === 'Please Login'){
                history.push("/login");
            }









      
    })

return(

    <React.Fragment>   

<div className=" row container m-0 p-3 col-12 menu-canvas text-center"  align="center">
        <div className="col-3 "><Link to="/pay">Pay</Link></div>
        <div className="col-3"><Link to="/topup">Top Up</Link></div>
        <div className="col-3"><Link to="/settings">Settings</Link></div>
        <div className="col-3"><Link to="">Logout</Link></div>



    </div>


    </React.Fragment>
)


      }

export default Menu;
