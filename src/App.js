import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyMain from "./components/MyMain";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";
import Artist2 from "./components/Artist2";
import LikedSongs from "./components/LikedSongs";
import FollowedArtists from "./components/FollowedArtists";
import SignIn from "./components/SingIn/SignIn";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MyMain />} />
          <Route path="/artist/:artistID" element={<ArtistPage />} />
          <Route path="/artist2/:artist2ID" element={<Artist2 />} />
          <Route path="/liked-songs" element={<LikedSongs />} />
          <Route path="/sign-up" element={<SignIn />} />
          <Route path="/followed-artists" element={<FollowedArtists />} />
          <Route path="/album/:albumID" element={<AlbumPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
