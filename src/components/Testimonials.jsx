import React from 'react'
import six from '../images/6-f68027be.gif'
import Portfolio from '../images/portfolio-c11625e7.jpg'
function Testimonials() {
  return (
    <div>
        <div className='test-nav'>
        <img src={six}/>
        <div>  <p className='test-head'>Testimonials</p>
        <p className='test-sub-head'>Words from our clients</p></div>
        <div className='test-nav-container'>
        <button className='test-nav1'>Google</button>
        <button className='test-nav2'>Facebook</button>
        <button className='test-nav2'>Weddingwire</button>
        <button className='test-nav2'>WedmeGood</button>
        </div>
        </div>
        <div className='test-container-main'>
        <div className='test-container'>
            <p className='test-container1'>  <img  className='test-img'src={Portfolio}/> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <p className='test-bold'>~Ramdom Name</p></p>
        </div>
        <div className='test-container'>
            <p className='test-container1'>  <img  className='test-img'src={Portfolio}/> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <p className='test-bold'>~Ramdom Name</p></p>
        </div>
        <div className='test-container'>
            <p className='test-container1'>  <img  className='test-img'src={Portfolio}/> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <p className='test-bold'>~Ramdom Name</p></p>
        </div>
         <div className='test-container'>
            <p className='test-container1'>  <img  className='test-img'src={Portfolio}/> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <p className='test-bold'>~Ramdom Name</p></p>
        </div>
        </div>
        <div className='test-hor-line'></div>
    </div>
  )
}

export default Testimonials