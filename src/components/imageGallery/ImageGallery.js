import React, { Component } from "react";
import { ThreeDots } from "react-loader-spinner";
import ImageGalleryItem from "components/imageGalleryItem/ImageGalleryItem";
import api from "services/GalleryApi";
import showLoader from "components/loader/Loader";


class ImageGallery extends Component {
    
    state = {
        imageName: null,
        loading: false,
        error: null,
        images: [],
    }

    componentDidUpdate(prevProps, prevState) {
        
        if (prevProps.imageName !== this.props.imageName) { // обновляется строка запроса
            this.props.showLoadingButton(0);
            this.props.images.length = 0; // обновление массива
            this.state.images.length = 0;
            this.handleComponent(this.props.imageName, 1);
            
        }
        else if (prevProps.page !== this.props.page) { // обновляется страница
            // console.log('update page');
            this.handleComponent(this.props.imageName, this.props.page);
        }
    }

    handleComponent = (imageName, page) => {
        this.setState({ loading: true });
        api.fetchGallery(imageName, page)
            .then(res => {
                // console.log(res);
                this.setState({
                    images: [...this.state.images, ...res.hits]
                });
                const array = [...this.state.images, ...res.hits];
                const total = res.total;
                // this.props.updateImagesAndTotal(array, total);
                if (total === 0) {
                    return Promise.reject(new Error(`No images found with title "${imageName}"`));
                } else this.setState({ error: null });
                this.props.updateImagesAndTotal(array, total);
            })
            .catch(error => { this.setState({ error: error.message }) })
            .finally(this.setState({ loading: false }));
        
    }


    render() {
        const { images, loading, error } = this.state;
        const { imageName, toggleModal, findCurrentImage } = this.props;
        return (
            <>
                {error && <h2>{error}</h2>}
                {loading && showLoader()};
                <ul className="imageGallery">
                    {images && <ImageGalleryItem images={images} findCurrentImage={findCurrentImage} toggleModal={toggleModal} />}
                </ul>
            </>
            
        )
    }
}

export default ImageGallery;