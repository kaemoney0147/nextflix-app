
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footers from './Component/Footers';
// import Genres from './Component/Genres';
import NavbarComponent from './Component/NavbarComponent';
import TvShow from './Component/TvShow';
import MovieDetails from './Component/MovieDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Genres from './Component/Genres';
import Home from './Component/Home'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavbarComponent/>
      <Genres/>
      <Routes>
      <Route element={<Home/>} path='/'/>
        <Route element={<TvShow/>} path='/tvshow'/>
        <Route element={<MovieDetails/>} path='/MovieDetails/:imdbID'/>
      </Routes>
      <Footers/>
    </div>
    </BrowserRouter>

  );
}

export default App;
