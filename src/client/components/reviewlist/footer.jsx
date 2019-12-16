import React from 'react';

const ReviewListFooter = (props) => (
  <div style={{backgroundColor: 'lightgray', boxSizing: 'border-box', height: '2em', alignText: 'center'}}>
    <b style={{float: 'left'}}>{props.start}-{props.end} of {props.nReviews} Reviews</b>
    <button style={{float: 'right', backgroundColor: 'gray', color: 'black'}}>{'=>'}</button>
    <button style={{float: 'right', backgroundColor: 'gray', color: 'black'}}>{'<='}</button>
  </div>
);


export default ReviewListFooter;