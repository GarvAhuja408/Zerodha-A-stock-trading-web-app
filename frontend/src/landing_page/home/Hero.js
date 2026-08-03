import React from 'react';

function Hero() {
    return ( 
        <div className='container p-4'>
            <div className="row text-center">

                <img src="https://zerodha.com/static/images/landing.svg" alt="hero image" className='mb-5'></img>


                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button style={{width:"25%",margin:"0 auto"}} type="button" className="btn btn-primary p-3 mb-5">Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;