import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeView from './HomeView';
import ResultsDisplay from './ResultsDisplay';

function Home() {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => <HomeView />}/>
        <Route path='/results' render={() => <ResultsDisplay />}/>
      </Switch>
    </div>
  );
}

export default Home;
