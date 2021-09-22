import React from 'react';
import './EventDisplay.css';
import {Link }from 'react-router-dom';
import {IoMdArrowRoundBack} from 'react-icons/io';


const EventDisplay = ({caro,initiative,setInitiative}) => {
    var abc=[];
  console.log('eventdisplay',caro);
    return(
      <div className="mt6 tc" id="project">
            <div >
             
            <Link to="/ourinitiatives" onClick={()=>setInitiative(initiative)} >
            <span className="return"><IoMdArrowRoundBack size="2rem" color="#e88foa" /></span> </Link>
            <h1 className="black">{initiative.toUpperCase()}</h1> 
            </div>
            
            <div className=" mt3">
                {
                  caro.map((item,index)=>{
                    console.log(item);
                    console.log(item.date);
                    return(
                      
<div>
                      <h1>{item.eventheading}</h1>
                      <div className="grid-component">
                        {
                           item.image.map((it,index)=>{
                            console.log('doublemap',it);
                            return(
                              <div className="ma3" key={index}>
                              <img alt="" src={it} style={{width:'100%',height:'100%',objectFit:'fill'}}/>
                            </div>
                            );
  
                            
                          })
                        }
                       </div>
                       </div> 
                    );
                  })
                }
            </div>
</div>

        
    );
}

export default EventDisplay;