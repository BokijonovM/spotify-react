export const GET_ALBUMS = "GET_ALBUMS";
export const GET_ALBUMS_ALBUM = "GET_ALBUMS_ALBUM";
export const GET_ALBUMS_ERROR = "GET_ALBUMS_ERROR";
export const GET_ALBUMS_LOADING = "GET_ALBUMS_LOADING";
export const ADD_TO_ALBUM_CART = "ADD_TO_ALBUM_CART";
export const REMOVE_TO_ALBUM_CART = "REMOVE_TO_ALBUM_CART";
export const SELECT_SONG = "SELECT_SONG";
export const ADD_TO_ARTIST_CART = "ADD_TO_ARTIST_CART";
export const REMOVE_TO_ARTIST_CART = "REMOVE_TO_ARTIST_CART";
// user
export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_SURNAME = "SET_USER_SURNAME";
export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const SET_USER_PASSWORD = "SET_USER_PASSWORD";

export const setUsernameAction = (name) => ({
  type: SET_USER_NAME,
  payload: name,
});
export const setUserSurNameAction = (surname) => ({
  type: SET_USER_SURNAME,
  payload: surname,
});
export const setUserEmailAction = (email) => ({
  type: SET_USER_EMAIL,
  payload: email,
});
export const setUserPasswordAction = (password) => ({
  type: SET_USER_PASSWORD,
  payload: password,
});

// others

export const addToCartAction = (musicToAdd) => ({
  type: ADD_TO_ALBUM_CART,
  payload: musicToAdd,
});

export const removeFromCartAction = (indexToRemove) => ({
  type: REMOVE_TO_ALBUM_CART,
  payload: indexToRemove,
});

export const selectSongAction = (musicToAdd) => ({
  type: SELECT_SONG,
  payload: musicToAdd,
});

export const addToAlbumCartActionWithThunk = (musicToAdd) => {
  return async (dispatch) => {
    console.log("hello! from thunk");
    if (3 > 5) {
      dispatch({
        type: "ERROR",
      });
    } else {
      dispatch({
        type: ADD_TO_ALBUM_CART,
        payload: musicToAdd,
      });
    }
  };
};

// ARTIST

export const addToArtistCartAction = (artistToAdd) => ({
  type: ADD_TO_ARTIST_CART,
  payload: artistToAdd,
});

export const removeFromArtistCartAction = (indexToRemove) => ({
  type: REMOVE_TO_ARTIST_CART,
  payload: indexToRemove,
});
export const addToArtistCartActionWithThunk = (artistToAdd) => {
  return async (dispatch) => {
    console.log("hello! from artist thunk");
    if (3 > 5) {
      dispatch({
        type: "ERROR",
      });
    } else {
      dispatch({
        type: ADD_TO_ARTIST_CART,
        payload: artistToAdd,
      });
    }
  };
};
