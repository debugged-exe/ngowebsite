import React from 'react';
import BlogFooter from '../../components/BlogFooter/BlogFooter';
import BlogHeader from '../../components/BlogHeader/BlogHeader';
import BlogMain from '../../components/BlogMain/BlogMain';

const BlogPage = () => {
    return (
        <div>
            <BlogHeader />
            <BlogMain />
            <BlogFooter />
        </div>
    )
}

export default BlogPage;