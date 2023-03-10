export default function ImageGalleryItem ({ images, findCurrentImage, toggleModal }){
    return (
        <>
            {images.map(image => (
                <li key={image.id} className="imageGalleryItem" onClick={toggleModal}>
                    <img className="imageGalleryItem-image" src={image.webformatURL} alt={image.tags} onClick={() => findCurrentImage(image)} />
                </li>
            ))}
        </>        
    )
}