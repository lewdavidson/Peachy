import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StandardNav from './StandardNav';
import Footer from './Footer';
import smSteps from './assets/smallsteps.png';

function IndividualResultDisplay(props) {
  const background = {
    backgroundImage:'url(' + smSteps + ')',
    minHeight: '1500px',
  };

  return (
    <div style={background}>
      <style jsx>{`

      `}</style>
      <StandardNav />
      <img src={props.image}></img>
      <h4>{props.title}</h4>
      <p>Ingredients:</p>
      <p>Visit the <a href={props.link}>full site </a>for preparation instructions</p>
      <Footer />
    </div>
  );
}

IndividualResultDisplay.propTypes = {
  selectedRecipe: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string
};

export default connect()(IndividualResultDisplay);
