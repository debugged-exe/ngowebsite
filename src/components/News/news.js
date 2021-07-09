import React from 'react'
import './news.css'
import poor2 from './poor2.jpg'

function news(){
    return(
        <div>
        <div className='page1'>
            <h1>Help us make a better World .</h1>
            <button className='new'>Make Donation</button>
        </div>
        <div className='page2'>
           <div className="ph4 pv2">
              <img className="img-logo" src={poor2}/>
              <p>Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry.
                  Lorem Ipsum has been the industry's
                  standard dummy text ever since the
                  1500s, when an unknown printer took
                  a galley of type and scrambled it to
                  make a type specimen book.Lorem Ipsum has
                   been the industry's
                  standard dummy text ever since the
                  1500s, when an unknown printer took
              </p>
           </div>
           <div className="right-container">
             <div className="footer-subsection pa2">
               <img src={poor2} className="img-logo1"/>
               <div>
                 <h2>Add a subheading</h2>
                 <p>Add a little bit of body text</p>
               </div>
               <div className="bb bw1 yellow w-80"></div>
             </div>
             <div className="footer-subsection pa2">
               <img src={poor2} className="img-logo1"/>
               <div>
                 <h2>Add a subheading</h2>
                 <p>Add a little bit of body text</p>
               </div>
               <div className="bb bw1 yellow w-80"></div>
             </div>
             <div className="footer-subsection pa2">
               <img src={poor2} className="img-logo1"/>
               <div>
                 <h2>Add a subheading</h2>
                 <p>Add a little bit of body text</p>
               </div>
               <div className="bb bw1 yellow w-80"></div>
             </div>
           </div>
        </div>
       </div>
    )
}

export default news;
