import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import './App.scss';
import { HomePage } from './components/HomePage/HomePage';
import { SearchPage } from './components/SearchPage/SearchPage';
import { ArtistPage } from './components/ArtistPage/ArtistPage';

export const App = () => (
  <>
    <header>
      <nav className="navbar">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/search" className="navbar-item">Search song</Link>
        <Link to="/artist" className="navbar-item">Artist</Link>
      </nav>
    </header>

    <main className="container">
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/search" component={SearchPage} />
        <Route path="/artist" component={ArtistPage} />
      </Switch>
    </main>
  </>
);
