import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row mt-5'>

                <div className='col-6'>
                    <img src="media/varsityy.png" alt='varsity image'/>
                </div>

                <div className='col-6'>
                    <h1 className='mt-5'>Free and open market education</h1>

                    <p className='mt-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='/'>Varsity</a>

                    <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='/'>TradingQ&A</a>
                </div>
            </div>
        </div>
     );
}

export default Education;