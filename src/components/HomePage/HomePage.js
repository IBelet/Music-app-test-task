import React from 'react';
import { SongsList } from '../SongsList/SongsList';
import './HomePage.scss';

export const HomePage = () => (
  <section className="popular">
    <h1 className="popular__title">Popular songs</h1>
    <SongsList />
  </section>
);
