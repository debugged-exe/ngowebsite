import React from "react";
import 'tachyons';
import './JoinUs.css'
function Contact() {
    return (
        <div id='contact'>
        <div className='margin'></div>
        <section className='parallax' >
            <div className='parallax-inner flex flex-column justify-center items-center'>
                <h1 >JOIN US</h1>
                <div style={{textAlign:'center'}}>
                    <h3>Want to catch up on whats been happening lately? <br/><br/>Take a look at the latest news of Lambda<br/><br/></h3>
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                 <div style={{display:'flex'}}>
                    <input className='bg-none input-reset pa2 mb3 gold mr4 db w-100 #e88f0a' placeholder='Your Name *'/>
                    <input className='bg-none input-reset pa2 mb3 gold db w-100' placeholder='Your Email *'/>
                 </div >
                 <input className='bg-none input-reset pa2 mb3 gold db w-95' placeholder='Your Subject'/>
                 <textarea style={{height:'200px'}} className='bg-none input-reset gold w-100 pa2 mb2 dib' placeholder='Your message'/>
                 
                 </div>
                 <a className="f6 link dim ph3 pv2 mb2 dib white bg-gold" href="#0">Send Query</a>
            </div>
        </section>
        <div className='margin'></div>
    </div>
    );
}

export default Contact;