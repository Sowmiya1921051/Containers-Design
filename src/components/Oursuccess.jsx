import React from 'react'
import s1 from '../images/s1.gif'
import s2 from '../images/s2.gif'
import s3 from '../images/s3.gif'
import s4 from '../images/s4.gif'
import s5 from '../images/s5.gif'
function Oursuccess() {
  return (
    <div>
         <div className='success-main'>
             <p className='success-head'>Our Success</p>
             <p className='success-sub-head'>Journey of our success.</p>
             <div className='success'>
             <div className='success-main'>
                  <img className='success-img' src={s1}/>
                 <p className='success-p'> Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India.</p>
             </div>
             <div className='success-main'>
                  <img className='success-img' src={s2}/>
                  <p className='success-p'> Appreciation from Startup Bengal for our creative startup community</p>
             </div>
             <div className='success-main'>
                  <img className='success-img' src={s3}/>
                  <p className='success-p'>FliqaIndia got featured on Yourstory. Click here</p>
             </div>
             <div className='success-main'>
                  <img className='success-img' src={s4}/>
                  <p className='success-p'>Received awards from ImagesBazaar on leading creative industry</p>
             </div>
             <div className='success-main'>
                  <img className='success-img' src={s5}/>
                  <p className='success-p'> Top ten in Intuit Circle Codeathon, 2020</p>
             </div>
             </div>
            
            </div>
    </div>
  )
}

export default Oursuccess