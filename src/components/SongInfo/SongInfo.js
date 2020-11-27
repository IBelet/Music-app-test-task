import React from 'react';
import { useSelector } from 'react-redux';
import { getFoundSong } from '../../store/store';
import './SongInfo.scss';

export const SongInfo = () => {
  const song = useSelector(getFoundSong);

  return (
    <div>
      {song?.name
        ? (
          <div>
            {song.name}
          </div>
        )
        : (
          <h2>
            {`Can't find this song `}
          </h2>
        )
      }
    </div>
  );
};
