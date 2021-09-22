import './App.css';
import 'tachyons';
import HomeBackground from '../HomeBackground/HomeBackground';
import HomePage from '../../pages/HomePage/HomePage';
import BlogPage from '../../pages/BlogPage/BlogPage';
import React,{useState} from "react";
import AboutUs from '../AboutUs/AboutUs';
import Navbar from '../Navbar/Navbar';
import Donate from '../Donate/Donate'
import JoinUs from '../JoinUs/JoinUs'
import News from '../News/news'
import OurGoals from '../OurGoals/OurGoals'
import Events from '../Events/Events'
import Testimonials from '../Testimonials/Testimonials';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Privacy from '../Privacy/Privacy';
import TermsAndCondition from '../TermsAndCondition/TermsAndCondition';
import EventDisplay  from '../BlogMain/EventDisplay';
import { BsArrowUp } from 'react-icons/bs'

function App(){

    const [product,setProduct]=useState('');
    const [initiative,setInitiative]=useState('health');
    const[caro,setCaro]=useState([]);
    const setCarousel = (caro) => {
        setCaro(caro);
      }
        return(
            <div>
                <HashRouter>
                    <Navbar  setInitiative={setInitiative} />
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                      //  <Route exact path='/ngowebsite' component={HomePage} />
                        <Route exact path='/ourinitiatives' component={()=> <BlogPage initiative={initiative} caro={caro} setCarousel={setCarousel}/> } />
                        <Route exact path='/HomeBackground' component={HomeBackground} />
                        <Route exact path='/aboutUs' component={AboutUs} />
                        <Route exact path='/OurGoals' component={OurGoals} />
                        <Route exact path='/Testimonials' component={Testimonials} />
                        <Route exact path='/eventdisplay' component={()=><EventDisplay caro={caro} initiative={initiative} setInitiative={setInitiative}/> }/>
                        <Route exact path='/Events' component={Events} />
                        <Route exact path='/joinUs' component={JoinUs} />
                        <Route exact path='/Donate' component={Donate} />
                        <Route exact path='/privacy' component={Privacy} />
                        <Route exact path='/terms' component={TermsAndCondition} />
                    </Switch>
                    <Route exact path='/News' component={News} />
                </HashRouter>
            </div>
    
        );
    
}

export default App;
