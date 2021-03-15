import React, { Component } from 'react'
import { API_URL, API_KEY } from '../config.js';
import Navigation from '../Navigation/Navigation'
import MovieInfo from '../MovieInfo/MovieInfo'
import MovieInfoBar from '../MovieInfoBar/MovieInfoBar'
import FourColGrid from '../FourColGrid/FourColGrid'
/* import Actor from '../Actor/Actor' */
import Spinner from '../Spinner/Spinner'
import './Movie.css'

export default class Movie extends Component {
    render() {
        return (
            <div className="rmdb-movie">
                <Navigation />
                <MovieInfo />
                <MovieInfoBar />
                <FourColGrid />
                <Spinner />
            </div>
        )
    }
}