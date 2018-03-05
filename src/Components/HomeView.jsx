import React from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import Header from './Header';
import UserAction from './UserAction';
import peach from './assets/peachtransparent.png';

function HomeView() {
  return(
    <div>
      <style jsx>{`
          
      `}</style>
    <div className='home-body'>
      <div className='head'>
        <Header />
      </div>
      <div className='section-two'>
        <img src={peach}></img>
      </div>
      <div className='search'>
        <SearchBar />
        <UserAction />
      </div>
    </div>
  </div>
  );
}

export default connect()(HomeView);
