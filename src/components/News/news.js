import React from 'react'
import './news.css'
import footer1 from './footer1.jpg'
import footer2 from './footer2.jpg'
import footer3 from './footer3.jpg'
import footer4 from './footer4.jpg'
import { BsArrowUp } from 'react-icons/bs'

const news = () => {
  return (
    <div>
      <div className="bg-yelloe white h4 tc flex justify-center items-center">
        <h3 className="pa4">HELP US MAKE A BETTER WORLD FOR OUR CHILDREN.</h3>
        <a className="f4 link grow ph3 br2 pv2 mb2 ml4 dib bg-white yelloe" href="#0"><i><b>MAKE A DONATION</b></i></a>
      </div>

      <div className="flex justify-center tl bg-dark-gray white  ph7 pv4 lh-copy">
        <div className="w-40 mr6">
          <h4 className="yelloe b">ABOUT CHARITY</h4>
          <p className="f6">We’re an international development organisation with our head office based in Greece.
            We also have offices right across Asia, the <span className="yelloe">Americas</span> and Europe. We believe the people whose lives our work affects should decide how we’re run.
            <br />
            <br />
            You can help us make a fairer, better world – wherever you are. Your voice can persuade world leaders to change policies.</p>
        </div>

        <div className="footer-right" align="left">
          <h4 className="yelloe b">LATEST EVENTS</h4>
          <ul>
            <li className="flex items-start mb2">
              <img src={footer1} width="50px"></img>
              <div className="ml2">
                <p className="f6 yelloe mv0 b">Parade Charity</p>
                <span className="f6 white mt0">February 18, 2015</span>
              </div>
            </li>
            <div className="line"></div>
            <li className="flex items-start mb2">
              <img src={footer2} width="50px"></img>
              <div className="ml2">
                <p className="f6 yelloe mv0 b">Children’s Classic at Sanctuary</p>
                <span className="f6 white mt0">January 25, 2015</span>
              </div>
            </li>
            <div className="line"></div>
            <li className="flex items-start mb2">
              <img src={footer3} width="50px"></img>
              <div className="ml2">
                <p className="f6 yelloe mv0 b">Climb for Courage</p>
                <span className="f6 white mt0">December 25, 2014</span>
              </div>
            </li>
            <div className="line"></div>
            <li className="flex items-start mb2">
              <img src={footer4} width="50px" height="50px" ></img>
              <div className="ml2">
                <p className="f6 yelloe mv0 b">Children’s Gala</p>
                <span className="f6 white mt0">November 25, 2014</span>
              </div>
            </li>
          </ul>
        </div>
      </div>


    </div>
  )
}

export default news;
