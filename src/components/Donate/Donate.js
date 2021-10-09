import React from 'react'
import './Donate.css';
import { HashLink as Link } from 'react-router-hash-link';

function Donate() {
    return (
        <div className="bg-yelloe ma4-ns br2 shadow-5 white h4 tc flex justify-center items-center donate-page">
            <h3 className="mr2 ">HELP US MAKE A BETTER WORLD FOR OUR CHILDREN.</h3>
            <Link to="/donatepage">
            <a className="f5 link ma5 grow ph3 br2 pv3 ml2 dib bg-white yelloe" ><i><b>MAKE A DONATION</b></i></a>
            </Link>
        </div>
    )
}

export default Donate;