import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectedArtist } from '../../store/store';
import './ArtistPage.scss';

export const ArtistPage = () => {
  const artist = useSelector(getSelectedArtist);

  // eslint-disable-next-line no-console
  console.log(artist);

  return (
    <div>
      {artist
        ? (
          <div className="card">
            <div className="card-image">
              <figure className="image">
                <img src={artist.image[1]['#text']} alt="" />
              </figure>
            </div>
            <div className="card-content">
              <a href={artist.url}>
                {artist.name}
              </a>
              <ul>
                {artist.tags.tag.map(tag => (
                  <li>
                    <a href={tag.url}>
                      {tag.name}
                    </a>
                  </li>
                ))
                }
              </ul>
              <p>
                {artist.bio.summary}
              </p>
            </div>
          </div>
        )
        : (
          <h1>No artist selected</h1>
        )
      }
    </div>
  );
};
