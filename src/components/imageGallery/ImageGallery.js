import React, { Component } from "react";
import ImageGalleryItem from "components/imageGalleryItem/ImageGalleryItem";


class ImageGallery extends Component {

    componentDidUpdate(prevProps, prevState) {
        
        if (prevProps.imageName !== this.props.imageName) { // обновляется строка запроса
            this.props.images.length = 0;
            this.props.handleGallery(this.props.imageName, 1);
        }
        else if (prevProps.page !== this.props.page) { // обновляется страница
            this.props.handleGallery(this.props.imageName, this.props.page);
        }
    }


    render() {
        const { images, toggleModal, findCurrentImage } = this.props;
        return (
            <>
                <ul className="imageGallery">
                    {images && <ImageGalleryItem images={images} findCurrentImage={findCurrentImage} toggleModal={toggleModal} />}
                </ul>
            </>
        )
    }
}

export default ImageGallery;