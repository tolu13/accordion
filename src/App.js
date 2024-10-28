import "./App.css";
import Accordian from "./components";
import ModalTest from "./components/custom-modals/mdal-test";
import TabTest from "./components/custom-tabs/tabs-tes";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/*  <Accordian /> */}
      {/*  <RandomColor /> */}
      {/*  <StarRating noOfStars={10} /> */}
      {/*  <ImageSlider  url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/> */}
      {/*    <LoadMoreData /> */}
      {/* <TreeView  menus={menus} /> */}
      {/* <QRCodeGenerator /> */}
      {/* <LightDarkMode />  */}
      {/*<ScrollIndicator  url={'https://dummyjson.com/products?limit=100'}/> */}
      {/* <TabTest /> */}
      < ModalTest />
    </div>
  );
}

export default App;
