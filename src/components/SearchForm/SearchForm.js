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
      <div className="field is-horizontal">
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              placeholder="Some song"
              type="text"
              name="song"
              value={song}
              onChange={(event) => {
                setSong(event.target.value);
              }}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-search" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              placeholder="Some artist"
              type="text"
              name="artist"
              value={artist}
              onChange={(event) => {
                setArtist(event.target.value);
              }}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-search" />
            </span>
          </p>
        </div>
        <button type="submit" className="button">
          Find song
        </button>
      </div>
    </form>
  );
};
