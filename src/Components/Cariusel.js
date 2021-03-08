import React, { Component } from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './Cariusel.css';
import './slider-animations.css';
import 'normalize.css/normalize.css';

const content = [
    {
        title: 'Order Online',
        description:'No standing in queues. No crowd surfing. Order your poison online.',
        button: 'Read More',
        image: 'http://luxurywine.themerex.net/wp-content/uploads/2016/09/image-5-1170x658.jpg',
        user: 'Luan Gjokaj',
        userProfile: 'https://i.imgur.com/JSW6mEk.png'
    },
    {
        title: 'Best Quality With Same Day Delivery',
        description:'Get same day delivery, no extra charges. Get best quality liquor at home.',
        button: 'Discover',
        image: 'http://luxurywine.themerex.net/wp-content/uploads/2016/09/image-8-1170x658.jpg',
        user: 'Erich Behrens',
        userProfile: 'https://i.imgur.com/0Clfnu7.png'
    },
    {
        title: 'Party Supplies',
        description:'Wanna party? Or celebrate your win. Get some supplies onilne.',
        button: 'Buy now',
        image: 'https://singlemalt.qodeinteractive.com/wp-content/uploads/2020/07/blog-img-1.jpg',
        user: 'Bruno Vizovskyy',
        userProfile: 'https://i.imgur.com/4KeKvtH.png'
    }
];

export class Cariusel extends Component {
    render() {
        return (
            <div>
                <Slider className="slider-wrapper">
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className="slider-content"
                            style={{ background: `url('${item.image}') no-repeat center center` }}
                        >
                            <div className="inner">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <button>{item.button}</button>
                            </div>
                            <section>
                                <img src={item.userProfile} alt={item.user} />
                                <span>
                                    Posted by <strong>{item.user}</strong>
                                </span>
                            </section>
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }
}

export default Cariusel
