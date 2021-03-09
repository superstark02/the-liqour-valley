import React, { Component } from 'react'
import logo from "../Images/Logo.png"
import DenseAppBar from "./MappBar"
import "./AppBar.css"

const menu = [
    {
        name: "Home",
        link: "/"
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
        link: "https://mymosaic.in/"
    }
]

export class AppBar extends Component {
    render() {
        return (
            <div>
                <div className="desktop" >
                    <div className="app-bar wrap" >
                        <div className="menu-container" >
                            {
                                menu.map(item => {
                                    return (
                                        <a href={item.link} >
                                            <div className="menu-item wrap" >
                                                {item.name}
                                            </div>
                                        </a>
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
                </div>
                <div className="mobile" >
                    <DenseAppBar />
                </div>
            </div>
        )
    }
}

export default AppBar
