import React, { Component } from 'react'
import Images from '../..'

export default class Notfound extends Component {
    render() {
        return (
            <section className='min-vh-100 d-flex align-items-center'>
                <div className='w-50 m-auto'>
                    <img src={Images.notFound} className="w-100" alt="page Not found" />
                </div>
            </section>
        )
    }
}
