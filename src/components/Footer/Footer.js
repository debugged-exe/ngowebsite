import React from 'react'
import './Footer.css'
import 'tachyons'
import {AiOutlineInstagram,AiOutlineMail,AiOutlineWhatsApp,AiOutlineCopyrightCircle} from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
    return (
            <div className='foot flex h3 items-center justify-around bg-black white'>
               <div>
               <AiOutlineCopyrightCircle /> Copyrights 2021 | GVBUS
               </div>
               <div>
               <span>
                   <Link className='white no-underline' to='/privacy#privacy'><a > Privacy Policy </a></Link>| <Link className='white no-underline' to='/terms#terms'> <a > Terms & Conditions</a> </Link>
                </span>
                </div>
                <div className='flex pointer justify-between white'>
                {/* <FaFacebookF className="mr2 f4 dim " />
                <AiOutlineInstagram className="mr2 f3 dim " /> */}
                <a style={{outline:'none'}} className="mr2 white f3 dim" href='mailto:gvbsngo@gmail.com?subject=Joining a good cause'><AiOutlineMail /></a>
                <a style={{outline:'none'}} className="mr2 white f3 dim" href='https://wa.me/9421221103'><AiOutlineWhatsApp /></a>
                </div>
            </div>
    )
}

export default Footer;