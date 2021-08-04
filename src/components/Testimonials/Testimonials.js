import React from 'react'
import Carousel from 'react-elastic-carousel'

function Testimonials(){
    return(
        <div className="home-div">
        <section className='parallax' >
            <div className='parallax-inner flex flex-column justify-center pt4 items-center'>
            <h1 >TESTIMONIALS</h1>
            <div className="line tc bg-white"></div>
    <Carousel itemsToShow={1} interval={3000} enableAutoPlay='true' >

        <div className='flex justify-center tc items-center white' style={{width:'110%',height:'400px'}}  >
        <div className="pa6 f3" style={{width:'70%'}}>
        <h3 >
         <i> We have been working with Charity for over ten years now and our relationship has moved from that of charity client event organisers to friends. Charity is a great team committed to providing innovative, fun and challenging events.
         </i> 
         </h3>
         <br/><br/>
         <div className='f5 '>- Kate Doe </div>
         </div>
        </div>
       
        <div className='flex justify-center tc items-center white' style={{width:'110%',height:'400px'}}  >
        <div className="pa6 f3" style={{width:'70%'}}>
        <h3 >
         <i> We have been working with Charity for over ten years now and our relationship has moved from that of charity client event organisers to friends. Charity is a great team committed to providing innovative, fun and challenging events.
         </i> 
         </h3>
         <br/><br/>
         <div className='f5 '>- Kate Doe </div>
         </div>
        </div>
       
        <div className='flex justify-center tc items-center white' style={{width:'110%',height:'400px'}}  >
        <div className="pa6 f3" style={{width:'70%'}}>
        <h3 >
         <i> We have been working with Charity for over ten years now and our relationship has moved from that of charity client event organisers to friends. Charity is a great team committed to providing innovative, fun and challenging events.
         </i> 
         </h3>
         <br/><br/>
         <div className='f5 '>- Kate Doe </div>
         </div>
        </div>

</Carousel>
    </div>
        </section>
        </div>
    )
}

export default Testimonials;