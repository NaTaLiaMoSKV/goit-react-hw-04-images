import React, { Component } from "react";
import { createPortal } from "react-dom";

const modal = document.querySelector("#modal-root");

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (evt) => {
        if (evt.key === "Escape") {
            this.props.toggleModal();
        }
    }

    handleOverlayClick = (evt) => {
        if (evt.target === evt.currentTarget) {
            this.props.toggleModal();
        }
    }

    render() {
        return (
            createPortal(
                <div className="overlay" onClick={this.handleOverlayClick}>
                    <div className="modal">
                        <img src="" alt="" />
                        {/* {this.props.children} */}
                    </div>
                </div>, modal
            )
            
        )
    }
}

export default Modal;