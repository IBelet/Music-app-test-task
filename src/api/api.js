/* eslint-disable max-len */
const BASE_URL = 'http://ws.audioscrobbler.com';
const API_KEY = '6b3d2042aa7eea41dc6a80457b25d65e';

const request = async(url, options) => {
  const response = await fetch(`${BASE_URL}${url}`, options);

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  const result = await response.json();

  return result;
};

export const loadPopularSongs = async() => {
  const popularSongs = await request(`/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`);

  return popularSongs;
};

export const findSong = async(name, artist) => {
  const song = await request(`/2.0/?method=track.getInfo&api_key=${API_KEY}&artist=${artist}&track=${name}&autocorrect[1]&format=json`);

  return song;
};

export const loadArtistInfo = async(name) => {
  const artist = await request(`/2.0/?method=artist.getinfo&artist=${name}&api_key=${API_KEY}&format=json`);

  return artist;
};
