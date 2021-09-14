import React from 'react';
import BlogFooter from '../../components/BlogFooter/BlogFooter';
import BlogHeader from '../../components/BlogHeader/BlogHeader';
import BlogMain from '../../components/BlogMain/BlogMain';
import Footer from '../../components/Footer/Footer';

const BlogPage = () => {
    return (
        <div>
            <BlogHeader />
            <BlogMain />
            <BlogFooter />
            <Footer/>
        </div>
    )
}

export default BlogPage;