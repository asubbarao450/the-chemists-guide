import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h3>Welcome to the Chemist's Guide. The app is dedicated to recordkeeping and acting as a quick reference guide. The app allows access to a 
          periodic table for refrencing molar mass, element name, etc. The app also features different pages and allows users to add, edit and delete compound information. 
          The information a user can save about a compound consists of name, description, date and quantity.</h3>
<br></br>
          <h3>Technologies used: Redux Saga, React, Material UI, Postgres(database), Node.js, Express</h3>
      </div>
    </div>
  );
}

export default AboutPage;
