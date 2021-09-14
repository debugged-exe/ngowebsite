import './App.css';
import 'tachyons';
import HomeBackground from '../HomeBackground/HomeBackground';
import HomePage from '../../pages/HomePage/HomePage';
import BlogPage from '../../pages/BlogPage/BlogPage';
import React from "react";
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
import { BsArrowUp } from 'react-icons/bs'


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            product: '',
        }
    }

    setProduct = (product) => {
        this.setState({ product: product });
    }

    render() {
        return (
            <div>
                <HashRouter>
                    <Navbar setProduct={this.setProduct} />
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/ngowebsite' component={HomePage} />
                        <Route exact path='/Blog' component={BlogPage} />
                        <Route exact path='/HomeBackground' component={HomeBackground} />
                        <Route exact path='/AboutUs' component={AboutUs} />
                        <Route exact path='/OurGoals' component={OurGoals} />
                        <Route exact path='/Testimonials' component={Testimonials} />
                        <Route exact path='/Events' component={Events} />
                        <Route exact path='/JoinUs' component={JoinUs} />
                        <Route exact path='/Donate' component={Donate} />
                        <Route exact path='/Privacy' component={Privacy} />
                        <Route exact path='/termsandconditions' component={TermsAndCondition} />
                    </Switch>
                    <Route exact path='/News' component={News} />
                </HashRouter>
            </div>
        );

    }
}

export default App;
