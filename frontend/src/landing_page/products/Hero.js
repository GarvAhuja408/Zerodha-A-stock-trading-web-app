import React from 'react';
import {Link} from 'react-router-dom';

function Hero() {
    return ( 
        <div className='container mt-5 mb-5 text-muted border-bottom'>
            <div className='row text-center'>
                <h2 className='mt-2'>Zerodha Products</h2>
                <h4 className='mt-2'>Sleek, modern, and intuitive trading platforms</h4>
                <p className='mt-2 mb-5'>Check out our <Link>investment offerings → </Link></p>
            </div>
        </div>
     );
}

export default Hero;