import React, { Component } from 'react'
import "../Pages/Home.css"

export class Footer extends Component {
    render() {
        return (
            <div className="wrap" style={{ color: "#6A7375", padding: "30px 0px", marginTop: "90px", backgroundColor: "black" }} >
                <div className="width-change" >
                    <div style={{ display: "flex", padding: "20px 0px" }} >
                        <div style={{ marginRight: "20px" }} >
                            Contact
                            </div>
                        <div style={{ marginRight: "20px" }} >
                            CAP ( Jan-Feb 2021 )
                            </div>
                        <a href="https://play.google.com/store/apps/details?id=com.pidgin.mosaic" >
                            <div style={{ marginRight: "20px" }} >
                                App
                            </div>
                        </a>
                    </div>
                    <div style={{ padding: "20px 0px" }} >
                        Mosaic India
                    </div>
                    <div style={{ padding: "20px 0px" }} >
                        © 2020 MOSAIC. All Rights Reserved. All related channel and programming logos are service
                        marks of, and all related programming
                        visuals and elements are the property of, MOSAIC. All rights reserved.
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
