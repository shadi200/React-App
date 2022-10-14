import React, { Component } from 'react'
import styles from './About.module.css'
export default class About extends Component {
    render() {
        return (
            <section id={styles.about} className='py-5 bg-green d-flex align-items-center'>
                <div className='container p-5 mt-5'>
                    <h2 className='text-center font-bold sec-head text-white'>ABOUT</h2>
                    <div className='d-flex justify-content-center align-items-center mb-5 text-white'>
                        <div className="custom-line"></div>
                        <div className='px-3 '><i className="fa-solid fa-star fa-2x"></i></div>
                        <div className="custom-line"></div>
                    </div>
                    <div className='d-flex justify-content-between text-white font-medium text-center'>
                        <p className='pe-2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML,
                            CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        <p className='ps-2'>You can create your own custom avatar for the masthead, change the icon in the dividers,
                            and add your email address to the contact form to make it fully functional!</p>
                    </div>
                </div>
            </section>
        )
    }
}