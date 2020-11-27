import React from 'react';
import { SearchForm } from '../SearchForm/SearchForm';
import { SongInfo } from '../SongInfo/SongInfo';
import './SearchPage.scss';

export const SearchPage = () => (
  <section className="search m-3">
    <SearchForm />
    <SongInfo />
  </section>
);
