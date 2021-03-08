import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Products.css"
import Category from './Tabs'

export class Products extends Component {

    render() {
        return (
            <div className="wrap" >
                <div className="grid-outer-container" >
                    <Link to="/search-page" >
                        <div className="wrap" style={{ margin: "20px 0px" }} >
                            <input placeholder="Search" className="search-box" />
                            <button type="submit" className="submit" >
                                Search
                            </button>
                        </div>
                    </Link>
                    <div>
                        <Category />
                    </div>
                </div>
            </div >
        )
    }
}

export default Products
