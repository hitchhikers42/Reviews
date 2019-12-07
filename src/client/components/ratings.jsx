import React from 'react';
import RatingsSnapshot from './ratingsnapshot.jsx';
import RatingsAverages from './ratingsaverages.jsx';
import HelpfulReviews from './helpfulreviews.jsx';

const Ratings = (props) => (
  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
    <RatingsSnapshot snapshot={props.ratingsSnapshot}/>
    <RatingsAverages averages={props.ratingsAverages}/>
  </div>
);

export default Ratings;