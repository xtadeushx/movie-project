import React, { Component } from 'react'
import Movies from '../components/Movies'
import Preloader from '../components/Preloader';

class Main extends Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=da60ae6&s=matrix')
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }))
    };

    render() {
        const { movies } = this.state;
        return (
            <main className='container content' >
                {
                    movies.length ? (
                        <Movies movies={movies} />
                    ) : <Preloader />
                }

            </main>
        )
    }

}

export default Main