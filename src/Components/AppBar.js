import React, { Component } from 'react'
import logo from "../Images/Logo.png"
import "./AppBar.css"

const menu = [
    {
        name: "Home",
        link: "/home"
    },
    {
        name: "Catalogue",
        link: "/catalogue"
    },
    {
        name: "About",
        link: "/about"
    },
    {
        name: "Contact",
        link: "/contact"
    },
    {
        name: "MOSAIC",
        link: "www.mymosaic.in"
    }
]

export class AppBar extends Component {
    render() {
        return (
            <div className="app-bar wrap" >
                <div className="menu-container" >
                    {
                        menu.map(item => {
                            return (
                                <div className="menu-item wrap" >
                                    {item.name}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="wrap logo" >
                    <img width="250px" src={logo} ></img>
                </div>
                <div className="menu-container" >
                </div>
            </div>
        )
    }
}

export default AppBar
