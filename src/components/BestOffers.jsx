import React from 'react'
import wedding from '../images/wedding.jpg'
function BestOffers() {
    return (
        <div>
            <p className='best-head'>Best Offers</p>
            <p className='best-sub-head'>Discover the best offers on our services</p>
            <div className='best-body'>
                <div className='best-container'>
                    <div>
                        <img className='best-img' src={wedding} />
                    </div>
                    <p className='best-p'>Wedding<br/> Packages</p>
                    <div className='best-hoz-line'></div>

                    
                </div>

                <div className='best-container'>
                    <div>
                        <img className='best-img' src={wedding} />
                    </div>
                    <p className='best-p'>Wedding<br/> Packages </p>
                   
                </div>
            </div>
        </div>
    )
}

export default BestOffers