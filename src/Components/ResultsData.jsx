import React from 'react';
import PropTypes from 'prop-types';

import ResultsDisplay from './ResultsDisplay';
import StandardNav from './StandardNav';
import Footer from './Footer';

function ResultsData(props) {
  function handleSelectedRecipe(itemId) {
    let selectedRecipe = props.searchResults[itemId];
    console.log(selectedRecipe);
    return selectedRecipe;
  }

  const searchResults = {
    '0': {
      photo: 'blah blah',
      title: 'barf'
    },
    '1': {
      photo: 'example',
      title: 'example'
    }
  };
  return(
    <div>
      <StandardNav />
      {Object.keys(searchResults).map(function(itemId) {
        let result = searchResults[itemId];
        return <ResultsDisplay photo={result.photo}
          title={result.title}
          key={itemId}
          itemId={itemId}/>;
      })}
      <Footer />
    </div>
  );
}

ResultsData.propTypes = {
  searchResults: PropTypes.object,
  onSelectedRecipe: PropTypes.func
};

export default ResultsData;
