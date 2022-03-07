import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyMain from "./components/MyMain";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";
import Artist2 from "./components/Artist2";
import MusicPlayerSlider from "./components/MusicPlayer";
import LikedSongs from "./components/LikedSongs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MyMain />} />
          <Route path="/artist/:artistID" element={<ArtistPage />} />
          <Route path="/artist2/:artist2ID" element={<Artist2 />} />
          <Route path="/liked-songs" element={<LikedSongs />} />
          {/* <Route path="/album" element={<AlbumPage />} /> */}
          <Route path="/album/:albumID" element={<AlbumPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
