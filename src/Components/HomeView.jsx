import React from 'react';
import SearchBar from './SearchBar';
import Header from './Header';
import UserAction from './UserAction';

function HomeView() {
  return(
    <div>
      <Header />
      <SearchBar />
      <UserAction />
    </div>
  );
}

export default HomeView;
