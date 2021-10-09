import React,{useState,useEffect,useLayoutEffect} from 'react';
import './BlogMain.css';
import main from './mainimage.jpg';
import poor1 from '../Events/poor1.jpeg';
import { Link} from "react-router-dom";


function BlogMain({initiative,setCarousel}) {
    console.log(initiative)

    const [drive,setDrive]=useState([]);
    var abc=[];
    
    // useLayoutEffect(()=>{
    //   window.scrollTo(0,0);
    // })

    const[visible,setVisible]=useState(3);
    const[hideShowMore,sethideShowMore]=useState('block');
    const[hideShowLess,sethideShowLess]=useState('none');
    const showMoreItems = () => {
      setVisible( visible + 3);
      sethideShowMore('none');
      sethideShowLess('block');
      }
    const showLessItems =() =>{
      setVisible(3);
      sethideShowLess('none');
      sethideShowMore('block');
    }

const[showP,setShowPast]=useState(false);

    useEffect(() => {
        if(initiative==="divyang"){
          fetch(" https://gvbufoundation.herokuapp.com/divyang")
          .then(response => response.json())
          .then(res => {
            if (res[0].title) {
              setDrive(res);
            }
          }).catch(error => {
            console.log('divyang wala ',error);
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
              abc=item.events.filter((a)=>a.recent==='1');;
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
                    <br/>
                    {item.description[0]}
                    <br/><br/>
                    {item.description[1]}
                    <br/><br/>
                    {item.description[2]}
                    </p>
                    {/* <h4>RECENT EVENTS</h4> */}
                {/* <div className='blog-grid items-center'>
               
                {
                  
                          abc.slice(0,visible).map((i,index)=>{
                            console.log('abc ki value',i);
                                if(i.recent==='1'){
                                  
                                  return(

                              <div >
                                 <Link to ="/eventdisplay" onClick={(e)=>{setCarousel([i]);}}> 
                                  <div className='test-category ' style={{ backgroundImage: `url(${i.img[0]})`, backgroundSize: 'cover', position: 'relative' }}>
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

                            </div> */}
                            <div>
                      {/* {
                        abc.map((a,index)=>{
                          if(abc.length<0){
                            console.log("done",abc.length);
                            return(
                           <div></div>
                            )
                          }
                          else if( index===0){
                            return(
                              <div className="showButtons mt2 mb2 flex justify-center">
                                  <div className="mh2 br2 mt2 mb4 ba btn ph3 pv2 pointer" style={{display:`${hideShowMore}`}}
  onClick={() => showMoreItems()}>Show More</div>
<div className=" mh2 br2 mt2 mb4 ba btn ph3 pv2 pointer" style={{display:`${hideShowLess}`}}
 onClick={() => showLessItems()}>Show Less</div>
                              </div>
                            )
                          }

                        })
                      } */}

                      </div>






            </div >
              );
             
            
            })
        }
      </div>
        
    );
}

export default BlogMain;