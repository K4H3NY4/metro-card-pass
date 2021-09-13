import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router} from 'react-router-dom';
import { Link  } from 'react-router-dom';




function TopUpAccount () {
    const [amount, setAmount] = useState('');


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

    const handleTopUp = (e) => {
        e.preventDefault();
    
            api.post('/pass/topup',{amount}).then(function (response){ 
                //const balance = setBalance(response.data.balance)
               console.log(response.data)
            })
           
}
 
return(

    <React.Fragment>

<div  className="mt-4" align="left">

<p className="text-left pb-0 mb-0">Amount</p>
<input type="number"
 value = {amount}
 onChange={(e)=>setAmount(e.target.value)}
 className="form-control" />
<br/>
 <button className="btn btn-dark col-12"
    onClick={handleTopUp}>TOP UP</button>
 <hr/>
 <p className="text-justified">
If Safaricom M-Pesa STK Push does not work use<br/> <kbd>Paybill: 215 215</kbd> <kbd> A/C: 2547XXXXX</kbd>
     </p>



</div>


</React.Fragment>

)


      }

export default TopUpAccount;
