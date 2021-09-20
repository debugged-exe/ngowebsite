import React from 'react'
import './Footer.css'
import 'tachyons'
import { AiOutlineFacebook,AiOutlineInstagram,AiOutlineMail,AiOutlineWhatsApp,AiOutlineCopyrightCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Footer() {
    return (
            <div className='foot flex h3 items-center justify-around bg-black white'>
               <div>
               <AiOutlineCopyrightCircle /> Copyrights 2021 | GVBUS
               </div>
               <div>
                   <a href='/privacy#privacy' className='white no-underline'> Privacy Policy </a>| <a href='/terms#terms' className='white no-underline'>Terms & Conditions</a>
                </div>
                <div className='flex pointer justify-between white'>
                <AiOutlineFacebook className="mr2 f3 dim " />
                <AiOutlineInstagram className="mr2 f3 dim " />
                <AiOutlineMail className="mr2 f3 dim " />
                <AiOutlineWhatsApp className="mr2 f3 dim " />
                </div>
            </div>
    )
}

export default Footer;