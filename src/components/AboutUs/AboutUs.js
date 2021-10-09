import React from 'react';
import './AboutUs.css';
import { HashLink as Link } from 'react-router-hash-link';
import Poor from './poorkids1.png';
import 'tachyons'

function AboutUs() {
  return (
    <div className='about-us' id="aboutUs">
      <div className="tc">
        <h2 className="f2 pt4">ABOUT GVBU</h2>
        <div className="line tc bg-yelloe"></div>
        <h3 className="f5 mt5 about-line " >We as an NGO contribute towards the betterment of our country by helping the people around us and by trying to provide various amenities to our fellow citizens who do not have the facility to acquire these amenities or are facing some kind of difficulties while trying to do so.  </h3>
      </div>

      <div className="grid-container ma3">
        <img src="https://i.postimg.cc/RhJzgQwV/IMG-20210923-WA0074.jpg" style={{maxHeight:"525px",maxWidth:"700px",objectFit:"fill"}} className="ml5" />
        <div className="text-container">
          <h5 className="f5 about-text">For helping with education, we try to provide financial aid to handicapped people as well as any child whose parents may be having a difficult time funding their education. Our aim here is to eradicate financial problems that come in the way of basic education.
            <br /><br />
            We have often seen people who are suffering from various common diseases and are not able to purchase medicines. We do our bit by helping them with their medical needs by providing them with free basic medicines and healthcare.
            <br /><br />
          </h5>
          {/* <Link to="/ngowebsite#joinUs">
          <a className="f4 link grow ph3 br2 pv2 mb2 dib bg-yelloe white" ><i><b>JOIN OUR CAUSE</b></i></a>
          </Link> */}
        </div>
      </div>

    </div >
  );
}

export default AboutUs;
