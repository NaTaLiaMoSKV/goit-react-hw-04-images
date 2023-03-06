import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import Button from "./button/Button";
import Modal from "./modal/Modal";
import { Component } from "react";
// import { ThreeDots } from "react-loader-spinner";


class App extends Component {
  state = {
    imageName: null,
    loading: false,
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }));
  }

  handleSearchFormButton = imageName => {
    this.setState({ imageName });

  }

  


  render() {
    const { showModal } = this.state;

    return (
      <div className="app">
       
        <Searchbar onSubmit={this.handleSearchFormButton} />
         
        {showModal && <Modal toggleModal={this.toggleModal} />}
        <ImageGallery imageName={this.state.imageName} toggleModal={this.toggleModal} />
      <Button />
    </div>
    
  );
  }
  
};
export default App;