const mongoose = require('mongoose');
const uri = 'mongodb://localhost/hrr42reviews';
const db = mongoose.connect(uri);
mongoose.Promise = global.Promise;

const usersSchema = new mongoose.Schema({
  id: Number,
  name: String,
  location: String,
  reviewIds: [{ type: Schema.Types.ObjectId, ref: 'Review' }], //holds the id numbers for the reviews
  nVotes: Number,
  image: String //html stuff probs
});

const reviewsSchema = new mongoose.Schema({
  id: Number,
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  productId: { type: Schema.Types.ObjectId, ref: 'Product' },
  createdAt: Date,
  rating: {
    stars: Number,
    value: Number,
    quality: Number,
    features: Number
  },
  text: String,
  doesRecommend: Boolean,
  nFoundHelpful: Number,
  nHelpfulRatings: Number
});

const productsSchema = new mongoose.Schema({
  id: Number,
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }], //the array of reviews for this item,
  goodReview: { type: Schema.Types.ObjectId, ref: 'Review' },
  badReview: { type: Schema.Types.ObjectId, ref: 'Review' },
  ratingsSnapshot: Array,
  ratingsAverages: {
    overall: Number,
    value: Number,
    quality: Number,
    features: Number
  }
});

const User = mongoose.model('User', usersSchema);
const Review = mongoose.model('Review', reviewsSchema);
const Product = mongoose.model('Product', productsSchema);

module.exports.user = User;
module.exports.review = Review;
module.exports.product = Product;