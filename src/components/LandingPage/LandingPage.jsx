import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>
<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitqzNRqp9aK_hu8qLJuDdgLMLJxhsa_4JMuRVqu_JwWUdNnxHKc9PR9OHwFj1S4BwGVCWfro54GqCYt4ehnIiUnAk8bdFrusaWdpA7LO06wgxaN98kU7db_7vzg2LGa0ggoz37C_sEvfqJ/s1600/Periodic+Table+Header+Updated.png" width="450" height="450"/>
      <div className="grid">
        <div className="grid-col grid-col_8">
          <h6>
            Welcome to the Chemist's Guide. The app is dedicated to recordkeeping and acting as a quick reference
            guide. The app allows access to a set of 20 commonly referenced elements to help guide lab chemists.
            The app also features different pages and allows users to create, view and update/delete compound information (different than elements).
            The information a user can save about a compound is limited to name, description, date, image and quantity. 
          </h6>


         
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
