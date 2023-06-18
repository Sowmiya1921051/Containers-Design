import React from 'react'
import person4 from '../images/person4-f0236aef.jpg'
import a1 from '../images/a1.gif'
import a2 from '../images/a2.gif'
import a3 from '../images/a3.gif'
import a4 from '../images/a4.gif'
import a5 from '../images/a5.gif'
import a6 from '../images/a6.gif'

function Awards() {
    return (
        <div>
            <div className='award-main'>
                <div className='award-main1'>
                    <div className='award-main2'>
                        <img className='award-img' src={person4} />
                    </div>
                    <div className='award-main2'>
                        <img className='award-img' src={person4} />
                    </div>
                </div>
                <div className='award-container'>
                    <div className='award-one'>
                        <img src={a1}/>4.9/5</div>
                    <div  className='award-one1'>
                        <img src={a2}/>4.9/5</div>
                </div>
                <div className='award-container1'>
                    <div  className='award-two'>
                        <img src={a3}/>4.9/5</div>
                    <div  className='award-two1'>
                        <img src={a4}/>4.8/5</div>
                </div>
                <div className='award-container2'>
                    <div  className='award-three'>
                        <img src={a5}/>5.0/5</div>
                    <div  className='award-three1'>
                        <img src={a6}/>5.0/5</div>
                </div>
            </div>
        </div>
    )
}

export default Awards