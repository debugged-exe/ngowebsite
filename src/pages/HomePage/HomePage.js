import React from 'react'
import HomeBackground from '../../components/HomeBackground/HomeBackground'
import AboutUs from '../../components/AboutUs/AboutUs'
import JoinUs from '../../components/JoinUs/JoinUs'
import News from '../../components/News/news'
import OurGoals from '../../components/OurGoals/OurGoals'
import Events from '../../components/Events/Events'
import Testimonials from '../../components/Testimonials/Testimonials'
import Donate from '../../components/Donate/Donate'

const HomePage = () => {
    return (
        <>
            <HomeBackground />
            <AboutUs />
            <OurGoals />
            <Testimonials />
            <Events />
            <JoinUs />
            <Donate />
            <News />
        </>
    )
}

export default HomePage;