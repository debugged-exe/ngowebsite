import React, { Component } from "react"
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'
import './HomeBackground.css'
import homebg1 from './homebg1.jpg'
import homebg2 from './homebg2.jpg'
import homebg3 from './homebg3.jpg'

class HomeBackground extends Component {

  render() {
    return (
      <div className="home-div" style={{marginLeft: '-10px', marginRight: '-10px'}}>
        <Carousel itemsToShow={1} style={{ position: 'relative' }} showArrows={false} enableAutoPlay={true} interval={3000}>

          <div className='slide bg-image flex flex-column justify-center items-center' style={{ backgroundImage: 'url(' + homebg1 + ')', backgroundSize: 'cover', width: '100vw' }}>
            <p className="sty f4">THE WAR AGAINST <b>HUNGER</b><br />IS THE WAR OF <b>LIBERATION</b></p>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <a className="f6 link grow ba ph3 pv2 mb2 dib white w-100" href="#0"><i>DONATE</i></a>
            </Link>
          </div>

          <div className='slide bg-image flex flex-column justify-center items-center' style={{ backgroundImage: 'url(' + homebg2 + ')', backgroundSize: 'cover', width: '100vw' }}>
            <p className="sty f4">THE WAR AGAINST <b>HUNGER</b><br />IS THE WAR OF <b>LIBERATION</b></p>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <a className="f6 link grow ba ph3 pv2 mb2 dib white w-100" href="#0"><i>DONATE</i></a>
            </Link>
          </div>

          <div className='slide bg-image flex flex-column justify-center items-center' style={{ backgroundImage: 'url(' + homebg3 + ')', backgroundSize: 'cover', width: '100vw' }}>
            <p className="sty f4">THE WAR AGAINST <b>HUNGER</b><br />IS THE WAR OF <b>LIBERATION</b></p>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <a className="f6 link grow ba ph3 pv2 mb2 dib white w-100" href="#0"><i>DONATE</i></a>
            </Link>
          </div>


        </Carousel>
      </div>
    )
  }
}

export default HomeBackground;
