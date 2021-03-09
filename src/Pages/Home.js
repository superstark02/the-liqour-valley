import React, { Component } from 'react'
import Cariusel from '../Components/Cariusel'
import Footer from '../Components/Footer'
import Products from '../Components/Products'
import AppBar from '../Components/AppBar';
import "./Home.css"

export class Home extends Component {

    componentDidMount(){
        
    }

    render() {
        return (
            <div>
                <AppBar/>
                <Cariusel/>
                <Products/>
                <Footer/>
            </div>
        )
    }
}

export default Home
