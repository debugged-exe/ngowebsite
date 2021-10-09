import React from 'react';
import './BlogFooter.css';
import poor1 from '../Events/poor1.jpeg';
import { Button } from "react-bootstrap";

class BlogFooter extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    handleForm = (event) => {
        fetch('https://gvbufoundation.herokuapp.com/feedback', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                message: this.state.message,
            })
        })
            .then(response => response.json())
            .then(resp => {
                if (resp === 'success') {
                    alert('Your message was recieved successfully.Thank you for your feedback.')
                }
            })
            .catch(err => {
                console.log(err)
                alert('OOPS....something went wrong.Please try again.')
            });
        event.preventDefault();
    };
    
    render()
   { return (
        <div className="blog-footer">
            <form onSubmit={(event) => this.handleForm(event)}>
            <div>


                <h4>LEAVE A FEEDBACK</h4>
                <h5 className="tl gray normal">Your email address will not be published. Required fields are marked *</h5>
                

                <div className='flex justify-start feedback'>
                    <div className='mr6'>
                        <h4>Your name*</h4>
                        <input style={{ backgroundColor: 'gainsboro', outline: 'none', border: 'none'}} className='f3 pv2 normal db w-100' name="name" onChange={this.handleChange} required />
                    </div>
                    <div className='mr6'>
                        <h4>Your Email*</h4>
                        <input style={{ backgroundColor: 'gainsboro', outline: 'none', border: 'none'}} className='f3 pv2 normal db w-100' type='email' name="email" onChange={this.handleChange} required/>
                    </div>
                </div>
               
                <h3>Your message</h3>
                <textarea style={{ height: '200px', backgroundColor: 'gainsboro', outline: 'none', border: 'none',width:'78%' }} name="message" className='f6 pa2' onChange={this.handleChange} required /><br />
                <br />

                <Button type='submit' style={{outline:'none',border:'none'}} className="f6 link grow ph3 pv2 mb2 dib white bg-yelloe br3" >Leave Feedback</Button>
            </div>
            </form>

            
        </div>
    );
}
}

export default BlogFooter;
