import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ResultsDisplay(props) {
  return (
    <div>
      <h3>{props.photo}</h3>
      <h4>{props.title}</h4>
      <Link to='/singleitem'>Show More</Link>
      <hr/>
    </div>
  );
}

ResultsDisplay.propTypes = {
  photo: PropTypes.string,
  title: PropTypes.string,
  key: PropTypes.string,
  itemId: PropTypes.string
};
export default ResultsDisplay;
