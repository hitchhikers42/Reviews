import React from 'react';

const HelpfulReviewsReview = ({review}) => (
  <div style={{flexDirection: 'column', width: '60%'}}>
    <div>
      {review.rating.stars} stars
    </div>
    <div>
      {review.user.name} * {review.createdAt}
    </div>
    <b>{review.title}</b>
    <div>
      {review.text.slice(0, 120) + '...'} <a href='#modal'>Show Full Review</a>
    </div>
    <br />
    <div>
      <span>&nbsp;{review.nFoundHelpful} of {review.nHelpfulRatings} people found this helpful</span>
    </div>
  </div>
);

export default HelpfulReviewsReview;