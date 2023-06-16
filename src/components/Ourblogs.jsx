import React from 'react'
import person5 from '../images/person5.jpg'
import person6 from '../images/person6.jpg'
function Ourblogs() {
    return (
        <div className='ourblogs'>
            <p className='ourblogs-head'>Our Blogs</p>
            <p className='ourblogs-sub-head'>Check out our Latest Blog</p>
            <div className='ourblogs-main'>

                <div className='ourblogs-container'>
                    <img className='ourblogs-img' src={person5} />
                    <div class="ourblogs-text-overlay">
                        <p>Featured on sep 15,2021</p>
                        <h4 >Wedding </h4>
                        <h4> photgraphy</h4>
                        <h4>at Goa</h4>
                    </div>
                </div>
                <div className='ourblogs-container'>
                    <img className='ourblogs-img' src={person6} />
                    <div class="ourblogs-text-overlay">
                        <p>Featured on sep 15,2021</p>
                        <h4 >Wedding </h4>
                        <h4> photgraphy</h4>
                        <h4>at Goa</h4>
                    </div>
                </div>
                <div className='ourblogs-container'>
                    <div className='ourblogs-container1'>
                        <p>Trending Now</p>
                        <p>view ALL</p>
                    </div>
                  
                   <div className='ourblogs-container-1'>

                   <div className='ourblogs-container-c'>
                   <img className='ourblogs-img1' src={person5} />
                    <div className='ourblogs-container2'>
                        <h4>Creative Industries are on the verge of depletion due to COVID-19</h4>
                        <p>In a period where many industries remain highly unclear, others want to grasp how COVID-19 impact</p>
                    </div>
                   </div>

                   <div className='ourblogs-container-c'>
                    <img className='ourblogs-img1' src={person5} />
                    <div className='ourblogs-container2'>
                        <h4>Photography: Expectations vs. Reality</h4>
                        <p>Most of the time without any hands-on experience in photography, professional and advanced photography actually</p>
                    </div>
                    </div>

                    <div className='ourblogs-container-c'>
                    <img className='ourblogs-img1' src={person5} />
                    <div className='ourblogs-container2'>
                        <h4>Wedding Photography at Goa</h4>
                        <p>Wedding Photography in Goa If not, every couple when they make their list of Pre-wedding shoot </p>
                    </div>
                    </div>
                   </div>

                </div>

            </div>




        </div>
    )
}

export default Ourblogs