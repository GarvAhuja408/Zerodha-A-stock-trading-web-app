import React from 'react';

function RightSection({imageURL,productName,productDescription,learnMore}) {
    return ( 
         <div className='container mt-2 text-muted'>
                <div className='row mt-2'>

                    <div className='col-6 p-5'>
                        <h1>{productName}</h1>
                        <p className='mt-3'>{productDescription}</p>

                        <div className='mt-5'>
                            <a href={learnMore}>Learn More</a>
                        </div>

                    </div>

                    <div className='col-6 p-5'>
                        <img src={imageURL} />
                    </div>

                </div>
        </div>
     );
}

export default RightSection;