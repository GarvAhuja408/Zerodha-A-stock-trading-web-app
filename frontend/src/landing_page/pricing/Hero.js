import React from 'react';

function Hero() {
    return ( 
        <div className="container border-bottom">

            <div className='row p-5 text-center'>
                <h2 className='mt-5'>Charges</h2>
                <h3 className='text-muted mt-2'>List of all charges and taxes</h3>
                
                <div className='row p-5 mt-5'>
                    <div className='col-4'>
                        <img src='/media/zero.PNG' alt="zero"></img>
                        <h3>Free equity delivery</h3>
                        <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>

                    <div className='col-4'>
                        <img src='/media/twenty.PNG' alt="twenty"></img>
                        <h3>Intraday and F&O trades</h3>
                        <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>

                    <div className='col-4'>
                        <img src='/media/zero.PNG' alt="zero"></img>
                        <h3>Free direct MF</h3>
                        <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>

        </div>
     );
}

export default Hero;