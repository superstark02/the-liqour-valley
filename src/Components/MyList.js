import React, { Component } from 'react'
import callData from '../Database/callData'
import "./Products.css"

export class MyList extends Component {
    state = {
        data: null
    }

    componentDidMount() {
        callData().then(snap => {
            this.setState({ data: snap })
        })
    }

    loadMore = (lastone) => {
        callData(lastone).then(snap => {
            var temp = []
            temp = this.state.data

            snap.forEach(element => {
                temp.push(element)
            });
            this.setState({ data: temp })
        })
    }

    render() {
        return (
            <div>
                <div class="grid-container">
                    {
                        this.state.data &&
                        this.state.data.map(item => {
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
                <div className="wrap" >
                    <button className="page-btn" onClick={() => { this.loadMore(this.state.data[this.state.data.length - 1].SNo) }} >Load More</button>
                </div>
            </div>
        )
    }
}

export default MyList
