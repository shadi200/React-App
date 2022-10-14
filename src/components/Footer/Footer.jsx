import React, { Component } from 'react'
import styles from './Footer.module.css'
export default class Footer extends Component {
    render() {
        return (
            <footer className='container-fluid bg-blue text-white text-center p-0'>
                <div className='container p-5'>
                    <div className='row g-4'>
                        <div className='col-lg-4'>
                            <h4 className='font-bold'>LOCATION</h4>
                            <p className='px-5'>2215 John Daniel Drive
                                Clark, MO 65243</p>
                        </div>
                        <div className='col-lg-4'>
                            <h4 className='font-bold'>AROUND THE WEB</h4>
                            <div className={`${styles.scoial_container}`}>
                                <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                                <a href=""><i className="fa-brands fa-twitter"></i></a>
                                <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
                                <a href=""><i className="fa-brands fa-dribbble"></i></a>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <h4 className='font-bold'>ABOUT FREELANCER</h4>
                            <p className='px-5'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.c_right} p-4`}>
                    <h6 className='m-0'>Copyright © Your Website 2021</h6>
                </div>
            </footer>
        )
    }
}
