import React from 'react'
import HomeBackground from '../../components/HomeBackground/HomeBackground'
import AboutUs from '../../components/AboutUs/AboutUs'
import JoinUs from '../../components/JoinUs/JoinUs'
import News from '../../components/News/news'
import OurGoals from '../../components/OurGoals/OurGoals'
import Events from '../../components/Events/Events'
import Testimonials from '../../components/Testimonials/Testimonials'

const HomePage = () =>{
    return(
        <>
        <HomeBackground/>
        <AboutUs/>
        <OurGoals/>
        <Testimonials/>
        <Events/>
        <JoinUs/>
        <News/>
        </>
    )
}

export default HomePage;