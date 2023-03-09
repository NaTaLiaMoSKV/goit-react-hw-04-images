import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import showLoader from "components/loader/Loader";
import Button from "./button/Button";
import Modal from "./modal/Modal";
import { Component } from "react";
// import { ThreeDots } from "react-loader-spinner";


class App extends Component {
  
  state = {
    imageName: null,
    images: [],
    page: 0,
    currentImage: null,
    showButton: false,
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }));
  }

  handleSearchFormButton = imageName => {
    this.setState({ page: 1, imageName});
  }

  findCurrentImage = currentImage => {
    this.setState({ currentImage });
  }

  updateImagesAndTotal = (images, totalLength) => {
    this.setState({ images });
    this.showLoadingButton(totalLength);
  }

  showLoadingButton = (totalLength) => {
    if (this.state.page * 12 < totalLength) this.setState({ showButton: true });
    else this.setState({ showButton: false });
  }

  incrementPage = page => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }
  
  render() {
    const { imageName, page, loading, images, currentImage, showModal, showButton } = this.state;

    return (
      <div className="app">
        <Searchbar onSubmit={this.handleSearchFormButton} />
        <ImageGallery page={page} imageName={imageName} images={images} showLoadingButton={this.showLoadingButton} findCurrentImage={this.findCurrentImage} updateImagesAndTotal={this.updateImagesAndTotal} toggleModal={this.toggleModal} toggleLoading={this.toggleLoading} />
        {showModal && currentImage && <Modal currentImage={currentImage} toggleModal={this.toggleModal} />}
        {showButton && <Button onClick={this.incrementPage} />}
      </div>
    
  );
  }
  
};
export default App;