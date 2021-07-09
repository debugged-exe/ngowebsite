import React from 'react'
import './Testimonials.css'
import poor1 from './poor1.jpeg' 

function testimonials(){
    return(
        <div className='test'>
            <h1 style={{position:'relative',top:'25%',paddingTop:'10%',paddingBottom:'10px'}}> <b>Latest Events</b></h1>
            <div className='contain'>
                <div className='category' style={{backgroundImage:'url('+poor1+')',backgroundSize:'cover',position:'relative'}}>
                    <div className='inner'>Hello World</div>
                </div>
                <div className='category' style={{backgroundImage:'url('+poor1+')',backgroundSize:'cover',position:'relative'}}>
                    <div className='inner'>Hello World</div>
                </div>
                <div className='category' style={{backgroundImage:'url('+poor1+')',backgroundSize:'cover',position:'relative'}}>
                    <div className='inner'>Hello World</div>
                </div>
            </div>
            <div className='contain' style={{paddingBottom:'10%'}}>
                <div className='category' style={{backgroundImage:'url('+poor1+')',backgroundSize:'cover',position:'relative'}}>
                    <div className='inner'>Hello World</div>
                </div>
                <div className='category' style={{backgroundImage:'url('+poor1+')',backgroundSize:'cover',position:'relative'}}>
                    <div className='inner'>Hello World</div>
                </div>
                <div className='category' style={{backgroundImage:'url('+poor1+')',backgroundSize:'cover',position:'relative'}}>
                    <div className='inner'>Hello World</div>
                </div>
            </div>
        </div>
    )
}

export default testimonials;