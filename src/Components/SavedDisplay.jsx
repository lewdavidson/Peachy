import React from 'react';
import PropTypes from 'prop-types';

function SavedDisplay(props) {
  return (
    <div>
      <h3>{props.photo}</h3>
      <h4>{props.title}</h4>
      <hr/>
    </div>
  );
}

SavedDisplay.propTypes = {
  photo: PropTypes.string,
  title: PropTypes.string,
  key: PropTypes.string,
  itemId: PropTypes.string
};

export default SavedDisplay;
