import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadArtistInfo } from '../api/api';

const SET_SONGS = 'SET_SONGS';
const SET_FOUND_SONG = 'SET_FOUND_SONG';
const SET_ARTIST = 'SET_ARTIST';

export const actions = {
  setSongs: songs => ({
    type: SET_SONGS,
    songs,
  }),
  setFoundSong: song => ({
    type: SET_FOUND_SONG,
    song,
  }),
  setArtist: name => async() => {
    const artist = await loadArtistInfo(name);

    store.dispatch({
      type: SET_ARTIST,
      artist: artist.artist,
    });
  },
};

const initialState = {
  songs: [],
  foundSong: null,
  selectedArtist: null,
};

export const getSongs = state => state.songs;
export const getFoundSong = state => state.foundSong;
export const getSelectedArtist = state => state.selectedArtist;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_SONGS: {
      return {
        ...state,
        songs: action.songs,
      };
    }

    case SET_FOUND_SONG: {
      return {
        ...state,
        foundSong: action.song,
      };
    }

    case SET_ARTIST: {
      return {
        ...state,
        selectedArtist: action.artist,
      };
    }

    default: {
      return state;
    }
  }
};

const store = createStore(reducer, initialState, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
