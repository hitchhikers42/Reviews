import React from 'react';

const RatingsAverage = ({averages}) => (
  <div style={{width: '50%'}}>
    <h4>Average Customer Ratings</h4>
    <div style={{marginLeft: '1%'}}>
      {Object.keys(averages).map((key) => (<div key={key}>{key}: {averages[key]}</div>))}
    </div>
  </div>
);

export default RatingsAverage;