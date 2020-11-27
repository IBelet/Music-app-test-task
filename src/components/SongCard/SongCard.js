/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../../store/store';
import './SongCard.scss';

export const SongCard = ({ image, name, artist, url }) => {
  const dispatch = useDispatch();

  const handleArtistClick = () => {
    dispatch(actions.setArtist(artist.name));
  };

  return (
    <div className="card song-card">
      <div className="card-image">
        <figure className="image">
          <img src={image[3]['#text']} alt="" />
        </figure>
      </div>
      <div className="card-content">
        <a href={url}>
          {name}
        </a>
        <Link to="/artist" onClick={handleArtistClick}>
          {artist.name}
        </Link>
      </div>
    </div>
  );
};
