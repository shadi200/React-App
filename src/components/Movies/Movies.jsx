import axios from 'axios';
import React, { Component } from 'react'
import styles from './Movies.module.css'

export default class Movies extends Component {
    state = {
        movies: []
    }
    componentDidMount() {
        this.getMovies()
    }
    async getMovies() {
        let { data } = await axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=961415d22bc62f337bb599ca45cf0653")
        this.setState({ movies: data.results })
    }
    render() {
        return (
            <section className='min-vh-100 py-5'>
                <div className='container my-3 pt-5 mt-5'>
                    <h2 className='text-center font-bold text-blue sec-head'>FAVORITE MOVIES</h2>
                    <div className='d-flex justify-content-center align-items-center mb-5 text-blue'>
                        <div className="custom-line bg-blue"></div>
                        <div className='px-3 txet-blue'><i className="fa-solid fa-star fa-2x"></i></div>
                        <div className="custom-line bg-blue"></div>
                    </div>
                    <div id={styles.posts} className="row px-5 g-4">
                        {this.state.movies.map((movie, index) =>
                            <div key={index} className="col-md-6 col-xl-4">
                                <div className={styles.movie}>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie" className="w-100" />
                                    <div className={styles.movie_cap}>
                                        <h2>{movie.original_title}</h2>
                                        <p>{movie.overview}</p>
                                        <h6>rate: {movie.vote_average}</h6>
                                        <h6>{movie.release_date}</h6>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        )
    }
}
