import React from "react";
import 'tachyons';
import { MdEmail } from 'react-icons/md'
import { FaPen } from 'react-icons/fa'
import { BsFillPersonFill, BsFileEarmarkSpreadsheet } from 'react-icons/bs'
import './JoinUs.css'
function Contact() {
    return (
        <div id='contact'>
            <section className='parallax' >
                <div className='parallax-inner flex flex-column justify-center items-center'>
                    <h2 className="f2 pt4">JOIN US</h2>
                    <div className="line tc bg-white"></div>
                    <h5 className="tc mt2 about-line mb2">Want to catch up on whats been happening lately?<br />Take a look at the latest news of Lambda.</h5>
                    <div className="mt4 flex flex-column">
                        <div style={{ display: 'flex' }}>

                            <BsFillPersonFill size="3rem" color="#F1C34F" style={{ marginRight: '-2rem' }} />
                            <input className='bg-none pa2 mb2 yelloe mr4 db w-100 ml2' placeholder='Your Name *' />

                            <MdEmail size="3rem" color="#F1C34F" style={{ marginRight: '-2rem' }} />
                            <input className='bg-none pa2 mb2 yelloe db w-100' type='email' placeholder='Your Email *' />

                        </div >
                        <br />

                        <BsFileEarmarkSpreadsheet size="1.2rem" color="#F1C34F" style={{ marginLeft: '1rem', marginBottom: '-2rem' }} />
                        <input className='bg-none pa2 mb4 yelloe db w-95' placeholder='Your Subject' />


                        <FaPen size="1.2rem" color="#F1C34F" style={{ marginLeft: '1rem', marginBottom: '-2rem' }} />
                        <textarea style={{ height: '200px' }} className='bg-none yelloe w-100 pa2 mb4 dib' placeholder='Your message' />


                    </div>
                    <a className="f6 link dim ph3 pv2 mb2 dib white bg-yelloe" href="#0"><i><b>SEND EMAIL</b></i></a>
                </div>
            </section>
            <div className='margin'></div>
        </div>
    );
}

export default Contact;