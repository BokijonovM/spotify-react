import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyMain from "./components/MyMain";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MyMain />} />
          <Route path="/artist" element={<ArtistPage />} />
          {/* <Route path="/album" element={<AlbumPage />} /> */}
          <Route path="/album/:albumID" element={<AlbumPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
