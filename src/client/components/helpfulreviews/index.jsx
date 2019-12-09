import React from 'react';
import HelpfulReview from './review.jsx';

//used to use flexGrow: 1 but this way of setting exact width seems better
const HelpfulReviews = (props) => (
  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
    <div style={{width: '50%'}}>
      <h4>Most Helpful Favorable Review</h4>
      <HelpfulReview review={props.goodReview}/>
      <a href={'#filterhigh'} onClick={props.updateFilter}>See more 4 and 5 star reviews</a>
    </div>
    <div style={{width: '50%'}}>
      <h4>Most Helpful Critical Review</h4>
      <HelpfulReview review={props.badReview}/>
      <a href={'#filterlow'} onClick={props.updateFilter}>See more 1, 2, and 3 star reviews</a>
    </div>
  </div>
);

export default HelpfulReviews;