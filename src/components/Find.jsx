import React from 'react'
import '../App.css'
import person1 from '../images/person1-008ec2a4.jpg'
import person2 from '../images/person2-9c848407.jpg'
import person3 from '../images/person3-dc5211ec.jpg'
import person4 from '../images/person4-f0236aef.jpg'
import five from '../images/5-07095aea.gif'
function Find() {
  return (
    <div>
      <div className='f'>
      <h1 className='f1'> Find Trusted Associate</h1>
      <p className='f2'>Find the best Fliqa Associate for your special day.</p>
      <div className='person'>
            <div className='p'>
              <img className='i' src={person1} />
              <div className='p1'>
              <p>Name title </p>
              <img className='verify'src={five} />
              </div>
              <p className='loc'>Location:</p>
            </div>
            <div className='p'>
              <img className='i' src={person4} />
              <div className='p1'>
              <p>Name title </p>
              <img className='verify'src={five} />
              </div>
              <p className='loc'>Location:</p>
            </div>
            <div className='p'>
              <img className='i' src={person3} />
              <div className='p1'>
              <p>Name title </p>
              <img className='verify'src={five} />
              </div>
              <p className='loc'>Location:</p>
            </div>
            <div className='p'>
              <img className='i' src={person4} />
              <div className='p1'>
              <p>Name title </p>
              <img className='verify'src={five} />
              </div>
              <p className='loc'>Location:</p>
            </div>
            <div className='p'>
              <img className='i' src={person1} />
              <div className='p1'>
              <p>Name title </p>
              <img className='verify'src={five} />
              </div>
              <p className='loc'>Location:</p>
            </div>

      </div>
       </div>
   
      </div>
  )
}

export default Find

