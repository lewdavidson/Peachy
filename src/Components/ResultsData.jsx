import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ResultsDisplay from './ResultsDisplay';
import StandardNav from './StandardNav';
import Footer from './Footer';

function ResultsData (props){

  return(
    <div>
      <style jsx>{`
          .result-page {
            display: flex;
            height: 100%;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-left: 10px;
            margin-right: 10px;
          }
        `}</style>
      <StandardNav />
      <div className='result-page'>
        {Object.keys(props.recipeList).map(recipeId => {
          let recipe = props.recipeList[recipeId];
          return <ResultsDisplay image={recipe.image}
            title={recipe.title}
            link={recipe.link}
            ingredients={recipe.ingredients}
            key={recipeId}
            recipeId={recipeId}/>;
        })}
      </div>
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
