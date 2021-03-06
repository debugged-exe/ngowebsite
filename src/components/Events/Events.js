import React,{useState,useEffect} from 'react'
import './Events.css'
import { Link } from 'react-router-dom'

import poor1 from './poor1.jpeg'

function Events({setInitiative}) {

    const[divyang,setdivyang]=useState([]);
    const[env,setEnv]=useState([]);
    const[nature,setNature]=useState([]);
    const[health,sethealth]=useState([]);
    const[edu,setEdu]=useState([]);
    const[live,setLive]=useState([]);
    const[prashik,setPrashik]=useState([]);
    const[social,setSocial]=useState([]);
    const[teen,setTeen]=useState([]);

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
    
    
    
      }, [])
    

    return (
        <div className='test'>
            <div className="tc">
                <h2 className="f2 tc pt4">LATEST EVENTS</h2>
                <div className="line tc bg-yelloe"></div>
                <h3 className="tc mt2 tc about-line">Want to catch up on whats been happening lately?
                    Take a look at the latest news of Lambda.</h3>
            </div>

            <div className='grid-component tc mt4'>
              {
              divyang.map((i,index)=>{
                
                return(
                  <Link to="/ourinitiatives"  >
                    <div className='category' onClick={() =>{setInitiative(i.tagline);}} 
                    style={{ background:`rgba(0, 0, 0, .4) url(${i.photos[0]}) no-repeat center center`, backgroundSize: 'cover',backgroundBlendMode:'darken', position: 'relative' }}>
                         <div className='inner'   >
                          <hr style={{ bottom: '0', width: '80%' }} />
                      </div>
                      <div className='hidden '>{i.title}</div>
                     
                      
                  </div>
                </Link>
                  
                );
               
                
              })
              }
               {
              env.map((i,index)=>{
               
                return(
                  <Link to="/ourinitiatives"  >
                    <div className='category' onClick={() =>{setInitiative(i.tagline);}} 
                    style={{ background:`rgba(0, 0, 0, .4) url(${i.photos[0]}) no-repeat center center`, backgroundSize: 'cover',backgroundBlendMode:'darken', position: 'relative' }}>

                      <div className='inner'   >
                          <hr style={{ bottom: '0', width: '80%' }} />
                      </div>
                      <div className='hidden'>{i.title}</div>
                  </div>
                </Link>
                  
                );
               
                
              })
              }
              {
              edu.map((i,index)=>{
               
                return(
                  <Link to="/ourinitiatives"  >
                    <div className='category' onClick={() =>{setInitiative(i.tagline);}} 
                    style={{ background:`rgba(0, 0, 0, .4) url(${i.photos[0]}) no-repeat center center`, backgroundSize: 'cover',backgroundBlendMode:'darken', position: 'relative' }}>

                      <div className='inner'   >
                          <hr style={{ bottom: '0', width: '80%' }} />
                      </div>
                      <div className='hidden'>{i.title}</div>
                  </div>
                </Link>
                  
                );
               
                
              })
              }  
            </div>
            
            
        </div>
    );
}

export default Events;