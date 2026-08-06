import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='support-hero'>

            <div className= 'p-5' id="supportWrapper">
                <h4 style={{color:"white"}}>Support Portal</h4>
                <a href="/" style={{color:"white"}}>Track Tickets</a>
            </div>

            <div className= 'row p-5 ' style={{color:"white"}}>

                <div className='col-6 p-5' >
                    <h2 className='fs-3'>Search for an answer or browse help topics to create a ticket</h2>
                    <input placeholder='Eg. how do i activate my F&O'></input>
                    <br></br>
                    <a href="/" style={{color:"white"}}>Track Account opening</a>
                    <a href="/" style={{color:"white"}}>Intraday margin</a>
                    <a href="/" style={{color:"white"}}>Kite User Manual</a>
                    <a href="/" style={{color:"white"}}>Track Segment activation</a>
                </div>

                <div className='col-6 p-5'>
                    <h2>Featured</h2>

                    <ol>
                        <li><a href="/" style={{color:"white"}}>Current takeover and delisting</a></li>
     
                    <li><a href="/" style={{color:"white"}}>Latest intraday leverage</a></li>
                    </ol>
                </div>


            </div>

        </section>
     );
}

export default Hero;