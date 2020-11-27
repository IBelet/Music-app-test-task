import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { findSong } from '../../api/api';
import { actions } from '../../store/store';
import './SearchForm.scss';

export const SearchForm = () => {
  const dispatch = useDispatch();
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();

    const songFromServer = await findSong(song, artist);

    dispatch(actions.setFoundSong(songFromServer));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="song"
        value={song}
        onChange={(event) => {
          setSong(event.target.value);
        }}
      />
      <input
        type="text"
        name="artist"
        value={artist}
        onChange={(event) => {
          setArtist(event.target.value);
        }}
      />
      <button type="submit">
        Find song
      </button>
    </form>
  );
};
