import React from 'react';

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className='container border-top mt-5 p-5'>
                <div className='row mt-5'>

                    <div className='col-6 p-5'>
                        <img src={imageURL} />
                    </div>

                    <div className='col-6 p-5'>
                        <h1>{productName}</h1>
                        <p className='mt-3'>{productDescription}</p>

                        <div className='mt-5'>
                        <a href={tryDemo}>Try Demo</a>
                        &nbsp;&nbsp;&nbsp;
                        <a href={learnMore}>Learn More</a>
                        </div>

                        <div className='mt-5'>
                        <a href={googlePlay}><img src="https://zerodha.com/static/images/google-play-badge.svg"/></a>
                        <a href={appStore}><img src="https://zerodha.com/static/images/appstore-badge.svg"></img></a>
                        </div>
                    </div>

                </div>
        </div>
     );
}

export default LeftSection;