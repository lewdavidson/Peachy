import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SavedDisplay from './SavedDisplay';
import StandardNav from './StandardNav';
import Footer from './Footer';
import smSteps from './assets/smallsteps.png';


function SavedData(props) {
  const styles = {
    height: '100vh',
    flexWrap: 'wrap',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '25px',
    backgroundImage: 'url(' + smSteps + ')',
  };
  const flex = {
    display: 'flex',
    justifyContent: 'space-between'
  };

  return (
    <div>
      <style jsx>{`
          .header {
          font-family: 'Coiny', cursive;
          font-size: 2.3em;
          text-align: center;
          text-decoration: underline;
          color: #656839;
          }
      `}</style>
      <StandardNav />
      <div style={styles}>
        <h2 className='header'>Your Saved Recipes</h2>
        <div style={flex}>
          {Object.keys(props.recipeList).map(recipeId => {
            let result = props.recipeList[recipeId];
            return <SavedDisplay
              image={result.image}
              title={result.title}
              link={result.link}
              ingredients={result.ingredients}
              key={recipeId}
              itemId={recipeId}/>;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}


SavedData.propTypes = {
  recipeList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    recipeList: state.recipesById
  };
};

export default connect(mapStateToProps)(SavedData);
