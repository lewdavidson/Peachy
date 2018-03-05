import React from 'react';

function Header() {
  return (
    <div>
      <style jsx>{`
          .header {
            font-weight: bold;
          }
          .header-lead {
            margin: 0;
            color: #ED6A5E;
            font-size: 5em;
            font-family: 'Coiny', cursive;
            height: 100px;
          }
          .header-para {
            margin-top: 0;
            margin-bottom: 30px;
            color: #EEC643;
            font-family: 'Raleway', sans-serif;
          }
      `}</style>
      <div className='header'>
        <h1 className="header-lead">Peachy!</h1>
        <h3 className='header-para'>A Vegan Recipe Finder</h3>
      </div>
    </div>
  );
}

export default Header;
