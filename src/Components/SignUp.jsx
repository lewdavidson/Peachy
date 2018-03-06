import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return(
    <div className='signup-form'>
      <style jsx>{`
        .signup input {
          height: 25px;
          width: 40%;
          margin-right: 10px;
          margin-bottom: 10px;
          border-radius: 5px;
          border: 1px solid black;
          font-size: .9em;
          padding: 5px;
        }
        .signup-form button {
          height: 35px;
          width: 110px;
          border-radius: 5px;
          border: 1px solid black;
          font-size: .9em;
          padding: 5px;
          margin-left: 10px;
        }
      `}</style>
      <h3>Sign Up for Peachy</h3>
      <input placeholder='Choose a User Name'></input>
      <input placeholder='Choose a Password'></input>
      <br/>
      <input placeholder='E-mail Address'></input>
      <button><Link to='/saved'>Sign Up</Link></button>
    </div>
  );
}

export default SignUp;
