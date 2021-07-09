import React from 'react'
import './OurGoals.css'
import poor1 from './poor1.jpeg'

function OurGoals(){
    return(
       <div> 
        <div className="fixed-bg" style={{backgroundImage:'url('+poor1+')'}}>
            <h1 style={{position:'relative',top:'15%'}}>OUR GOALS</h1>
            <div className='para' style={{position:'relative',top:'25%'}}>
                <p>This div is only here to enable scrolling
                This div is only here to enable scrolling
                This div is only here to enable scrolling
                This div is only here to enable scrolling
                This div is only here to enable scrolling
                This div is only here to enable scrolling
                This div is only here to enable scrolling
                This div is only here to enable scrolling
                This div is only here to enable scrolling
                This div is only here to enable scrolling
                This div is only here to enable scrolling
                This div is only here to enable scrolling
                This div is only here to enable scrolling
                This div is only here to enable scrolling
                This div is only here to enable scrolling
                This div is only here to enable scrolling
                This div is only here to enable scrolling
                This div is only here to enable scrolling
                 </p>
            </div>
        </div>
 </div>
    )
}

export default OurGoals;