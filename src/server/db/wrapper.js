const mongoose = require('mongoose');
const uri = 'mongodb://localhost/hrr42reviews'
const db = mongoose.connect(uri);
mongoose.Promise = global.Promise;

const usersSchema = new mongoose.Schema({
  id: Number,
  name: String,
  location: String,
  reviewIds: Array, //holds the id numbers for the reviews
  nVotes: Number
});

const reviewsSchema = new mongoose.Schema({
  id: Number,
  userId: Number,
  productId: Number,
  createdAt: Date,
  starRating: Number,
  text: String,
  doesRecommend: Boolean,
  valueRating: Number,
  qualityRating: Number,
  featuresRating: Number,
  nHelpful: Number,
  nNotHelpful: Number
});

const productsSchema = new mongoose.Schema({
  id: Number,
  reviewIds: Array //the array of reviews for this item
});

const User = mongoose.model('User', usersSchema);
const Review = mongoose.model('Review', reviewsSchema);
const Product = mongoose.model('Product', productsSchema);

module.exports.user = User;
module.exports.review = Review;
module.exports.product = Product;