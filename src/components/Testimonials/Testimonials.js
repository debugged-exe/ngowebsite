import React from 'react'
import Carousel from 'react-elastic-carousel'
import { ImQuotesLeft } from 'react-icons/im'
import './Testimonials.css'


function Testimonials() {
    return (
        <div className="home-div">
            <section className='parallax' >
                <div className='parallax-inner flex flex-column justify-center pt4 items-center'>
                    <h2 className="f2 pt4">TESTIMONIALS</h2>
                    <div className="line tc bg-white"></div>
                    <Carousel itemsToShow={1} interval={3000}  >

                    <div className='flex flex-column justify-center tc items-center white outer'>
                          
                                <h3 className='pa6-ns pa2'>
                                    <ImQuotesLeft size="3rem" color="white" />
                                    <i> We have been working with Charity for over ten years now and our relationship has moved from that of charity client event organisers to friends. Charity is a great team committed to providing innovative, fun and challenging events.
                                    </i>
                                </h3>
                                <br /><br />
                                <div className='f5 '>- Kate Doe </div>
                            
                        </div>
                        <div className='flex flex-column justify-center tc items-center white outer'>
                          
                          <h3 className='pa6-ns pa2'>
                              <ImQuotesLeft size="3rem" color="white" />
                              <i> We have been working with Charity for over ten years now and our relationship has moved from that of charity client event organisers to friends. Charity is a great team committed to providing innovative, fun and challenging events.
                              </i>
                          </h3>
                          <br /><br />
                          <div className='f5 '>- Kate Doe </div>
                      
                  </div>
                  <div className='flex flex-column justify-center tc items-center white outer'>
                          
                                <h3 className='pa6-ns pa2'>
                                    <ImQuotesLeft size="3rem" color="white" />
                                    <i> We have been working with Charity for over ten years now and our relationship has moved from that of charity client event organisers to friends. Charity is a great team committed to providing innovative, fun and challenging events.
                                    </i>
                                </h3>
                                <br /><br />
                                <div className='f5 '>- Kate Doe </div>
                            
                        </div>
                       

                    </Carousel>
                </div>
            </section>
        </div>
    )
}

export default Testimonials;