import React, { Component } from 'react'
import styles from './Item.module.css'

export default class Item extends Component {
    render() {
        let { id, title, image, description } = this.props.item
        return (
            <section className='col-md-4'>
                <div>
                    <div className='position-relative rounded-3 overflow-hidden'>
                        <img src={image} className="w-100" alt="item" />
                        <div className={`${styles.item_overlayer} d-flex justify-content-center align-items-center text-white`} data-bs-toggle="modal" data-bs-target={`#exampleModal${id}`}>
                            <i className="fa-solid fa-plus fa-4x"></i>
                        </div>
                    </div>
                </div>
                <div className="modal fade m-0" id={`exampleModal${id}`} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className={`${styles.custom_width} modal-dialog modal-dialog-centered m-auto my-5`}>
                        <div className="modal-content">
                            <div className="modal-header flex-column border-0 mt-5">
                                <h5 className="modal-title font-bold text-blue sec-head w-100 text-center" id="exampleModalLabel">{title}</h5>
                                <div className='d-flex justify-content-center align-items-center text-blue'>
                                    <div className="custom-line bg-blue"></div>
                                    <div className='px-3 txet-blue'><i className="fa-solid fa-star fa-2x"></i></div>
                                    <div className="custom-line bg-blue"></div>
                                </div>
                                <button type="button" className={`btn shadow-none ${styles.close_position}`} data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-2x"></i></button>
                            </div>
                            <div className="modal-body text-center">
                                <div className='w-75 m-auto py-4 mb-3'>
                                    <img src={image} className="w-75 rounded-3" alt="item" />
                                </div>
                                <p className='px-5 font-medium'>{description}</p>
                            </div>
                            <div className="modal-footer justify-content-center border-0 mb-3">
                                <button type="button" className={`btn bg-green text-white ${styles.cls_button_hover}`} data-bs-dismiss="modal"><i className="fa-solid fa-xmark me-2"></i> Close Window</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}