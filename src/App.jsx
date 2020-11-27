import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import './App.scss';
import { HomePage } from './components/HomePage/HomePage';
import { SearchPage } from './components/SearchPage/SearchPage';
import { ArtistPage } from './components/ArtistPage/ArtistPage';

export const App = () => (
  <>
    <header>
      <nav className="tabs is-info">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className="navbar-item is-tab"
            activeClassName="is-active"
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/search"
            className="navbar-item is-tab"
            activeClassName="is-active"
          >
            Search song
          </NavLink>
          <NavLink
            to="/artist"
            className="navbar-item is-tab"
            activeClassName="is-active"
          >
            Artist
          </NavLink>
        </div>
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
