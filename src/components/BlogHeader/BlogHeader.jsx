import React from 'react';
import './BlogHeader.css'
import headerimage from './headerimage.jpg';

const BlogHeader = () => {
    return (
        <div className="blog-header mb4">
            <div className="parallax">
                <div className="blog-title flex justify-between items-center white pt6 tr">
                    <h2 className="f2 tc">LATEST NEWS</h2>
                    <h5 className="tc about-line mb2"> HOME   /   BLOG   / NEWS / UNCATOEGORIZED / PARADE / CHARITY </h5>
                </div>
            </div>
        </div>
    )
}

export default BlogHeader;