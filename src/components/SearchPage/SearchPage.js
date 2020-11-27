import React from 'react';
import { SearchForm } from '../SearchForm/SearchForm';
import { SongInfo } from '../SongInfo/SongInfo';
import './SearchPage.scss';

export const SearchPage = () => (
  <section className="search">
    <h1 className="search__title">Find song</h1>
    <SearchForm />
    <SongInfo />
  </section>
);
