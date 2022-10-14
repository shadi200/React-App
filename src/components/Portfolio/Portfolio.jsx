import React, { Component } from 'react'
import Images from '../..'
import Item from '../Item/Item'

export default class Portfolio extends Component {
    state = {
        items:
            [
                { id: 1, title: "LOG CABIN", image: Images.cabin, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." },
                { id: 2, title: "TASTY CAKE", image: Images.cake, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." },
                { id: 3, title: "CIRCUS TENT", image: Images.circus, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." },
                { id: 4, title: "CONTROLLER", image: Images.game, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." },
                { id: 5, title: "LOCKED SAFE", image: Images.safe, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." },
                { id: 6, title: "SUBMARINE", image: Images.submarine, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." }
            ]
    }
    render() {
        return (
            <section className='py-5 min-vh-100'>
                <div className='container my-3 pt-5 mt-5'>
                    <h2 className='text-center font-bold text-blue sec-head'>PORTFOLIO</h2>
                    <div className='d-flex justify-content-center align-items-center mb-5 text-blue'>
                        <div className="custom-line bg-blue"></div>
                        <div className='px-3 txet-blue'><i className="fa-solid fa-star fa-2x"></i></div>
                        <div className="custom-line bg-blue"></div>
                    </div>
                    <div className="row g-4">
                        {this.state.items.map((item, index) => <Item key={index} item={item} />)}
                    </div>
                </div>
            </section>
        )
    }
}