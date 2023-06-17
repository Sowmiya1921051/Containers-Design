import React from 'react'
import First from '../images/first.webp'
import person2 from '../images/person2-9c848407.jpg'
import { FaSearch } from 'react-icons/fa';

function Community() {
  return (
    <div>
        <img className='first' src={First}/>
        <div className='s'>
          <div className='first3'>
          <p >Discover</p>
          <h1>Graphic Design Ideas </h1>
          <h1>and services</h1>
          <p>From branding to marketing</p>
        </div>
       
        </div>
        
        <img className='fs' src={person2}/>
        <img className='fss' src={person2}/>
        <img className='fsss' src={person2}/>

        <div class="vl"></div>
        <div class="v"></div>
        <div class='v1'></div>
        
        <div className='first1'>
        
                <input
                    className='first2'
                    type="text"
                    placeholder="Search"
                    value='Search service,blog and many more....'        
                />
                <button type="submit">Search</button>
                {/* <FaSearch className='first3'/> */}
               
            </div>
    </div>
  )
}

export default Community