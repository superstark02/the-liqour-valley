import React, { Component } from 'react'
import Cariusel from '../Components/Cariusel'
import Footer from '../Components/Footer'
import SearchComp from '../Components/SearchComp'
import AppBar from '../Components/AppBar';
import "./Home.css"

export class SearchPage extends Component {

    render() {
        return (
            <div>
                <AppBar/>
                <Cariusel/>
                <SearchComp/>
                <Footer/>
            </div>
        )
    }
}

export default SearchPage
