import React, { Component } from "react";

class ImageGalleryItem extends Component {

    render() {
        return (
            <>
                {this.props.images.map(({id, tags, webformatURL, largeImageURL }) => (
                    <li key={id} className="imageGalleryItem" onClick={this.props.toggleModal}>
                        <img className="imageGalleryItem-image" src={webformatURL} alt={tags} />
                    </li>
                ))}

            </>
                
            
        )
    }
}

export default ImageGalleryItem;