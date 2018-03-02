import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeView from './HomeView';
import ResultsData from './ResultsData';
import UserAuth from './UserAuth';
import UserDash from './UserDash';
import SavedData from './SavedData';
import IndividualResultDisplay from './IndividualResultDisplay';

function Home() {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => <HomeView />}/>
        <Route path='/results' render={() => <ResultsData onSelectedRecipe={this.handleSelectedRecipe}/>}/>
        <Route path='/login' render={() => <UserAuth />} />
        <Route path='/signup' render={() => <UserAuth />} />
        <Route path='/userdash' render={() => <UserDash />} />
        <Route path='/saved' render={() => <SavedData />} />
        <Route path='/singleitem' render={() => <IndividualResultDisplay />} />
      </Switch>
    </div>
  );
}

export default withRouter(connect()(Home));
