const axios = require('axios');
const url = 'http://ec2-3-16-147-219.us-east-2.compute.amazonaws.com/api/reviews/full/';

const fetchProductData = function(productId) {
  return axios.get(url + productId);
};

export default fetchProductData;