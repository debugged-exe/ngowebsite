import React from 'react'
import HomeBackground from '../../components/HomeBackground/HomeBackground'
import AboutUs from '../../components/AboutUs/AboutUs'
import JoinUs from '../../components/JoinUs/JoinUs'
import News from '../../components/News/news'
import OurGoals from '../../components/OurGoals/OurGoals'
import Testimonials from '../../components/Testimonials/testimonials'

const HomePage = () =>{
    return(
        <>
        <HomeBackground/>
        <AboutUs/>
        <OurGoals/>
        <Testimonials/>
        <JoinUs/>
        <News/>
        </>
    )
}

export default HomePage;