import React, {useState} from 'react';
import axios from 'axios';






function PaymentHistory () {

    var token = localStorage.getItem('token');
    axios.defaults.headers.common.Authorization = token;

    const [payments, setPayments] = useState([])

    const api = axios.create({
        baseURL:'http://127.0.0.1:5000/',
            headers:{
    Authorization:`Bearer ${token}`,
    'Content-Type' : 'application/json',
    'Accept': 'application/json'
    }
       
    })
    api.get('/pass/all-payments',).then(function (response){ 
        
       setPayments(response.data.pass_payments)
    })



    
return(

    <React.Fragment>

<table className="table table-striped table-condensed">
                        <thead className="small">
                            <tr>
                        <th>REG NO</th>
                        <th>AMOUNT</th>
                        <th>REF</th>
                        <th>PAYED AT</th>
                    </tr>
                    </thead>
                    <tbody className="small">
                        {payments.map((payment)=>(
                        <tr className="small" key={payment.id}>
                       
                            <td>{payment.reg_no} </td>
                            <td>{payment.amount}</td>
                            <td>{payment.ref}</td>
                            <td>{payment.created_at}</td>

                        </tr>
                        ))}
                        

                    </tbody>


                    
                        
                    </table>



</React.Fragment>

)


      }

export default PaymentHistory;
