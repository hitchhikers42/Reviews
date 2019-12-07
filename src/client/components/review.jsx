import React from 'react';

const Review = (props) => (
  <div style={{display: 'flex', flexDirection: 'row'}}>
    <div style={{width: '20%'}}>
      user info
    </div>
    <div style={{flexDirection: 'column', width: '60%'}}>
      <span>
        stars and data
      </span>
      <h3>Review Title</h3>
      <p>
        Reviews seem to be one paragraph only. WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS
      </p>
      <br />
      <div>
        checkmark <b>Yes, </b> I recommend this product.
      </div>
      <br />
      <div>
        &nbsp;Helpful? <button>Yes - N</button> <button>No - M</button><button>Report</button>
      </div>
    </div>
    <div style={{width: '20%', alignSelf: 'center'}}>
      Optional Bar Names and Bars
    </div>
  </div>
);

export default Review;