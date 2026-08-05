import React from 'react';

function Brokerage() {
    return ( 
        <div className="container border-top">
                
                <div className='row p-5 mt-5 text-center'>
                    <div className='col-8'>
                        <a href="/" style={{textDecoration:"none"}}><h4>Brokerage calculator</h4></a>
                        <ul style={{textAlign:"left",lineHeight:"3"}} className='mt-3'>
                            <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
                            <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                            <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                        </ul>
                    </div>

                    <div className='col-4'>
                        <a href="/" style={{textDecoration:"none"}}><h4>List of charges</h4></a>
                    </div>

            </div>

        </div>
     );
}

export default Brokerage;