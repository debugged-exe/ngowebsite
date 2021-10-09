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
              <div className='slide bg-image flex flex-column justify-center items-center' style={{background: ` rgba(0,0,0,0.4) url(${item.bgimg}) no-repeat center center/cover `, backgroundSize: 'cover', width: '100vw'}}>
              <p className="home-tagline f2 b"  style={{color:"#e88f0a"}}>{item.tagline}</p>
              <Link to="/donatepage" >
                <a className="f5 link br2 grow ph3 pv2 mh2 dib white bg-yelloe" >DONATE</a>
              </Link>
            </div>
            );
        })}
         


        </Carousel>
      </div>
    
  );
}

export default HomeBackground;
