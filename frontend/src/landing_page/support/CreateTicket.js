import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5'>

                <h4 className='fs-2'>To create a ticket,select a relevant topic</h4>

                <div className='col-4 p-5 mt-5'>
                    <h4><i class="fa fa-plus-circle" aria-hidden="true"></i>Account Opening</h4>
                    <a href="" style={{lineHeight:"3"}}>Online account opening</a>
                    <br></br>
                    <a href="" style={{lineHeight:"3"}}>Offline account opening</a>
                    <br></br>
                    <a href="" style={{lineHeight:"3"}}>NRI account opening</a>
                    <br></br>
                    <a href="" style={{lineHeight:"3"}}>Charges at Zerodha</a>
                    <br></br>
                    <a href="" style={{lineHeight:"3"}}>Getting Started</a>
                    <br></br>
                </div>

                <div className='col-4 p-5 mt-5'>
                    <h4><i class="fa fa-plus-circle" aria-hidden="true"></i>Funds</h4>
                    <a href="" style={{lineHeight:"3"}}>Withdrawal</a>
                    <br></br>
                    <a href="" style={{lineHeight:"3"}}>Add funds</a>
                    <br></br>
                    <a href="" style={{lineHeight:"3"}}>eMandates</a>
                    <br></br>
                    <a href="" style={{lineHeight:"3"}}>Adding Bank Account</a>
                    <br></br>
                    <a href="" style={{lineHeight:"3"}}>MTF</a>
                    <br></br>
                </div>

                <div className='col-4 p-5 mt-5'>
                    <h4><i class="fa fa-plus-circle" aria-hidden="true"></i>Your Zerodha Account</h4>
                    <a href="" style={{lineHeight:"3"}}>Login Cred</a>
                    <br></br>
                    <a href="" style={{lineHeight:"3"}}>DP ID</a>
                    <br></br>
                    <a href="" style={{lineHeight:"3"}}>Account Modification</a>
                    <br></br>
                    <a href="" style={{lineHeight:"3"}}>Your profile</a>
                    <br></br>
                    <a href="" style={{lineHeight:"3"}}>Transfer of shares</a>
                    <br></br>
                </div>

                <div className='col-4'>
                    
                </div>

                <div className='col-4'>
                    
                </div>

            </div>
        </div>
     );
}

export default CreateTicket;