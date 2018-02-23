import React from 'react';
import { Link } from 'react-router-dom';

function LogIn() {
  return(
    <div>
      <h3>Log In</h3>
      <input placeholder='User Name'></input>
      <input placeholder='Password'></input>
      <Link to='/userdash'>Log In</Link>
    </div>
  );
}

export default LogIn;
