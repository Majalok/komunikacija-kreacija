import React, { Component } from "react"
import axios from 'axios';
/* import ReCAPTCHA from 'react-google-recaptcha-v3' */
/* import ReCAPTCHA from 'react-google-recaptcha' */
/* import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
} from 'react-google-recaptcha-v3';
 */
import { ReCaptcha } from 'react-recaptcha-v3'



class ContactForm1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            loading: false,
            response: null
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        axios({
            method: "POST",
            url: "http://localhost:8002/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }
    verifyCallback(e) {
        alert("njkj")

    }


    resetForm() {
        this.setState({ name: '', email: '', message: '' })
    }

    render() {
        return (
            <div className="contact-form-div">
                <form id="contact-form" className="form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Ime in priimek</label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="exampleInputEmail1">Email naslov</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="message">Sporočilo</label>
                        <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <br />
                    <div className="recaptcha">
                        <ReCaptcha
                            ref={ref => this.recaptcha = ref}
                            sitekey="your_site_key"
                            action='action_name'
                            verifyCallback={this.verifyCallback}
                        />

                        {/*  <ReCAPTCHA
                            ref={(el) => { this.recaptcha = el; }}
                            sitekey="6LcLxssZAAAAADaG4O-rdUq2FyvDQmDCTtEHoUZ-"
                         onChange={this.handleCaptchaResponseChange} 
                        /> */}
                        <br />
                        <br />
                    </div>
                    <button type="submit" className="send-msg-btn"><span class="btn__text">Pošlji sporočilo</span></button>
                </form>
                <div className="contact-description" /* style={{
                    backgroundImage: `url(../assets/paper3.jpg)`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '100 %',
                    backgroundPositionY: '-50px'
                }} */>
                    <img className="contact-img" src="../icons/kom-kr-logo-2.png" alt="" />
                    <div className="contact-div">
                        <div >
                            <div className="contact-text name">
                                Nataša Muc
                            </div>
                            <div className="contact-text email">
                                info@komunikacija-kreacija.si
                            </div>
                        </div>
                        <div className="contact-icons">
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="../icons/fb-sm.png" width="30px" alt="" />
                            </a>
                            <a
                                href="https://www.instagram.com/natasamuc"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="../icons/instagram_50x.png" width="30px" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
}

export default ContactForm1;