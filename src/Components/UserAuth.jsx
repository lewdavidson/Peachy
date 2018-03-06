import React from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';
import wormz from './assets/wormz.png';

function UserAuth() {
  const authPage = {
    backgroundImage: 'url(' + wormz + ')',
    height: '100vh',
    paddingTop: '10%',
  };

  return (
    <div style={authPage}>
      <div className='auth-bod'>
        <style jsx>{`
          .auth-bod {
            width: 70%;
            height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 20px;
            margin: 0 auto;
            background-color: #FFF;
            border: 3px solid #FFAF87;
            border-radius: 5px;
          }
          .login {
            width: 100%;
            margin-left: 10%;
            margin-bottom: 40px;
          }
          .signup {
            width: 100%;
            margin-left: 10%;
            margin-bottom: 50px;
          }
          .auth-bod h3 {
            color: #ED6A5E;
            font-family: 'Coiny', cursive;
            font-size: 2.3em;
            text-decoration: underline;
          }
        `}</style>
        <div className='login'>
          <LogIn />
        </div>
        <div className='signup'>
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default UserAuth;
