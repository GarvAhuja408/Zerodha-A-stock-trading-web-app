import React from 'react';

function Stats() {
    return ( 
        <div className='container mt-5'>

            <div className='row'>

                    <div className='col-6 p-5'>
                        
                        <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                        <br></br>
                        <h3 className='fs-4'>Customer-first always</h3>
                        <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                        <h3 className='fs-4'>No spam or gimmicks</h3>
                        <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                        <h3 className='fs-4'>The Zerodha universe</h3>
                        <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                        <h3 className='fs-4'>Do better with money</h3>
                        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>

                    <div className='col-6 p-5'>
                        <img src='media/ecosystem.png' alt="ecosystem" style={{width:"75%"}} className='mb-3'/>

                        <div className='text-center mt-5'>

                            <a href="/">Explore our Products</a>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;  
                            <a href="/">Try Kite Demo</a>

                        </div>
                    </div>
            </div>

        </div>

     );
}

export default Stats;