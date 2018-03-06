import React from 'react';
import PropTypes from 'prop-types';

import ResultsDisplay from './ResultsDisplay';
import StandardNav from './StandardNav';
import Footer from './Footer';
import smSteps from './assets/smallsteps.png';

function ResultsData ({recipeList}){
  const styles = {
    display:'flex',
    height: '100vh',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '25px',
    backgroundImage: 'url(' + smSteps + ')',
  };

  return(
    <div>
      <StandardNav />
      <div style={styles}>
        {Object.keys(recipeList).map(recipeId => {
          let recipe = recipeList[recipeId];
          return <ResultsDisplay
            image={recipe.image}
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

export default ResultsData;
