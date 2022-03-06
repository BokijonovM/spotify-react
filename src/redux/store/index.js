import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducerAlbum from "../reducer/album2";
import albumReducer from "../reducer/album";
import { SongReducer } from "../reducer/song";

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
};

const bigReducer = combineReducers({
  albumCart: cartReducerAlbum,
  album: albumReducer,
  songs: SongReducer,
});

export const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);
