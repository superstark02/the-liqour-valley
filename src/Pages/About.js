import React, { Component } from 'react'
import AppBar from '../Components/AppBar'
import Footer from '../Components/Footer'
import "./About.css"

export class About extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <div className="about-bg" >

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
                    About Us
                </div>
                <div className="wrap" >
                    <div className="width-change" >
                        <p>
                            We are The Liquor Valley, a liquor delivery system in Delhi.
                        </p>
                        <p>
                            How to order? <br />
                            <ul>
                                <li>Simple, just make a list of your products and forward to us on WhatsApp.</li>
                                <li>Pay online/COD and get your liquor on the same day.</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About
