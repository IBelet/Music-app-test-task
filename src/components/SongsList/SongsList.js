import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPopularSongs } from '../../api/api';
import { actions, getSongs } from '../../store/store';
import { SongCard } from '../SongCard/SongCard';
import './SongsList.scss';

export const SongsList = () => {
  const dispatch = useDispatch();
  const songs = useSelector(getSongs);

  useEffect(async() => {
    const songsFromServer = await loadPopularSongs();

    dispatch(actions.setSongs(songsFromServer.tracks.track));
  }, []);

  return (
    <div className="songs">
      {songs.map(song => (
        <SongCard {...song} key={song.name} />
      ))}
    </div>
  );
};
