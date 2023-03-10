import { useEffect } from "react";
import { createPortal } from "react-dom";

const modal = document.querySelector("#modal-root");

export default function Modal({ currentImage, toggleModal }) {

    // const handleKeyDown = (evt) => {
    //     if (evt.key === "Escape") {
    //         toggleModal();
    //     }
    // }

    const handleOverlayClick = (evt) => {
        if (evt.target === evt.currentTarget) {
            toggleModal();
        }
    }

    useEffect(() => {
        
        const handleKeyDown = (evt) => {
            if (evt.key === "Escape") {
                toggleModal();
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [toggleModal]);

    return (
        createPortal(
            <div className="overlay" onClick={handleOverlayClick}>
                <div className="modal">
                    <img src={currentImage.largeImageURL} alt={currentImage.tags} />
                </div>
            </div>,
            modal)
    )
}
