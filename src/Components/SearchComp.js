import React, { Component } from 'react'
import getCollection from '../Database/getCollection'

var filteredClass = null

export class SearchComp extends Component {
    state = {
        shows: [],
        search: null
    }
    componentDidMount() {
        getCollection("Products").then(snap => {
            this.setState({ shows: snap })
        })
    }
    render() {
        filteredClass = this.state.shows

        if (this.state.search && this.state.shows) {
            filteredClass = this.state.shows.filter(
                item =>
                    item.Title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            )
        }
        return (
            <div className="wrap" >
                <div className="grid-outer-container"  >
                    <div className="wrap" style={{ margin: "20px 0px" }} >
                        <input placeholder="Search" className="search-box"
                            onChange={(e) => { this.setState({ search: e.target.value }) }}
                            value={this.state.search}
                        />
                        <button type="submit" className="submit" >
                            Search
                    </button>
                    </div>
                    <div class="grid-container">
                        {
                            filteredClass &&
                            filteredClass.map(item => {
                                return (
                                    <div class="grid-item">
                                        <div className="item-image" style={{ backgroundImage: "url(" + item.Image + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} >
                                        </div>
                                        <div className="product_name" >
                                            {item.Title}
                                        </div>
                                        <div className="packing" >
                                            {
                                                item.Packing &&
                                                item.Packing.map(item => {
                                                    return (
                                                        <div style={{ margin: "5px" }} >
                                                            &#8377;{item.rate}-{item.packing}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchComp
