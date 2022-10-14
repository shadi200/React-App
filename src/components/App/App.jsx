import './App.css'
import React, { Component } from 'react'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import Portfolio from '../Portfolio/Portfolio'
import About from '../About/About'
import Contacts from '../Contacts/Contacts'
import Footer from '../Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Movies from '../Movies/Movies'
import Notfound from '../Notfound/Notfound'

export default class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='home' element={<Home />}></Route>
                    <Route path='portfolio' element={<Portfolio />}></Route>
                    <Route path='about' element={<About />}></Route>
                    <Route path='contacts' element={<Contacts />}></Route>
                    <Route path='movies' element={<Movies />}></Route>
                    <Route path='*' element={<Notfound />}></Route>
                </Routes>
                <Footer />
            </>
        )
    }
}