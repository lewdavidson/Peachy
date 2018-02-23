import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeView from './HomeView';
import ResultsData from './ResultsData';
import UserAuth from './UserAuth';
import UserDash from './UserDash';

function Home() {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => <HomeView />}/>
        <Route path='/results' render={() => <ResultsData />}/>
        <Route path='/login' render={() => <UserAuth />} />
        <Route path='/signup' render={() => <UserAuth />} />
        <Route path='/userdash' render={() => <UserDash />} />
      </Switch>
    </div>
  );
}

export default Home;
