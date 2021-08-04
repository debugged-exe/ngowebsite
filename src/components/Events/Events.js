import React from 'react'
import './Events.css'
import poor1 from './poor1.jpeg' 

function Events(){
    return(
        <div className='test'>
            <h1 style={{position:'relative',top:'25%',paddingTop:'10%',paddingBottom:'10px'}}> <b>Latest Events</b></h1>
            <div className='contain'>
                <div className='category' style={{backgroundImage:'url('+poor1+')',backgroundSize:'cover',position:'relative'}}>
                <div className='inner'>Hello World
                    <hr style={{bottom:'0',width:'80%'}}/>
                    </div>
                    <div className='hidden'>New component</div>
                </div>
                <div className='category' style={{backgroundImage:'url('+poor1+')',backgroundSize:'cover',position:'relative'}}>
                    <div className='inner'>Hello World
                    <hr style={{bottom:'0',width:'80%'}}/>
                    </div>
                    <div className='hidden'>New component</div>
                </div>
                <div className='category' style={{backgroundImage:'url('+poor1+')',backgroundSize:'cover',position:'relative'}}>
                    <div className='inner'>Hello World
                    <hr style={{bottom:'0',width:'80%'}}/>
                    </div>
                    <div className='hidden'>New component</div>
                </div>
            </div>
            <div className='contain' style={{paddingBottom:'10%'}}>
                <div className='category' style={{backgroundImage:'url('+poor1+')',backgroundSize:'cover',position:'relative'}}>
                    <div className='inner'>Hello World
                    <hr style={{bottom:'0',width:'80%'}}/>
                    </div>
                    <div className='hidden'>New component</div>
                </div>
                <div className='category' style={{backgroundImage:'url('+poor1+')',backgroundSize:'cover',position:'relative'}}>
                    <div className='inner'>Hello World
                    <hr style={{bottom:'0',width:'80%'}}/>
                    </div>
                    <div className='hidden'>New component</div>
                </div>
                <div className='category' style={{backgroundImage:'url('+poor1+')',backgroundSize:'cover',position:'relative'}}>
                    <div className='inner'>Hello World
                    <hr style={{bottom:'0',width:'80%'}}/>
                    </div>
                    <div className='hidden'>New component</div>
                </div>
            </div>
        </div>
    )
}

export default Events;