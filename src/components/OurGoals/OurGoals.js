import React from 'react'
import './OurGoals.css';
import { HashLink as Link } from 'react-router-hash-link';
import poor1 from './poor1.jpeg'

function OurGoals() {
    return (
        <div className="mb6">
            {/* <div className="tc goals w-100">
                <h2 className="f2 pt4">OUR GOALS</h2>
                <div className="line tc bg-yelloe"></div>
                <div className='w-100'>
                <h3 className="tc mt4 about-line">The goal of the charity is to ensure that we always have the funds
                    readily available to help children get a proper education</h3>
                    </div>
            </div> */}

            <div className="progress-bar-container flex flex-column ml3 mr3 justify-center items-center mt4">
                {/* <div className="progress mv2">
                    <div className="progress-bar w-75 bg-yelloe white b tc">
                        <span style={{ fontSize: "0.7rem", lineHeight: "2.5px" }}>$75 OUT OF $100 RAISED</span>
                    </div>
                </div>
                <div className="progress mv2">
                    <div className="progress-bar w-90 bg-yelloe white b tc">
                        <span style={{ fontSize: "0.7rem", lineHeight: "2.5px" }}>900 OUT OF 1000 VOLUNTEERS</span>
                    </div>
                </div>
                <div className="progress mv2">
                    <div className="progress-bar w-70 bg-yelloe white b tc">
                        <span style={{ fontSize: "0.7rem", lineHeight: "2.5px" }}>600 OUT OF 900 TEACHERS</span>
                    </div>
                </div> */}
                <div className="flex mt4 buttons">
                    <Link to="/donatepage">
                    <a className="f4 link grow ph3 br2 pv2 mh4 mb2 dib bg-yelloe white" href="#0"><i><b>MAKE A DONATION</b></i></a>
                    </Link>
                   <Link to="/ngowebsite/#joinUs" >
                    <a className="f4 link grow br2 ba bw1 ph3 pv2 mb2 dib yelloe" ><i><b>BECOME A VOLUNTEER</b></i></a>
                    </Link>
                </div>
            </div>


        </div>
    );
}

export default OurGoals;