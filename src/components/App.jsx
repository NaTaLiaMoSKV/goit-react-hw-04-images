import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import Button from "./button/Button";
import Modal from "./modal/Modal";
import api from "services/GalleryApi";
import showLoader from "components/loader/Loader";
import { Component } from "react";


class App extends Component {
  
  state = {
    imageName: null,
    images: [],
    page: 0,
    loading: false,
    error: null,
    currentImage: null,
    showButton: false,
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }));
  }

   fetchImageGallery = (imageName, page) => {
      this.setState({ loading: true });
      api.fetchGallery(imageName, page)
          .then(res => {
              this.setState({
                images: [...this.state.images, ...res.hits],
                totalLength: res.total,
              });
            this.showLoadingButton(res.total);
              if (res.total === 0) {
                  return Promise.reject(new Error(`No images found with title "${imageName}"`));
              } else this.setState({ error: null });
          })
          .catch(error => { this.setState({ error: error.message }) })
          .finally(this.setState({ loading: false }));
        
    }

  handleSearchFormButton = imageName => {
    this.setState({ page: 1, imageName });
    this.setState({ showButton: false });
  }

  findCurrentImage = currentImage => {
    this.setState({ currentImage });
  }

  showLoadingButton = (totalLength) => {
    if (this.state.page * 12 < totalLength) this.setState({ showButton: true });
    else this.setState({ showButton: false });
  }

  incrementPage = page => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }
  
  render() {
    const { imageName, page, images, error, loading, currentImage, showModal, showButton } = this.state;

    return (
      <div className="app">
        <Searchbar onSubmit={this.handleSearchFormButton} />
        {error && <h2>{error}</h2>}
        {loading && showLoader()};
        <ImageGallery page={page} imageName={imageName} images={images} handleGallery={this.fetchImageGallery} findCurrentImage={this.findCurrentImage} toggleModal={this.toggleModal} />
        {showModal && currentImage && <Modal currentImage={currentImage} toggleModal={this.toggleModal} />}
        {showButton && <Button onClick={this.incrementPage} />}
      </div>
    
  );
  }
  
};
export default App;