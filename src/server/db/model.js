//const {user, review, product} = require('./wrapper');
const Product = require('./wrapper');

const getAllReviewsForProduct = function(productId) {
  return Product.findOne({id: productId});
};

(() => {
  let zero = {
    id: 0,
    ratingsSnapshot: [251, 46, 9, 9, 16],
    ratingsAverages: {
      overall: 4.5,
      value: 4.3,
      quality: 4.6,
      features: 4.6
    },
    goodReview: {
      id: 0,
      rating: {
        stars: 4
      },
      user: {
        name: 'Bob Goodrating',
        location: 'The Database',
        nReviews: 1,
        nVotes: 0
      },
      createdAt: new Date(),
      title: 'Good Rating Review',
      text: 'Reviews seem to be one paragraph only. WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS',
      nFoundHelpful: 200,
      nHelpfulRatings: 237,
      recommended: true
    },
    badReview: {
      id: 1,
      rating: {
        stars: 2
      },
      user: {
        id: 1,
        name: 'Bill Badrating',
        location: 'The Database',
        nReviews: 1,
        nVotes: 0
      },
      createdAt: new Date(),
      title: 'Bad Rating Review',
      text: 'Reviews seem to be one paragraph only. WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS',
      nFoundHelpful: 194,
      nHelpfulRatings: 248,
      recommended: false
    },
    reviews: [{
      id: 0,
      rating: {
        stars: 4
      },
      user: {
        name: 'Bob Goodrating',
        location: 'The Database',
        nReviews: 1,
        nVotes: 0
      },
      createdAt: new Date(),
      title: 'Good Rating Review',
      text: 'Reviews seem to be one paragraph only. WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS',
      nFoundHelpful: 200,
      nHelpfulRatings: 237,
      recommended: true
    },
    {
      id: 1,
      rating: {
        stars: 2
      },
      user: {
        id: 1,
        name: 'Bill Badrating',
        location: 'The Database',
        nReviews: 1,
        nVotes: 0
      },
      createdAt: new Date(),
      title: 'Bad Rating Review',
      text: 'Reviews seem to be one paragraph only. WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS',
      nFoundHelpful: 194,
      nHelpfulRatings: 248,
      recommended: false
    },
    {
      id: 2,
      rating: {
        stars: 3,
        value: 4,
        quality: 1,
      },
      user: {
        id: 2,
        name: 'Player 1',
        location: 'The Database',
        nReviews: 1,
        nVotes: 0
      },
      createdAt: new Date(),
      title: 'Review Player 1',
      text: 'Reviews seem to be one paragraph only. WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS',
      nFoundHelpful: -1,
      nHelpfulRatings: 0,
      recommended: true
    },
    {
      id: 3,
      rating: {
        stars: 4,
      },
      user: {
        id: 3,
        name: 'Player 2',
        location: 'The Database',
        nReviews: 2,
        nVotes: 2
      },
      createdAt: new Date(),
      title: 'Player 2\'s Review',
      text: 'Reviews can be one sentence!',
      nFoundHelpful: 2,
      nHelpfulRatings: 4,
      recommended: false
    },
    {
      id: 4,
      rating: {
        stars: 5,
        value: 5,
        quality: 5,
        features: 5
      },
      user: {
        id: 4,
        name: 'Nobody',
        location: 'Nowhere',
        nReviews: 3,
        nVotes: 6
      },
      createdAt: new Date(),
      title: 'Multiparagraph Review',
      text: 'Reviews seem to be one paragraph only.' + '\n' +
      'This one should be two paragraphs though!' + '\n' +
      'In fact it is three paragraphs. Or it should be....',
      nFoundHelpful: 3,
      nHelpfulRatings: 6,
      recommended: true
    }]
  };
  let productZero = new Product(zero);
  productZero.save();
})();

module.exports = getAllReviewsForProduct;