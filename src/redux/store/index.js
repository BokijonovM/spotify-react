import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducerAlbum from "../reducer/album2";
import albumReducer from "../reducer/album";
import { SongReducer } from "../reducer/song";
import cartReducerArtist from "../reducer/artist";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

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

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_PERSIST_KEY,
    }),
  ],
};

const bigReducer = combineReducers({
  albumCart: cartReducerAlbum,
  album: albumReducer,
  songs: SongReducer,
  artistCart: cartReducerArtist,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

const configureStore = createStore(
  persistedReducer,
  initialState,
  aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);

const persistor = persistStore(configureStore);

export { configureStore, persistor };
