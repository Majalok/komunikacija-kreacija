import React, { Component } from "react"
import axios from 'axios';


class ContactForm extends Component {

    constructor(props) {
        super();
        this.state = {
            name: '',
            surName: '',
            email: '',
            message: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "http://localhost:3002/send",
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

    resetForm() {
        this.setState({ name: '', surName: '', email: '', message: '' })
    }

    render() {
        return (
            <div className="contact-form-div">
                <form id="contact-form" className="form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Ime</label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="surname">Priimek</label>
                        <input type="text" className="form-control" id="surname" value={this.state.surname} onChange={this.onSurnameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="exampleInputEmail1">Email naslov</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="message">Sporočilo</label>
                        <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <button type="submit" className="send-msg-btn">Pošlji sporočilo</button>
                </form>
                <div className="contact-description">
                    <div className="contact-text">
                        Nataša Muc
                    </div>
                    <div className="contact-text">
                        info@komunikacija-kreacija.si
                    </div>
                </div>
            </div>
        );
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }
    onSurnameChange(event) {
        this.setState({ surName: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
}

export default ContactForm;