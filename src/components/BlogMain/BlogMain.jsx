import React from 'react';
import './BlogMain.css'
import main from './mainimage.jpg'
import { AiOutlineClockCircle, AiOutlineUser } from 'react-icons/ai'
import { BiNews } from 'react-icons/bi'
import { FaRegComments } from 'react-icons/fa'
import { SiTwitter } from 'react-icons/si'
import { RiFacebookBoxFill, RiInstagramFill } from 'react-icons/ri'
import { IoIosArrowBack } from 'react-icons/io'

function BlogMain() {
    return (
        <div className="blog-main">
            <img src={main} />
            <h2 className="f2 pt4 tl pb0 mb0">PARADE CHARITY</h2>
            <div className="silver flex pb0 f6 mb0 normal post-deets">  <span><AiOutlineClockCircle className="mr1" /> February 18, 2015 </span> <span>< AiOutlineUser className="mh1" /> langan  </span> <span>< BiNews className="mh1" /> News, Uncategorized  </span> <span className="pr0"><FaRegComments className="mh1" />No comments </span></div>
            <p className="f6">
                <br />
                Yes! I am a citizen! Now which way to the welfare office? I’m kidding, I’m kidding. I work, I work. Bart, with $10,000 we’d be millionaires! We could buy all kinds of useful things like…love!
                <br /><br />
                They only come out in the night. Or in this case, the day. The Internet King? I wonder if he could provide faster nudity… Oh, loneliness and cheeseburgers are a dangerous mix. A woman is a lot like a refrigerator. Six feet tall, 300 pounds…it makes ice. Weaseling out of things is important to learn. It’s what separates us from the animals…except the weasel.
                <br /><br />
                But, Aquaman, you cannot marry a woman without gills. You’re from two different worlds… Oh, I’ve wasted my life. Your guilty consciences may make you vote Democratic, but secretly you all yearn for a Republican president to lower taxes, brutalize criminals, and rule you like a king! Oh, everything looks bad if you remember it. I’m a Spalding Gray in a Rick Dees world.
                <br /><br />
                Get ready, skanks! It’s time for the truth train! Your guilty consciences may make you vote Democratic, but secretly you all yearn for a Republican president to lower taxes, brutalize criminals, and rule you like a king! What good is money if it can’t inspire terror in your fellow man?
            </p>
            <div className="flex justify-between items-center blog-icons">
                <div>
                    <a class="f6 link dim ba ph2 br2 pv1 mb2 dib gray mr2" href="#0">charity</a>
                    <a class="f6 link dim ba ph2 br2 pv1 mb2 dib gray" href="#0">event</a>
                </div>
                <div>
                    <SiTwitter size="25px" className="mr2 dim gray" />
                    <RiFacebookBoxFill size="25px" className="mr2 dim gray" />
                    <RiInstagramFill size="25px" className="mr2 dim gray" />
                </div>

            </div>
            <div className="line tc bg-silver"></div>
            <a className="f6 link dim ph3 pv2 mb2 dib white bg-yelloe" href="#0"><IoIosArrowBack className="mt1" /> PREVIOUS</a>

        </div >
    );
}

export default BlogMain;