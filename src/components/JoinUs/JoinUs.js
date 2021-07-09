import React from "react";
import 'tachyons';
import './JoinUs.css'
function Contact() {
    return (
        <div id='contact'>
        <div className='margin'></div>
        <section className='parallax' >
            <div className='parallax-inner flex flex-column justify-center items-center'>
                <h1 data-aos={"fade-up"} data-aos-duration={'2000'}>Contact Us</h1>
                <div className='mv2'>
                    <p data-aos={"fade-up"} data-aos-duration={'2000'}>Name</p>
                    <input className='bg-none br2' placeholder='Enter Name' data-aos={"fade-up"} data-aos-duration={'2000'}/>
                </div >
                <div className='mv2'>
                    <p data-aos={"fade-up"} data-aos-duration={'2000'}>Email</p>
                    <input className='bg-none br2' placeholder='Enter Email' data-aos={"fade-up"} data-aos-duration={'2000'}/>
                </div>
                <div className='mv2'>
                    <p data-aos={"fade-up"} data-aos-duration={'2000'}>Message</p>
                    <textarea className='bg-none br2 pr4' placeholder='Enter Email' data-aos={"fade-up"} data-aos-duration={'2000'}/>
                </div>
                <a data-aos={"fade-up"} data-aos-duration={'2000'} className="mt4 br2 grow f4 link ph3 pv2 mb2 dib white bg-dark-green" href="#0">Send Query</a>
            </div>
        </section>
        <div className='margin'></div>
    </div>
    );
}

export default Contact;