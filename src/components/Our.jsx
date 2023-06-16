import React from 'react'
import { FaAngleLeft ,FaAngleRight} from 'react-icons/fa';
import Prewedding from '../images/Prewedding.jpg'
import wedding from '../images/wedding.jpg'
import portfolio from '../images/portfolio.jpg'
import cakecutting from '../images/cakecutting.jpg'

function Our() {
  return (
    <div>
        <div className='o'>
            <h1>Our Featured Services </h1>
            <p>Discover the range of services provided by FliqaIndia</p>
            {/* <h1 style={{ fontFamily: 'Roboto, sans-serif' }}>Hello, Vite + React!</h1> */}
        </div>
          <div className='shoot1'>
        <FaAngleLeft className='left-arrow' />
        <div className='shoot'>
        <img className='s1' src={Prewedding} />
        <h2 className='s2'>Pre Wedding Photoshoot</h2>
        <hr className="hoz-line" />
        <p className='s3'><b className='gap'>Started at </b>25,000 (one day)</p>
        <button className='s4'>know more</button>
        </div>
        <div className='shoot'>
        <img className='s1' src={wedding} />
        <h2 className='s2'>Pre Wedding Photoshoot</h2>
        <hr className="hoz-line" />
        <p className='s3'><b className='gap'>Started at </b>65,000 (one day)</p>
        <button className='s4'>know more</button>
        </div>
        <div className='shoot'>
        <img className='s1' src={portfolio} />
        <h2 className='s2'>Pre Wedding Photoshoot</h2>
        <hr className="hoz-line" />
        <p className='s3'><b className='gap'>Started at </b>65,000 (one day)</p>
        <button className='s4'>know more</button>
        </div>
        <div className='shoot'>
        <img className='s1' src={cakecutting} />
        <h2 className='s2'>Pre Wedding Photoshoot</h2>
        <hr className="hoz-line" />
        <p className='s3'><b className='gap'>Started at </b>65,000 (one day)</p>
        <button className='s4'>know more</button>
        </div>
        <FaAngleRight className='left-arrow' />
      </div>
      
    </div>
  )
}

export default Our