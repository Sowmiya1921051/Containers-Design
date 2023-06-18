import React from 'react'
import pp from '../images/person6-6c967883.jpg'
import Photography1 from '../images/Photography1-3b9604bb.jpg'
function Photography() {
  return (
    <div className='graphy-main'>
        <div className='graphy-container'>
            <img  className='graphy-img'src={pp}/>
        </div>
        <div className='graphy-in'>
        <p className='graphy-p'> ULTIMATE COURSE IN <b className='graphy-bold'>PHOTOGRAPHY</b></p>
        <img className='graphy-img1' src={Photography1}/>
        </div>
       
    </div>
  )
}

export default Photography