import React from 'react';
import './navbar.css';
import logo from './logo.svg';
import { HashLink as Link } from 'react-router-hash-link';

function navbar({setProduct}) {
    return (
        <div className='back'>
        <nav className="db dt-l w-100 border-box pa3 ph5-l">
            <Link className="db dtc-l v-mid mid-gray link1 dim w-100 w-25-l tl-l mb2 mb0-l" title="Home" to='/'>
                <img src={logo} className="dib w2 h2" alt="Site Name"/>
                <span style={{fontSize: "2rem"}} className='b'>Charity</span><br/>
            </Link>
            <div className="db dtc-l v-mid w-100 w-75-l tr-l">
                <Link className="link1 dim dark-gray f6 f5-l dib mr3 mr4-l" to='/HomeBackground'>HOME</Link>
                <Link className="link1 dim dark-gray f6 f5-l dib mr3 mr4-l" to='/OurGoals'>OUR GOALS</Link>
                <Link className="link1 dim dark-gray f6 f5-l dib mr3 mr4-l" to='/Testimonials'>TESTIMONIALS</Link>
                <Link className="link1 dim dark-gray f6 f5-l dib mr3 mr4-l" to="/News">NEWS</Link>
                <Link className="link1 dim dark-gray f6 f5-l dib mr3 mr4-l" to="/JoinUs">JOIN US</Link>
                <Link className="link1 dim dback dark-gray f6 f5-l dib mr3 mr4-l" to="/Donate">DONATE</Link>
            </div>
        </nav>
        </div>
        );
}

export default navbar;