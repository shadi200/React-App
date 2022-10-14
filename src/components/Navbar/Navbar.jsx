import React, { Component } from 'react'
import styles from './Navbar.module.css'
import $ from 'jquery'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
    componentDidMount() {
        this.resizeNav()
    }
    resizeNav = () => {
        $("nav").css({ "padding": "1.5rem", "transition": "all 0.3s" })
        $(window).scroll(function () {
            if ($(window).scrollTop() > 20) {
                $("nav").css({ "padding": "0.5rem", "transition": "all 0.3s" });
            } else {
                $("nav").css({ "padding": "1.5rem", "transition": "all 0.3s" });
            };
        })
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-blue font-bold fixed-top">
                <div className="container ">
                    <Link className="navbar-brand p-0" to="home">START REACT</Link>
                    <button className="navbar-toggler bg-green shadow-none align-self-baseline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={`${styles.nav_tog} text-white`}>MENU <i className="fa-solid fa-align-left"></i></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pt-3 pt-lg-0">
                            <li className="nav-item">
                                <Link id='portfolioLink' className={`${styles.l_hover} nav-link p-3 rounded-3`} to="portfolio">PORTFOLIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link id='aboutLink' className={`${styles.l_hover} nav-link p-3 rounded-3`} to="about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link id='contactLink' className={`${styles.l_hover} nav-link p-3 rounded-3`} to="contacts">CONTACT</Link>
                            </li>
                            <li className="nav-item">
                                <Link id='contactLink' className={`${styles.l_hover} nav-link p-3 rounded-3`} to="movies">FAV MOVIES</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}