import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeView from './HomeView';
import ResultsData from './ResultsData';

function Home() {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => <HomeView />}/>
        <Route path='/results' render={() => <ResultsData />}/>
      </Switch>
    </div>
  );
}

export default Home;
