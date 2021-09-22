import React from 'react';
import BlogFooter from '../../components/BlogFooter/BlogFooter';
import BlogHeader from '../../components/BlogHeader/BlogHeader';
import BlogMain from '../../components/BlogMain/BlogMain';
import Footer from '../../components/Footer/Footer';

const BlogPage = ({initiative,setCarousel,caro}) => {
    return (
        <div>
            <BlogHeader  initiative={initiative} />
            <BlogMain initiative={initiative} setCarousel={setCarousel} />
            <BlogFooter  initiative={initiative}/>
            <Footer/>
        </div>
    )
}

export default BlogPage;