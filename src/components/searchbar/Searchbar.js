import React, { Component } from "react";

class Searchbar extends Component {
    render() {
        return (
            <header className="searchbar">
                <form className="searchForm">
                    <button type="submit" className="searchForm-button">
                    <span className="searchForm-button-label">Search</span>
                    </button>

                    <input
                    className="searchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;