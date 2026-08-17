import React from 'react';

function Universe() {
    return (  
        <div className='container mt-5 text-muted'>
                <div className='row text-center'>

                    <h1>The Zerodha Universe</h1>

                    <p>Extend your trading and investment experience even further with our partner platforms</p>

                    <div className='col-4 p-5'>
                        <img src="/media/one.PNG"/>
                        <p>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                        </p>
                    </div>

                    <div className='col-4 p-5'>
                        <img src="/media/2.PNG"/>
                        <p>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                        </p>
                    </div>

                    <div className='col-4 p-5'>
                        <img src="/media/3.PNG"/>
                        <p>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.</p>
                    </div>

                    <div className='col-4 p-5'>
                        <img src="/media/4.PNG"/>
                        <p>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.</p>
                    </div>


                    <div className='col-4 p-5'>
                        <img src="/media/5.PNG"/>
                        <p>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                    </div>

                    <div className='col-4 p-5'>
                        <img src="/media/6.PNG"/>
                        <p>Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                        Sign up for free</p>
                    </div>

                    <button style={{width:"20%",margin:"0 auto"}} type="button" className="btn btn-primary p-3 mb-5 text-lg">Signup Now</button>

                </div>
        </div>
    );
}

export default Universe;