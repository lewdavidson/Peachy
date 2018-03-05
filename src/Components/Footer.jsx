import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-main'>
      <style jsx>{`
          .footer-main {
            background-color: #FFAF87;
            height: 50px;
            display: flex;
            justify-content: space-between;
            border-radius: 5px;
            align-items: center;
            font-family: 'Raleway', sans-serif;
            margin-bottom: 0;
            color: #FFF;
          }
          .footer-main h3 {
            margin-right: 15px;
          }
          .home-link {
            margin-left: 15px;
          }
        `}</style>
      <Link to='/' className='home-link'>Home</Link>
      <h3>PEACHY &copy;</h3>
    </div>
  );
}

export default Footer;
