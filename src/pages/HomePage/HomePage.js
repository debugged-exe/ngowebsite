import React from 'react'
import HomeBackground from '../../components/HomeBackground/HomeBackground'
import Donate from '../../components/Donate/donate'
import JoinUs from '../../components/JoinUs/JoinUs'
import News from '../../components/News/news'
import OurGoals from '../../components/OurGoals/OurGoals'
import Testimonials from '../../components/Testimonials/testimonials'

const HomePage = () =>{
    return(
        <>
        <HomeBackground/>
        <OurGoals/>
        <Testimonials/>
        <News/>
        <JoinUs/>
        <Donate/>
        </>
    )
}

export default HomePage;