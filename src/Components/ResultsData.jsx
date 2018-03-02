import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ResultsDisplay from './ResultsDisplay';
import StandardNav from './StandardNav';
import Footer from './Footer';

function ResultsData (props){

  return(
    <div>
      <StandardNav />
      {Object.keys(props.recipeList).map(recipeId => {
        let recipe = props.recipeList[recipeId];
        return <ResultsDisplay image={recipe.photo}
          title={recipe.title}
          link={recipe.link}
          ingredients={[recipe.ingredients]}
          key={recipeId}
          recipeId={recipeId}/>;
      })}
      <Footer />
    </div>
  );
}

ResultsData.propTypes = {
  recipeList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    recipeList: state.recipesById
  };
};

export default connect(mapStateToProps)(ResultsData);
