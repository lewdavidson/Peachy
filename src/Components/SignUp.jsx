import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return(
    <div>
      <h3>Sign Up for Peachy</h3>
      <input placeholder='choose a user name'></input>
      <input placeholder='choose a password'></input>
      <input placeholder='email address'></input>
      <Link to='/userdash'>Sign Up</Link>
    </div>
  );
}

export default SignUp;
