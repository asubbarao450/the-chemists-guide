import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h5>Welcome to the Chemist's Guide. The app is dedicated to recordkeeping and acting as a quick reference guide. The app allows access to a 
          set of 20 commonly referenced elements to help guide lab chemists. The app also features different pages and allows users to create edit and delete compound information. 
          The information a user can save about a compound is limited to name, description, date, image and quantity.</h5>
      </div>
    </div>
  );
}

export default AboutPage;
