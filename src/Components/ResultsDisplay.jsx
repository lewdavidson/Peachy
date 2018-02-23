import React from 'react';
import ResultsData from './ResultsData';
import PropTypes from 'prop-types';

function ResultsDisplay(props) {
  return (
    <div>
      {props.searchResults.map((result) =>
        <ResultsData photo={result.photo}
          title={result.title}
          key={result.key}/>
      )}
    </div>
  );
}

ResultsDisplay.propTypes = {
  searchResults: PropTypes.array
};

export default ResultsDisplay;
