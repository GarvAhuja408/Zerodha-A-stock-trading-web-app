import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>

                <div className='col-6 mt-5'>
                    <img src='/media/awards.PNG' alt="awards image"/>
                </div>

                <div className='col-6 mt-5'>
                    <h1>Largest Broker in India</h1>
                    <p>2+ million Zerodha clients contribute to ove 15% of all retail order volumes in Inida daily by trading and investing</p>

                    <ul>
                        <li><p>Futures & options</p></li>
                        <li><p>Commodity</p></li>
                        <li><p>Currency</p></li>
                    </ul>
                    <img src="/media/pressLogos.png" alt='press Logo' className="mt-5" style={{width:"80%"}}></img>
                </div>

            </div>
        </div>
     );
}

export default Awards;