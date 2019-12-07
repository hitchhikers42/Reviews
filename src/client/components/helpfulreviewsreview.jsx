import React from 'react';

const HelpfulReviewsReview = (props) => (
  <div style={{flexDirection: 'column', width: '60%'}}>
    <div>
      {'stars'}
    </div>
    <div>
      {'username then dot then time since reviews'}
    </div>
    <b>{'Review Title'}</b>
    <p> {'review shortened to like 1.25 lines or roughly 150 character say then a show full review link which pops open a modal'} </p>
    <br />
    <div>
      <span>&nbsp;{201} of {235} people found this helpful</span>
    </div>
  </div>
);

export default HelpfulReviewsReview;