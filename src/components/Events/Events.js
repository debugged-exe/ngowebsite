import React from 'react'
import './Events.css'
import { Link } from 'react-router-dom'

import poor1 from './poor1.jpeg'

function Events() {
    return (
        <div className='test'>
            <div className="tc">
                <h2 className="f2 tc pt4">LATEST EVENTS</h2>
                <div className="line tc bg-yelloe"></div>
                <h3 className="tc mt2 tc about-line">Want to catch up on whats been happening lately?
                    Take a look at the latest news of Lambda.</h3>
            </div>

            <div className='test-container mt4'>
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
            <div className='test-container' style={{ paddingBottom: '10%' }}>
                <Link to='/blog'>
                    <div className='category' style={{ backgroundImage: 'url(' + poor1 + ')', backgroundSize: 'cover', position: 'relative' }}>
                        <div className='inner'>Hello World
                            <hr style={{ bottom: '0', width: '80%' }} />
                        </div>
                        <div className='hidden'>New component</div>
                    </div>
                </Link>
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
        </div>
    );
}

export default Events;