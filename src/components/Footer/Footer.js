import React from 'react'
import './Footer.css'
import 'tachyons'
import { AiOutlineFacebook,AiOutlineInstagram,AiOutlineMail,AiOutlineWhatsApp,AiOutlineCopyrightCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Footer() {
    return (
            <div className='foot flex h3 items-center justify-around bg-black white'>
               <div>
               <AiOutlineCopyrightCircle /> Copyrights 2021 | debugged.exe
               </div>
               <div>
                   <Link to='/Privacy' className='white no-underline'> Privacy Policy </Link>| <Link to='/termsandconditions' className='white no-underline'>Terms & Conditions</Link>
                </div>
                <div className='flex pointer justify-between white'>
                <AiOutlineFacebook className="mr2 dim " />
                <AiOutlineInstagram className="mr2 dim " />
                <AiOutlineMail className="mr2 dim " />
                <AiOutlineWhatsApp className="mr2 dim " />
                </div>
            </div>
    )
}

export default Footer;