import React from 'react';
import RatingsSnapshot from './snapshot.jsx';
import RatingsAverages from './averages.jsx';

const Ratings = (props) => (
  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
    <RatingsSnapshot snapshot={props.ratingsSnapshot}/>
    <RatingsAverages averages={props.ratingsAverages}/>
  </div>
);

export default Ratings;