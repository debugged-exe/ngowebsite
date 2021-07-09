import React,{Component} from "react"
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Carousel from 'react-elastic-carousel'
import './HomeBackground.css'
import poor1 from './poor1.jpeg'
import poor2 from './poor2.jpg'
import poor3 from './poor3.jpeg'

class HomeBackground extends Component{

    render(){
        return(
        <div className="home-div">
        <Carousel itemsToShow={1} style={{position:'relative',right:'-10px',left:'-10px',width:'110%'}} showArrows={false} enableAutoPlay={true} interval={3000}>
                 <div className='slide font-size ' style={{backgroundImage:'url('+poor1+')',backgroundSize:'cover'}}>
                  <p className="sty">THE WAR AGAINST <b>HUNGER</b><br/>IS THE WAR OF <b>LIBERATION</b></p>
                  <Router>
                    <Link to = "/" style={{textDecoration:'none'}}>
                     <div className = "link donate1">Donate Now</div>
											</Link>
                  </Router>
                  </div>

                  <div className='slide font-size' style={{backgroundImage:'url('+poor2+')',backgroundSize:'cover'}}>
                  <p className="sty">THE WAR AGAINST <b>HUNGER</b><br/>IS THE WAR OF <b>LIBERATION</b></p>
                  <Router>
                    <Link to = "/" style={{textDecoration:'none'}}>
									  <div className = "link donate1">Donate Now</div>
									</Link>
                  </Router>
                  </div>

                  <div className='slide font-size' style={{backgroundImage:'url('+poor3+')',backgroundSize:'cover'}}>
                  <p className="sty">THE WAR AGAINST <b>HUNGER</b><br/>IS THE WAR OF <b>LIBERATION</b></p>
                  <Router>
                    <Link to = "/" style={{textDecoration:'none'}}>
                     <div className = "link donate1">Donate Now</div>
										</Link>
                  </Router>
                  </div>

        </Carousel>
       </div>
        )
    }
}

export default HomeBackground;
