import React from 'react';
import './AboutUs.css';
import Poor from './poorkids1.png';
import 'tachyons'

function AboutUs() {
  return (
    <div>


      <div className="tc">
        <h2 className="f2 pt4">ABOUT CHARITY</h2>
        <div className="line tc bg-yelloe"></div>
        <h3 className="mt2">We're an international organisation working with people in 50 countries for a world free from poverty and injustice.</h3>
      </div>

      <div className="grid-container ma3">
        <img src={Poor} height="550px" className="ml5" />
        <div>
          <h5 className="f5 mt5 about-text">We’re an international development organisation with our head office based in <b>Greece</b>. We also have offices right across Asia, the Americas and Europe. We <b>believe</b> the people whose lives our work affects should decide how we’re run.
            <br /><br />
            And that’s what makes us different. We help people use their own power to fight poverty and injustice.
            <br /><br />
            You can help us make a fairer, better world – wherever you are. Your voice can persuade world leaders to change policies.
          </h5>
          <a className="f4 link grow ph3 br2 pv2 mb2 dib bg-yelloe white" href="#0"><i><b>JOIN OUR CAUSE</b></i></a>
        </div>
      </div>

    </div >
  );
}

export default AboutUs;
