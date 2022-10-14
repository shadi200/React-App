import React, { Component } from 'react'
import styles from './Contacts.module.css'

export default class Contacts extends Component {
    render() {
        return (
            <section className='py-5 min-vh-100'>
                <div className='container p-4 pt-5 mt-5'>
                    <h2 className='text-center font-bold sec-head text-blue'>CONTACT ME</h2>
                    <div className='d-flex justify-content-center align-items-center mb-5 text-white'>
                        <div className="custom-line bg-blue"></div>
                        <div className='px-3 text-blue'><i className="fa-solid fa-star fa-2x"></i></div>
                        <div className="custom-line bg-blue"></div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-md-8'>
                            <input type="text" className={`${styles.custom_brdr} form-control shadow-none p-3 mb-4`} placeholder='Name' />
                            <input type="email" className={`${styles.custom_brdr} form-control shadow-none p-3 mb-4`} placeholder='Email Address' />
                            <input type="number" className={`${styles.custom_brdr} form-control shadow-none p-3 mb-4`} placeholder='Phone Number' />
                            <textarea placeholder='Message' className={`${styles.custom_brdr} form-control shadow-none p-3 mb-4`}></textarea>
                            <button className={`${styles.btn_green} btn shadow-none font-medium`}>Send</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
