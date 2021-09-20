import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from './charity-white.png';
import { HashLink as Link } from 'react-router-hash-link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

function Navbar({setInitiative}) {
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
                {/* <Link className="list-items " to='/HomeBackground'> <li>HOME</li> </Link>
                <Link className="list-items" to='/OurGoals'> <li>OUR GOALS</li> </Link>
                <Link className="list-items" to='/Testimonials'> <li>TESTIMONIALS</li> </Link> */}
                <Link className="list-items" to='#aboutUs'> <li>ABOUT US</li> </Link>

                <Link to="/ourInitiatives" className="linkInitiatives">
                <li className="list-style-none mh2 white menu">OUR INITIATIVES
              <ul className="sub-menu black align-left">
             <Link to="/ourinitiatives" className="linkInitiatives"><li className="sub-menu-item" onClick={() => {setInitiative("divyang")}} >Divyang</li></Link>
             <Link to="/ourinitiatives" className="linkInitiatives"><li className="sub-menu-item" onClick={() => {setInitiative("educational")}}>Educational</li></Link>
              <Link to="/ourinitiatives" className="linkInitiatives"><li className="sub-menu-item" onClick={() => {setInitiative("environmentcleanliness")}}>Environment cleanliness</li></Link>
              <Link to="/ourinitiatives" className="linkInitiatives"><li className="sub-menu-item" onClick={() => {setInitiative("health")}}>Health</li></Link>
              <Link to="/ourinitiatives" className="linkInitiatives"><li className="sub-menu-item" onClick={() => {setInitiative("livelihood")}}>Livelihood</li></Link>
              <Link to="/ourinitiatives" className="linkInitiatives"><li className="sub-menu-item" onClick={() => {setInitiative("natureinitiatives")}}>Nature initiatives</li></Link>
              <Link to="/ourinitiatives" className="linkInitiatives"><li className="sub-menu-item" onClick={() => {setInitiative("prashikshan")}}>Prashikshan</li></Link>
              <Link to="/ourinitiatives" className="linkInitiatives"><li className="sub-menu-item" onClick={() => {setInitiative("socialinitiative")}}>Social initiative</li></Link>
              <Link to="/ourinitiatives" className="linkInitiatives"><li className="sub-menu-item" onClick={() => {setInitiative("teenagegirls")}}>Teenage girls</li></Link>
              </ul>
              </li>
              </Link>

                {/* <Link className="list-items" to="/blog"> <li>BLOG</li> </Link> */}
                <Link className="list-items" to="#joinUs"> <li>JOIN US</li> </Link>
                <Link className="f6 link br2 grow ph3 pv2 mh2 dib white bg-yelloe" href="#0"><li><b>DONATE</b></li></Link>
            </ul>

            <GiHamburgerMenu style={{ display: `${navbar === 'block' ? 'none' : ''}`, position: 'fixed', top: '50px', right: '50px' }} className='hide-ham' onClick={() => setNavbar('block')} size='1.8rem' />
            <ImCross style={{ display: `${navbar === 'block' ? '' : 'none'}`, position: 'fixed', top: '50px', right: '50px' }} className='hide-ham' onClick={() => setNavbar('')} size='1rem' />
        </div >
    );
}

export default Navbar;