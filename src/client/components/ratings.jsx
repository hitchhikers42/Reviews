import React from 'react';
import RatingsSnapshot from './ratingsnapshot.jsx';
import RatingsAverage from './ratingsaverage.jsx';
import HelpfulReviews from './helpfulreviews.jsx';

const Ratings = (props) => (
  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
    <RatingsSnapshot />
    <RatingsAverage />
  </div>
);

export default Ratings;