import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);


  //this page requires a quick refrence guide 
  //it also requires a 
  return (
    <div className="container">
      <h2>Enter New Compound Details</h2>
      <p>Your ID is: {user.id}</p>

      <LogOutButton className="btn" />

      
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

