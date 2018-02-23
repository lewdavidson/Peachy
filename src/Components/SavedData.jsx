import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SavedDisplay from './SavedDisplay';


function SavedData() {
  const savedResults = {
    '0': {
      photo: 'saved photo',
      title: 'saved title'
    },
    '1': {
      photo: 'second saved photo',
      title: 'second saved title'
    }
  };
  return (
    <div>
      <p>logo</p>
      <Link to='/'>Home</Link>
      {Object.keys(savedResults).map(function(itemId) {
        let result = savedResults[itemId];
        return <SavedDisplay photo={result.photo}
          title={result.title}
          key={itemId}
          itemId={itemId}/>;
      })}
    </div>
  );
}

SavedData.propTypes = {
  savedResults: PropTypes.object
};

export default SavedData;
