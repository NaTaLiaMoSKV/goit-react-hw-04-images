import React, { Component } from "react";

class Searchbar extends Component {
    state = {
        imageName: '',
    }

    handleSubmit = (evt) => {
        evt.preventDefault();

        if (this.state.imageName.trim() === '') return;
        this.props.onSubmit(this.state.imageName);
    }

    handleInput = (evt) => {
        this.setState({ imageName: evt.currentTarget.value });
    }

    render() {
        return (
            <header className="searchbar">
                <form className="searchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="searchForm-button">
                    <span className="searchForm-button-label">Search</span>
                    </button>

                    <input
                        className="searchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleInput}
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;