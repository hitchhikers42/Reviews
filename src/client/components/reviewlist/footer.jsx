import React from 'react';

const ReviewListFooter = (props) => (
  <div style={{backgroundColor: 'lightgray', boxSizing: 'border-box', height: '2em', alignText: 'center'}}>
    <b style={{float: 'left'}}>{props.start}-{props.end} of {props.nReviews} Reviews</b>
    <div style={{float: 'right'}}> two arrows one which should be greyed out sometimes for going forward/backward in reviews</div>
  </div>
);


export default ReviewListFooter;