import React from 'react';
import Ratings from './ratings.jsx';
import HelpfulReviews from './helpfulreviews.jsx';
import ReviewList from './reviewlist.jsx';

class App extends React.Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', margin: '10%'}}>
        <div>
          <h1>Ratings &amp; Reviews</h1>
          <hr />
          <button style={{float: 'right', backgroundColor: 'blue', color: 'white'}}>Write a Review</button>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Ratings />
          <HelpfulReviews />
          <ReviewList />
        </div>
      </div>
    );
  }
}

export default App;