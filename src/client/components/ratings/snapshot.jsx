import React from 'react';

const RatingSnapshot = (props) => (
  <div style={{width: '50%'}}>
    <h4>Rating Snapshot</h4>
    <div style={{marginLeft: '1%'}}>
      {props.snapshot.map((nRatings, i) => (<div key={i}> {5 - i} stars ratings: {nRatings}</div>))}
    </div>
  </div>
);

export default RatingSnapshot;