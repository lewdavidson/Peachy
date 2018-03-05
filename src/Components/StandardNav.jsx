import React from 'react';
import SearchBar from './SearchBar';
import UserAction from './UserAction';
import logo from './assets/peach2.svg';

function StandardNav() {
  return (
    <div>
      <style jsx>{`
          a:link {
            color: black;
            text-decoration: none;
          }
          .nav-body {
            background-color: #FFAF87;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 65px;
          }
          .lead {
            font-family: 'Comfortaa', cursive;
            color: white;
            font-size: 1.5em;
            display: flex;
            justify-content: center;
          }
          .logo {
            height: 50px;
            width: 50px;
            padding-top: 20px;
            padding-right: 10px;
            padding-left: 5px;
          }
          .options {
            font-family: 'Raleway', sans-serif;
          }
          input {
            width: 300px;
            height: 20px;
            border-radius: 5px;
            border: 1px solid black;
            margin-right: 10px;
          }
          button {
            height: 25px;
            margin-right: 10px;
            border-radius: 8px;
            border: 1px solid black;
          }
          links {
            float: right;
          }
        `}</style>
      <div className="nav-body">
        <div className="lead">
          <img className="logo" src={logo} />
          <h2>PEACHY</h2>
        </div>
        <div className="options">
          <SearchBar />
          <div className="links">
            <UserAction />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StandardNav;
