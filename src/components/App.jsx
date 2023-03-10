import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import Button from "./button/Button";
import Modal from "./modal/Modal";
import api from "services/GalleryApi";
import showLoader from "components/loader/Loader";
import { useState } from "react";

export default function App() {

  const [imageName, setImageName] = useState(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSearchFormButton = imageName => {
    setPage(1);
    setImageName(imageName);
    setShowButton(false);
  }

  const fetchImageGallery = (currentPage) => {
    if (page === 0) return;
    if (page === 1) { images.length = 0; setImages([]); }
    setLoading(true);
      api.fetchGallery(imageName, currentPage)
        .then(res => {
          setImages([...images, ...res.hits]);
          showLoadingButton(res.total);
          if (res.total === 0) {
              return Promise.reject(new Error(`No images found with title "${imageName}"`));
          } else setError(null);
        })
        .catch(error => { setError(error.message) })
        .finally(setLoading(false));
  }

  const showLoadingButton = (totalLength) => {
    page * 12 < totalLength ? setShowButton(true) : setShowButton(false);
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const incrementPage = () => {
    setPage(page + 1);
  }

  return (
    <div className="app">
      <Searchbar onSearchbarSumbit={handleSearchFormButton} />
      {error && <h2>{error}</h2>}
      {loading && showLoader()};
      <ImageGallery page={page} imageName={imageName} images={images} handleGallery={fetchImageGallery} findCurrentImage={setCurrentImage} toggleModal={toggleModal} />
      {showModal && currentImage && <Modal currentImage={currentImage} toggleModal={toggleModal} />}
      {showButton && <Button onButtonClick={incrementPage} />}
    </div>
    
  );
}