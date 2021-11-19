import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
function Home(){
    
    return (
        <Fragment>
            <div >
                <h3>Home</h3>

            </div>
            <div>
            <form method="POST">
                <table align="center" id="sender">    
                    <tr>
                        
                            <td>
                                <label for="book_date">Calender Date</label>
                            </td>
                            <td>
                                <input type="date" id="date" name="date"/>
                            </td>
                    </tr>
                        
                    <tr>
                        <td>
                            <lable for="Customer Id">Customer Id</lable>
                        </td>
                        <td>
                            <input type="number" id="cust_id" placeholder="Enter Customer ID" pattern="[0-9]{14}" required/>
                        </td>
                    </tr>
                                
                    <tr>
                        <td>
                            <lable for="acc_name">Account Holder Name</lable>
                        </td>
                        <td>
                            <input type="text" id="acc_name" disabled/>
                        </td>
                    </tr> 
                    <tr> 
                        <td> 
                            <label for="Clear Balance">Clear Balance</label>
                        </td>
                        <td>
                            <input type="number" id="clear_bal" disabled/>
                        </td>
                    </tr>     
                    <tr> 
                        <td>
                            <lable for="cur">Currency Type</lable>
                        </td>
                        <td>
                            <input type="text" id="cur" disabled/>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" align="center">
                                
                                <input type="submit" class="btn btn-success" value="Transfer"/>
                               
                            </td>
                    </tr> 
                </table>
            </form>
        </div>
        </Fragment>
    );
}
export default Home