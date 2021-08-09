import React from 'react';
import poor1 from '../Events/poor1.jpeg'

const BlogFooter = () => {
    return (
        <div className="mh7">
            <h4>RELATED POSTS</h4>
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

                <h4>LEAVE A REPLY</h4>
                <h5 className="tl gray normal">Your email address will not be published. Required fields are marked *</h5>
                <h3>Your message</h3>
                <textarea style={{ height: '200px', backgroundColor: 'gainsboro', outline: 'none', border: 'none' }} className='f6 w-100 pa2' /><br />

                <div className='flex justify-between'>
                    <div>
                        <h3>Your name *</h3>
                        <input style={{ backgroundColor: 'gainsboro', outline: 'none', border: 'none' }} className='f6 mr4 pv1 db w-100' />
                    </div>
                    <div>
                        <h3>Your Email *</h3>
                        <input style={{ backgroundColor: 'gainsboro', outline: 'none', border: 'none' }} className='f6 mr4 pv1 db w-100' type='email' />
                    </div>
                    <div>
                        <h3>Website</h3>
                        <input style={{ backgroundColor: 'gainsboro', outline: 'none', border: 'none' }} className='f6 mr4 pv1 db w-100' />
                    </div>
                </div>
                <br />
                <a className="f6 link dim ph3 pv2 mb2 dib white bg-yelloe" href="#0">Post Comment</a>
            </div>
        </div>
    )
}

export default BlogFooter;