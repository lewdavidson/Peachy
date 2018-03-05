import React from 'react';
import PropTypes from 'prop-types';

import StandardNav from './StandardNav';
import Footer from './Footer';

function IndividualResultDisplay(props) {

  return (
    <div>
      <StandardNav />
      {props.selectedRecipe}
      <Footer />
    </div>
  );
}

IndividualResultDisplay.propTypes = {
  selectedRecipe: PropTypes.object
};

export default IndividualResultDisplay;
