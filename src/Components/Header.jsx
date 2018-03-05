import React from 'react';

function Header() {
  return (
    <div className='header'>
      <style jsx>{`
          .header {
            font-family:'Comfortaa', cursive;
            font-weight: bold;
            flex-grow: 2;
            height: 150px;
          }
          .header-lead {
            margin: 0;
            color: #0236a2;
            font-size: 4em;
          }
      `}</style>
    <h1 className="header-lead">Welcome to Peachy!</h1>
      <h3 className='header-para'>A Vegan Recipe Webiste</h3>
    </div>
  );
}

export default Header;
