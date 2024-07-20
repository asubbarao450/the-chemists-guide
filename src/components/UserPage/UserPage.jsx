import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import './UserPage.css';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);


  //this page requires a quick refrence guide 
  //it also requires a 
  return (
    <div className="container">
      <h1>This is the user page</h1>
      <br></br>
      <br></br>
      <h2>Periodic Table</h2>
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitqzNRqp9aK_hu8qLJuDdgLMLJxhsa_4JMuRVqu_JwWUdNnxHKc9PR9OHwFj1S4BwGVCWfro54GqCYt4ehnIiUnAk8bdFrusaWdpA7LO06wgxaN98kU7db_7vzg2LGa0ggoz37C_sEvfqJ/s1600/Periodic+Table+Header+Updated.png" width="450" height="450"/>

<br></br>
<br></br>
<br></br>
      <h2>Welcome, {user.username}!</h2>
      
      <p>Your ID is: {user.id}</p>

      <LogOutButton className="btn"/>

      
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

