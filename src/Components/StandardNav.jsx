import React from 'react';
import SearchBar from './SearchBar';
import UserAction from './UserAction';

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
            margin-bottom: 25px;
            height: 65px;
          }
          .lead {
            font-family: 'Comfortaa', cursive;
            color: white;
            font-size: 1.5em;
            margin-left: 20px;
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
            flex-direction: flex-end;
          }
        `}</style>
      <div className="nav-body">
        <h2 className="lead">PEACHY</h2>
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
