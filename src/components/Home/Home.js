import React, { Component } from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../config.js';
import HeroImage from '../HeroImage/HeroImage'
import Searchbar from '../SearchBar/Searchbar'
import FourColGrid from '../FourColGrid/FourColGrid'
/* import MovieThumb from '../MovieThumb/MovieThumb' */
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import Spinner from '../Spinner/Spinner'
import './Home.css'
export default class Home extends Component {
    state = {
        movies: [],
        heroImage: null,
        loading: false,
        currentPage: 0,
        totalPage: 0,
        searchTerm: ''
    }

    componentDidMount() {
        this.setState({ loading: true })
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        this.fetchItems(endpoint)
    }

    searchItem = (searchTerm) => {
        console.log(searchTerm)
        let endpoint = '';
        this.setState({
            movies: [],
            loading: true,
            searchTerm
        })
        if (searchTerm === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        }
        else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`
        }
        this.fetchItems(endpoint);
    }

    loadMoreItems = () => {
        let endpoint = '';
        this.setState({ loading: true });
        if (this.state.searchTerm === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.curreentPage + 1}`;
        }
        else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.searchTerm}&page=${this.state.currentPage + 1}`
        }
        this.fetchItems(endpoint);
    }
    fetchItems = (endpoint) => {
        fetch(endpoint)
            .then(result => result.json())
            .then(result => this.setState({
                movies: [...this.state.movies, ...result.results],
                heroImage: this.state.heroImage || result.results[0],
                loading: false,
                currentPage: result.page,
                totalPage: result.total_pages
            }))
            .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="rmdb-home">
                {this.state.heroImage ?
                    <div>
                        <HeroImage
                            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}/${this.state.heroImage.backdrop_path}`}
                            title={this.state.heroImage.original_title}
                            text={this.state.heroImage.overview} />
                        <Searchbar
                            callback={this.searchItem} />
                    </div> : null}
                <FourColGrid />
                <Spinner />
                <LoadMoreBtn />
            </div>
        )
    }
}
