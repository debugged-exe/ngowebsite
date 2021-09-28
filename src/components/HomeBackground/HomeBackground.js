import React,{useState,useEffect} from "react"
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'
import './HomeBackground.css'

const HomeBackground=()=>{


  const[bgimage,setBgimage]=useState([]);

  useEffect(() => {
    fetch("https://gvbufoundation.herokuapp.com/homepage")
    .then(response => response.json())
    .then(res => {
      if (res[0].bgimg) {
        setBgimage(res);
      }
    }).catch(error => {
      console.log('no data coming from db');
    })

  },[])


  return(
    
      <div className="home-div" style={{marginLeft: '-10px', marginRight: '-10px'}}>
        <Carousel itemsToShow={1} style={{ position: 'relative'}} showArrows={false} enableAutoPlay={true} interval={3000}>
  {
        bgimage.map((item,index)=>{
        
            return(
              <div className='slide bg-image flex flex-column justify-center items-center' style={{background: ` url(${item.bgimg}) `, backgroundSize: 'cover', width: '100vw' }}>
              <p className="sty f3"><b>{item.tagline}</b></p>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <a className="f6 link grow ba ph3 pv2 mb2 dib white w-100" href="#0"><i>DONATE</i></a>
              </Link>
            </div>
            );
        })}
         


        </Carousel>
      </div>
    
  );
}

export default HomeBackground;
