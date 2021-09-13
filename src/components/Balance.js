import React, {useState} from 'react';
import axios from 'axios';






function Balance () {

    const [balance, setBalance] = useState('');

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
    api.get('/pass/balance',).then(function (response){ 
        setBalance(response.data.balance)
       
    })

return(

    <React.Fragment>
        

                <div className="col-12 m-0 p-0">
                    
                    <hr/>
                    
                    <kbd>Balance: Ksh {balance} </kbd>
                </div>


    </React.Fragment>
)


      }

export default Balance;
