import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from './charity-white.png';
import { HashLink as Link } from 'react-router-hash-link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

function Navbar() {
    const [navbar, setNavbar] = useState('');
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
        <div className={`navbar-container ${show === true ? 'nav_black' : ''}`} style={{ background: `${navbar === 'block' ? 'black' : ''}` }}>
            <div className="" style={{ textDecoration: "none" }} title="Home" >
                <div className="nav-logo">
                    <Link to='/' ><img src={logo} className="" alt="Site Name" /></Link>
                    <span className=' white b f3 '><i> Charity </i></span><br />
                </div>
            </div>

            <ul className={'nav-list'} style={{ display: `${navbar === 'block' ? 'flex' : ''}` }}>
                <Link className="list-items " to='/HomeBackground'> <li>HOME</li> </Link>
                <Link className="list-items" to='/OurGoals'> <li>OUR GOALS</li> </Link>
                <Link className="list-items" to='/Testimonials'> <li>TESTIMONIALS</li> </Link>
                <Link className="list-items" to='/AboutUs'> <li>ABOUT US</li> </Link>
                <Link className="list-items" to="/Blog"> <li>BLOG</li> </Link>
                <Link className="list-items" to="/JoinUs"> <li>JOIN US</li> </Link>
                <Link className="f6 link br2 grow ph3 pv2 mh2 dib white bg-yelloe" href="#0"><li><b>DONATE</b></li></Link>
            </ul>

            <GiHamburgerMenu style={{ display: `${navbar === 'block' ? 'none' : ''}`, position: 'fixed', top: '50px', right: '50px' }} className='hide-ham' onClick={() => setNavbar('block')} size='1.8rem' />
            <ImCross style={{ display: `${navbar === 'block' ? '' : 'none'}`, position: 'fixed', top: '50px', right: '50px' }} className='hide-ham' onClick={() => setNavbar('')} size='1rem' />
        </div >
    );
}

export default Navbar;