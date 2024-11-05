import "./App.css";
import Accordian from "./components";
import ModalTest from "./components/custom-modals/mdal-test";
import TabTest from "./components/custom-tabs/tabs-tes";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToTopAndBottom from "./components/scroll-to-top and bottom";
import ScrollToSection from "./components/scroll-to-top and bottom/scroll-to-section";
import SearchAutoCOmplete from "./components/search-autocomplete";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";

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
      
      {/* Custom Tabs Component */}
      {/* <TabTest /> */}

      {/* Custom Modal Component*/}
      {/* < ModalTest /> */}

      {/*<GithubProfileFinder /> */}
      {/*<SearchAutoCOmplete /> */}

      {/* Tic Tac Toe Game */}
      {/* <TicTacToe /> */}

     {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}
      {/*useFetch custom hook test */}
      {/*<UseFetchHookTest />*/}

      {/*use onclick  Outside hook test */}
      {/*<UseOnclickOutsideTest />*/}

      {/* Use window Resize hook test */}
      {/*<UseWindowResizeTest /> */}

      {/*Scroll To Top and bottom */}
      {/*<ScrollToTopAndBottom /> */}

      {/*Scroll To scetion  */}
      <ScrollToSection/>
    </div>
  );
}

export default App;
