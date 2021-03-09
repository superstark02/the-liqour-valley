import React, { Component } from 'react'
import "../Pages/Home.css"
import "./Footer.css"

export class Footer extends Component {
    render() {
        return (
            <div className="wrap" style={{
                color: "white", padding: "30px 0px",
                marginTop: "90px",
                backgroundColor: "rgb(210,73,69)",
            }} >
                <div className="width-change" >
                    <div style={{ display: "flex", padding: "20px 0px" }} >
                        <a href="/contact" >
                            <div style={{ marginRight: "10px" }} >
                                Contact
                            </div>
                        </a>
                        <a href="/about" >
                            <div style={{ marginRight: "10px" }} >
                                About Us
                            </div>
                        </a>
                        <a href="/contact" >
                            <div style={{ marginRight: "10px" }} >
                                Catalogue
                            </div>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.pidgin.mosaic" >
                            <div style={{ marginRight: "10px" }} >
                                MOSAIC
                            </div>
                        </a>
                    </div>
                    <div style={{ padding: "20px 0px" }} >
                        Mosaic India
                    </div>
                    <div style={{ padding: "20px 0px" }} >
                        © 2021 The Liqour Valley. All Rights Reserved. All related channel and programming logos are service
                        marks of, and all related programming
                        visuals and elements are the property of, The Liqour Valley. All rights reserved.
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
