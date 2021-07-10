import React from "react";
import 'tachyons';
import './JoinUs.css'
function Contact() {
    return (
        <div id='contact'>
        <div className='margin'></div>
        <section className='parallax' >
            <div className='parallax-inner flex flex-column justify-center items-center'>
                <h1 >Contact Us</h1>
                <div className='mv2'>
                    <p style={{left:'0'}}>Name</p> <br/><br/>
                    <input className='bg-none br2 inner1' placeholder='Enter Name'/>
                </div >
                <div className='mv2'>
                    <p style={{left:'0'}}>Email</p><br/><br/>
                    <input className='bg-none br2 inner1' placeholder='Enter Email'/>
                </div>
                <div className='mv2'>
                    <p style={{left:'0'}}>Message</p><br/><br/>
                    <input className='bg-none br2 inner1' placeholder='Enter Message'/>
                </div>
                <a  className="mt4 br2 grow f4 link ph3 pv2 mb2 dib white bg-dark-green but1" href="#0">Send Query</a>
            </div>
        </section>
        <div className='margin'></div>
    </div>
    );
}

export default Contact;