import React from 'react'
import Img from '../images/Photo-970cfc7e.jpg'
import '../App.css'
// import one from '../images/1.gif'
import two from '../images/2-f3390e67.gif'
import three from '../images/3-e698b7ce.gif'
import four from '../images/4-d974c89b.gif'
function Photo() {
    return (
        <div>
             <img className='cam' src={Img} alt='Hello' />
       
        <div className='photo'>
           
            <div className='a'>
                India’s Leading Creative Platform
            </div>
            <div className='b'>
                Experience hassle free bookings. Trusted by 2500+ Customers
            </div>
            <div className='d'>
                <input
                    className='c'
                    type="text"
                    placeholder="Search"
                    value='Search service,blog and many more....'
                />

                <button type="submit">Search</button>
            </div>

            <div className='wrapper'>
                <img className='one' src={two} />

                <div className='text-box'>
                    <h1>Verified Reviews</h1>
                    <p>For verified reviewers</p>
                </div>
                <img className='one' src={two} />

                <div className='text-box'>
                    <h1>Top Articles</h1>
                    <p>Helps you decide</p>
                </div>
                <img className='one' src={three} />

                <div className='text-box'>
                    <h1>Write Share Win Contest</h1>
                    <p>Earn cash for reviews</p>
                </div>
                <img className='one' src={four} />

                <div className='text-box'>
                    <h1>MouthShut for Brands</h1>
                    <p>Request a Demo</p>
                </div>
            </div>
            <hr className="horizontal-line" />
        </div>
        </div>
    )
}

export default Photo