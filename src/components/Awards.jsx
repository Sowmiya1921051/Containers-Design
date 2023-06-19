import React from 'react'
import person4 from '../images/person4-f0236aef.jpg'
import a1 from '../images/Girl-e44ced14.jpg'


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
                        <img className='award-img' src={a1}/><p className='award-img-p'>4.9/5</p></div>
                    <div  className='award-one1'>
                        <img  className='award-img'src={a1}/><p className='award-img-p'>4.9/5</p></div>
                </div>
                <div className='award-container1'>
                    <div  className='award-two'>
                        <img  className='award-img'src={a1}/><p className='award-img-p'>4.9/5</p></div>
                    <div  className='award-two1'>
                        <img className='award-img' src={a1}/><p className='award-img-p'>4.8/5</p></div>
                </div>
                <div className='award-container2'>
                    <div  className='award-three'>
                        <img className='award-img'src={a1}/><p className='award-img-p'>5.0/5</p></div>
                    <div  className='award-three1'>
                        <img className='award-img' src={a1}/><p className='award-img-p'>5.0/5</p></div>
                </div>
            </div>
        </div>
    )
}

export default Awards