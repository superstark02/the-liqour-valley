import React, { Component } from 'react'
import MyAppBar from '../Components/AppBar'
import Footer from '../Components/Footer'
import "./Contact.css"
import emailjs from "emailjs"

export default class ContactUs extends Component {

    sendMail = (e) => {
        e.preventDefault();
        console.log(e.target)
        emailjs.sendForm('gmail', 'template_h67d3rY4_clone', e.target, 'user_rdnQ08wROAm4vj2HIcVdc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    render() {
        return (
            <div>
                <MyAppBar />
                <div>
                    <div className="contact-bg" >

                    </div>
                    <div style={{
                        height: "60vh",
                        width: "100%",
                        backgroundColor: "rgba(0,0,0,0.2)",
                        fontSize: "100px",
                        color: "white"
                    }}
                        className="wrap"
                    >
                        Contact Us
                    </div>

                    <div className="wrap" style={{ margin: "40px 0px" }} >
                        <div className="home-width-container" >

                            <div className="about-content" >
                                <div className="about-content-display" >
                                    <div className="about-text" >
                                        <h1 style={{ fontSize: "40px", marginBottom: "40px" }} >
                                            We are available 24/7
                                        </h1>
                                        <form onSubmit={this.sendMail} style={{ display: "flex", flexDirection: "column" }} >
                                            <input className="standard-input" name="name" placeholder="Name" required />
                                            <input className="standard-input" name="email" placeholder="Email" />
                                            <input className="standard-input" name="phone" placeholder="Phone" />
                                            <textarea style={{ minHeight: "100px" }} type="multiline" className="standard-input" name="message" placeholder="Message" required />
                                            <input className="standard-button" type="submit" value="SUBMIT" />
                                        </form>
                                        <div>
                                            <h3>Contact Details</h3>
                                            <h5>
                                                Phone ( Helpline )
                                            </h5>
                                            <div>
                                                +91 99101 97196
                                            </div>
                                            <div>
                                                +91 98189 87870
                                            </div>

                                            <h5>
                                                Email
                                            </h5>
                                            <div>
                                                mail@pidgin.online
                                            </div>

                                            <h5>
                                                Adress ( Rohini Branch )
                                            </h5>
                                            <div>
                                                74, Pocket-12, <br></br> Sector-24,Rohini <br></br> Delhi 110085
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}
