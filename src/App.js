import './App.css';
import Accordian from './components';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    
    <div className="App">
      {/* Accordian component */}
     {/*  <Accordian /> */}
     {/*  <RandomColor /> */}
      { /*  <StarRating noOfStars={10} /> */}
     {/*  <ImageSlider  url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/> */}
     <LoadMoreData />
    </div>

  );
}

export default App;
