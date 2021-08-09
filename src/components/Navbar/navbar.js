import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './charity-white.png';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {

    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_back"}`}>
            <div className="db dt-l w-100 border-box pa3 ph5-l">
                <Link className="db dtc-l v-mid mid-gray link1 dim w-100 w-25-l tl-l mb2 mb0-l" title="Home" to='/'>
                    <div className="flex justify-center items-center">
                        <img src={logo} className="dib w3 h3" alt="Site Name" />
                        <span className='b f4 ml3'><i>Charity</i></span><br />
                    </div>
                </Link>
                <div className="db dtc-l v-mid w-100 w-75-l tr-l">
                    <Link className="link1 dim dark-gray f6 f5-l dib mr3 mr4-l" to='/HomeBackground'>HOME</Link>
                    <Link className="link1 dim dark-gray f6 f5-l dib mr3 mr4-l" to='/AboutUs'>ABOUT US</Link>
                    <Link className="link1 dim dark-gray f6 f5-l dib mr3 mr4-l" to='/OurGoals'>OUR GOALS</Link>
                    <Link className="link1 dim dark-gray f6 f5-l dib mr3 mr4-l" to='/Testimonials'>TESTIMONIALS</Link>
                    <Link className="link1 dim dark-gray f6 f5-l dib mr3 mr4-l" to="/News">NEWS</Link>
                    <Link className="link1 dim dark-gray f6 f5-l dib mr3 mr4-l" to="/JoinUs">JOIN US</Link>
                    <Link className="f6 link br2 dim ph3 pv2 mb2 dib white bg-yelloe" href="#0"><b>DONATE</b></Link>
                </div>
            </div>
            <div className="line bg-white" style={{ width: '100%', height: '0.5px', opacity: '0.2' }}></div>
        </div>
    );
}

export default Navbar;