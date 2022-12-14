import Home from './components/Pages/Home.js';
import MovieByGenrePage from './components/Pages/MovieByGenrePage.js';
import TopRatedPage from './components/Pages/TopRatedPage.js';
import UpcomingMovies from './components/Pages/UpcomingMovies';
import NowPlaying from './components/Pages/NowPlaying.js';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Carousel from './Carousel';
/*import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery'*/

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="genre/:id" element={<MovieByGenrePage />} />
      
      <Route path="upcoming/" element={<UpcomingMovies />} />
      <Route path="topRated/" element={<TopRatedPage />} />
      <Route path="now_playing/" element={<NowPlaying />} />
      <Route path="*" element={<p>ERROR 404 PAGE NOT FOUND</p>} />
    </Routes>
  );
}

export default App;

/*

      <BrowserRoutes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movieByGenre' element={<MovieByGenrePage/>}/>
        <Route/>
        <Route/>
      </BrowserRoutes>
      



*/
