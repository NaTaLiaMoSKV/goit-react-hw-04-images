import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import Button from "./button/Button";

export const App = () => {
  return (
    <div className="app">
      <Searchbar />
      <ImageGallery />
      <Button />
    </div>
    
  );
};
