import React, { Component } from 'react'
import Cariusel from '../Components/Cariusel'
import Footer from '../Components/Footer'
import Products from '../Components/Products'
import "./Home.css"

export class Home extends Component {

    render() {
        return (
            <div>
                <Cariusel/>
                <Products/>
                <Footer/>
            </div>
        )
    }
}

export default Home
