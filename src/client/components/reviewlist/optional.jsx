import React from 'react';

const ReviewListOptional = function(props) {
  if (props.visible) {
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div>
          Rating Selector
        </div>
        <div>
          Locale Selector
        </div>
      </div>
    );
  } else {
    return null; //don't show it!
  }
};

export default ReviewListOptional;