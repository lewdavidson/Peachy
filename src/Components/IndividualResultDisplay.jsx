import React from 'react';
import PropTypes from 'prop-types';

function IndividualResultDisplay(props) {

  return (
    <div>{props.selectedRecipe}</div>
  );
}

IndividualResultDisplay.propTypes = {
  selectedRecipe: PropTypes.object
};

export default IndividualResultDisplay;
