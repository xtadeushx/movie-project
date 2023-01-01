import React, { Component } from 'react';

export default class Search extends Component {
    state = {
        search: '',
        type: 'all',
    };
    handleChange = (e) => this.setState({ search: e.target.value });

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleClickSearch = () => this.props.searchMovies(this.state.search, this.state.type);

    handleFiler = (e) => {
        this.setState(() => ({ type: e.target.dataset.type }),
            () => { this.props.searchMovies(this.state.search, this.state.type) }
        );
    };
    render() {
        const { search } = this.state;
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            type="search"
                            placeholder="search"
                            className="validate"
                            value={search}
                            onChange={this.handleChange}
                            onKeyDown={this.handleKeyDown}
                        />
                        <button className="btn search-btn" onClick={this.handleClickSearch}>
                            Search
                        </button>
                    </div>
                    <div>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type="all"
                                onChange={this.handleFiler}
                                checked={this.state.type === "all"}
                            />
                            <span>All</span>
                        </label>

                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type="movie"
                                onChange={this.handleFiler}
                                checked={this.state.type === "movie"}

                            />
                            <span>Movies only</span>
                        </label>

                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type="series"
                                onChange={this.handleFiler}
                                checked={this.state.type === "series"}

                            />
                            <span>Series only</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}
