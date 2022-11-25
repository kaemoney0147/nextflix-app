
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footers from './Component/Footers';
import Genres from './Component/Genres';
import NavbarComponent from './Component/NavbarComponent';
import NewReleases from './Component/NewReleases';
import TrendingNow from './Component/TrendingNow';
import WatchitAgain from './Component/WatchitAgain';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Genres/>
      <TrendingNow/>
      <WatchitAgain/>
      <NewReleases/>
      <Footers/>
    </div>
  );
}

export default App;
