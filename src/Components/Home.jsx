import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomeView from './HomeView';
import ResultsData from './ResultsData';
import UserAuth from './UserAuth';
import SavedData from './SavedData';
import IndividualResultDisplay from './IndividualResultDisplay';

function Home(props) {
  return (
    <div className='main'>
      <style jsx global>{`
          .result-img {
            max-width: 300px;
            max-height: 280px;
          }
          .saved-img {
            max-width: 300px;
            max-height: 280px;
          }
          a:hover {
            cursor: pointer;
          }
          .result-page {
            min-height: 1000px;
          }
      `}</style>
      <Switch>
        <Route exact path='/' render={() => <HomeView />}/>
        <Route path='/results' render={() => <ResultsData recipeList={props.recipeList} />}/>
        <Route path='/login' render={() => <UserAuth />} />
        <Route path='/signup' render={() => <UserAuth />} />
        <Route path='/saved' render={() => <SavedData  recipeList={props.recipeList} />} />
        <Route path='/singleitem' render={() => <IndividualResultDisplay selectedRecipe={props.selectedRecipe} />} />
      </Switch>
    </div>
  );
}

Home.propTypes = {
  recipeList: PropTypes.object,
  selectedRecipe: PropTypes.object
};

const mapStateToProps = state => {
  return {
    recipeList: state.recipesById,
    selectedRecipe: state.currentRecipeId,
  };
};

export default withRouter(connect(mapStateToProps)(Home));
