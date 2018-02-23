import React from 'react';
import PropTypes from 'prop-types';

function ResultsData(props) {
  return (
    <div>
      <h3>{props.photo}</h3>
      <h4>{props.title}</h4>
      <hr/>
    </div>
  );
}

ResultsData.propTypes = {
  photo: PropTypes.string,
  title: PropTypes.string,
  key: PropTypes.string
};
export default ResultsData;
