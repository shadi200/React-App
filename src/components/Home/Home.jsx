import React, { Component } from 'react'
import Images from '../..'
import styles from './Home.module.css'


export default class Home extends Component {
    render() {
        return (
            <section className="bg-green min-vh-100 d-flex flex-column justify-content-center align-items-center text-white">
                <div className='mb-3 text-center'>
                    <img src={Images.avatar} className='w-75 avatar' alt="avatar" />
                </div>
                <h1 className={`font-bold mt-3 ${styles.heading}`}>START REACT</h1>
                <div className='d-flex justify-content-center align-items-center mb-4'>
                    <div className="custom-line"></div>
                    <div className='px-3'><i className="fa-solid fa-star fa-2x"></i></div>
                    <div className="custom-line"></div>
                </div>
                <h5 className='mt-2'>Graphic Artist - Web Designer - Illustrator</h5>
            </section>
        )
    }
}