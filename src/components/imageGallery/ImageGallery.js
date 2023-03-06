import React, { Component } from "react";
import ImageGalleryItem from "components/imageGalleryItem/ImageGalleryItem";

class ImageGallery extends Component {
    render() {
        return (
            <ul className="imageGallery">
                <ImageGalleryItem />
            </ul>
        )
    }
}

export default ImageGallery;