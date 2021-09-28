import React,{useState,useEffect} from 'react'
import Carousel from 'react-elastic-carousel'
import { ImQuotesLeft } from 'react-icons/im'
import './Testimonials.css'


function Testimonials() {

    const [testimonials,setTestimonials]=useState([]);

    useEffect(() => {
        fetch("https://gvbufoundation.herokuapp.com/testimonials")
        .then(response => response.json())
        .then(res => {
          if (res[0].test) {
            setTestimonials(res);
          }
        }).catch(error => {
          console.log('no data coming from db');
        })
    
      },[])

    return (
        <div className="home-div">
            <section className='parallax' >
                <div className='parallax-inner flex flex-column justify-center pt4 items-center'>
                    <h2 className="f2 pt4">TESTIMONIALS</h2>
                    <div className="line tc bg-white"></div>
                    <Carousel itemsToShow={1} interval={3000}  >
{
                   testimonials.map((item,index)=>{
                    console.log('checking testimonials',item.test);
                    return(
                        <div className='flex flex-column justify-center tc items-center white outer'>  
                        <h3 className='pa6-ns'>
                            <ImQuotesLeft size="2.5rem" color="white" />
                            <i>{item.test}</i>
                        </h3>
                        <br /><br />
                        <div className='f5 '>- {item.name} </div>
                    
                </div>
                    );
                })
                    }
                    </Carousel>
                </div>
            </section>
        </div>
    )
}

export default Testimonials;


                        
                           