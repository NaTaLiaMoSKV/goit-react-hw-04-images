import { useEffect } from "react";
import ImageGalleryItem from "components/imageGalleryItem/ImageGalleryItem";

export default function ImageGallery({ page, imageName, images, handleGallery, findCurrentImage, toggleModal }) {
    useEffect(() => {
       handleGallery(1);
    }, [imageName]);
    
    useEffect(() => {
        handleGallery(page);
    }, [page]);
    
    return (
        <>
            <ul className="imageGallery">
                {images && <ImageGalleryItem images={images} findCurrentImage={findCurrentImage} toggleModal={toggleModal} />}
            </ul>
        </>
    )
}
