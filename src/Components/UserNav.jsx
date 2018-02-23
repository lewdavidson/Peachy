import React from 'react';
import { Link } from 'react-router-dom';

function UserNav() {
  return (
    <div>
      <h4>UserNav Works</h4>
      <Link to='/saved'>Your Recipes</Link>
    </div>
  );
}

export default UserNav;
