import React from 'react';

//used to use flexGrow: 1 but this way of setting exact width seems better
const HelpfulReviews = (props) => (
  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
    <div style={{width: '50%'}}>
      Good rating helpful review
    </div>
    <div style={{width: '50%'}}>
      Bad rating helpful review
    </div>
  </div>
);

export default HelpfulReviews;