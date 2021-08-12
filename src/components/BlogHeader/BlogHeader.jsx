import React from 'react';
import './BlogHeader.css'
import headerimage from './headerimage.jpg';

const BlogHeader = () => {
    return (
        <div className="blog-header mb4">
            <div className="parallax">
                <div className="blog-title flex justify-between items-center white pt6">
                    <div className="f2 b">LATEST NEWS</div>
                    <div className="f6 mb2"> HOME / BLOG / NEWS / UNCATEOGORIZED / PARADE / CHARITY </div>
                </div>
            </div>
        </div>
    )
}

export default BlogHeader;

