import React from 'react'
import './OurGoals.css'
import poor1 from './poor1.jpeg'

function OurGoals() {
    return (
        <div>
            <div className="tc goals">
                <h2 className="f2 pt4">OUR GOALS</h2>
                <div className="line tc bg-yelloe"></div>
                <h3 className="tc mt2 about-line">The goal of the charity is to ensure that we always have the funds
                    readily available to help children get a proper education</h3>
            </div>

            <div className="progress-bar-container flex flex-column justify-center items-center mt4">
                <div className="progress mv2">
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
                </div>
                <div className="flex mt4">
                    <a className="f4 link dim ph3 br2 pv2 mh4 mb2 dib bg-yelloe white" href="#0"><i><b>MAKE A DONATION</b></i></a>
                    <a className="f4 link dim br2 ba bw1 ph3 pv2 mb2 dib yelloe" href="#0"><i><b>BECOME A VOLUNTEER</b></i></a>
                </div>



            </div>


        </div>
    );
}

export default OurGoals;