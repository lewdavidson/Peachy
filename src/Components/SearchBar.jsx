import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipe } from './../actions';
import PropTypes from 'prop-types';


const SearchBar = ({dispatch}) => {
  let input;
  return (
    <div>
      <form onSubmit = {event =>{
        event.preventDefault();
        if(!input.value.trim()) {
          return;
        }
        dispatch(fetchRecipe(input.value.trim()));
        input.value = '';
      }}>
        <input
          type="text"
          placeholder="Search for a recipe"
          ref={node => {input = node;}}>
        </input>
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(SearchBar);
