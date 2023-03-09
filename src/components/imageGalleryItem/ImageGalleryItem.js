import React, { Component } from "react";

class ImageGalleryItem extends Component {

    render() {
        return (
            <>
                {this.props.images.map(image => (
                    <li key={image.id} className="imageGalleryItem" onClick={this.props.toggleModal}>
                        <img className="imageGalleryItem-image" src={image.webformatURL} alt={image.tags} onClick={() => this.props.findCurrentImage(image)} />
                    </li>
                ))}

            </>
                
            
        )
    }
}

export default ImageGalleryItem;