import React, { useEffect } from "react";
import 'tachyons';
import { MdEmail } from 'react-icons/md'
import { FaPen } from 'react-icons/fa'
import { BsFillPersonFill, BsFileEarmarkSpreadsheet } from 'react-icons/bs'
import './JoinUs.css'
import { render } from "@testing-library/react";

class Contact extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    handleForm = (event) => {
        fetch('http://localhost:3001/JoinUs', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                subject: this.state.subject,
                message: this.state.message,
            })
        })
            .then(response => response.json())
            .then(resp => {
                if (resp === 'success') {
                    alert('Your message was recieved successfully.Thank you we will try to solve your query as soon as possible.')
                }
            })
            .catch(err => {
                console.log(err)
                alert('OOPS....something went wrong.Please try again.')
            });
        event.preventDefault();
    };

    render() {
        return (
            <div id='joinUs'>
                <section className='parallax' >
                    <div className='parallax-inner flex flex-column justify-center items-center' style={{ fontSize: '1.4rem' }}>
                        <h2 className="f2 pt4">JOIN US</h2>
                        <div className="line tc bg-white"></div>
                        <h5 className="tc mt2 about-line mb2">Want to catch up on whats been happening lately?<br />Take a look at the latest news of Lambda.</h5>

                        <form onSubmit={(event) => this.handleForm(event)} className="mt4 flex flex-column justify-center">
                            <div className='form-resp' style={{ display: 'flex' }}>
                                <div className='flex form1'>
                                    <BsFillPersonFill size="2rem" color="#F1C34F" style={{ marginRight: '-2rem', marginTop: '0.3rem' }} />
                                    <input className='bg-none join pa2 mb4 yelloe db w-100 ' placeholder='Your Name *' name="name" onChange={this.handleChange} required />
                                </div>

                                <div className='flex form2'>
                                    <MdEmail size="1.5rem" color="#F1C34F" style={{ marginRight: '-2rem', marginTop: '0.5rem' }} />
                                    <input className='bg-none join pa2 mb4 yelloe db w-100' type='email' placeholder='Your Email *' name="email" onChange={this.handleChange} required />
                                </div>
                            </div >

                            <BsFileEarmarkSpreadsheet size="1.2rem" color="#F1C34F" style={{ marginLeft: '1rem', marginBottom: '-2rem' }} />
                            <input className='bg-none pa2 mb4 yelloe db w-95 form3' placeholder='Your Subject' name="subject" onChange={this.handleChange} required />

                            <FaPen size="1.2rem" color="#F1C34F" style={{ marginLeft: '1rem', marginBottom: '-2rem' }} />
                            <textarea style={{ height: '200px' }} className='bg-none yelloe w-100 form4 pa2 mb4 dib' placeholder='Your message' name="message" onChange={this.handleChange} required />

                            <button type="submit" className="f6 link grow ph3 pv2 mb2 w-40 dib white bg-yelloe" href="#0"><i><b>SEND EMAIL</b></i></button>
                        </form>
                    </div>
                </section>
                <div className='margin'></div>
            </div>
        );
    }
}

export default Contact;