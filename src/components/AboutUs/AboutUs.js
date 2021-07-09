import React from 'react'
import './AboutUs.css'
import image1 from './img.png'

function AboutUs(){
    return(
          <div className="container-div">
            <div>
              <img src={image1} alt="image"/>
            </div>
            <div style={{textAlign:"left"}}>
               <p>Rohit rose nursery established in the year 1990 located on bhigwan- walchandnagar road in kalas,Tal-Indapur Dist-Pune(Maharashtra).3 km from Pune- Solapur highway. We produce and supply all types of flower plants,fruit plants, decorative plants and shade plants. We supply plants and also give you information on how to go about taking care and growing them.
                We also specialise in the quality plant of rose, pomegranate,fig and grapes root variety.
               </p>
            </div>
          </div>
    )
}

export default AboutUs;
