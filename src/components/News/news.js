import React from 'react'
import './news.css'
import poor2 from './poor2.jpg'

function news(){
    return(
        <>
        <div className='page1'>
            <h1 style={{marginLeft:'10%',textAlign:'left',paddingTop:'8%',display:'inline-block',position:'relative'}}><b>Help us make a better World .</b></h1>
            <button className='new'>Make Donation</button>
        </div>
        <div className='page2'>
            <div className="item">
                <img src={poor2} alt="aboutimage" className="image" style={{height:'20vh',width:'20vh'}} />
                <p style={{position:'relative',textAlign:'center',paddingTop:'25%', paddingRight:'10%',paddingLeft:'10%',right:'-10px',left:'-10px',top:'-10px'}}>
                        Rohit nursery has been delivering premium quality plants since 1990. 
                        We manufacture flower plants, fruit plants and decorative garden plants from better mother plants.
                        We believe to provide you plants matching to your personal and climatic needs.
                        Rohit nursery has been delivering premium quality plants since 1990. 
                        We manufacture flower plants, fruit plants and decorative garden plants from better mother plants.
                        We believe to provide you plants matching to your personal and climatic needs.
                        Rohit nursery has been delivering premium quality plants since 1990. 
                        We manufacture flower plants, fruit plants and decorative garden plants from better mother plants.
                        We believe to provide you plants matching to your personal and climatic needs.
                </p>
            </div>
            <div className="item" style={{marginTop:'10%'}}>
                <div>
                  <img src={poor2} alt="aboutimage" style={{position:'relative',height:'200px',width:'200px',textAlign:'center',paddingTop:'25%', paddingRight:'10%',paddingLeft:'10%',right:'-10px',left:'-10px',top:'-10px'}} />
                  </div>
            </div>
            <div style={{position:'relative',paddingBottom:'0',textAlign:'center', bottom:'0', left:'0',backgroundColor:'gray',height:'20px', right: '0'}}>developed by debugged.exe</div>
        </div>
       </>
    )
}

export default news;