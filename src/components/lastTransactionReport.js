import React,{Fragment} from 'react';
import { useState } from 'react';
function lastTransactionReport({formData}){
    const [tranDetails,setTranDetails]=useState(formData)
    return (
           <div>
               <h3>Last Transaction Details</h3>
               
           </div>
    );
}