import React from 'react';
import './BlogFooter.css'
import poor1 from '../Events/poor1.jpeg'

const BlogFooter = () => {
    return (
        <div className="blog-footer">
            <h4>RECENT EVENTS</h4>
            <div>

                <div className='test-container '>
                    <div className='category' style={{ backgroundImage: 'url(' + poor1 + ')', backgroundSize: 'cover', position: 'relative' }}>
                        <div className='inner'>
                            Hello World
                            <hr style={{ bottom: '0', width: '80%' }} />
                        </div>
                        <div className='hidden'> New component</div>

                    </div>
                    <div className='category' style={{ backgroundImage: 'url(' + poor1 + ')', backgroundSize: 'cover', position: 'relative' }}>
                        <div className='inner'>Hello World
                            <hr style={{ bottom: '0', width: '80%' }} />
                        </div>
                        <div className='hidden'>New component</div>
                    </div>
                    <div className='category' style={{ backgroundImage: 'url(' + poor1 + ')', backgroundSize: 'cover', position: 'relative' }}>
                        <div className='inner'>Hello World
                            <hr style={{ bottom: '0', width: '80%' }} />
                        </div>
                        <div className='hidden'>New component</div>
                    </div>
                </div>

                <h4>LEAVE A FEEDBACK</h4>
                <h5 className="tl gray normal">Your email address will not be published. Required fields are marked *</h5>

                <div className='flex justify-between feedback'>
                    <div>
                        <h4>Your name*</h4>
                        <input style={{ backgroundColor: 'gainsboro', outline: 'none', border: 'none' }} className='f3 pv2 normal db w-100' />
                    </div>
                    <div>
                        <h4>Your Email*</h4>
                        <input style={{ backgroundColor: 'gainsboro', outline: 'none', border: 'none' }} className='f3 pv2 normal db w-100' type='email' />
                    </div>
                    {/* <div>
                        <h4>Website</h4>
                        <input style={{ backgroundColor: 'gainsboro', outline: 'none', border: 'none' }} className='f6 mr4 pv2 normal db w-100' />
                    </div> */}
                </div>

                <h3>Your message</h3>
                <textarea style={{ height: '200px', backgroundColor: 'gainsboro', outline: 'none', border: 'none' }} className='f6 w-100 pa2' /><br />
                <br />
                <a className="f6 link grow ph3 pv2 mb2 dib white bg-yelloe" href="#0">Leave Feedback</a>
            </div>
        </div>
    )
}

export default BlogFooter;