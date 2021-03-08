import React, { Component } from 'react'
import Cariusel from '../Components/Cariusel'
import Footer from '../Components/Footer'
import SearchComp from '../Components/SearchComp'
import "./Home.css"

export class SearchPage extends Component {

    render() {
        return (
            <div>
                <Cariusel/>
                <SearchComp/>
                <Footer/>
            </div>
        )
    }
}

export default SearchPage
