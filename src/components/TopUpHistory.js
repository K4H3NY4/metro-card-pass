import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router} from 'react-router-dom';
import { Link  } from 'react-router-dom';






function TopUpHistory () {

    

 
    var token = localStorage.getItem('token');
    axios.defaults.headers.common.Authorization = token;

    const [topups, setTopUps] = useState([])

    const api = axios.create({
        baseURL:'http://127.0.0.1:5000/',
            headers:{
    Authorization:`Bearer ${token}`,
    'Content-Type' : 'application/json',
    'Accept': 'application/json'
    }
       
    })
    api.get('/pass/all-topup',).then(function (response){ 
        setTopUps(response.data.pass_topups)
    })


return(

    <React.Fragment>

<table className="table table-striped table-condensed">
                        <thead className="small">
                            <tr>
                        <th>M-Pesa Code</th>
                        <th>AMOUNT</th>
                        
                        <th>PAYED AT</th>
                    </tr>
                    </thead>
                    <tbody className="small">
                        {topups.map((topup)=>( 
                        <tr className="small" key={topup.id}>
                       
                            <td>{topup.mpesa_code} </td>
                            <td>{topup.amount}</td>

                            <td>{topup.created_at}</td>

                        </tr>
                        ))}
                       


                    </tbody>


                    
                        
                    </table>



</React.Fragment>

)


      }

export default TopUpHistory;
