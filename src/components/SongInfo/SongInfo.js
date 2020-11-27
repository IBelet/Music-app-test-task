import React from 'react';
import { useSelector } from 'react-redux';
import { getFoundSong } from '../../store/store';
import './SongInfo.scss';

export const SongInfo = () => {
  const song = useSelector(getFoundSong);

  if (!song) {
    return (
      <h2>Find song first</h2>
    );
  }

  if (song.message) {
    return (
      <h2>
        {song.message}
      </h2>
    );
  }

  const { name, artist, album } = song.track;

  return (
    <div className="m-3">
      <div className="card song-info">
        <h1>
          {`Song: ${name}`}
        </h1>
        <p>
          {`Artist: ${artist.name}`}
        </p>
        {album
          ? (
            <p>
              {`Album: ${album.title}`}
            </p>
          )
          : (
            <p>
              No album info
            </p>
          )
        }
      </div>
    </div>
  );
};
