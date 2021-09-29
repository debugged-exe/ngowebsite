import React,{useState,useEffect,useLayoutEffect} from 'react';
import './BlogMain.css';
import main from './mainimage.jpg';
import poor1 from '../Events/poor1.jpeg';
import { Link} from "react-router-dom";


function BlogMain({initiative,setCarousel}) {
    console.log(initiative)

    const [drive,setDrive]=useState([]);
    var abc=[];
    
    useLayoutEffect(()=>{
      window.scrollTo(0,0);
    })



    useEffect(() => {
        if(initiative==="divyang"){
          fetch(" https://gvbufoundation.herokuapp.com/divyang")
          .then(response => response.json())
          .then(res => {
            if (res[0].title) {
              setDrive(res);
            }
          }).catch(error => {
            console.log(error);
          })
    
        }
        else if (initiative==="educational") {
          fetch(" https://gvbufoundation.herokuapp.com/educational")
          .then(response => response.json())
          .then(res => {
            if (res[0].title) {
              setDrive(res);
            }
          }).catch(error => {
            console.log(error);
          })
    
    
        }
        else if (initiative==="environmentcleanliness") {
          fetch(" https://gvbufoundation.herokuapp.com/environment")
          .then(response => response.json())
          .then(res => {
            if (res[0].title) {
              setDrive(res);
            }
          }).catch(error => {
            console.log(error);
          })
    
    
        }
        else if (initiative==="health") {
          fetch(" https://gvbufoundation.herokuapp.com/health")
          .then(response => response.json())
          .then(res => {
            if (res[0].title) {
              setDrive(res);
            }
          }).catch(error => {
            console.log(error);
          })
    
    
        }
        else if (initiative==="livelihood") {
          fetch(" https://gvbufoundation.herokuapp.com/livelihood")
          .then(response => response.json())
          .then(res => {
            if (res[0].title) {
              setDrive(res);
            }
          }).catch(error => {
            console.log(error);
          })
    
    
        }
    
        else if (initiative==="natureinitiatives") {
          fetch(" https://gvbufoundation.herokuapp.com/nature")
          .then(response => response.json())
          .then(res => {
            if (res[0].title) {
              setDrive(res);
            }
          }).catch(error => {
            console.log(error);
          })
    
        }
    
        else if (initiative==="prashikshan") {
          fetch(" https://gvbufoundation.herokuapp.com/prashikshan")
          .then(response => response.json())
          .then(res => {
            if (res[0].title) {
              setDrive(res);
            }
          }).catch(error => {
            console.log(error);
          })
    
        }
    
    
        else if (initiative==="socialinitiative") {
          fetch(" https://gvbufoundation.herokuapp.com/social")
          .then(response => response.json())
          .then(res => {
            if (res[0].title) {
              setDrive(res);
            }
          }).catch(error => {
            console.log(error);
          })
    
    
        }
        else if (initiative==="teenagegirls") {
            fetch(" https://gvbufoundation.herokuapp.com/teenage")
            .then(response => response.json())
            .then(res => {
              if (res[0].title) {
                setDrive(res);
              }
            }).catch(error => {
              console.log(error);
            })
      
      
          }
      }, [])

    return (
      <div>
        {
            drive.map((item,index)=>{
              abc=item.events;
              abc=abc.sort((a,b)=>b.cnt-a.cnt);
              console.log(item);
              return(
                <div className="blog-main">
                <img src={item.photos[0]} />
                <h2 className="f2 pt4 tl pb1 mb0">{item.title}</h2>
                <div className="silver flex pb0 f6 mb0 normal post-deets">  
                {/* <span><AiOutlineClockCircle className="mr1" /> February 18, 2015 </span>  */}
                {/* <span>< AiOutlineUser className="mh1" /> langan  </span> <span>< BiNews className="mh1" /> News, Uncategorized  </span> <span className="pr0"><FaRegComments className="mh1" />No comments </span> */}
                </div>
                <p className="f6">
                    <br />
                    {item.description}
                    <br /><br />
                    They only come out in the night. Or in this case, the day. The Internet King? I wonder if he could provide faster nudity… Oh, loneliness and cheeseburgers are a dangerous mix. A woman is a lot like a refrigerator. Six feet tall, 300 pounds…it makes ice. Weaseling out of things is important to learn. It’s what separates us from the animals…except the weasel.
                    <br /><br />
                    But, Aquaman, you cannot marry a woman without gills. You’re from two different worlds… Oh, I’ve wasted my life. Your guilty consciences may make you vote Democratic, but secretly you all yearn for a Republican president to lower taxes, brutalize criminals, and rule you like a king! Oh, everything looks bad if you remember it. I’m a Spalding Gray in a Rick Dees world.
                    <br /><br />
                    Get ready, skanks! It’s time for the truth train! Your guilty consciences may make you vote Democratic, but secretly you all yearn for a Republican president to lower taxes, brutalize criminals, and rule you like a king! What good is money if it can’t inspire terror in your fellow man?
                </p>
                
                <div className='blog-grid items-center'>
               
                {
                  
                          abc.map((i,index)=>{
                            console.log(item.events);
                          
                                if(i.recent==='1'){
                                  
                                  return(

                              <div >
                                 <Link to ="/eventdisplay" onClick={(e)=>{setCarousel([i]);}}> 
                                  <div className='test-category ' style={{ backgroundImage: `url(${i.image[0]})`, backgroundSize: 'cover', position: 'relative' }}>
                                    <div className='inner'>
                                    {i.place}
                                    
                                    <hr style={{ bottom: '0', width: '40%' }} />
                                   
                                </div>
                               
                              <div className='hidden'> {i.date}</div>

                    </div>
                   </Link>
                </div>

                                  )
                                }

                              })
                            }

                            </div>
                






            </div >
              );
             
            
            })
        }
      </div>
        
    );
}

export default BlogMain;