import React, { Component } from "react";
import { ThreeDots } from "react-loader-spinner";
import ImageGalleryItem from "components/imageGalleryItem/ImageGalleryItem";

const API_KEY = '32970043-afcc677e938f183a59875dbcc';

class ImageGallery extends Component {
    state = {
        images: null,
        loading: false,
        error: null,
    }

    componentDidUpdate(prevProps, prevState) {
        const prevImage = prevProps.imageName;
        const nextImage = this.props.imageName;
        if (prevImage !== nextImage) {
            this.setState({ loading: true });
            fetch(`https://pixabay.com/api/?q=${nextImage}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=100`)
                .then(res => res.json())
                .then(res => {
                    this.setState({ images: res.hits });
                    if (res.hits.length < 1) {
                        return Promise.reject(
                            new Error(`Can\`t find images with name "${nextImage}"`)
                        )
                    }
                })
                .catch(error => this.setState({ error }))
                .finally(this.setState({ loading: false }));
            
        }
    }


    render() {
        const { images, loading, error } = this.state;
        const { imageName, toggleModal } = this.props;
        return (
            <>
                {error && <h2>{error.message}</h2>}
                <ThreeDots
                    height="70"
                    width="70"
                    radius="9"
                    color="#3f51b5"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{ marginLeft: "auto", marginRight: "auto" }}
                    visible={loading}
                />

                <ul className="imageGallery">
                    {images && <ImageGalleryItem images={images} toggleModal={toggleModal} />}
                </ul>
            </>
            
        )
    }
}

export default ImageGallery;