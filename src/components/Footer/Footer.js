import React from 'react'
import 'tachyons'
import { AiOutlineFacebook,AiOutlineInstagram,AiOutlineMail,AiOutlineWhatsApp,AiOutlineCopyrightCircle} from 'react-icons/ai'

function Footer() {
    return (
            <div className='flex justify-between bg-black white'>
               <div>
               <AiOutlineCopyrightCircle /> Copyrights 2021 | debugged.exe
               </div>
               <div>
                     Privacy Policy | Terms & Conditions
                </div>
                <div className='flex justify-betweenwhite'>
                <AiOutlineFacebook className="mr2" />
                <AiOutlineInstagram className="mr2" />
                <AiOutlineMail className="mr2" />
                <AiOutlineWhatsApp className="mr2" />
                </div>
            </div>
    )
}

export default Footer;