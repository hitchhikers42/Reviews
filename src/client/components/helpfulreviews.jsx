import React from 'react';
import HelpfulReview from './helpfulreviewsreview.jsx';

//used to use flexGrow: 1 but this way of setting exact width seems better
const HelpfulReviews = (props) => (
  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
    <div style={{width: '50%'}}>
      <h4>Most Helpful Favorable Review</h4>
      <HelpfulReview review={props.goodReview}/>
    </div>
    <div style={{width: '50%'}}>
      <h4>Most Helpful Critical Review</h4>
      <HelpfulReview review={props.badReview}/>
    </div>
  </div>
);

export default HelpfulReviews;