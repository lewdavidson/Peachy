import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';
import Header from './Header';
import UserAction from './UserAction';
import peach from './assets/original.png';

function HomeView() {
  return(
    <div>
      <style jsx>{`
          html {
            background-color: #EFB0A1;
          }
          .home-body {
            display: flex;
            margin-top: 200px;
            align-items: center;
          }
          .section-two {
            order: 1;
            width: 40%;
          }
          .section-two img {
            width: 100%
          }
          .section-one {
            order: 2;
            display: flex;
            flex-wrap: wrap;
            width: 50%;
            height: 220px;
          }
          .head {
            height: 150px;
            flex-grow: 1;
          }
          .search {
            align-self: flex-end;
            font-family: 'Raleway', sans-serif;
            justify-content: space-between
            height: 250px;
          }
          .search input {
            width: 500px;
            height: 25px;
            border-radius: 5px;
            margin-bottom: 10px;
            margin-right: 10px;
            border: 1px solid black;
            font-family: 'Raleway', sans-serif;
            padding: 5px;
          }
          .search button {
            height: 35px;
            align-self: center;
            width: 130px;
            border-radius: 5px;
            border: 2px solid black;
            background-color: #FFF;
            color: #6B6D76;
            font-weight: bold;
            font-size: 1em;
            font-family: 'Raleway', sans-serif;
          }
          .options {
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .options button {
            margin-left: 15px;
          }
      `}</style>
      <div>
        <div className='home-body'>
          <div className='section-one'>
            <div className='head'>
              <Header />
            </div>
            <div className='search'>
              <SearchBar />
              <div className='options'>
                <UserAction />
                <Link to="/results"><button>View Results!</button></Link>
              </div>
            </div>
          </div>
          <div className='section-two'>
            <img src={peach}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(HomeView);
