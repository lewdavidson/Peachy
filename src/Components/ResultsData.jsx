import React from 'react';
import ResultsDisplay from './ResultsDisplay';
import PropTypes from 'prop-types';

function ResultsData() {

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
      {Object.keys(searchResults).map(function(itemId) {
        let result = searchResults[itemId];
        return <ResultsDisplay photo={result.photo}
          title={result.title}
          key={itemId}
          itemId={itemId}/>;
      })}
    </div>
  );
}

ResultsData.propTypes = {
  searchResults: PropTypes.object
};

export default ResultsData;
