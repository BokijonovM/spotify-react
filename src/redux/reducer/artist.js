import { initialState } from "../store";
import { ADD_TO_ARTIST_CART, REMOVE_TO_ARTIST_CART } from "../action";

const cartReducerArtist = (state = initialState.artist, action) => {
  switch (action.type) {
    case ADD_TO_ARTIST_CART:
      return {
        ...state,
        artists: [...state.artists, action.payload],
      };

    case REMOVE_TO_ARTIST_CART:
      return {
        ...state,
        artists: [
          ...state.artists.slice(0, action.payload),
          ...state.artists.slice(action.payload + 1),
        ],
      };
    default:
      return state;
  }
};

export default cartReducerArtist;
