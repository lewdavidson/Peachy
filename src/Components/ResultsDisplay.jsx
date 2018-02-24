import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ResultsDisplay(props) {

  function handleSelectedRecipe() {
    props.onSelectedRecipe(props.itemId);
  }
  return (
    <div>
      <h3>{props.photo}</h3>
      <h4>{props.title}</h4>
      <button onClick={handleSelectedRecipe}><Link to='/singleitem'>Show More</Link></button>
      <hr/>
    </div>
  );
}

ResultsDisplay.propTypes = {
  photo: PropTypes.string,
  title: PropTypes.string,
  key: PropTypes.string,
  itemId: PropTypes.string,
  onSelectedRecipe: PropTypes.any
};
export default ResultsDisplay;
