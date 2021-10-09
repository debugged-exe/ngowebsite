import React,{useState,useEffect} from 'react'
import './news.css'
import footer1 from './footer1.jpg'
import footer2 from './footer2.jpg'
import footer3 from './footer3.jpg'
import footer4 from './footer4.jpg'
import { Link } from 'react-router-dom'

const News = ({setInitiative}) => {

  const[divyang,setdivyang]=useState([]);
    const[env,setEnv]=useState([]);
    const[health,sethealth]=useState([]);
    const[edu,setEdu]=useState([]);

  useEffect(() => {
    fetch("https://gvbufoundation.herokuapp.com/divyang")
        .then(response => response.json())
        .then(res => {
          if (res[0].tagline) {
            setdivyang(res);
          }
        }).catch(error => {
          console.log(error);
        })

        fetch("https://gvbufoundation.herokuapp.com/environment")
        .then(response => response.json())
        .then(res => {
          if (res[0].tagline) {
            setEnv(res);
          }
        }).catch(error => {
          console.log(error);
        })

        fetch("https://gvbufoundation.herokuapp.com/educational")
        .then(response => response.json())
        .then(res => {
          if (res[0].tagline) {
            setEdu(res);
          }
        }).catch(error => {
          console.log(error);
        })
    
    
        fetch("https://gvbufoundation.herokuapp.com/health")
        .then(response => response.json())
        .then(res => {
          if (res[0].tagline) {
            sethealth(res);
          }
        }).catch(error => {
          console.log(error);
        })
    
}, []);

  return (

    <div className="flex justify-center tl bg-dark-gray white footer-container pv4 lh-copy">

      <div className="w-40 mr6">
        <h4 className="yelloe b">ABOUT GVBU</h4>
        <p className="f5">We as an NGO contribute towards the betterment of our country by helping the people around us and by trying to provide various amenities to our fellow citizens<br/> who do not have the facility to acquire these amenities or are facing some kind of difficulties while trying to do so.
          <br />
          <br />
         </p>
      </div>
{/* 
      <div className="footer-right" align="left">
        <h4 className="yelloe b">LATEST EVENTS</h4>
        <ul>
          
           { 
           divyang.map((item,index)=>{
             return (
              <Link to='/ourinitiatives'>
                <li className="flex items-start mb2" onClick={()=>{setInitiative("divyang");}}>
                <img src={item.photos[0]} width="50px"></img>
                <div className="ml2">
                  <p className="f6 yelloe mv0 b">{item.title}</p>
                  <span className="f6 white mt0">{item.events[0].date}</span>
                </div>
              </li>
            </Link>
             );
           })
           }

          
          <div className="line"></div>

          { 
           edu.map((item,index)=>{
             return (
              <Link to='/ourinitiatives'>
                <li className="flex items-start mb2" onClick={()=>{setInitiative("educational");}}>
                <img src={item.photos[0]} width="50px"></img>
                <div className="ml2">
                  <p className="f6 yelloe mv0 b">{item.title}</p>
                  <span className="f6 white mt0">{item.events[0].date}</span>
                </div>
              </li>
            </Link>
             );
           })
           }
          
          <div className="line"></div>

          { 
           env.map((item,index)=>{
             return (
              <Link to='/ourinitiatives'>
                <li className="flex items-start mb2" onClick={()=>{setInitiative("environmentcleanliness");}}>
                <img src={item.photos[0]} width="50px"></img>
                <div className="ml2">
                  <p className="f6 yelloe mv0 b">{item.title}</p>
                  <span className="f6 white mt0">{item.events[0].date}</span>
                </div>
              </li>
            </Link>
             );
           })
           }
          
          <div className="line"></div>

          { 
           health.map((item,index)=>{
             return (
              <Link to='/ourinitiatives'>
                <li className="flex items-start mb2" onClick={()=>{setInitiative("health");}}>
                <img src={item.photos[0]} width="50px"></img>
                <div className="ml2">
                  <p className="f6 yelloe mv0 b">{item.title}</p>
                  <span className="f6 white mt0">{item.events[0].date}</span>
                </div>
              </li>
            </Link>
             );
           })
           }
          
        </ul>
      </div> */}

    </div>
  )
}

export default News;
