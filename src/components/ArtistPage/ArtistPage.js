import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectedArtist } from '../../store/store';
import './ArtistPage.scss';

export const ArtistPage = () => {
  const artist = useSelector(getSelectedArtist);

  return (
    <div className="m-3">
      {artist
        ? (
          <div className="card artist-card">
            <img src={artist.image[0]['#text']} alt="" />
            <div className="card-content">
              <a href={artist.url}>
                {artist.name}
              </a>
              <p>Tags :</p>
              <ul>
                {artist.tags.tag.map(tag => (
                  <li key={tag.name}>
                    <a href={tag.url}>
                      {tag.name}
                    </a>
                  </li>
                ))
                }
              </ul>
            </div>
            <p>
              {artist.bio.summary}
            </p>
          </div>
        )
        : (
          <h1>No artist selected</h1>
        )
      }
    </div>
  );
};
