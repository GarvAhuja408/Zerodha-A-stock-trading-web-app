import React from 'react';
import { Link } from 'react-router-dom';

function Team() {
    return (
         <div className="container">

            <div className='row'>
                <h1 className='fs-3 text-center mt-5 text-muted' >People</h1>
            </div>

            <div className='row '>
                
                <div className='col-6 p-3 text-center'>
                    <img src="/media/nk.PNG" alt="Founder"></img>
                    <h4 className='mt-3'>Nithin Kamath</h4>
                    <h6 className='mt-3'>Founder, CEO</h6>
                </div>


                <div className='col-6 mt-5 ps-0 pe-4 people text-lg fs-5'>
                    <p className='mt-4'>
                    Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p className='mt-3'>
                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p className='mt-3'>
                    Playing basketball is his zen.
                    </p>
                    <p className='mt-3'>
                    Connect on <Link to="/">Homepage</Link>/  <Link to="https://tradingqna.com/u/nithin/summary">TradingQnA</Link>/  <Link to="https://x.com/Nithin0dha">Twitter</Link>
                    </p>
                </div>
            </div>

        </div>
      );
}

export default Team;