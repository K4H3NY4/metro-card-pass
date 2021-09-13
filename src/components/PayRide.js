import React, {useState} from 'react';
import axios from 'axios';






function PayRide () {

    const [amount, setAmount] = useState('');
    const [reg_no, setRegNo] = useState('');
    const [message, setMessage] = useState('');


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

    const handlePay = (e) => {
        e.preventDefault();
    
            api.post('/pass/pay',{reg_no,amount}).then(function (response){ 
                //const balance = setBalance(response.data.balance)
               console.log(response.data)
           try{
               if(response.data.message === 'payment successful'){
                document.getElementById("message").innerHTML="<p class='alert-success p-2 m-4' >Payment Succesful</p>";

               } 
               
               if(response.data.message === 'payment failed'){
                document.getElementById("message").innerHTML="<p class='alert-danger p-2 m-4'>Payment Failed</p>";

               }
              
            }
            catch (error){
                document.getElementById("message").innerHTML="No internet connection";

            }
                   
            
            })
           
}


    
return(

    <React.Fragment>

<div  className="mt-4" align="left">

<p className="text-left pb-0 mb-0 ">Registration Number</p>
<input type="text" 
placeholder="KGC 214X" 
className="form-control "
value = {reg_no}
 onChange={(e)=>setRegNo(e.target.value)}

/>
<br/>

<p className="text-left pb-0 mb-0">Amount</p>
<input type="number"
 value = {amount}
 onChange={(e)=>setAmount(e.target.value)}
 className="form-control" />
<br/>
 <button className="btn btn-dark col-12"
  onClick={handlePay}>PAY</button>

    <div>
        <p className="alert alert-successful text-center" id="message">{message}</p>
    </div>

</div>


</React.Fragment>

)


      }

export default PayRide;
