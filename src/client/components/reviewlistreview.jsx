import React from 'react';

const ReviewListReview = ({review}) => (
  <div style={{display: 'flex', flexDirection: 'row'}}>
    <div style={{width: '20%', flexDirection: 'column'}}>
      <div>
        <span>
          {'generic image'}
        </span>
        <span>
          {'Username'}
        </span>
      </div>
      <div>
        {'location'}
      </div>
      <div>
        Review <b>{1}</b>
      </div>
      <div>
        Votes <b>{4}</b>
      </div>
    </div>
    <div style={{flexDirection: 'column', width: '60%'}}>
      <div>
        <div>
          {'stars and data'}
        </div>
        <b>{'Review Title'}</b>
        <div>
          {'Reviews seem to be one paragraph only. WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS'}
        </div>
      </div>
      <br />
      <div>
        {'checkmark or x'} <b>{'Yes (or No)'},</b>&nbsp; I {'(do not) recommend'} this product.
      </div>
      <br />
      <div>
          &nbsp;Helpful? <button>Yes - {'4'}</button> <button>No - {'1'}</button><button>Report</button>
      </div>
    </div>
    <div style={{width: '20%', alignSelf: 'center'}}>
      <div>
        Optional Value Bar
      </div>
      <div>
        Optional Quality bar
      </div>
      <div>
        Optional Features Bar
      </div>
    </div>
  </div>
);

export default ReviewListReview;