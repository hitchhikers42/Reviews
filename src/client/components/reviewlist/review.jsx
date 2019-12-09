import React from 'react';

const ReviewListReview = ({review}) => (
  <div style={{display: 'flex', flexDirection: 'row'}}>
    <div style={{width: '20%', flexDirection: 'column'}}>
      <div>
        <img src={review.user.image || 'https://epicqueststore.com/wp-content/plugins/profilegrid-user-profiles-groups-and-communities/public/partials/images/default-group.png'} />
        <span>
          {review.user.name}
        </span>
      </div>
      <div>
        {review.user.location}
      </div>
      <div>
        Reviews <b>{review.user.nReviews}</b>
      </div>
      <div>
        Votes <b>{review.user.nVotes}</b>
      </div>
    </div>
    <div style={{flexDirection: 'column', width: '60%'}}>
      <div>
        <div>
          {review.rating.stars} * {review.createdAt}
        </div>
        <b>{review.title}</b>
        {review.text.split('\n').map((text, i) => <p key={i}>{text}</p>)}
      </div>
      <br />
      <div>
        {review.recommended ? 'checkmark' : 'x'} {review.recommended ?
          <span><b>Yes,</b> I do</span> :
          <span><b>No,</b> I do not</span>}
        &nbsp;recommend this product.
      </div>
      <br />
      <div>
          &nbsp;Helpful? <button>Yes - {review.nFoundHelpful}</button> <button>No - {review.nHelpfulRatings - review.nFoundHelpful}</button><button>Report</button>
      </div>
    </div>
    <div style={{width: '20%', alignSelf: 'center'}}>
      {review.rating.value ? <div>Value Bar: {review.rating.value}</div> : null}
      {review.rating.quality ? <div>Quality Bar: {review.rating.quality}</div> : null}
      {review.rating.features ? <div>Features Bar: {review.rating.features}</div> : null}
    </div>
  </div>
);

export default ReviewListReview;