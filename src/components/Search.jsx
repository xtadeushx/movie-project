import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        search: ''
    };
    handleChange = (e) => this.setState({ search: e.target.value });

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }
    };

    handleClickSearch = () => this.props.searchMovies(this.state.search);

    render() {
        const { search } = this.state
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            type='search'
                            placeholder='search'
                            className="validate"
                            value={search}
                            onChange={this.handleChange}
                            onKeyDown={this.handleKeyDown}
                        />
                        <button className='btn search-btn' onClick={this.handleClickSearch}>Search</button>
                    </div>
                </div>
            </div>
        )
    }
}
