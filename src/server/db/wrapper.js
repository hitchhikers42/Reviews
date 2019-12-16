const mongoose = require('mongoose');
const uri = 'mongodb://localhost/hrr42reviews';
const db = mongoose.connect(uri);
mongoose.Promise = global.Promise;

const simpleProductsSchema = new mongoose.Schema({
  id: Number,
  reviews: [{
    id: Number,
    user: {
      image: String, //html stuff probs
      name: String,
      location: String,
      nReviews: Number,
      nVotes: Number
    },
    createdAt: Date,
    rating: {
      stars: Number,
      value: Number,
      quality: Number,
      features: Number
    },
    text: String,
    recommended: Boolean,
    nFoundHelpful: Number,
    nHelpfulRatings: Number
  }], //the array of reviews for this item,
  goodReview: {
    id: Number,
    user: {
      image: String, //html stuff probs
      name: String,
      location: String,
      nReviews: Number,
      nVotes: Number
    },
    createdAt: Date,
    rating: {
      stars: Number,
      value: Number,
      quality: Number,
      features: Number
    },
    text: String,
    recommended: Boolean,
    nFoundHelpful: Number,
    nHelpfulRatings: Number
  },
  badReview: {
    id: Number,
    user: {
      image: String, //html stuff probs
      name: String,
      location: String,
      nReviews: Number,
      nVotes: Number
    },
    createdAt: Date,
    rating: {
      stars: Number,
      value: Number,
      quality: Number,
      features: Number
    },
    text: String,
    recommended: Boolean,
    nFoundHelpful: Number,
    nHelpfulRatings: Number
  },
  ratingsSnapshot: [Number],
  ratingsAverages: {
    overall: Number,
    value: Number,
    quality: Number,
    features: Number
  }
});

const SimpleProduct = mongoose.model('SimpleProduct', simpleProductsSchema);

module.exports = SimpleProduct;


// const usersSchema = new mongoose.Schema({
//   id: Number,
//   image: String, //html stuff probs
//   name: String,
//   location: String,
//   reviewsId: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
//   voteIds: [{ type: Schema.Types.ObjectId, ref: 'Vote' }]
// });

// const voteSchema = new mongoose.Schema({
//   vote: Boolean,
//   reviewId: { type: Schema.Types.ObjectId, ref: 'Review' },
//   userId: { type: Schema.Types.ObjectId, ref: 'User' }
// });

// const reviewsSchema = new mongoose.Schema({
//   id: Number,
//   userId: { type: Schema.Types.ObjectId, ref: 'User' },
//   productId: { type: Schema.Types.ObjectId, ref: 'Product' },
//   createdAt: Date,
//   rating: {
//     stars: Number,
//     value: Number,
//     quality: Number,
//     features: Number
//   },
//   text: String,
//   recommended: Boolean,
//   votes: [{ type: Schema.Types.ObjectId, ref: 'Vote' }}]
// });

// const productsSchema = new mongoose.Schema({
//   id: Number,
//   reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }], //the array of reviews for this item,
//   goodReview: { type: Schema.Types.ObjectId, ref: 'Review' },
//   badReview: { type: Schema.Types.ObjectId, ref: 'Review' },
//   ratingsSnapshot: Array,
//   ratingsAverages: {
//     overall: Number,
//     value: Number,
//     quality: Number,
//     features: Number
//   }
// });

// const User = mongoose.model('User', usersSchema);
// const Review = mongoose.model('Review', reviewsSchema);
// const Product = mongoose.model('Product', productsSchema);
// const Vote = mongoose.model('Vote', voteSchema);

// module.exports.user = User;
// module.exports.review = Review;
// module.exports.product = Product;
// module.exports.vote = Vote;