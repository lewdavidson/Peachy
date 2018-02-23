import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import Header from './Header';

function Home() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' render={() => <SearchBar />}/>
      </Switch>
    </div>
  );
}

export default Home;
