import React, { Component } from 'react'
import callData from '../Database/callData'
import {clusterdata} from '../Database/dbfunctions'
import "./Products.css"

export class Products extends Component {
    state = {
        data: null
    }

    componentDidMount() {
        callData().then(snap => {
            this.setState({ data: snap })
        })

        clusterdata()
    }

    render() {
        return (
            <div className="wrap" >
                <div class="grid-container">
                    {
                        this.state.data &&
                        this.state.data.map(item => {
                            return (
                                <div class="grid-item">
                                    <div className="item-image" style={{backgroundImage:"url("+item.Image+")", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center"}} >
                                    </div>
                                    <div className="product_name" >
                                        {item.Title}
                                    </div>
                                    <div className="price-tag" >
                                        &#8377;{item.MRP_Btl}
                                    </div>
                                    <div className="packing" >
                                        {item.Packing}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Products
