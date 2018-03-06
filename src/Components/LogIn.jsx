import React from 'react';
import { Link } from 'react-router-dom';

function LogIn() {
  return(
    <div className='login-form'>
      <style jsx>{`
          .login-form input{
            height: 25px;
            width: 30%;
            margin-right: 10px;
            border-radius: 5px;
            border: 1px solid black;
            font-size: .9em;
            padding: 5px;
          }
          .login-form button {
            height: 35px;
            width: 70px;
            border-radius: 5px;
            border: 1px solid black;
            font-size: .9em;
            padding: 5px;
          }
      `}</style>
      <h3>Log In</h3>
      <input placeholder='User Name'></input>
      <input placeholder='Password'></input>
      <button><Link to='/saved'>Log In</Link></button>
    </div>
  );
}

export default LogIn;
