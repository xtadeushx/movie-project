import React, { Component } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';
import ErrorComponent from '../components/ErrorComponent';

const API_KEY = process.env.REACT_APP_API_KEY
class Main extends Component {
    state = {
        movies: [],
        loading: true,
        error: null,
    };

    componentDidMount() {
        this.fetchingMovies();
    }

    fetchingMovies = async () => {
        try {
            const response = await fetch(
                `http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`
            );
            if (!response.ok) {
                throw new Error(
                    'Server error with response: ' + response.statusText
                );
            }
            const data = await response.json();
            this.setState({ movies: data.Search, loading: false });
        } catch (err) {
            console.error(err);
            this.setState({ loading: false, error: err });
        } finally {
            this.setState({ loading: false });
        }
    };

    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true });
        fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch((err) => this.setState({ loading: false, error: err }))
            .finally(this.setState({ loading: false }));
    };

    render() {
        const { movies, loading, error } = this.state;
        return (
            <main className='container content'>
                <Search searchMovies={this.searchMovies} />
                {error && <ErrorComponent message={error.message} />}
                {!loading ? <Movies movies={movies} /> : <Preloader />}
            </main>
        );
    }
}

export default Main;
