import React, { Component } from 'react'
import HeroImage from '../HeroImage/HeroImage'
import Searchbar from '../SearchBar/Searchbar'
import FourColGrid from '../FourColGrid/FourColGrid'
import MovieThumb from '../MovieThumb/MovieThumb'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import Spinner from '../Spinner/Spinner'
import './Home.css'
export default class Home extends Component {
    render() {
        return (
            <div className="rmdb-home">
                <HeroImage />
                <Searchbar />
                <FourColGrid />
                <Spinner />
                <LoadMoreBtn />
            </div>
        )
    }
}
