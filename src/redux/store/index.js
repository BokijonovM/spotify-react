import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducerAlbum from "../reducer/album2";
import albumReducer from "../reducer/album";
import { SongReducer } from "../reducer/song";
import cartReducerArtist from "../reducer/artist";

const aComposeFunctionThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  albumCart: {
    albums: [],
  },
  album: {
    stock: [],
    album: [],
    isError: false,
    isLoading: true,
  },
  songs: {
    selectedSongs: [],
  },
  artistCart: {
    artists: [],
  },
  artist: {
    stock: [],
    album: [],
    isError: false,
    isLoading: true,
  },
};

const bigReducer = combineReducers({
  albumCart: cartReducerAlbum,
  album: albumReducer,
  songs: SongReducer,
  artistCart: cartReducerArtist,
});

export const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);
